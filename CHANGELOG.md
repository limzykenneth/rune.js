## 0.2.15

- Debug mode now works in groups too

## 0.2.14

- Adding `Rune.Image` to draw images in a SVG element
- `strokeWidth` is now scaled when calling `.scale()` on a shape
- Adding `round()` function to rectangles

## 0.2.13

- Certain shape variables weren't copied when using `copy()`. Now fixed.

## 0.2.12

- Adding `mousedown` mouse event
- Adding `mouseup` mouse event
- Adding `click` mouse event

## 0.2.11

- Adding `scale()` to all shapes
- Adding `scale()` to groups

## 0.2.10

- Removing colorString library to shrink size of library.

## 0.2.9

- `Rune.Polygon` now has a `contains(x,y)` function to know whether a point is inside or outside a polygon
- Group and shapes now have a `stagepos()` function that returns their absolute position according to the stage
- Removing `Groupable` mixin in favor of `Moveable`
- Replacing underscore with lodash to shrink size of library
- Updated code to use Babel 6
- Removed bezier.js library to shrink size of library

## 0.2.8

- Text shapes are not copied with all their variables when calling `copy()`.

## 0.2.7

- Adding `Rune.Grid` `getModule` to easily access a grid module.
- Changing internal represenation of module from array of arrays to a single array of modules.

## 0.2.6

- Triangle `move()` now moves the entire triangle, not just the starting point.

## 0.2.5

- Fixing bugs around variables shadowing function names, which makes `Rune.js` work in Safari and most mobile browsers.

## 0.2.4

- Fixing a bug around `requestAnimationframe` not getting cancelled if used within the `draw` listener. [issue](https://github.com/runemadsen/rune.js/issues/4)

## 0.2.3

- NPM package now ships `rune.browser.js` for easy of install.

## 0.2.2

- Quick fix to not break node when checking for window.

## 0.2.1

- The npm package no longer has a `Rune` global. Require statement has to look like `var Rune = require('rune.js')`

## 0.2.0

- Complete rewrite of test structure and gulpfile used to generate NPM and Github releases. NPM tarball now actually works.

## 0.1.6

- `Rune.js` is now tested and working in server-side node. Hurrah!

## 0.1.5

- Removing `rgba()` fill and stroke values and introducing straight up `rgb()` with `fill-opacity` and `stroke-opacity`, as Illustrator does not recognize `rgba()`.


## 0.1.4

- Adding direct access to `Rune.Color.Convert` functions.

## 0.1.3

- Adding `Rune.Triangle` and `r.triangle()`
- Fixing some math in the `Rune.Polygon` `bounds()` function
- Bounds and `bounds()` and `centroid` now return a `Rune.Vector` that hasn't the shape positions added. They now return internal representations.

## 0.1.2

- Rerelease because I don't understand how GitHub releases work.

## 0.1.1

- `Rune.Grid` `gutterX` and `gutterY` has been renamed to `gutterWidth` and `gutterHeight`.
- Added `removeParent()` to all shapes to remove them from parent
- Added `addParent()` to all shapes to add them to parent

## 0.1.0

- Initial release!
