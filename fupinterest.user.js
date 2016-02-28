// ==UserScript==
// @name         FUPinterest
// @namespace    http://trejeraos.org/
// @version      0.2
// @description  Remove the annoying login nag
// @author       Jeremie Jarosh
// @match        http://*.pinterest.com/*
// @match        https://*.pinterest.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var fupStyleElm = document.createElement("style"),
    fupStyleTxt = document.createTextNode(".NagBase + .Module, .Nags { display: none !important; }");

document.head.appendChild(fupStyleElm);
fupStyleElm.appendChild(fupStyleTxt);
