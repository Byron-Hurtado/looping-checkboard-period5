function setup() {
 createCanvas(500,400)
}
function draw() {
 background(0)
 fill(250)

 var x = 50
 var count = 0

 while (count < 8) {
   if (count % 2 ===0){
     fill('pink')
   }else {
     fill('yellow')
   }//odd    
   rect(x, height/3, 50, 50)
    rect(x, height/6, 50, 50)
     rect(x, height/9, 50, 50)
      rect(x, height/12, 50, 50)
       rect(x, height/15, 50, 50)
   count += 1
   x += 50
 }
}