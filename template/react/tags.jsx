/*
 * Tristan Hilbert
 * 6/14/2019
 * JavaScript Main Module File
 * 
 * This will serve to import all the modules for the reactjs
 */

/* Declare which modules to use here */
function tags_doRender(){
    var root = document.getElementById("main-container");
    ReactDOM.render(
        <MarkedDown path="index.md"/>,
        root
    );
}