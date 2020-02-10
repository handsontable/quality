document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');


    var example1 = document.getElementById('example1');
    var hot = new Handsontable(example1, {
        data: Handsontable.helper.createSpreadsheetData(100, 50),
        colWidths: 100,
        width: '100%',
        height: 320,
        rowHeaders: true,
        colHeaders: true,
        fixedRowsTop: 2,
        fixedColumnsLeft: 2
    });


    window.hot = hot;

})
console.log(Handsontable.version, Handsontable.buildDate);