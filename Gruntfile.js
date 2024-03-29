/*
 * Tristan Hilbert
 * 6/14/2019
 * GruntFile for Template
 * 
 * Creates a new website upon the completion of the buildscript.
 * The markdown files will be ready for creation.
 */


module.exports = function (grunt) {
    var fs = require("fs");
    var rimraf = require("rimraf");
    var newTemplate = process.env.newTemplate ? process.env.newTemplate : "newTemplate/";
    if(newTemplate[newTemplate.length - 1] !== '/')
        newTemplate += "/";

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: false,
                presets: ["babel-preset-react-app/prod"]
            },
            default: {
                expand: true,
                cwd: "template/react",
                src: ["**/*.jsx"],
                dest: newTemplate + "src/",
                ext: ".js",
                extDot: "first"
            }
        }
    });

    grunt.loadNpmTasks("grunt-babel");

    /* Use rimraf to do cleaning */
    grunt.registerTask("clean", "Cleans all those templates with the es", () => {
        var tempTemplate = newTemplate;
        while (fs.existsSync(tempTemplate)) {
            rimraf.sync(tempTemplate);
            tempTemplate = tempTemplate.substring(0, tempTemplate.length - 1) + "e" + "/";
        }
    });

    /* Copy the files over */
    grunt.registerTask("cpData", "Copies the content, src, and index.html to template", () => {
        //Make the Directory
        if(fs.existsSync(newTemplate)){
            grunt.fail.fatal("The template exists\n\"./" + newTemplate + "\"\nPlease rename or delete!\nTry using `grunt clean` or `npx grunt clean`");
        }
        fs.mkdirSync(newTemplate);

        // Grab the root
        var t = "template/";

        // Copy html files
        var rootFiles = fs.readdirSync(t);
        rootFiles.forEach((file) => {
            if(file.indexOf(".html") !== -1){
                fs.copyFileSync(t + file, newTemplate + file);
            }
        });
        
        // Copy Other Directories
        var subs = ["content/", "src/", "images/", "style/"];
        subs.forEach((directory) => {
            fs.mkdirSync(newTemplate + directory);
            fs.readdirSync(t + directory).forEach((file) => {
                fs.copyFileSync(t + directory + file, newTemplate + directory + file);
            });
        });
    });

    grunt.registerTask("default", ["cpData", "babel"]);


};