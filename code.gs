function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function submitForm(formData) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('ข้อมูลการลา');
  if (!sheet) {
    sheet = ss.insertSheet('ข้อมูลการลา');
  }
  sheet.appendRow([
    new Date(),
    formData.group,
    formData.unit,
    new Date(formData.dateLeave),
    formData.leaveType,
    Number(formData.days),
    formData.empId
  ]);
}
