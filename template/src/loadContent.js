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

/* Main Definition */
function loadContent_main(){
    var elements = document.querySelectorAll("div.marked-container");
    elements.forEach((element) => {
        applyMarkdown(element.getAttribute("path"), element);
        //console.log(element);
    });
}