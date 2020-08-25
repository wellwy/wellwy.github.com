// ==UserScript==
// @name         会议室筛选
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  更新支持woa域名
// @author       uniqwang
// @match        http*://meeting.oa.com/*
// @match        http*://meeting.woa.com/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var arn = document.createElement('A');
    arn.setAttribute('id', 'rn');
    arn.setAttribute('href', 'javascript:;');
    arn.innerText = "订南塔";

    arn.addEventListener('click', function () {

        var a = document.getElementsByClassName("room-name");
        for (var i = 0; i < a.length; i++) {
            if (a[i].innerText.substr(0, 1) == "N") {
                a[i].parentNode.parentNode.style.display = "none";
            } else {
                a[i].parentNode.parentNode.style.display = "";
            }
        }


    });

    var ars = document.createElement('A');
    ars.setAttribute('id', 'rs');
    ars.setAttribute('href', 'javascript:;');
    ars.innerText = "订北塔";
    ars.addEventListener('click', function () {
        var a = document.getElementsByClassName("room-name");
        for (var i = 0; i < a.length; i++) {
            if (a[i].innerText.substr(0, 1) == "S") {
                a[i].parentNode.parentNode.style.display = "none";
            } else {
                a[i].parentNode.parentNode.style.display = "";
            }
        }
    });

    var div = document.createElement('div');
    div.setAttribute('class', 'subtab');
    div.append(arn);
    div.append(ars);
    document.getElementsByClassName("tab-l")[0].append(div);

})();
