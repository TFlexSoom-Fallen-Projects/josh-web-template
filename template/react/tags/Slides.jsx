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
    return (
    <div className="Slides-Outer-Container">
        <div className="Slides-Button-Left"><p className="Slides-Button-Text">&lt;</p></div>
        <div className="Slides-Inner-Container">
            {props.children.map((elem) => {
                if(first){ 
                    first=false; 
                    return (<div className="Slides-Slide main"> {elem} </div>);
                }else{
                    return (<div className="Slides-Slide hidden"> {elem} </div>)
                }
            })}
        </div>
        <div className="Slides-Button-Right"><p className="Slides-Button-Text">&gt;</p></div>
    </div>
    );
}


