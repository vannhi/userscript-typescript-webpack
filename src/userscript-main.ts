// ==UserScript==
// @name         Userscript name
// @namespace    userscript@htnguyen.fr
// @version      0.1
// @description  Take over the world
// @author       You
// @include      https://www.google.com/*
// @grant        none
// @noframes
// ==/UserScript==

import { of } from 'rxjs';

(function() {
  of('world').subscribe(name => {
    console.log(`Congratulation! You took over the ${name}!`);
  });
})();
