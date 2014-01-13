# NosElus Frontend application

This the frontend application for the Noselus.be application

## Tools

* Yeoman - [http://yeoman.io/](http://yeoman.io/)
* Ember.js - [http://emberjs.com](http://emberjs.com)
* Bower - [http://bower.io/](http://bower.io/)
* Compass - [http://compass-style.org/](http://compass-style.org/)
* Twitter bootstrap - [http://getbootstrap.com](http://getbootstrap.com)
* Code climate [https://codeclimate.com/github/noselusbe/noselus-frontend](https://codeclimate.com/github/noselusbe/noselus-frontend)

[![Code Climate](https://codeclimate.com/github/noselusbe/noselus-frontend.png)](https://codeclimate.com/github/noselusbe/noselus-frontend)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/noselusbe/noselus-frontend/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Setup the project locally

```
// Install Node - http://madebyhoundstooth.com/blog/install-node-with-homebrew-on-os-x/
// Install Yeoman - https://github.com/yeoman/yeoman/wiki/Getting-Started
// Install Bower - http://bower.io/
// Fork The project https://github.com/noselusbe/noselus-frontend](https://github.com/noselusbe/noselus-frontend

npm install
bower install
```

## Run Standalone server with Mock db

```
grunt server
```

## Run server with local Java backend

```
grunt serverJava
```

Please read through our contributing guidelines. Included are directions for opening issues, coding standards, and notes on development.

More over, if your pull request contains JavaScript patches or features, you must include relevant unit tests.

## Project Management

For all roadmaps and project management related stuffs, refer to the github issues and Milestones

## Guideline

### Contributing

Have a bug or a feature request? Please open a [new issue](https://github.com/noselusbe/noselus-frontend/issues). Before opening any issue, please search for existing issues and read the Contributing Guidelines.

### Bugs

We only accept issues that are bug reports or feature requests. Bugs must be isolated and reproducible problems that we can fix within the Noselus-frontend code.

Search for existing issues. Try not to duplicate issues. Moreover, the issue may have already been resolved with a fix available.
Create an isolated and reproducible test case. Be sure the problem exists in Noselus-frontend code with a reduced test case that should be included in each bug report.

Share as much information as possible. Include operating system and version, browser and version. Also include steps to reproduce the bug.

### Pull requests

* CSS changes must be done in .scss files first, never just the compiled .css files.
* Try not to pollute your pull request with unintended changes -- keep them simple and small
* Try to share which browsers your code has been tested in before submitting a pull request
* Build must pass all test (try to run "grunt build")



