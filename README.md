# Tanager - Pattern Lab

![Tanager Photo](source/global/images/tanager.jpg)

Resources:

* [Twig Documentation](https://twig.symfony.com/doc/2.x/templates.html) - Twig syntax guide. They call this set of documentation "Twig for Designers", but it's actually very technical. I believe they mean it as "template designers".
* [Twig Expressions](https://twig.symfony.com/doc/2.x/templates.html#expressions) - Once you have the hang of Twig, most of your questions will probably relate to this section of the documentation.
* [YAML Documentation](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html) - YAML syntax guide.
* [Bootstrap](https://getbootstrap.com/docs/4.5/layout/overview/)

# Pattern Lab

Pattern lab is a utility that helps organize a component library and present a catalog of the components as a website.

It's not important to understand how Patternlab works, but it _is_ important to understand the approach to organizing components.

Here are the key concepts that must be understood.

1. **Components should be developed to be reusable.** This means that values should almost-never be hard-coded into components.
1. Patternlab defines four sizes of components as a means of organization:
    1. **Atoms** - The smallest component type is a single thing. Examples: headings, links, buttons, form elements, dividers
    1. **Molecules** - A set of atoms that make of a generic reusable thing. Example: 3-column row, dialog box, menus (list of links).
    1. **Organisms** - A set of molecules and atoms that make up a complete thing. Example: header, footer, contact form, hero section, grid of services offered.
    1. **Templates** - The structure of a whole page on a website. Made up of organisms.
1. Patternlab also has a concept called a **Page**. A page is an application of templates that are used to provide example implementations. Another way of putting it is that **pages** don't define new structures, they are used to show how to use templates.

Other notes:

* Development of this library should be done outside of any CMS context. It's important to make these components generically reusable.
* Components that can have simple variations can often provide that option in the form of CSS classes. Buttons are a good example of this. Often the main difference between buttons on a website is a single CSS class.

## Concepts and documentation

This project uses [Pattern Lab](https://patternlab.io/), a frontend workshop environment that helps you build, view, test, and showcase your design system's UI components.

## Getting Started

Requirements:

* Node v12 or higher.

### Setup

Download a copy of this repo to the location of your choice.

```
npm install && npm run pl:install
```

### Developing

Development for your copy of the pattern library.

1.  `npm run gulp` - Start the patternlab. This should open the patternlab in your
    browser. Otherwise, navigate to the patternlab `http://127.0.0.1:3000`
1.  Edit patterns (twig templates, template data files, sass, js) found in the
    `source/_patterns` directory. As you save changes, the patternlab will
    regenerate and the browser will reload.
1.  Commit only the files in the `source` directory. Other files should be
    ignored via `.gitignore`.
1.  When complete, press `cmd + C` to stop the patternlab.

## Credits

* <small>Photo by [Nick Fewings](https://unsplash.com/@jannerboy62) on [Unsplash](https://unsplash.com/photos/JYsx9ZfBuSo)</small>
