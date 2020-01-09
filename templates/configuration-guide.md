# Configuration guides

## Table of contents
-  [Content ](#content)
- [Configuration guides - other instructions](#configuration-guides---other-instructions)
    - [Handsontable version from PR for installation in the project ](#handsontable-version-from-pr-for-installation-in-the-project)
    - [Handsontable own build configuration from PR ](#handsontable-own-build-configuration-from-pr)
    - [Handsontable-React build configuration from PR ](#handsontable-react-build-configuration-from-pr)
    - [Performance lab ](#performance-lab)
- [Configuration guides - other instructions](#configuration-guides---other-instructions)
    - [Configuration of documentation locally ](#configuration-of-documentation-locally)

## Content 
Instructions for configuring the test environment and other useful guidance.

## Configuration guides - environments 
Instructions for configuring the test environment for Handsontable, Handsontable-wrappers and other projects.


### Handsontable version from PR for installation in the project
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


### Handsontable own build configuration from PR 
How to make own `.css` and `.js` build file.

1. On main Handsontable repo switch to the branch from which you want to build Handsontable version for test
   - `git checkout` `PR-for-tests-branch`
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


### Handsontable-React build configuration from PR 
WIP

### Performance lab
WIP

## Configuration guides - other instructions
Not exactly testing environments, but other helpful guides. 

### Configuration of documentation locally 
WIP
