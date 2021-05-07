var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var count =0;
var GameState="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,800,20);


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
 text("500",25,550);
 text("100",105,550);
 text("200",185,550);
 text("10000",255,550);
 text("0",345,550);
 text("10",425,550);
 text("50",505,550);
 text("2000",585,550);
 text("750",665,550);
 text("20",745,550);

 textSize(20);
  fill(225)
  text(mouseX+","+mouseY,mouseX,mouseY)
  Engine.update(engine);
  ground.display();

  if(GameState=="end"){
    textSize(100);
    fill("red")
    text("GAME OVER",115,475);
  }
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
 }

 for (var i = 0; i < particles.length; i++) {
    particles[i].display();
     
    if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {
     score=score+500;
     if(count>=5){
       GameState="end"
     }
     particles.pop();
    }
   else if (particles[i].body.position.x < 600 && particles[i].body.position.x > 301 && particles[i].body.position.y > 760) {
     score = score + 100;
     if(count>=5){
      GameState="end"
    }
     particles.pop();
   }
   else if (particles[i].body.position.x < 900 && particles[i].body.position.x > 601 && particles[i].body.position.y > 760) {
     score = score + 200;
     if(count>=5){
      GameState="end"
    }
     particles.pop();
   }
  }
  console.log(count);

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;*/
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
}
function mousePressed(){
  if(GameState!=="end"){
      count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}
