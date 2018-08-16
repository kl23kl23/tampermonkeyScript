// ==UserScript==
// @name         pixnet copy/paste/menu
// @namespace    http://claudiayeh.pixnet.net/blog/post/47658458-%E9%96%8B%E7%89%8C%E5%84%80%E5%BC%8F
// @version      0.1
// @description  回復痞客邦 pixnet 複製，貼上，右鍵選單等功能，移除蓋版廣告
// @author       puritys
// @match        http://*.pixnet.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.body.oncontextmenu="return true";
    document.body.onselectstart="return true";
    document.body.ondragstart="return true";
    document.body.style="";
    var s = document.querySelector("#ad-full-page");
    if (s) s.remove();
})();
