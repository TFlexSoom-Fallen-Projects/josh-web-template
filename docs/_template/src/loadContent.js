/* Function Definitions */

function applyMarkdown(path, elem){
    var req = new XMLHttpRequest();
    req.open("GET", "content/" + path, true);
    req.onreadystatechange = () => {
        if(req.readyState === 4 && (req.status === 200 || req.status === 0)){
            elem.innerHTML = marked(req.responseText);
        }
    }
    req.send();
}

function loadContentJson(path, callback){
    var req = new XMLHttpRequest();
    req.open("GET", "content/" + path, true);
    req.setRequestHeader("ContentType", "text/plain");
    req.onreadystatechange = () => {
        if(req.readyState === 4 && (req.status === 200 || req.status === 0)){
            callback(JSON.parse(req.responseText));
        }
    }
    req.send();
}

function loadContentMarkedOnElement(root){
    var elements = root.querySelectorAll("div.marked-container");
    elements.forEach((element) => {
        applyMarkdown(element.getAttribute("path"), element);
        console.log(element);
    });
}

/* Main Definition */
/* Unused... LOL */
/* I am using the above definition instead due to callback/promise issues */
function loadContentMain(){
    var elements = document.querySelectorAll("div.marked-container");
    elements.forEach((element) => {
        applyMarkdown(element.getAttribute("path"), element);
        //console.log(element);
    });
}