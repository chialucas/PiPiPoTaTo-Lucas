/*
Task 1: Add the setup() function
*/
function setup() {
  createCanvas(600, 400); // Create a canvas 
  background(220);

}
function draw() {
  // Challenge 1: An eye using ellipse() function
  ellipse(100, 100, 80, 50)
  fill(255, 0, 0)
  ellipse(200, 100, 80, 50)
  // Challenge 2: A face using circle() function
  circle(340,250,300);
  circle(450, 100, 100);
  
  // Challenge 3: A house using rect() function
  rect(200, 300, 70, 50, 20)
  // Challenge 4: A rocketship using triangle() function
  rect(200, 300, 300, 100, 30)
  // Challenge 5: A square face using quad() function
  triangle(60, 60, 60, 60, 60, 60)  
  triangle(20, 40, 75, 40, 57, 32)
  quad(20,20,80,20,80,80,20,80);
  quad(120,30,180,30,180, 70,120,70);
  quad(50,162,86,150,50,138,14,150);
  quad(120,150,180,130,180,170,120,170);
  // Challenge 6: Add some colours to the drawings in the above challenges
rect(width ,0 , 50 , 100);
circle(width,100);
  // Challenge 7: Create a funny Pokemon
  
}