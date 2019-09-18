/*
 * Tristan Hilbert
 * 6/15/2019
 * Marked Component within ReactJS
 * 
 * This tag will be used for a default markdown container compiled
 * with marked. Paramaters will include a path to the md file under content.
 * 
 */
function MarkedDown(props) {
  if (props.path) {
    return React.createElement("div", {
      className: "marked-container",
      path: props.path
    });
  } else {
    return React.createElement("div", null, React.createElement("h1", null, "Error!"));
  }
}
