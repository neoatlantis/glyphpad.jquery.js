Glyphpad for Ingress-glyph Inputs
=================================

Glyphpad is a jQuery plugin, which turns a SVG element on an web page into an
area allowing user to draw glyphs on it.

The glyphing language is part of the augmented-reality game
[Ingress](https://ingress.com), where each glyph represents at least one English
word, and glyphs up to 5 in sequence may be entered when hacking a portal in
game, thus increasing acquirable items.
[[1]](https://ingress.fandom.com/wiki/Glyph_Hacking)

This jQuery plugin allows you to incorporate Glyphing into any website.  It
takes care of rendering a pad where a user, either using a mouse or with a
touchscreen, may draw unlimited glyphs on it. Glyphs drawn will be compared
with a coded database and recognized. Upon successful recognization, an event
with that glyph will be fired, allowing you with further processing(shall we
seed a password generator?)

__Disclaimer: This plugin is a private fan-project and has nothing to do with official Ingress or Niantic.__

### Usage

Refer to `index.html` for this example. Open browser console for events.

1. this plugin must be included after `jquery` and `jquery.mobile`
2. create a svg element, e.g.

```html
<svg id="glyphing" class="glyphpad" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="400" height="400" viewBox="0 0 400 400">
    <defs>
        <filter id="blur">
            <feGaussianBlur stdDeviation="1" />
        </filter>
    </defs>
</svg>
```

Currently the actual size of this pad will be determined using `viewBox`
attribute above specified.

3. Make this element a Glyph pad and listen to its `detection` event.

```js
$(function(){
    $("#glyphing").glyphpad().on("detection", console.log);
});
```
