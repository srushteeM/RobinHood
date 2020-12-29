var homescreen,donateForm,donorInfo;
var donor,db,food,kind;
function setup() {
  createCanvas(displayWidth,displayWidth);
  db=firebase.database();
  homescreen=new HomeScreen();
  donor=new Donor();
  food=new Food();
}

function draw() {
  background(255,255,255);  
  homescreen.display();
}