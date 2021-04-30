const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var thunder1,thunder2,thunder3,thunder4;
var drops=[];
var maxDrops=100;
var umbrella;
var Thunder;
var thunderCreatedFrame=0;

function preload(){
thunder1=loadImage("1.png");
thunder2=loadImage("2.png");
thunder3=loadImage("3.png");
thunder4=loadImage("4.png");   
}

function setup(){
engine=Engine.create();
world=engine.world;
createCanvas(500,700);       
umbrella=new Umbrella(200,500);
for(var i=0;i<maxDrops;i++){
drops.push(new Drop(random(0,500), random(0,500)));
}
}

function draw(){
Engine.update(engine);
 background("black");
 rand=Math.round(random(1,4));
 if(frameCount%180===0){
     thunderCreatedFrame=frameCount;
     Thunder=createSprite(random(10,370),random(10,30),10,10);
     switch(rand){
         case 1:Thunder.addImage(thunder1);
         break;
         case 2:Thunder.addImage(thunder2);
         break;
         case 3:Thunder.addImage(thunder3);
         break;
         case 4:Thunder.addImage(thunder4);
         break;
         default: break;
     }
     Thunder.scale=0.7;
 }
 if(thunderCreatedFrame+10===frameCount && Thunder){
     Thunder.destroy();
 }
 umbrella.display();
 for(var i=0;i<maxDrops;i++){
    drops[i].display();
    drops[i].update(); 
 }
 drawSprites();
 }   
