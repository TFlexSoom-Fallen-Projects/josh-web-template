/*
 * Tristan Hilbert
 * 9/17/2019
 * Tags Module Registry
 * 
 * This is a datastructure to facilitate connection
 * to the main.js render function. Consider this the interface
 * to the jsx files.
 */

// Queue! of functions
var modules = [];
// .shift() --> First Out
// .push() --> First In

// Primary Entry Function -- Called by main.js
/*
 * renderModules(None)
 * DEF: takes collected tags and uses ReactJS and otherwise to
 * render the elements to the DOM within the browser.
 * PRE: The modules data structure is populated with functions to call for tags.
 * POST: The modules data structure is freed or otherwise destroyed
 */
function renderModules(){
    var i = modules.length;
    var iter = () => {};
    while(i > 0){
        iter = modules.shift();
        iter();
        i -= 1;
    }

}

// Register Functions collects data structure entries.
/*
 * registerTag(function)
 * DEF: Adds function to the end of Queue. Remember FIFO, Tags are rendered in order given.
 * PRE: Modules is a defined function Array
 * POST: Modules is added to by one element
 */
function registerTag(tag){
    modules.push(tag);
}