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

### General

#### setCanvas
`setCanvas(canvas)`

Sets the default displaying canvas to `canvas`

#### img
`img(src)`

Gets a image element from the src of `src`

NOTE: currently adds .png to the url, this will be fixed later to also work with other formats

#### set_fontfamily
`set_fontfamily(fontfamily)`

Sets the font-family of the font to `fontfamily`

#### set_fontsize
`set_fontsize(fontsize)`

Sets the font-size of the font to `fontsize`

#### getGamepad
`getGamepad(id)`

returns a Gamepad if connected, if not, returns null

### Controls

#### key
`key(key)`

returns if the key is pressed, follows Javascript naming of keys so Space is " "

#### changedkey
`changedkey(key)`

returns if the key was pressed or released this frame

#### justpressed
`justpressed(key)`

returns if key was pressed current frame

#### getMouse
`getMouse()`
returns mx,my, and mdown but as values for x,y, and down

probably just use the variables by itself, it's shorter

#### axis
`axis(axis)`
returns a value from -1 to 1 on the "x","y","horizontal", and "vertical" axises

### Gamepad

#### gp_connected
`gp_connected(id)`
returns if gamepad of id `id` is connected


- Other stuff here later

## Variables

- stuff here later
