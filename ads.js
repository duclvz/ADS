// ==UserScript==
// @name         AutoADS
// @namespace    AutoADS
// @version      0.2
// @description	 Grabs latest versions of the bot scripts automatically.
// @author       http://fb.com/duclvzx
// @include      http://useclix.com/*
// @grant        none
// ==/UserScript==

if(window.location.href.indexOf("useclix.com/ads.php") > -1) {
    var adsx = document.getElementsByClassName("surf");
    var j=0;
    while(j<adsx.length) {
        if(adsx[j].className != "surf ")
            j++;
        else {
            window.open(adsx[j].firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.href, '_blank');
            break;
        }
            
    }
    if(j>=adsx.length) {
        var timer;
        (function repeat() {
            window.open('http://useclix.com/cksag.php?x='+(parseInt(Math.random()*100)%28+1)+'&y='+(parseInt(Math.random()*100)%28+1)+'&cdk=flase', '_blank');
            j++;
            if(j<10000) {
                timer = setTimeout(repeat, 20000+parseInt(Math.random()*10000));
            }
        })();
    }
}

if(window.location.href.indexOf("useclix.com/cks.php") > -1 || window.location.href.indexOf("useclix.com/cksag.php") > -1) {
    var xxx = parseInt(wait);
    wait = 100;
    window.onbeforeunload=function(){null};
    setTimeout(function(){
        //include("cmpag.php?complete&amp;");
        include("cmp.php?complete&amp;");
        setTimeout(function(){
            window.onbeforeunload=function(){null};window.close(); return false;
        },2000+parseInt(Math.random()*4000));
    }, (xxx+2+parseInt(Math.random()*5))*1000);
}