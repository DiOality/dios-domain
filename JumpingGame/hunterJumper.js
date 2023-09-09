const character = document.getElementById('character');
const block = document.getElementById('block');

function jump(){
    if(character.classList.contains('animate')){return}
    character.classList.add('animate')
    setTimeout(function(){
        character.classList.remove('animate');
    }, 500)
}

const checkDead = setInterval(function(){
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft <20 && blockLeft >0 && characterTop >=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert('Your Hunt is Over')
    }
console.log(blockLeft);
}, 10)
