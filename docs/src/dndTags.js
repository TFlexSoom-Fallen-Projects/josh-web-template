/*
 * Tristan Hilbert
 * 6/14/2019
 * JavaScript Main Module File
 * 
 * This will serve to import all the modules for the reactjs
 * 
 * TO CREATE MORE JSX FILES, COPY THIS FILE AND CHANGE THE
 * TAGS IN "tagsList" FOR DIFFERENT CONTENT
 * 
 */
// ID of Root element for Render
var rootContainerName = "main-container"; // JSON files within "content" directory to be used for elements

var jsonFileName = "NavHeader.json";

function tagsList(json) {
  return React.createElement("div", {
    id: "react-anchor"
  }, React.createElement(NavHeader, {
    imgLink: json.img,
    nav: json.nav
  }), React.createElement(MarkedDown, {
    path: "DnD.md"
  }));
}

function moduleTag() {
  // Get Root
  var root = document.getElementById(rootContainerName); // Define Callback

  function next(content) {
    ReactDOM.render(tagsList(content), root);
    loadContentMarkedOnElement(root);
  } // Load JSON file


  loadContentJson(jsonFileName, next);
} // Register Render within tagsModuleRegistry


registerTag(moduleTag);
