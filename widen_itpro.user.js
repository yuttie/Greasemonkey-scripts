// ==UserScript==
// @name       Widen ITpro column articles
// @namespace  yuttie
// @include    http://itpro.nikkeibp.co.jp/article/COLUMN/*
// @require    http://code.jquery.com/jquery-1.5.1.min.js
// ==/UserScript==
$('#contents').css('width', '100%')
$('#sideNavi').remove()
$('#subContent').remove()
$('#mainContent').css('width', '100%')
$('#mainContent div.inner').css('width', '100%')
$('#mainContent div.inner div').css('width', '100%')
$('#mainContent div.inner h1').css('width', '100%')
