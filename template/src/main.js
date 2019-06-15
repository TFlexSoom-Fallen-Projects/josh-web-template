/*
 * Tristan Hilbert
 * 6/14/2019
 * Main module for Browser Template App
 * 
 * Makes references to the following
 *  loadContent.js
 *  tags.js
 */


function main(){
    var cond = false;
    do{
    /* First create containers */
    tags_doRender();

    /* Then load/render content */
    loadContent_main();

    /* rinse and repeat */
    //console.log("repeat?");

    }while(cond);
}