
(function (window) {
    var byeSpeaker = {};
    var speakWordBye = {};

    var speakWord = "Good Bye";
    speakWordBye.bye = speakWord;


    byeSpeaker.speak = function (name) {

        console.log(speakWordBye.bye + " " + name);

    }

    window.byeSpeaker = byeSpeaker;

})(window);