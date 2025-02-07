<p align="center">
  <a href="">
    <img src="https://i.imgur.com/Ht89GCq.png" alt="Tale Elements Logo">
  </a>
</p>

# Motivation

The purpose of this library is to make it easier to reuse components across my projects. **Note:** This library is currently under development, and its interfaces may change without prior notice.

# Components

<ul>
  <li>
    <a href="#button">Button</a>
  </li>

  <li>
    <a href="#console">Console</a>
  </li>

  <li>
    <a href="#input">Input</a>
  </li>
</ul>

# Installation

To use Tale Elements, all you need to do is install the
`tale-elements` package and its peer dependencies:

```sh
# with npm
$ npm i tale-elements

# with pnpm
$ pnpm add tale-elements
```

# How to use

How you add the component to a page may vary depending on the tools you use in your work. If you use Vite or other bundler, you can add components by importing them into a script that is imported elsewhere into a page:

```js
// Importing into a javascript file, like index.js
import { TButton } from "@tale-elements";
```

```html
<!-- importing directy into an HTML page -->
<script type="module">
  import { TButton } from "@tale-elements";
</script>
<t-button></t-button>
```

If you're using vanilla JavaScript, include an import map in your HTML to handle module imports, as browsers don't process relative paths natively. Alternatively, consider using bundlers like Vite or Webpack for more complex setups.

```html
<!-- create an import map for the browser -->
<script type="importmap">
  {
    "imports": {
      "tale-elements": "./node_modules/tale-elements/dist/esm/index.js"
    }
  }
</script>

<!-- import your custom elements -->
<script type="module">
  import { TButton } from "tale-elements";
</script>
```

# Style as you like!

With our library, you have complete freedom to style your components. You can choose from pre-defined styles using the `variant` and `shape` attributes, or if you prefer full control, you can customize each element individually using the `::part` CSS API. We expose all HTML elements so you can style them as needed.

<ul>
  <li id="button">

  <h3 style="display: inline-block; margin-block-end: 1rem;">Button</h3>

#### Variations:

    - secondary
    - red
    - ghost

#### Shape:

    - square

  <p align="center">
  <img src="https://i.imgur.com/OKUpxdk.gif" style="padding: 1rem; border: 3px solid crimson; border-radius: 20px;">
  </p>

Or use `::part(t-button)` to apply custom styles to the button

</li>

<li id="input">
  <h3 style="display: inline-block; margin-block-end: 1rem;">Input</h3>

#### Variations:

    - secondary
    - red
    - ghost

#### Shape:

    - square

  <p align="center">
    <img src="https://i.imgur.com/NMPEWgq.gif" style="padding: 1rem; border: 3px solid crimson; border-radius: 20px;">
  </p>

Or use `::part(t-input)` to apply custom styles to the input

</li>

<li id="console">
  <h3 style="display: inline-block; margin-block-end: 1rem;">Console</h3>

#### Variations:

    - secondary
    - white
    - red

  <p align="center">
    <img src="https://i.imgur.com/4lK06Jw.gif" style="padding: 1rem; border: 3px solid crimson; border-radius: 20px;">
  </p>

Or use `::part(t-console)` to apply custom styles to the console

</li>
</ul>

# License

MIT License

Copyright (c) 2025 Tale Elements

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
