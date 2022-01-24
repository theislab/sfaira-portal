<img src="src/assets/logo.png" align="right" alt="zellkonverter logo" width="180" />

# Sfaira portal

[![MIT License](https://img.shields.io/github/license/theislab/sfaira-portal)](https://github.com/theislab/sfaira-portal/blob/main/LICENSE)
[![Build-site](https://github.com/theislab/sfaira-portal/actions/workflows/build-site.yml/badge.svg)](https://github.com/theislab/sfaira-portal/actions/workflows/build-site.yml)

Sfaira portal is a website which provides a user interface for searching the content in the [Sfaira scRNA-seq data and model zoo](https://github.com/theislab/sfaira).
It is available at https://theislab.github.io/sfaira-portal/.

## Development

Sfaira portal is a [Vue 3](https://v3.vuejs.org/) app which uses the [Tailwind CSS](https://tailwindcss.com/) framework and is built with [Vite](https://vitejs.dev/).

### Installation

To setup the project for local development first install Node and NPM https://nodejs.org/en/download/package-manager/.

The project dependencies can then be installed with [`npm-install`](https://docs.npmjs.com/cli/v6/commands/npm-install):

```bash
npm install
```

### Development server

To view the website during development run:

```bash
npm run dev
```

This will launch a local webserver which you can access using the provided URL.
It is important to keep an eye on the terminal where you run this command as and messages/warnings/errors produced when building the site will be displayed here.

### Building for production

The production output for deployment can be created with:

```bash
npm run build
```

This will create a `dist/` folder with the production build website.
Deployment of the website is handled by a [GitHub actions](https://github.com/theislab/sfaira-portal/actions) workflow but it can still sometimes be useful to build it locally for debugging.

### Previewing production

Similar to launching the dev server you can preview the production build using:

```bash
npm run serve
```

This will let you view the contents of `dist/`.
The results should be the same as the development server but it's worth checking just in case.

## Citation

If you use Sfaira or the Sfaira portal for you work please cite the following publication:

> David S. Fischer, Leander Dony, Martin König, Abdul Moeed, Luke Zappia, Lukas Huemos, Sophie Tritschler, Olle Holmberg, Hananeh Aliee, Fabian J. Theis.
> _Sfaira accelerates data and model reuse in single cell genomics_.
> Genome Biology. 2021. DOI: [10.1186/s13059-021-02452-6](https://doi.org/10.1186/s13059-021-02452-6)

```bibtex
@ARTICLE{Fischer2021-xk,
  title    = "Sfaira accelerates data and model reuse in single cell genomics",
  author   = "Fischer, David S and Dony, Leander and K{\"o}nig, Martin and
              Moeed, Abdul and Zappia, Luke and Heumos, Lukas and Tritschler,
              Sophie and Holmberg, Olle and Aliee, Hananeh and Theis, Fabian J",
  journal  = "Genome Biol.",
  volume   =  22,
  number   =  1,
  pages    = "248",
  month    =  aug,
  year     =  2021,
  language = "en"
}
```
