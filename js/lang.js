allLang = ['en', 'ua'];
var defaultLang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('defaultLang', defaultLang)) || 'ua';

//This function will be called when user click changing language
function translate(lang, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lang);
    translate.process();
}

$(document).ready(function(){
//This is id of HTML element (English) with attribute lang-tag
$("#enTranslator").click(function(){
    location.href = window.location.pathname + '#en';
    location.reload();
    defaultLang = 'en';
    localStorage.setItem('defaultLang', defaultLang);
});

//This is id of HTML element (Ukrainian) with attribute lang-tag
$("#uaTranslator").click(function(){
    location.href = window.location.pathname + '#ua';
    location.reload();
    defaultLang = 'ua';
    localStorage.setItem('defaultLang', defaultLang);
});
});

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1); //to remove # symbol

    //in case of a wrong hash
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }

    translate(hash, 'lang-tag');
}
location.href = window.location.pathname + '#' + defaultLang;
changeLanguage();