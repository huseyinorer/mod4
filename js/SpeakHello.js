(function (window) {



    var helloSpeaker = {};
    var speakWordHello = {};


    var speakWord = "Hello";
    speakWordHello.hello = speakWord;

    helloSpeaker.speak = function (name) {

        console.log(speakWordHello.hello + " " + name);
    }

    window.helloSpeaker = helloSpeaker;
})(window);