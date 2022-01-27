function animate(){
    
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
    
   
    handleRipples();
    ctx2.drawImage(backdroplvl2, 0, 0, canvas.width, canvas.height); 
    
    handleParticles();
    frogger.draw();
    frogger.update();
    
    // handleObstacles();
    // handleScoreBoard();
    ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
}

animate();

// event listeners
window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]){
        frogger.jump();
    }
});

window.addEventListener('keyup', function(e){
    delete keys[e.keyCode];
    frogger.moving = false;

});

function scored(){
    score++;
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
}

function handleScoreBoard(){
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Score', 265, 150);
    ctx4.font = '60px Verdana';
    ctx4.fillText(scrore, 270, 60);
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Collisions: ')
}