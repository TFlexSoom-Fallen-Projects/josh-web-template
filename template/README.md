# How To Use Template #
This is a thorough guide on how to personalize the template to your will.

## Directories | Folders ##
- `content/` represents the files of content that will be added to the tags. For example a `<MarkedDown>` tag requires a *Markdown*
file, usually with ending `.md`
- `images/` represents the files for images. Currently images cannot be added to the site via tag. This does post data for the
`<NavHeader>` tag though similar to `content/`
- `react/` contains all of the JSX files. You may change the definitions within the `react/tags/` directory, but that is not necessary.
Instead this is where you can store the custom created tag list for each of your site pages. The example format will be in `react/example.jsx`
- `src/` represents basic js files. Feel free to place your own event handlers and calls in here. Currently these host the rendering scripts
for the jsx files. These scripts should be included in each html file within the site.
- `style/` represents the stylesheets for the site. You may add to this for personalized style. Do make sure to link it in the html files. There
may be a tag later on which avoids the addition within html.
- `./` This directory should host any html docs you want within your site. This may change later on in the project.

## Creating a Page ##
### Step 1 HTML ### 
*About 5-10 minutes*


Create your html file. This should be `index.html` if you have no other `.html` files. One is provided in the template. You will need to
provide the data for the site via a `<head>` tag. Things like [SEO](https://moz.com/beginners-guide-to-seo). An example of a Head Tag that
I used for the template is provided in [Appendix-A](#Appendix-A). Feel free to copy and past, editting as needed. Then once accomplished, you
will need a `<body>` tag containing a `<div>` tag. The inner div should have an id of *main-container*. Once this is accomplished you are
ready to move on to adding jsx tags.

### Step 2 JSX ###
*About 2-20 minutes*


Within the `react/` directory you will need to provide a jsx file. Follow the same format as `react/indexTags.jsx`. Copy the code then change
the function `tagsList`. The possible tags are in the `react/tags/` directory. You may use any of these and examples are in the original `indexTags.jsx` file.
You may also change the constants at the tops for different root elements. The aspect of using multiple renders within
a single html file is untested, but remains possible. The constants also allow a different JSON to be loaded from the `content/` directory. This
may be useful for changing the `NavHeader` and may be necessary for further steps in the future. For now only one JSON can be added per JSX file. [Appendix-B](#Appendix-B)
hosts a template for JSX files matching `react/indexTags.jsx`.

### Step 3 JSX + HTML ###
*About 1-5 minutes*

Add the surmised JSX files to the original html document. Note the file endings should be `.js` *not* `.jsx`. This is because the files are compiled with babel
and will be come regular js files. The block for where to put these is commented out. Follow the template of `<script src="src/YOURNAMEHERE.js" defer></script>`.
As long as it's after the `tagsModuleRegistry` script and before the `main.js` script, then you should be fine.

### Step 4 Creating Content ###
*About 5-10 minutes*

Now you can surmise your content within the `content/` directory. This is where all your JSON files and Markdown files referenced by your tags should go. If you have
never used [Markdown](https://en.wikipedia.org/wiki/Markdown) before then please check it out. If there are problems or certain features have poor styles, then reach out to me in [GitHub Issues](https://github.com/TFlexSoom/josh-web-template/issues).

##### Subnote JSON #####
The JSON file may be confusing. It is used currently for the NavHeader. A NavHeader will almost alway look like `<NavHeader  imgLink={json.img} nav={json.nav}/>` in the JSX file.
The JSON file `content/NavHeader.json` needs two *fields*: `img` and `nav`. The `img` represents the *filepath* to the logo. This should look something like `images/NameOfFile.jpg` or `.png` depending on *file-type*. On the other hand `nav` will need angle brackets around "link objects". `name` for what word is shown and `link` for the connecting link. This should follow the provided format. This has been copied to [Appendix-C](#Appendix-C). I will most likely remove JSON from content in future iterations and go for complete Markdown, but it seemed easier at the time.


### Step 5 Compile your site ###
*About 1 minute* Depending on the speed of your computer.
This completes the template you may proceed out of this file, or simply run `npx grunt` on the root of this repository. Navigate to your html pages with your browser. You can do this on Windows by double clicking the file in File Explorer. *Cheers!*


### Step 6 Publishing your site ###
I don't have any good ideas for this. There are many options out there, but here is a link to a tutorial on [GitHub Pages](https://pages.github.com/). They can host your site for free. Here are some other platforms:
- Google Cloud
- Microsoft Azure
- Statictastic


## Appendix-A ##
```html
<!DOCTYPE html>
<head>
    <title>Josh Kaler's Blog-site</title>
    <meta charset="utf-8" />
    <meta name="description" content="Josh's great and powerful marketting page" />
    <meta name="author" content="Tristan Hilbert">
    <meta name="keywords" content="Josh Kaler, physics, Bellevue College, student, coffee" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Javascript Includes -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" defer></script>
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin defer></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin defer></script>
    
    <!-- React Imports -->
    <script src="src/tags/MarkedDown.js" defer></script>
    <script src="src/tags/NavHeader.js" defer></script>
    <script src="src/tags/Slides.js" defer></script>

    <!-- Template JS Modules -->
    <script src="src/loadContent.js" defer></script>
    <script src="src/tagsModuleRegistry.js" defer></script>

    <!--                                            -->
    <!--    Place your JSX Includes HERE!!!!        -->
    <!--

    <script src="src/YOURNAMEHERE.js" defer></script> 

                                                    -->
    <script src="src/indexTags.js" defer></script>


    <!--                                            -->

    
    <!-- Main Module -->
    <!-- I did look at browserify and webpack, but nothing is grunt compliant pre ES6 -->
    <!-- So ordering of the javascript files will remain important -->
    <script src="src/main.js" defer onload="main()"></script>

    <!-- Stylesheets || May Want to replace this with a bootstrap template -->
    <link href="style/style.css" rel="stylesheet" type="text/css" />
    <!-- Having some fun with fonts -->
    <link href="https://fonts.googleapis.com/css?family=Merriweather|Roboto+Mono&display=swap" rel="stylesheet">
</head>
<body>
    <!-- React requires one to never append to the body container -->
    <div id="main-container">

    </div>
</body>
```

## Appendix-B ##
```jsx
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
const rootContainerName = "main-container"
// JSON files within "content" directory to be used for elements
const jsonFileName = "NavHeader.json"


function tagsList(json){
    return (
        <div id="react-anchor">

        {/* ---------------------------------- */}
        {/* Declare which modules to use here  */}
        {/*               VVV                  */}
        {/* ---------------------------------- */}

        <NavHeader  imgLink={json.img} nav={json.nav}/>
        <Slides>
            <MarkedDown path="Slide0.md" />
            <MarkedDown path="Slide1.md" />
            <MarkedDown path="Slide2.md" />
        </Slides>
        <MarkedDown path="index.md"/>

        {/* ---------------------------------- */}
        {/*               ^^^                  */}
        {/* ---------------------------------- */}

        </div>
    );
}


function moduleTag(){
    // Get Root
    var root = document.getElementById(rootContainerName);

    // Define Callback
    function next(content){
        ReactDOM.render(tagsList(content), root);
    }

    // Load JSON file
    loadContentJson(jsonFileName, next);
}

// Register Render within tagsModuleRegistry
registerTag(moduleTag);
```

## Appendix-C ##
```JSON
{
    "img": "images/logo.png",
    "nav": [
        {
            "name": "DnD",
            "link": "https://TFlexSoom.github.io/repository/DnD.html"
        },
        {
            "name": "Repo For Site",
            "link": "https://github.com/TFlexSoom/josh-web-template"
        }
    ]
}
```