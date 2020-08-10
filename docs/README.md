---
home: true
heroText: 'graphviz Plugin for VuePress'
tagline: 'Easy diagramming in your documentation/blog/whatever. Requires VuePress 1.x'
footer: MIT Licensed | Copyright © 2019-present Stefan "eFrane" Graupner
---

# Installation

Install it with your package manager of choice:

**npm**:

``` bash
$ npm install --save-dev vuepress-plugin-graphviz
```

**yarn**:

``` bash
$ yarn add -D vuepress-plugin-graphviz
```

Add it to the plugin listing of your vuepress config:

``` js
// .vuepress/config.js

module.exports = {
    // ...
    plugins: [
        'graphviz'
    ]
    // ...
}
```

# Usage

::: tip
If you're looking for an easier time creating your diagrams,
have a look at graphviz's [live editor][mle]!
:::

## Options

If you want to configure Graphviz further, options given
to the plugin are passed through to Graphviz:

``` js
module.exports = {
    // ...
    plugins: [
        [ 'graphviz', { gantt: { barHeight: 40 }}]
    ]
    // ...
}
```

## Fenced code block syntax

The plugin provides graphviz diagram rendering for fenced code blocks
with language name 'graphviz':

    ``` graphviz
    sequenceDiagram
    Alice->John: Hello John, how are you?
    loop every minute
        John-->Alice: Great!
    end
    ```

## Tag Syntax (not recommended)

If you really don't want to use the code block syntax
this plugin also supports using a tag wrapper
for graphviz-diagrams like so:

``` md
<graphviz>
graph lR
Documentation--with diagrams-->_[is Awesome]
</graphviz>
```

yielding:
<graphviz>
graph LR
Documentation--with diagrams-->_[is Awesome]
</graphviz>

::: tip
The tag-syntax can be useful if you want to attach additional CSS-classes
to a diagram, e.g. for aligning it on the page.
:::

# Known Caveats

_None currently_

[mle]: https://graphviz.github.io/graphviz-live-editor/
