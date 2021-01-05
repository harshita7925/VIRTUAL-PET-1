//Create variables here
var dog, dogImage, dogHappy, dogHappyImage, database, foodStock, foodS;


function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  dogHappyImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  
  dog = createSprite(150,300,10,10);
  dog.addImage(dogImage);
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
}


function draw() { 
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappyImage);
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref("/").update({
    Food:x
  });
}



