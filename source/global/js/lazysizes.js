// add simple support for lazyloading background images (https://github.com/aFarkas/lazysizes)
document.addEventListener('lazybeforeunveil', function(e){
	var target = e.target;
	var bg = target.getAttribute('data-bg');
	if(bg){
		target.style.backgroundImage = 'url(' + bg + ')';
	}
});
