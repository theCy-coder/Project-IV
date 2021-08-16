function startPeek(){

    let sneakpeek = document.createElement('div');
    sneakpeek.id = "sneakpeek";

    document.body.appendChild(sneakpeek);
    document.title = "Sneak";
    setTimeout(() => {
        document.querySelector(".question-container").remove();
    }, 3000);
}


export { startPeek };