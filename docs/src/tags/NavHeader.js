/*
 * Tristan Hilbert
 * 6/15/2019
 * A Nav Bar Component with links defined through a JSON object
 * 
 * 
 * 
 */

/* Example of props object */

/*
var props = {
    imgLink: "SomeStringURL",
    nav: [
        {name: "About Us", link: "https://somewebsitedotcom"},
        {name: "My Repo", link: "https://www.github.com/tflexsoom"}
    ]
}
*/
function NavHeader(props) {
  function LinkList(p) {
    var i = 0;
    var listItems = p.navList.map(function (element) {
      return React.createElement("li", {
        key: i++
      }, React.createElement("a", {
        href: element.link
      }, element.name));
    });
    return React.createElement("ul", {
      id: "list",
      className: "navs"
    }, listItems);
  }

  return React.createElement("div", {
    className: "nav-header-bar"
  }, React.createElement("div", {
    className: "nav-logo-container"
  }, React.createElement("a", {
    href: "index.html"
  }, React.createElement("img", {
    src: props.imgLink,
    alt: "Logo Image for Index Hop"
  }))), React.createElement(LinkList, {
    navList: props.nav
  }));
}
