// This module will display the input from the forms into the table.

function displayData(){
    var myTable = document.getElementById('show');
    var row = myTable.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();

    cell1.innerHTML = document.getElementById('itemType').value;
    cell2.innerHTML = document.getElementById('subCategory').value;
    cell3.innerHTML = document.getElementById('quantity').value;
    cell4.innerHTML = document.getElementById('company').value;
    cell7.innerHTML = document.getElementById('uatDate').value;
    cell5.innerHTML = document.getElementById('dcoSNo').value;
    cell6.innerHTML = document.getElementById('vendorSNo').value;

}