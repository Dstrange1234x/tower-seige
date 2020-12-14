const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1;

function setup(){
box1=new Box(100,200,50,50);
}




function draw(){
background(0);

box1.display();
}
