let Btn = document.getElementById("Btn")
// let result = document.getElementById("result")
// let result1 = document.getElementById("result1")
// let result2 = document.getElementById("result2")
// let result3 = document.getElementById("result3")
let a_side = document.getElementById("a")
let b_side = document.getElementById("b")
let c_side = document.getElementById("c")

let side_sin = document.getElementById("side-sin")
let side_cos = document.getElementById("side-cos")
let side_tan = document.getElementById("side-tan")
let result0 = document.querySelector(".result0")
let result01 = document.querySelector(".result01")
let pythagorean_theorem = document.getElementById("pythagorean theorem")


let opposite = document.getElementById("opposite")
let adjacent = document.getElementById("adjacent")
let hypotenuse = document.getElementById("hypotenuse")

let sidea = document.getElementById("sidea")
let sideb = document.getElementById("sideb")
let sidec = document.getElementById("sidec")

let reset = document.getElementById("reset")
let anglesum = document.getElementById("angle_sum")

function calculate(){
    Btn.onclick = function(){
        let sin = document.getElementById("sin").value;
        let cos = document.getElementById("cos").value;
        let tan = document.getElementById("tan").value;
        let sintodeg;
        let costodeg;
        let tantodeg;
        //convert radians to degrees
        if (sin == ""){ //check if there is a value
            
        } else {
            sintodeg = Math.sin(sin * Math.PI/180);
            console.log("sin is " + sintodeg);
        }
        if (cos == ""){ //check if there is a value
            
        } else{
            costodeg = Math.cos(cos * Math.PI/180);
            console.log("cos is "+costodeg);
        }  

        if (tan == ""){ //check if there is a value
            
        } else{
            tantodeg = Math.tan(tan * Math.PI/180);
            console.log("tan is " + tantodeg);
        }

        //calculating sin,cos,tan using sides and angle, if there is a value in the sides and not in the angle, it will calculate the angle using the sides and display it, if there is a value in the angle and not in the sides, it will calculate the sides using the angle and display it, if there is a value in both, it will calculate both and display it, if there is no value in both, it will do nothing
        if (a_side.value && c_side.value && b_side.value){
            let angleA = a_side.value/c_side.value;
            let angleB = 90 - angleA;
            side_sin.textContent =`sin calculated using a and c sides:` + (angleA) + " result in degrees(rounded): " + Math.round(Math.asin(angleA)* 180/Math.PI)
            side_cos.textContent = `cos calculated using b and c sides:` + (b_side.value/c_side.value) + " result in degrees(rounded): "  + Math.round(Math.acos(b_side.value/c_side.value)* 180/Math.PI)
            side_tan.textContent = `tan calculated using a and b sides:` + (a_side.value/b_side.value) + " result in degrees(rounded): " + Math.round(Math.atan(a_side.value/b_side.value) * 180/Math.PI)
            anglesum.textContent = "all angle sum: (angleA + angleB(90 - angleA) + 90) " + (angleA + angleB + 90)
            
        }else if(a_side.value && b_side.value){
            pythagorean_theorem.textContent = `the hypotenuse of this triangle is(c side): ` + Math.sqrt(a_side.value**2 + b_side.value**2)
        }

        //finding sides using sin,cos and tan and known sides

        //find hypotenuse using sin and opposite side and finding opposite if hypotenuse is known
        if (sintodeg && opposite.value){
            sidec.textContent = `hypotenuse, using sin and opposite side, is: ${Math.round(opposite.value/sintodeg)} `
        } else if (sintodeg && hypotenuse.value){
            sidea.textContent = `opposite, using sin and hypotenuse, is: ${Math.round(sintodeg * hypotenuse.value)}`
        }

        // a is opposite, b is adjacent and c is hypotenuse
        //find hypotenuse using cos and adjacent side and finding adjacent if hypostenuse is known
        if (costodeg && adjacent.value){
            sidec.textContent =`hypotenuse, using cos and adjacent side, is: ${Math.round(adjacent.value/costodeg)}`
        }else if(costodeg && hypotenuse.value) {
            sideb.textContent = `adjacent, using cos and hypotenuse side, is: ${Math.round(costodeg*hypotenuse.value)}`
        }

        //find opposite using tan and adjacent and finding adjacent if opposite is known
        if (tantodeg && opposite.value){
            sideb.textContent = `adjacent, using tan and opposite side, is: ${Math.round(opposite.value/tantodeg)}`
        }else if (tantodeg && adjacent.value){
            sidea.textContent = `opposite, using tan and adjacent side, is: ${Math.round(tantodeg * adjacent.value)}`
        }


        //use if i add radian to degree converter in general
        // result.textContent = `sin is ${sintodeg}`;
        // result1.textContent = `cos is ${costodeg}`;
        // result2.textContent = `tan is ${tantodeg}`;
        result0.style.border = "2px solid black";
        result0.style.background = "green";  
        result0.style.font = "helvetica";
        result01.style.border = "2px solid black";
        result01.style.background = "green";  
        result01.style.font = "helvetica";
    }
}

reset.onclick = function(){
    sidea.textContent =""
    sideb.textContent =""
    sidec.textContent =""
    side_sin.textContent =""
    side_cos.textContent =""
    side_tan.textContent =""
    pythagorean_theorem.textContent =""
    result0.style.border = "";
    result0.style.background = "";  
    result0.style.font = "";
    result01.style.border = "";
    result01.style.background = "";  
    result01.style.font = "";

}

calculate()

// draw triangle based on info(not yet implemented, only draws a normal right-sided triangle)
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        // Start the drawing path
        context.beginPath();

        // Define the three points for a right-angled triangle
        // Point 1 (top-left of the right angle)
        context.moveTo(10, 10); 
        // Point 2 (bottom-left)
        context.lineTo(10, 140);
        // Point 3 (bottom-right)
        context.lineTo(140, 140); 
        
        // Close the path to connect the last point back to the first
        context.closePath(); 

        // Fill the triangle with a color (e.g., black)
        context.fillStyle = "#FFCC00"; // Example fill color
        context.fill();

        // Optional: Add an outline
        context.lineWidth = 2;
        context.strokeStyle = "#666666"; // Example stroke color
        context.stroke();
    }
}

// THIS TOOK 4EVER TO MAKE WTF
