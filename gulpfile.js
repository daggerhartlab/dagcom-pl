/*-------------------------------------------------------------------
    Required plugins
-------------------------------------------------------------------*/

var
	gulp = require('gulp'),
	del = require('del'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync'),
	cssmin = require('gulp-cssmin'),
	gzip = require('gulp-gzip'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	shell = require('gulp-shell'),
	uglify = require('gulp-uglify-es').default,
	autoprefixer = require('autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	appRoot = require('app-root-path'),
	config = require('./build.config.json');


/*-------------------------------------------------------------------
    Tasks
-------------------------------------------------------------------*/

// Task: Clean:before
// Description: Removing assets files before running other tasks
gulp.task('clean:before', function () {
	// https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
	return del([
		config.assets.dest,
		config.misc.dest,
		config.scss.dest,
		config.fonts.dest,
		config.images.dest,
		config.patternlab.styleguide.dest,
	]);
});


// Task: Handle scripts
gulp.task('scripts', function () {
	let promises = [];
	if (config.scripts.libraries) {
		config.scripts.libraries.forEach((lib) => {
			promises.push(
				new Promise(function (resolve) {
					gulp.src(appRoot + "/" + lib)
						.pipe(gulp.dest(config.scripts.dest))
						.pipe(gzip())
						.pipe(gulp.dest(config.scripts.dest))
						.on('end', resolve);
				})
			);
		});
	}

	promises.push(
		new Promise(function (resolve) {
		gulp.src(config.scripts.files)
			.pipe(concat(config.scripts.name))
			.pipe(gulp.dest(config.scripts.dest))
			.pipe(uglify())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest(config.scripts.dest))
			.pipe(gzip())
			.pipe(gulp.dest(config.scripts.dest))
			.on('end', resolve);
		})
	);

	return Promise.all(promises);
});

// Task: Handle images
gulp.task('images', function () {
	return gulp.src(config.images.files)
		.pipe(imagemin())
		.pipe(gulp.dest(
			config.images.dest
		))
});


// Task: Handle scss and CSS
gulp.task('scss', function () {
	return gulp.src(config.scss.files)
		.pipe(sass())
		//.pipe(sourcemaps.init())
		.pipe(postcss([autoprefixer()]))
		//.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.scss.dest))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(config.scss.dest))
		.pipe(gzip())
		.pipe(gulp.dest(config.scss.dest));
});

// Task: Handle fonts
gulp.task('fonts', function () {
  return gulp.src(config.fonts.files)
    .pipe(gulp.dest(
      config.fonts.dest
    ))
    .pipe(browserSync.reload({stream:true}));
});


// task: BrowserSync
// Description: Run BrowserSync server with disabled ghost mode
gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: config.root
		},
		ghostMode: true,
		open: "external"
	});
});


// Task: Watch files
gulp.task('watch', function () {
	gulp.watch(config.scripts.files, gulp.series('scripts', function (cb) {
		browserSync.reload();
		cb();
	}));

	gulp.watch(config.scss.watch, gulp.series('scss', function (cb) {
		browserSync.reload();
		cb();
	}));

	gulp.watch(config.images.files, gulp.series('images', function (cb) {
		browserSync.reload();
		cb();
	}));

	gulp.watch(config.fonts.files, gulp.series('fonts', function (cb) {
		browserSync.reload();
		cb();
	}));

	gulp.watch(config.patternlab.files, gulp.series('build:patternlab', function (cb) {
		browserSync.reload();
		cb();
	}));
});


// Task: build:patternlab
// Description: Build the patternlab.
gulp.task('build:patternlab', shell.task('patternlab build --config patternlab-config.json'));

// Task: build:assets
// Description: Build the patternlab assets.
gulp.task('build:assets', gulp.parallel('scripts', 'scss', 'images', 'fonts'));

// Task: styleguide
// Description: Copy Styleguide-Folder from core/ to public
gulp.task('build:styleguide', function() {
	let promises = [];

	promises.push(
		gulp.src(config.patternlab.styleguide.files)
			.pipe(gulp.dest(config.patternlab.styleguide.dest))
	);

	// Styleguide doesn't seem to expect fonts, so we need to move them over.
	// Use the folder name from the config.
	const font_folder = config.fonts.dest.split('/').filter(part => part !== '').pop();
	promises.push(
		gulp.src(config.fonts.files)
			.pipe(gulp.dest(config.patternlab.styleguide.dest + '/' + font_folder))
	);

	return Promise.all(promises);
});

// Task: build
// Description: Build all non-styleguide artifacts.
gulp.task('build', gulp.series('clean:before', 'build:patternlab', 'build:assets'));

// Task: build:styleguide
// Description: Build styleguide artifacts.
gulp.task('styleguide', gulp.series('build', 'build:styleguide'));

// Task: default
// Description: Development.
gulp.task('default', gulp.series('build', 'build:patternlab', gulp.parallel('browser-sync', 'watch')));
