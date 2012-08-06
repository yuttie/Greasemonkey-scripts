// ==UserScript==
// @name       Twitter Newline
// @namespace  yuttie
// @include    http://twitter.com/*
// @include    https://twitter.com/*
// @require    http://code.jquery.com/jquery-1.7.2.min.js
// ==/UserScript==

var targets = '.js-tweet-text, .tweet-text';

$('head').append('<style type="text/css">' + targets + ' { white-space: pre-wrap !important; }</style>');

document.addEventListener('DOMNodeInserted', function(e) {
    $(targets, e.relatedNode).each(function() {
        $(this).html($.trim($(this).html()));
    });
}, true);
