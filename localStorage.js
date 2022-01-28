/* This file is used to create localStorage in browser for the inputs from the html forms. */
// Author : HMSK

function saveData(){
    let sectionName, purchaseReceived, itemType, subCat, qty, company, uatDate, dcoSN, vendorSN;
// getting values from the form into JS variables
    sectionName = document.getElementById("sectionName").value;
    purchaseReceived = document.getElementById("purchaseReceived").value;

    itemType = document.getElementById("itemType").value;
    subCat = document.getElementById("subCategory").value;
    qty = document.getElementById("quantity").value;
    company = document.getElementById("company").value;
    dcoSN = document.getElementById("dcoSNo").value;
    vendorSN = document.getElementById("vendorSNo").value;
    uatDate = document.getElementById("uatDate").value;

// creating array for storing these values.
let assetRecords = new Array();

assetRecords = JSON.parse(localStorage.getItem("assets"))?JSON.parse(localStorage.getItem("assets")):[]

if (assetRecords.some((v)=>{return v.dcoSN == dcoSN})){
    alert ("Duplicate entry.....Check Again...");
}
else{
    assetRecords.push({
        "sectionName": sectionName,
        "purchaseReceived": purchaseReceived,
        "itemType": itemType,
        "subCat": subCat,
        "qty": qty,
        "company" : company,
        "dcoSN" : dcoSN,
        "vendorSN": vendorSN,
        "uatDate" : uatDate
    })
    localStorage.setItem("assets", JSON.stringify(assetRecords));
}

}