//Variables
var Trex, Trex_running;
var ground;

//Cargar archivos
function preload(){

    // Carga las imagenes para mostrar al trex
    Trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}



// Generamos objetos / sprites
function setup(){

    //Crear espacio de juego
    createCanvas(600, 200);

    //Genera el area donde se vera el videojuego
    Trex = createSprite(50, 180, 20, 50);
    //Agrega una animacion
    Trex.addAnimation("running", Trex_running);
    Trex.scale = 0.5;
    //Genera el suelo
    ground = createSprite(200, 180, 400, 20);
}


//Funcion principal - movimiento al videojuego
function draw(){

    //Genera un color de fondo para el videojuego
    background(180);
     
    //Dibuja Sprites
    drawSprites();
}