var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var turn=-5;
var divisionHeight=300;
var particle;
var score =0;

var gameState="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(30);
 text("500",95,650);
 text("500",175,650);
 text("500",255,650);
 text("500",15,650);
 text("100",335,650);
 text("100",415,650);
 text("100",495,650);
 text("200",575,650);
 text("200",655,650);
 text("200",735,650);

 push();
 textSize(13);
 fill("yellow");
 text("Note: left click above the first row of plinkos and don't press again until the particle has fallen all the way down",90,50);
 pop();

push();
 textSize(25);
 text("clicks left:"+ turn*-1,380,30);
  Engine.update(engine);
pop();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
    //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
      particle.display();

        if(particle.body.position.y>760){
          
          if(particle.body.position.x<300){
              score=score+500;
                particle=null;
              if(turn>=0)gameState="end";
          }
        }
   }

   if(particle!=null){
    particle.display();

      if(particle.body.position.y>760){
        
        if(particle.body.position.x>301&&particle.body.position.x<600){
            score=score+100;
            particle=null;
            if(turn>=0)gameState="end";
        }
      }
 }

 if(particle!=null){
  particle.display();

    if(particle.body.position.y>760){
      
      if(particle.body.position.x>601&&particle.body.position.x<900){
          score=score+200;
          particle=null;
          if(turn>=0)gameState="end";
      }
    }
}
  if(gameState==="end"){
      textSize(100);
      text("GameOver",150,260)
  }
}

function mousePressed(){
  if(gameState!=="end"){
    turn++;
    particle=new Particle(mouseX,10,10,10);
  }
}
