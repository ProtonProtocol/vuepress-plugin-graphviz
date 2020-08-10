[![npm version](https://badge.fury.io/js/vuepress-plugin-graphviz.svg)](https://badge.fury.io/js/vuepress-plugin-graphviz)
[![Build Status](https://travis-ci.com/eFrane/vuepress-plugin-graphviz.svg?branch=master)](https://travis-ci.com/eFrane/vuepress-plugin-graphviz)

# VuePress Plugin for graphviz (Viz.js)

> Use graphviz Diagrams in VuePress

This [VuePress][1] plugin provides a global component wrapping Graphvzi ([Viz.js]][2]).
The plugin is designed to work with VuePress v1.x.

Main documentation site is at [awwaiid.github.com/vuepress-plugin-graphviz][3].

## Installation

You can install it with

``` shell
yarn add -D vuepress-plugin-graphviz
```

or

``` shell
npm install --save-dev vuepress-plugin-graphviz
```

Then you just need to register the plugin in your `.vuepress/config.js`:

``` js
module.exports = {
    // ...
    plugins: [
        'vuepress-plugin-graphviz'
    ]
    // ...
}
```

## Usage

The recommended usage is to place your graphviz diagrams inside
a fenced code block with the language 'graphviz':

    ```graphviz
    digraph {
      A -> B -> C
    }
    ```

[1]: https://vuepress.vuejs.org
[2]: https://graphviz.github.io
[3]: https://vuepress-plugin-graphviz.efrane.com
