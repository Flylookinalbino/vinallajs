# WebDev Learning Path:

## HTML Crash Course
### Youtube: https://www.youtube.com/watch?v=UB1O30fR-EE&list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8&index=1

## CSS Crash Course
### Youtube:https://www.youtube.com/watch?v=yfoY53QXEnI&list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8&index=2

## Bulid An HTML5 Website With A Responsive Layout
### Youtube:https://www.youtube.com/watch?v=Wm6CUkswsNw&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=4&t=14s

## CSS3 Flexbox in 20 Minutes
### Youtube: https://www.youtube.com/watch?v=JJSoEo8JSnc&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=4

1. display: flex | inline-flex;
2. flex-direction: row | column;
3. flex-wrap: wrap | nowrap | wrapreverse;
4. flex-basis: <length>;
5. justify-content: flex-start | flex-end | center;
6. align-self: flex-start | flex-end | center;
7. align-items: flex-start | flex-end | center;
8. align-content: flex-start | flex-end | center;
9. flex-grow: <number>;
10. flex-shrink: <number>;
11. flex: <integer>;
12. order: <integer>;


## CSS3 Grid Crash Course
### Youtube: https://www.youtube.com/watch?v=jV8B24rSN5o&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=5

1. Flex-box is One demension layout while CSS-Grid is Two demension layout.

## CSS3 Variables Tutorial (CSS Custom Properties)
### Youtube: https://www.youtube.com/watch?v=sQUB039MG0I

## CSS3 Animation & Transitions Crash Course
### Youtube: https://www.youtube.com/watch?v=zHUpx90NerM

#### Transitional Properties
- Properties that have an identifiable halfway point and need an action like :hover or click to work

1. background-color
2. background-position
3. border-color
4. border-width
5. border-spacing
6. bottom
7. color
8. font-size
9. font-weight
10. height-left
11. letter-spacing
12. line-height
13. margin
14. max-height
15. max-width
16. min-hight
17. min-width
18. opacity
19. outline-color
20. outline-offset
21. outline-width
22. padding-right
23. text-indent
24. text-shadow
25. top
26. vertical-align
27. visibility
28. width
29. word-spacing
30. z-index

## Netflix Landing Page Clone with HTML, CSS and JS
### https://www.youtube.com/watch?v=P7t13SGytRk&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=7&t=0s

## Microsoft Homepage Clone
### https://www.youtube.com/watch?v=uKgn-To1C4Q&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=7

## Javascript Crash Course For Beginners
### https://www.youtube.com/watch?v=hdI2bqOjy3c&list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8&index=3

## Javascript DOM Crash Course - Part 1
### https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=2

## Javascript DOM Crash Course - Part 2
### https://www.youtube.com/watch?v=mPd2aJXCZ2g&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=3

## Javascript DOM Crash Course - Part 3
### https://www.youtube.com/watch?v=wK2cBMcDTss&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=4

## Bootstrap Beginner Crash Course
### https://www.youtube.com/watch?v=5GcQtLDGXy8&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=19

#### HTML/CSS Components & Helpers
1. Navbar & Dropdowns
2. Jumbotron
3. Alerts & Progress Bars
4. Form & Input
5. Buttons & Links
6. Labels & Badges
7. Icons
8. List Group
9. Wills & Panels
10. Pagination
11. Thumbnails
12. Tables
13. Grid System
14. Responsive Utilities

#### JavaScript Widgets & Helpers // jQuery is requried for all JS
1. Transitions
2. Modals
3. Dropdowns
4. Tabs
5. Carousel / Slider
6. Alerts
7. Popovers
8. Tooltips
9. Collapsable Elements

## Javascript DOM Crash Course - Part 4 - Final Part
### https://www.youtube.com/watch?v=i37KVt_IcXw&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=5

## (Node Package Manager) NPM Crash Course
### https://www.youtube.com/watch?v=jHDhaSSKmB0

1. Install, remove, update & list packages
    // To Create package
    - $ npm init 

    // Config settings
    - npm config set init-author-name "Khan"
    - npm set init-licence "MIT"
    - npm init --yes (for all defaults)

    // Check defaults config
    - npm get init-author-name
    - npm config get init-author-name

    // Remove a default config
    - npm config delete init-author-name
    - npm config delete init-license

    // Add to index.js
    . const _ = require('module_name');

    // Run code on command
    - node file_name


2. All about package.json
    - Manifest file with app info
    - Lists dependencies (name & version)
    - Specify if versions should be updated
    - Create NPM scripts
    - Easily create with "npm init"

3. Local & global packages
    // Global package
    - npm install -g nodemon

    // Locate Global module
    - npm root -g

    // Use nodemon
    - nodemon (turn on)
    - ^C (turn off)

    // Another global
    - npm install live-server -g
    - live-server 

    // Remove global Module
    - npm remove -g nodemon

    // list of packages
    - npm list
    - npm list --depth 0
    - npm list --depth 1

4. Dependencies/dev-depencencies
    // Install Module lodash
    - npm install lodash --save (<- saves module to our dependences)

    // --save
    - when copying files from one place to another u dont need to copy the node module file
    - once after copying is done go to command and type
    - npm install
    - it will look inside ur dependance file and install all the modules need to run file

    // Dev Dependances
    - npm install --save-dev module 
    
    // Apply Dependances
    - npm install (both dev and main modules)
    - npm install --production onl (only main modules)

    // Removing Dependances
    - npm uninstall gulp-sass --save-dev
    - npm remove gulp --save-dev
    - npm rm lodash --save

    // Installing the specific version
    - npm install lodash@4.17.3 --save

    // Update to latest version
    - npm update lodash

