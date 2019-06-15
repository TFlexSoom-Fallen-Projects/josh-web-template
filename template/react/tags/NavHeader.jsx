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


function NavHeader(props){
    function LinkList(p){
        var i = 0;
        const listItems = p.navList.map((element) =>
            <li key={i++}><a href={element.link}>{element.name}</a></li>
        );
        return <ul id="list" className="navs">{listItems}</ul>;
    }

    return (
    <div>
        <div>
            <a href="index.html">
                <img src={props.imgLink} alt="Logo Image for Index Hop" />
            </a>
        </div>
        <LinkList navList={props.nav} />
    </div>
    );
}