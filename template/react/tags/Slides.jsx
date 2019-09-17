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


function Slides(props){
    var first = true;
    const selectedClassSubName = "main";
    const hiddenClassSubName = "hidden";
    const generalClassSubName = "Slides-Slide"
    const hiddenSlideClassName = generalClassSubName + 
                                " " + 
                                hiddenClassSubName;
    const selectedSlideClassName = generalClassSubName +
                                " " +
                                selectedClassSubName;
    
    function leftArrowClicked(e){
        e.preventDefault();
        console.log("left Arrow Clicked!");
        //console.log(e.target);
        const button = e.target;
        //console.log(e.target.parentElement.previousElementSibling.querySelectorAll("*"));
        if(button.parentElement && button.parentElement.nextElementSibling){
            const slides_container = button.parentElement.nextElementSibling;
            var slides = Array.from(slides_container.querySelectorAll("." + generalClassSubName));
            var prev_slide = slides_container.querySelector("." + selectedClassSubName);
            var index = slides.indexOf(prev_slide);

            if(slides && prev_slide && index !== -1){
            // Make sure every element here is valid

                if(index > 0){
                // We can't go past the last element
                    prev_slide.className = hiddenSlideClassName;
                    slides[index - 1].className = selectedSlideClassName;
                }

            }else{
                console.error("Could not Find Specified Nodes!");
                console.log(slides);
                console.log(prev_slide);
                console.log(index);
            }
        }else{
            //console.log(button.parentNode);
        }
    }

    function rightArrowClicked(e){
        e.preventDefault();
        console.log("right Arrow Clicked!");
        //console.log(e.target);
        const button = e.target;
        //console.log(e.target.parentElement.previousElementSibling.querySelectorAll("*"));
        if(button.parentElement && button.parentElement.previousElementSibling){
            const slides_container = button.parentElement.previousElementSibling;
            var slides = Array.from(slides_container.querySelectorAll("." + generalClassSubName));
            var prev_slide = slides_container.querySelector("." + selectedClassSubName);
            var index = slides.indexOf(prev_slide);

            if(slides && prev_slide && index !== -1){
            // Make sure every element here is valid

                if(index < slides.length - 1){
                // We can't go past the last element
                    prev_slide.className = hiddenSlideClassName;
                    slides[index + 1].className = selectedSlideClassName;
                }

            }else{
                console.error("Could not Find Specified Nodes!");
                console.log(slides);
                console.log(prev_slide);
                console.log(index);
            }
        }else{
            //console.log(button.parentNode);
        }
    }
    return (
    <div className="Slides-Outer-Container">
        <div className="Slides-Button-Left">
            <p onClick={leftArrowClicked} className="Slides-Button-Text">&lt;</p>
        </div>
        <div className="Slides-Inner-Container">
            {props.children.map((elem) => {
                if(first){ 
                    first=false; 
                    return (<div className={selectedSlideClassName}> {elem} </div>);
                }else{
                    return (<div className={hiddenSlideClassName}> {elem} </div>)
                }
            })}
        </div>
        <div className="Slides-Button-Right">
            <p onClick={rightArrowClicked} className="Slides-Button-Text">&gt;</p>
        </div>
    </div>
    );
}


