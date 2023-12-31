const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.5;
class Player {
    constructor(){
        this.position = {
            x:100,
            y:100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30;
        this.height = 30;
    }
    draw(){
        c.fillStyle = 'green '
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y <= canvas.height){
        this.velocity.y += gravity
        }else{
        this.velocity.y = 0}
    }
}

class Platform {
    constructor({x, y}) {
        this.position = {
            x: x,
            y: y
        }
        this.width = 200
        this.height = 20
    }
    draw(){
        c.fillStyle = 'grey'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}


const player = new Player ()
const platforms = [new Platform({x: 200, y: 100}), new Platform({x: 500, y: 200})
]

const keys = {
    right:{
        pressed: false
    },
    left:{
        pressed: false
    }
}


let scrollOffset = 0




function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.clearRect(0, 0, canvas.width, canvas.height)
    platforms.forEach(platform => {
      platform.draw()
    })
    player.update()
    
    if(keys.right.pressed && player.position.x < 450){
        player.velocity.x = 3
    } else if (keys.left.pressed && player.position.x > 100){
        player.velocity.x = -3 
    }else{ 
        player.velocity.x = 0

        if(keys.right.pressed){
            scrollOffset +=3
            platforms.forEach(platform => {
                platform.position.x -= 3
              })
            
        }else if(keys.left.pressed){
            scrollOffset -=3
            platforms.forEach(platform => {
                platform.position.x +=3
              })
            
        }

    }


    // platform collision detection
    platforms.forEach(platform => {

    if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 0
    }
})
 if(scrollOffset > 2000){
    console.log('You Passed the Hunter Exam');
 }

}

animate()

// change the instance into key from e after you have it working.
window.addEventListener('keydown', (e) => {
    // console.log(e.keyCode);
    switch (e.keyCode){
        case 65:
         console.log('left');
         keys.left.pressed = true
         break
        case 83:
         console.log('down');
         break
        case 68:
         console.log('right');
         keys.right.pressed = true
         break
        case 87:
         console.log('up');
         player.velocity.y -= 17
         break     
    }

} )

window.addEventListener('keyup', (e) => {
    // console.log(e.keyCode);
    switch (e.keyCode){
        case 65:
         console.log('left');
         keys.left.pressed = false
         break
        case 83:
         console.log('down');
         break
        case 68:
         console.log('right');
         keys.right.pressed = false
         break
        case 87:
         console.log('up');
         player.velocity.y -= 17
         break     
    }

} )