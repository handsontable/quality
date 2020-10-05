---
name: release testing
about: repeatable tests with every code freeze
title: '[Code freeze]'
labels: 'Mobile, Project: Handsontable, e2e tests'
assignees: aninde

---

### Description
Testing checklist


### Reference
<link to the release branch>
<link to changelog>

### Chores

- [ ] becoming familiar with the changes
- [ ] developing preliminary test cases
- [ ] building a Handsontable locally from the release branch
- [ ] building each wrapper from the release version
   - [ ] Vue-Handsontable
   - [ ] React-Handsontable
   - [ ] Angular-Handsotable
- [ ] checking size of each version
- [ ] Exploratory testing
   - [ ] smoke tests based on test cases
   - [ ] repeat with each wrapper
- [ ] Regression testing on on ready demos with Handsontable
   - [ ] repeat with each wrapper
- [ ] Performance testing
    - [ ] Check performance with 1M cells
    - [ ] Check performance with 10 Handsontable tables with 1000 cell each
- [ ] running all automating tests
- [ ] documentation build
   - [ ] testing changes in documentation
- [ ] mobile and iPad testing
   - [ ] editor
   - [ ] responsiveness

