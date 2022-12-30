/**
 * Apps Script code for site at: www.sites.google.com/view/munich2022confessions
 * 
 */

function doGet(e) {
  return HtmlService.createTemplateFromFile('confessionsForm').evaluate();    
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(form_object){
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var ws = ss.getSheetByName("confessions");
  var date = new Date

  // Only append non-blank form submits
  if (form_object.confession.length > 0){
    ws.appendRow([
      date,
      form_object.neighborhood,
      form_object.confession
    ]);
  }
}