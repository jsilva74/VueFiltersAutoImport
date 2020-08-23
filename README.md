# Vue Filters Auto Import
Wrapper to define global filters for Vue

![NPM Package](https://github.com/jsjunior/VueFiltersAutoImport/workflows/NPM%20Package/badge.svg)
## Installation
```
npm i vuefiltersautoimport
```
## Usage
Create your filter class and extends the package main class passing your filter class prototype as first argument to the super constructor.
Optionally, as second argument, you can pass an array with methods to ignore:
```
import VueFiltersAutoImport from 'vuefiltersautoimport'

export default class MyFiltersClass extends VueFiltersAutoImport () {
    constructor () {
        super(MyFiltersClass.prototype, ['auxiliaryMethodThatShouldBeIgnored'])
    }
    
    myCustomFilter (param1, param2) {
        ...
    }

    auxiliaryMethodThatShouldBeIgnored () {}
}
```
main.js
```
import Vue from 'vue'
import MyFiltersClass from './filters-or-whereever'

Vue.use(new MyFiltersClass())

```

