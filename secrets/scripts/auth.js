import A1Z26 from '../../lib/a1z26/a1z26.min.js'
import HashPuppy from '../../lib/hashpuppy/index.js';

A1Z26.prototype.compare = function(comp){
    let encoded =  new A1Z26(this.textToProcess).encrypt();
    return comp === encoded;
}


function createAccess(){
    let hashValue = HashPuppy.getHash();
    sessionStorage.setItem("hashKey", hashValue);
}
function getAccess(){
    let hashKey = sessionStorage.getItem("hashKey") || "";
    if(!HashPuppy.isMatch(hashKey) || !hashKey){
        window.location = "gate.html";
    }
}

function cookieToObject(cookie){
    const c = decodeURIComponent(cookie).split(';');
    const splittedCookie = c.map(n=>n.split('='))

    return splittedCookie.map(n=>{
        let cookies = new Object();
        let prop = n[0].trim();
        cookies[prop] = n[1];
        return cookies;
    });
}
function getCookie(find){
    try{
        let cookie = cookieToObject(document.cookie);
        let n = cookie.map(n=>n)
                    .filter(n=>n[find])
        return n[0][find];
    }
    catch{
        return "";
    }
}
function unloadSession(){
    window.onbeforeunload = () => {
        sessionStorage.removeItem("hashKey");
    }
}
function killCookie(cookie, path = "/"){
    document.cookie = `${cookie}=;expires=Wed, 31 Oct 2012 08:50:17 GMT;path=${path}`;
}


export {A1Z26, createAccess, cookieToObject, getCookie, getAccess, killCookie, unloadSession};





