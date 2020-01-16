## Testing checklist for PR #6610

- [ ] Build a version
- [ ] Check the size of the version
- [ ] Build a version and install with wrappers, check their size
- [ ] Browser e2e tests on Chrome, Firefox, Safari, Opera 

    `$ npm run test: e2e.dump`

    file is on `test/E2ERunner.html`  

- [ ] Tests walkontable on Chrome, Firefox, Safari, Opera
  
    `$ test: walkontable.dump`

    file is on `src/3rdparty/walkontable/test/SpecRunner.html`

- [ ] Check the numeric type editor
     - [ ] non-integer numbers, currency, periods, commas, number format, formulas
     - [ ] repeat above after changing the keyboard language to American
     - [ ] and after changing the keyboard language to German
     - [ ] IME after changing language to Chinese or Japanese
- [ ] Click through key functions on a minified version (crud, move, formulas)
- [ ] Click through key functions (crud, move, fixing, formulas) on wrappers

- [ ] Validation check:
    - [ ] Has the number of licenses changed?
    - [ ] Has the number of licenses changed?
    check key with incorrect date - when the license expires yesterday, today and tomorrow

  

### Releted issues
1. [#5159 Support newer versions of momentjs etc](https://github.com/handsontable/handsontable/issues/5159)
2. [#6110 License suggestion for R community: rhandsontable ](https://github.com/handsontable/handsontable/issues/6110)
3. [#5790 RangeError: toFixed() digits arguments must be between 0 and 100 ](https://github.com/handsontable/handsontable/issues/5790#issuecomment-471581724)
4. [#6582 We're not able to undo changes while using summary calculations and `numeric` cell data.](https://github.com/handsontable/handsontable/issues/6582)
5. [#6423 The column type: data is not protected against pasting data using autoFill / fillHandle ](https://github.com/handsontable/handsontable/issues/6423)
6. [#5863 We get `Maximum call stack size exceeded` when enabling summaryCalculations and minSpareRows](https://github.com/handsontable/handsontable/issues/5863)
7. [#5569 Numeric Type Does Not Work with Expected to Decimal ](https://github.com/handsontable/handsontable/issues/5569)
8. [#5344 [0.35.1+] Numeric cell type percentage format not calculated ](https://github.com/handsontable/handsontable/issues/5344)
9.  [#5251 [3.0.0+] cell invalid after copy paste from excel in version PRO 4.0.0 ](https://github.com/handsontable/handsontable/issues/5251)
10. [#4884 Searching uses values hidden by numericFormat ](https://github.com/handsontable/handsontable/issues/4884)
11. [#4396 Numbers parsed incorrectly if "." is thousands separator, "," decimal separator and decimal part not specified](https://github.com/handsontable/handsontable/issues/4396)
12. [#4360 When changing cell type, cell editor does not dynamically change ](https://github.com/handsontable/handsontable/issues/4360)
13. [#4353 When the cell type is numeric, the formula does not work properly.](https://github.com/handsontable/handsontable/issues/4353)
14. [#4119 `Uncaught TypeError` in date cell type with numeric value.](https://github.com/handsontable/handsontable/issues/4119)
15. [#3402 Alter value before validation ](https://github.com/handsontable/handsontable/issues/3402)
16. [#2966 Cells function gets the property function in the col argument during validation ](https://github.com/handsontable/handsontable/issues/2966)
17. [#5848 Numeric cell type fails to validate -.n ](https://github.com/handsontable/handsontable/issues/5848)
18. [#6465 8.0.0 release](https://github.com/handsontable/handsontable/issues/6465)


### Documentation
1. [Handsontable's numericFormat](https://handsontable.com/docs/7.3.0/Options.html#numericFormat)
2. [Handsontable's numeric cell type](https://handsontable.com/docs/7.3.0/demo-numeric.html)
3. [Handsontable Licensing information](https://handsontable.com/docs/7.3.0/tutorial-licensing.html)
4. [Handsontable licence key information](https://handsontable.com/docs/7.3.0/tutorial-license-key.html)
5. [numbro's format](http://numbrojs.com/format.html)
6. [numbo supported languages](http://numbrojs.com/languages.html#supported-languages)
7. [numbro issue board](https://github.com/BenjaminVanRyseghem/numbro/issues)
8. [Pikaday issue board](https://github.com/Pikaday/Pikaday/issues)
9. [Moment.js issue board](https://github.com/moment/moment/issues)
10. [Moment.js documentation](https://momentjs.com/docs/)
11. [Terser issue board](https://github.com/terser/terser/issues)


