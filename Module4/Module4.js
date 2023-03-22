(function() {
    var names = ["Agni", "Vayu", "Varuna", "Indra", "Bhoomi", "Hanuman", "Shiva", "Brahma", "Vishnu", "Ganesha"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'v') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();

