const TypeWrite = {
    text: undefined,
    parent: document.querySelector('.super-container'),
    isDone: false,
    addText: function(text, options = { posX: 0, posY: 0, color: "#000", fontSize: 16 }){
        this.text = text;

        const {posX, posY, color, fontSize } = options;

        
        const text_element = document.createElement('p');

        // apply css
        text_element.innerText = text;
        text_element.style.position = "absolute";
        text_element.style.left = `${posX}%`;
        text_element.style.top = `${posY}%`;
        text_element.style.transform = `translate(${-posX}%,${-posY}%)`;
        text_element.style.color = color;
        text_element.style.fontSize = `${fontSize}px`;
        text_element.style.transition = 'ease-in-out 300ms';
        
        this.parent.appendChild(text_element);
    },
    animatedAddText: function(text, options = { posX: 0, posY: 0, color: "#000", fontSize: 16, transition: {time: 300, type: 'ease-in-out' }}){
        this.isDone = false;
        const text_element = document.createElement('p');
        const {posX, posY, color, fontSize } = options;

        // apply css
        text_element.style.position = "absolute";
        text_element.style.fontFamily = "IBM Plex Mono";
        text_element.style.left = `${posX+3}%`;
        text_element.style.top = `${posY}%`;
        text_element.style.transform = `translate(${-posX}%,${-posY}%)`;
        text_element.style.color = color;
        text_element.style.fontSize = `${fontSize}px`;
        
        this.parent.appendChild(text_element);
        const text_length = text.length;
        let newText = text.split('');
        let dispText = "";
        let type = setInterval(()=>{
            if(dispText.length > text_length-1) {
                clearInterval(type)
                setTimeout(() => {
                    text_element.remove();
                    this.isDone=true;
                }, 1000);
            }
            dispText = dispText.split('').filter(a=>a!=='█').join('');
            dispText += newText[0]; 
            dispText += '█';  
            
            text_element.innerText = dispText;
            newText.shift();
        }, 100)
    }
}

const Enter = {
    init: function() {
        const btn = document.createElement('a');

        btn.innerText = "Enter";
        btn.style.fontSize = "18px";
        btn.style.fontWeight = "900";
        btn.style.fontFamily = "IBM Plex Mono";
        btn.style.backgroundColor = "#fff";
        btn.style.color = "#000";
        btn.style.position = "absolute";
        btn.style.top = "50%";
        btn.style.left = "50%";
        btn.style.transform = "translate(-50%,-50%)";
        btn.style.textDecoration = "none";
        btn.style.padding = "5px 15px 5px 15px";

        btn.href = "./secrets/gate.html"
        document.querySelector('.super-container').appendChild(btn);
    }
}
const ft = {
    color: "#fff",
    fontSize: 24,
    posX: 10,
    posY: 5
}
const st = {
    color: "#fff",
    fontSize: 24,
    posX: 30,
    posY: 80
}
const tt = {
    color: "#fff",
    fontSize: 24,
    posX: 50,
    posY: 50
}
const firstText = TypeWrite;
const secondText = TypeWrite;
const thirdText = TypeWrite;
const fourthText = TypeWrite;

setTimeout(() => {
    firstText.animatedAddText("Are you Ready...", ft)
}, 0);
setTimeout(() => {
    secondText.animatedAddText("to unlock...", st)
}, 3000);
setTimeout(() => {
    secondText.animatedAddText("the secrets of my world?", tt);
    setTimeout(()=>{
        Enter.init();
    }, 3500)
}, 6000);
