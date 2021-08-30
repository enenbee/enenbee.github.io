**TABLE OF CONTENTS**
<!--ts-->
  * [Tutorial](#tutorial)
      * [File Setup](#file-setup)
      * [index.html](#indexhtml)
      * [script.js](#scriptjs)
  * [Functions](#functions)
  * [Variables](#variables)

## Tutorial

### File Setup

The only files you need for zEngine are `index.html` and `script.js` (doesn't have to be called "script" but that's how I refrence it later)

### index.html

In the HTML file you need
  * A script tag with a src of `https://enenbee.github.io/zen-engine/zengine.js`
  * A script tag with a src of `script.js`
  * A script tag with a src of `https://enenbee.github.io/zen-engine/zengine-after.js`

all in that order, probably with other stuff but that's the base requirements

A index.html with slightly more and a full example is:

```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://enenbee.github.io/zen-engine/style.css">
    <title>ZenEngine Project</title>
</head>
<body>
    <script src="https://enenbee.github.io/zen-engine/zengine.js"></script>
    <script src="script.js"></script>
    <script src="https://enenbee.github.io/zen-engine/zengine-after.js"></script>
</body>
</html>
```

### script.js

In the JS file you would probably want to have a Frame function but it's not required.

The Frame function is run every frame, thus the name.

script.js example:

```js
clearcolor = "#000000"; // set this to whatever color you like

function Frame(){
  // Stuff ran per frame
}
```



## Functions



## Variables
