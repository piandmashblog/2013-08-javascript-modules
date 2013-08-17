# JavaScript modules

[http://piandmash.com/blog/2013/08/javascript-modules] (http://piandmash.com/blog/2013/08/javascript-modules "JavaScript modules").

The two modules, myModule.js and myFriendsModule.js work in all the environments.

To run the browser test open browser.html file in your browser.

To run the AMD/RequireJS test open the requirejs.html file in your browser.

To run the NodeJS test run the app.js file using node.

## File Structure

Both the browser and the RequireJS versions of the solution will load the modules from a path that is relative to the HTML file and therefore the files need to be in the same place.

Node uses node_modules folder and therefore you should have the files in node_modules/moduleName/index.js structure.
