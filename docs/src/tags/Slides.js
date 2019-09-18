/*
 * Tristan Hilbert
 * 9/14/2019
 * A Slides component for slideable content. This could also have a marked down component.
 * 
 * 
 * 
 */

/*

 Example props object
 https://reactjs.org/docs/composition-vs-inheritance.html#containment

*/
function Slides(props) {
  var first = true;
  var selectedClassSubName = "main";
  var hiddenClassSubName = "hidden";
  var generalClassSubName = "Slides-Slide";
  var hiddenSlideClassName = generalClassSubName + " " + hiddenClassSubName;
  var selectedSlideClassName = generalClassSubName + " " + selectedClassSubName;

  function leftArrowClicked(e) {
    e.preventDefault();
    console.log("left Arrow Clicked!"); //console.log(e.target);

    var button = e.target; //console.log(e.target.parentElement.previousElementSibling.querySelectorAll("*"));

    if (button.parentElement && button.parentElement.nextElementSibling) {
      var slides_container = button.parentElement.nextElementSibling;
      var slides = Array.from(slides_container.querySelectorAll("." + generalClassSubName));
      var prev_slide = slides_container.querySelector("." + selectedClassSubName);
      var index = slides.indexOf(prev_slide);

      if (slides && prev_slide && index !== -1) {
        // Make sure every element here is valid
        if (index > 0) {
          // We can't go past the last element
          prev_slide.className = hiddenSlideClassName;
          slides[index - 1].className = selectedSlideClassName;
        }
      } else {
        console.error("Could not Find Specified Nodes!");
        console.log(slides);
        console.log(prev_slide);
        console.log(index);
      }
    } else {//console.log(button.parentNode);
    }
  }

  function rightArrowClicked(e) {
    e.preventDefault();
    console.log("right Arrow Clicked!"); //console.log(e.target);

    var button = e.target; //console.log(e.target.parentElement.previousElementSibling.querySelectorAll("*"));

    if (button.parentElement && button.parentElement.previousElementSibling) {
      var slides_container = button.parentElement.previousElementSibling;
      var slides = Array.from(slides_container.querySelectorAll("." + generalClassSubName));
      var prev_slide = slides_container.querySelector("." + selectedClassSubName);
      var index = slides.indexOf(prev_slide);

      if (slides && prev_slide && index !== -1) {
        // Make sure every element here is valid
        if (index < slides.length - 1) {
          // We can't go past the last element
          prev_slide.className = hiddenSlideClassName;
          slides[index + 1].className = selectedSlideClassName;
        }
      } else {
        console.error("Could not Find Specified Nodes!");
        console.log(slides);
        console.log(prev_slide);
        console.log(index);
      }
    } else {//console.log(button.parentNode);
    }
  }

  return React.createElement("div", {
    className: "Slides-Outer-Container"
  }, React.createElement("div", {
    className: "Slides-Button-Left"
  }, React.createElement("p", {
    onClick: leftArrowClicked,
    className: "Slides-Button-Text"
  }, "<")), React.createElement("div", {
    className: "Slides-Inner-Container"
  }, props.children.map(function (elem) {
    if (first) {
      first = false;
      return React.createElement("div", {
        className: selectedSlideClassName
      }, " ", elem, " ");
    } else {
      return React.createElement("div", {
        className: hiddenSlideClassName
      }, " ", elem, " ");
    }
  })), React.createElement("div", {
    className: "Slides-Button-Right"
  }, React.createElement("p", {
    onClick: rightArrowClicked,
    className: "Slides-Button-Text"
  }, ">")));
}
