var list1 = [], list2 = [], list3 = [],list4 = [], list5 = [], list6 = [], list7 = [], list8 = [], list9 = []; // creating list to store the input variables.
var n=1, x=0; // iteration varible

function AddRow(){
    var AddRown = document.getElementById("show");
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("sectioName");
    list2[x] = document.getElementById("purchaseReceived");
    list3[x] = document.getElementById("itemType");
    list4[x] = document.getElementById("subCategory");
    list5[x] = document.getElementById("quantity");
    list6[x] = document.getElementById("company");
    list7[x] = document.getElementById("uatDate");
    list8[x] = document.getElementById("dcoSNo");
    list9[x] = document.getElementById("vendorSNo");


    var cel1 = NewRow.insertCell(1);
    var cel2 = NewRow.insertCell(2);
    var cel3 = NewRow.insertCell(3);
    var cel4 = NewRow.insertCell(4);
    var cel5 = NewRow.insertCell(5);
    var cel6 = NewRow.insertCell(6);
    var cel7 = NewRow.insertCell(7);
    var cel8 = NewRow.insertCell(8);

    cel1.innerHTML = list3[x]; // serial number
    cel2.innerHTML = list3[x];  // itemType
    cel3.innerHTML = list4[x];  // sub Category
    cel4.innerHTML = list5[x];  // quantity
    cel5.innerHTML = list6[x]; // company
    cel2.innerHTML = list8[x];   // dco s.no.
    cel2.innerHTML = list9[x]; // vendor s. no.
    cel2.innerHTML = list7[x]; // uat Date

    n++; x++;


}