5. Commands & shortcuts
    - rm
    - un
    - @version

6. Versioning
    - (Major version).(Minor version).(patch)
    - Major changes breakes the API
    - New features does not break API
    - Bug fixes
    - ^ (means install the minor version)
    - ~ (means keep this minor version and update only minor patch version)
    - * (install absolute latest version)

7. NPM Scripts
    // Used for testing code
    - "scripts":{
        "start": "node index.js",
        "server": "live-server"

    //make a start script
    - npm start 
    - npm start server

## Tailwind CSS Crash Course
### https://www.youtube.com/watch?v=UBOj6rqRUME
#### Install and setup Tailwind CSS
1. Install npm
2. npm init
2. npm install tailwind css
3. Create folder src and Dist
4. ADD a file.css in both folders
5. Go to Tailwind webpage and copy & paste the Tailwind directives to your src .css file
6. Go to package.json under scripts create new script
    - "build:css": "tailwind build src/file.css -o dist/file.css"
7. npm run build:css
7. If you check your dist file.css it will have all the tailwind css

#### Create Tailwind config file
1. npx tailwindcss init
2. open tailwind.config.js file
3. Under theme:{
        container: {
            center: true,
            padding:'2rem'
        },
    },
4. npm run build:css
5. container class has now been overrided with your style

#### Rename classes
1. go to src/file.css
2. add .classes
3. { @apply tailwind_classes};
4. example
    .btn{
        @apply font-bold py-2 px-4 rounded;
    }
    .btn-teal{
        @apply bg-teal-800 text-white;
    }
    .btn-teal:hover{
        @apply bg-teal-700;
    }
5. npm run buil:css
6. now you can use class names like before or u can create new classes.

## Javascript DOM Crash Course - Part 4 - Final Part (Tailwind CSS)
### https://www.youtube.com/watch?v=i37KVt_IcXw&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=5

## JavaScript BookList App | No Framework
### https://www.youtube.com/watch?v=JaMCxVWtW58&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=6

## JavaScript Higher Order Functions & Arrays
### https://www.youtube.com/watch?v=rRgD1yVwIvE&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=9

## JavaScript OOP Crash Course
### https://www.youtube.com/watch?v=vDJpGenyHaA&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=10

## Async JS Crash Course - Callbacks, Promises, Async Await
### https://www.youtube.com/watch?v=PoRJizFvM7s&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=11

## JSON Crash Course
### https://www.youtube.com/watch?v=wI1CWzNtE-M
#### Data Types
1. Numbers: No Differenace between integer and floats
2. String: String of Unicode Characters. Used double quotes
3. Boolean : TRUE OR FALSE
4. Array: Ordered list of 0 or more values
5. Object: Unordered collection of key/value pairs
6. Null: Empty value

#### JSON Syntax Rules
1. Uses key/value pairs - {"name":"Brad"}
2. Uses double quotues around KEY and VALUE
3. Must use the specified data types
4. Files types is ".json"
5. MIME type is "Application/json"

#### JSON Example
{
    "name":"First Middle Last",    <!-- String -->
    "age": 35,                     <!-- Number -->
    "address":{                    <!-- Object -->
        "street":"5 main st",
        "city":"Boston"
    },
    "children":["child1", "child2"] <!-- Array -->
}

#### What Learned
1. How to Create JSObject
2. How to access JSObject properties
3. How to Convert to JSON = JSObject + Notation : JSON.stringify();
4. How to Convert to JSOject = JSObject - Notation : JSON.prase();
5. How to Create JSObject in a .json file
6. How to call .json file into your script.js using following;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var respnse = JSON.parse(xhttp.responseText);
    };
};
xhttp.open("GET","File.json", true);
xhttp.send();

## AJAX Crash Course (Vinilla JavaScript)
### https://www.youtube.com/watch?v=82hnvUYY6QA&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=12
#### What is AJAX?
1. Asynchronous JavaScript & XML
2. Set of web technologies
3. Send & receive data asynchronously
4. Does not interfere with current webpage
5. JSON has replaced XML for the most part
--------------------------- 
|         Server          |
---------------------------
|  |        4             5     1. Common Request (Client       ->          Server)
|  |        ---------------     2. Response       (Server       ->          Client)
1  2        | AJAX Engine |     3. JS Call        (Client       ->     AJAX Engine)
|  |        ---------------     4. XmlHttpRequest (AJAX Engine  ->          Server)
|  |        3             6     5. XML/JSON       (Server       ->     AJAX Engine)
---------------------------     6. HTML Response  (AJAX Engine  ->          Client)
|         Client          |
---------------------------

#### Libararies & Other Methods
1. jQuery
2. Axios ++
3. Superagent ++
4. Fetch API ++
5. Prototype
6. Node HTTP 

## Fetch API Introduction
###

## JavaScript EA6 / ES2015 Tutuorials
###

## Pure JavaScript Type Writer Effect
###

## Google Geocode API & JavaScript Tutorial
###

## Google Maps JavaScript API Tutorial
###

## Yoututbe API Project With Authentication
###

## JavaScript Password Generator
###

## Breathe & Relax App - JavaScript & CSS Animation
###
