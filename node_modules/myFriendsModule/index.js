(function () {
    //the requires object 
    var requires = {
    };

    //create the default object
    var myFriendsModule = {};

    // global on the server, window in the browser
    var root = this;

    //Public method returns a hello from my friend
    myFriendsModule.sayHello = function() {
        return "Hi, I'm your friend!";
    }

    // AMD / RequireJS
    if (typeof define !== 'undefined' && define.amd) {
        define([], function () {
            return myFriendsModule;
        });
    }
    // Node.js
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = myFriendsModule;
    }
    // included directly via <script> tag
    else {
        root.myFriendsModule = myFriendsModule;
    }
}());