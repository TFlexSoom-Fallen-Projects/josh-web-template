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
    return (
    <div className="Slides-Outer-Container">
        {props.children.map((elem) => <div className="Slides-Slide"> {elem} </div>)}
    </div>
    );
}