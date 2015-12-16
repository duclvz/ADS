// ==UserScript==
// @name         AutoUseGrid
// @namespace    AutoUseGrid
// @version      0.1
// @description  Bot auto click and view UseClix GridAds!
// @author       http://fb.com/duclvz
// @match        http://useclix.com/*
// @grant        none
// ==/UserScript==

if(window.location.href.indexOf("useclix.com/adgrid.php") > -1) {
    if (parseInt(document.getElementsByClassName('message_karma_skyblue')[0].firstChild.innerHTML.substr(9,2))>0)
        window.open('http://useclix.com/cksag.php?x='+(parseInt(Math.random()*100)%28+1)+'&y='+(parseInt(Math.random()*100)%28+1)+'&cdk=flase', '_blank');
}

if(window.location.href.indexOf("useclix.com/cksag.php") > -1) {
    var xxx = parseInt(wait);
    wait = 100;
    window.onbeforeunload=function(){null};
    setTimeout(function(){
        include("cmpag.php?complete&amp;");
        setTimeout(function(){
            window.onbeforeunload=function(){null};window.close(); return false;
        },2000+parseInt(Math.random()*4000));
    }, (xxx+2+parseInt(Math.random()*5))*1000);
}