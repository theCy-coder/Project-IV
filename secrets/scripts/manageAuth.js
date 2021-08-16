import { A1Z26, createAccess, killCookie } from './auth.js';

let user_input = document.querySelector("#decoded");
let invalidText = document.createElement("span");
const given_code = document.getElementById("code-box").innerText;
const form = document.getElementById("decode-box");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let isMatch = new A1Z26(user_input.value).compare(given_code);
    
    if(isMatch){
        createAccess();
        let invalidEl = document.getElementById("invalid-text");
        if(invalidEl){
            document.getElementById("invalid-text").remove();
        }
        killCookie('countdown');
        window.location = '../mind.html'
    }else{

        invalidText.id = "invalid-text";
        invalidText.innerText = "Invalid cipher, do it carefully.";
        invalidText.style.color = "#f00";
        invalidText.style.display = "block";
        invalidText.style.fontSize = ".8rem";
        invalidText.style.fontFamily = "IBM Plex Mono";

        user_input.insertAdjacentElement("afterend",invalidText)
    }
});