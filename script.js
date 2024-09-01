let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = slides.length}    
    slides[slideIndex-1].style.display = "block";  
    if (slideIndex < slides.length) {
        setTimeout(showSlides, 4000); // Muda a imagem a cada 3 segundos
    } else {
        document.getElementById('surpriseButton').style.display = 'none';
    }
}

document.getElementById('surpriseButton').addEventListener('click', function() {
    document.getElementById('surpriseMessage').style.display = 'block';
});

document.getElementById('yesButton').addEventListener('click', function() {
    alert('ebaa! Vamos nos casar hoje ja ne pra nao se arepender hihihi! 🎉');
    // Adicionando fogos de artifício
    const container = document.querySelector('.container');
    const fireworks = new Fireworks(container, { 
        maxRockets: 6, // número de foguetes a serem lançados
        rocketSpawnInterval: 150, // intervalo de lançamento dos foguetes
        numParticles: 100, // número de partículas por foguete
        explosionMinHeight: 0.2,
        explosionMaxHeight: 0.9,
        explosionChance: 0.08
    });
    fireworks.start();
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    let noButton = document.getElementById('noButton');
    noButton.style.top = Math.random() * 100 + 'px';
    noButton.style.left = Math.random() * 100 + 'px';
});
