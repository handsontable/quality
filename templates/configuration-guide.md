# Configuration guides

## Table of contents
- [Configuration guides](#configuration-guides)
  - [Table of contents](#table-of-contents)
  - [Content](#content)
  - [Configuration guides - environments](#configuration-guides---environments)
    - [Build for installation in the project](#build-for-installation-in-the-project)
    - [Links from Gist](#links-from-gist)
    - [Building Handsontable-wrapper from a unreleased PR](#building-handsontable-wrapper-from-a-unreleased-pr)
    - [Performance lab](#performance-lab)
    - [Docs - locally](#docs---locally)
      - [Launching an unreleased version of the documentation](#launching-an-unreleased-version-of-the-documentation)
        - [Updating demos in the docs](#updating-demos-in-the-docs)

## Content 
Instructions for configuring the test environment and other useful guidance.

## Configuration guides - environments 
Instructions for configuring the test environment for Handsontable, Handsontable-wrappers and other projects.


### Build for installation in the project
How to install version of Handsontable from PR into testing projects

1. On main Handsontable repo switch to the branch from which you want to build Handsontable version for test
   - `git checkout` `PR-for-tests-branch`
2. Build your Handsontable:
    - `npm i`
    - `npm run build`
3. Pack it into `.tz`:
    - `npm pack`
    - `pwd` and copy path
4. Open repository of test project.
5. Instead of npm i handsontable use:
    - `npm i .../path-to-packed-build`


### Links from Gist
How to make own `.css` and `.js` build file.

1. On main Handsontable repo switch to the branch from which you want to build Handsontable version for test
   - `git checkout` `PR-for-tests-branch` or `git clone --single-branch --branch <branchname> <remote-repo-url>`
2. Build your Handsontable:
    - `npm i`
    - `npm run build`
3. Paste content of builded file (full or full.min versions of `.css` and `.js` files) from dist folder into the
 the [Gist](https://gist.github.com/) 
4. Name that file on Gist
5. Click <kbd>Make public gist</kbd>
6. Click <kbd>Raw</kbd>
7. Copy link and paste them to [raw.githack](https://raw.githack.com/)
8. The test file is the one from the `for development section`


### Building Handsontable-wrapper from a unreleased PR
1. In the wrapper repository switch to chosen branch.
2. In the file `package.json` change in the devDependencies Handsontable version.


### Performance lab
**Installation requirements**
- Cloned branch develop
- Running Docker
- Browser Chrome with Chrome WebDriverv in the same version as browser
   `webdriver-manager update --versions.chrome {version number here}`
- Update https://github.com/handsontable/performance-lab/blob/master/protractor.conf.js#L7 to the same version as Chrome
- Node v11
  
**Instalation**
First iTerm window
- `cd repo`
- `nvm use 11`
- `npm I`
- `docker-compose -f docker/docker-compose.yml up` 
After that performance-lab-dbviewer i performance-lab-mongodb should be builed, if not, repeat last command

Second iTerm window (after above)
cd repo
- `./bin/hot-perf run --help`
- `./bin/hot-perf run --test-name=0.16.0-edit --hot-version=latest` // porównianie wersji 0.16 I 7.4.2
- `./bin/hot-perf run --test-name=0.12.0-edit --hot-version=latest`
- `./bin/hot-perf local-server benchmark-viewer`

Performance lab is running in the Chrome browser at `http://localhost:8083/`.

The performance lab uses Jasmine, but without the `expected` that is measured by this lab.

### Docs - locally
**Installation requirements**
- working Docker v2.3.02 configured with working Kitemanic
- node v8
- installed saas (`gem install saas`)
- configuration as described in repository of [handsontable/docs](https://github.com/handsontable/docs)


#### Launching an unreleased version of the documentation
There are two ways to do this.
First:
- On the branch `draft-next`
- `npm run start -- --hot-version=release/version` version e.g. 8.1.0
- `npm run build:next`

Second:
- clone builded package into `src/handsontable` and then
- `npm run build:next`

##### Updating demos in the docs
After above build, paste builded package with the correct Handsontable version into 
`generated/components/handsontable/dist/`

Check `Handsontable.version` in the browser console to be sure.