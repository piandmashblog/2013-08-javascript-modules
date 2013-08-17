(function () {
    //the requires object 
    var requires = {
        myFriendsModule: null
    };

    //create the default object
    var myModule = {};

    // global on the server, window in the browser
    var root = this; 

    //Public method returns a hello from me
    myModule.sayHelloFromMe = function () {
        return "Hi from me";
    }

    //Public method returns a hello from my friend
    myModule.sayHelloFromMyFriend = function () {
        return requires.myFriendsModule.sayHello();
    }

    // AMD / RequireJS
    if (typeof define !== 'undefined' && define.amd) {
        define(['myFriendsModule'], function (myFriendsModule) {
            requires.myFriendsModule = myFriendsModule;
            return myModule;
        });
    }
    // Node.js
    else if (typeof module !== 'undefined' && module.exports) {
        requires.myFriendsModule = require("myFriendsModule");
        module.exports = myModule;
    }
    // included directly via <script> tag
    else {
        requires.myFriendsModule = root.myFriendsModule;
        root.myModule = myModule;
    }
}());