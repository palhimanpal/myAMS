// This files contains logic for selecting dependent dropdown buttons

var subjectObject = {
  "Table": ["Wooden Big Table","Wooden Small Table","Steel Big","Steel Small","Others"],
  "Chair": ["Officer Chair","Officer Chair","Visitor Chair (Exe)", "Visitor Chair (New)", "Visitor Chair (New)", "Visitor Chair (Ord)", "Steel Chair",
  "Operator Chair (New)", "Operator Chair (Old)", "Wooden Chair"],
    "PHP": ["Variables", "Strings", "Arrays"],
    "SQL": ["SELECT", "UPDATE", "DELETE"]

}
window.onload = function() {
  var subjectSel = document.getElementById("itemType");
  var topicSel = document.getElementById("subCategory");
  //var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}
