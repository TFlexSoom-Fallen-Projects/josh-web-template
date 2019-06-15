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
    function next(content){
        ReactDOM.render(
            <div>
                <NavHeader  imgLink={content.img} nav={content.nav}/>
                <MarkedDown path="index.md"/>
            </div>,
            root
        );

        loadContent_main();
    }

    loadContentJson("NavHeader.json", next);
}