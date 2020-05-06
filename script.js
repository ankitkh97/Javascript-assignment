
(function(){

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i in names) {

    var firstLetter = names[i].toLowerCase().charAt(0);  
    if (firstLetter == 'j') {
        byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();

