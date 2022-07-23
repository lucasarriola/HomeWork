Some good resources for learning web development and javascript:
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction
https://www.programiz.com/javascript/get-started

Agenda / Things to cover:

- VSCode - IDEs
- html, css, javascript - how it's all loaded and rendered
    - Browser receives html, css, and javascript, and 'renders' it in a viewable format
    LAMP:
    - Linux - Operating system
    - Apache - web server software
    - MySQL - Databse software
    - PHP, Node, Ruby, Java, etc. - server-side scripting languages
- integers, strings, arrays, hashes
    (boolean)
    true
    false

    (null)
    null


    (integer)
    3

    (float)
    3.25

    (string)
    "hi mom"
    
    (array)
    [
        "hello",
        "goodbye",
        "new york"
    ]

    Ex:
    myArray[0]    ("hello")
    myArray[1]    ("goodbye")
    myArray[2]    ("new york")


    (hash)
    {
        "someKey": "hello",
        "someOtherKey": "goodbye",
        "lastKey": "new york"
    }

    Ex:
    myHash.someKey        ("hello")
    myHash.someOtherKey   ("goodbye")
    myHash.lastKey        ("new york")

- debugging
    .vscode folder is where everything related to your VSCode IDE goes for a particular project or root folder
    launch.json is what controls how debugging 'profiles' will be set up and run.
        sample that tells it to load up Calculator.html from the 'project' directory when debugging is started:


        {
            // Use IntelliSense to learn about possible attributes.
            // Hover to view descriptions of existing attributes.
            // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
            "version": "0.2.0",
            "configurations": [
                {
                    "type": "chrome",
                    "request": "launch",
                    "name": "Launch Chrome",
                    "file": "${workspaceFolder}/Calculator.html"
                }
            ]
        }

    - Set a breakpoint, and then start debugger.  It'll open a chrome instance and then break at your breakpoint.

- if/then/else logic
- for loops
    - for
    - while
    - do
    - break
    - continue

- variables
- Navigating to symbol usages in IDE (Command-click)
- constants
- functions

https://medium.com/dailyjs/instantiation-patterns-in-javascript-8fdcf69e8f9b 
- objects
    - properties (variables)
    - methods (functions)
    - inheritance

