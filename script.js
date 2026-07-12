// Rectangle
function rectangleArea(){
let l = parseFloat(document.getElementById("rectLength").value);
let w = parseFloat(document.getElementById("rectWidth").value);

document.getElementById("rectangleResult").innerHTML =
"Area = " + (l*w).toFixed(2);
}

// Square
function squareArea(){
let s = parseFloat(document.getElementById("squareSide").value);

document.getElementById("squareResult").innerHTML =
"Area = " + (s*s).toFixed(2);
}

// Triangle
function triangleArea(){
let b = parseFloat(document.getElementById("triangleBase").value);
let h = parseFloat(document.getElementById("triangleHeight").value);

document.getElementById("triangleResult").innerHTML =
"Area = " + (0.5*b*h).toFixed(2);
}

// Circle
function circleArea(){
let r = parseFloat(document.getElementById("circleRadius").value);

document.getElementById("circleResult").innerHTML =
"Area = " + (Math.PI*r*r).toFixed(2);
}

// Parallelogram
function parallelogramArea(){
let b = parseFloat(document.getElementById("paraBase").value);
let h = parseFloat(document.getElementById("paraHeight").value);

document.getElementById("parallelogramResult").innerHTML =
"Area = " + (b*h).toFixed(2);
}

// Trapezoid
function trapezoidArea(){
let a = parseFloat(document.getElementById("trapA").value);
let b = parseFloat(document.getElementById("trapB").value);
let h = parseFloat(document.getElementById("trapHeight").value);

document.getElementById("trapezoidResult").innerHTML =
"Area = " + (((a+b)/2)*h).toFixed(2);
}




// Rectangle
function rectanglePerimeter() {
    let l = Number(document.getElementById("rectLength").value);
    let w = Number(document.getElementById("rectWidth").value);

    document.getElementById("rectAnswer").innerHTML =
        "Answer: " + (2 * (l + w)).toFixed(2);
}

// Square
function squarePerimeter() {
    let s = Number(document.getElementById("squareSide").value);

    document.getElementById("squareAnswer").innerHTML =
        "Answer: " + (4 * s).toFixed(2);
}

// Triangle
function trianglePerimeter() {
    let a = Number(document.getElementById("triSide1").value);
    let b = Number(document.getElementById("triSide2").value);
    let c = Number(document.getElementById("triSide3").value);

    document.getElementById("triangleAnswer").innerHTML =
        "Answer: " + (a + b + c).toFixed(2);
}

// Circle (Circumference)
function circlePerimeter() {
    let r = Number(document.getElementById("circleRadius").value);

    document.getElementById("circleAnswer").innerHTML =
        "Answer: " + (2 * Math.PI * r).toFixed(2);
}

// Parallelogram
function parallelogramPerimeter() {
    let b = Number(document.getElementById("paraBase").value);
    let s = Number(document.getElementById("paraSide").value);

    document.getElementById("paraAnswer").innerHTML =
        "Answer: " + (2 * (b + s)).toFixed(2);
}

// Cube
function cubeVolume(){

let s = parseFloat(document.getElementById("cubeSide").value);

document.getElementById("cubeResult").innerHTML =
"Volume = " + Math.pow(s,3).toFixed(2);

}

// Rectangular Prism
function prismVolume(){

let l = parseFloat(document.getElementById("prismLength").value);
let w = parseFloat(document.getElementById("prismWidth").value);
let h = parseFloat(document.getElementById("prismHeight").value);

document.getElementById("prismResult").innerHTML =
"Volume = " + (l*w*h).toFixed(2);

}

// Cylinder
function cylinderVolume(){

let r = parseFloat(document.getElementById("cylinderRadius").value);
let h = parseFloat(document.getElementById("cylinderHeight").value);

document.getElementById("cylinderResult").innerHTML =
"Volume = " + (Math.PI*r*r*h).toFixed(2);

}

// Cone
function coneVolume(){

let r = parseFloat(document.getElementById("coneRadius").value);
let h = parseFloat(document.getElementById("coneHeight").value);

document.getElementById("coneResult").innerHTML =
"Volume = " + ((Math.PI*r*r*h)/3).toFixed(2);

}

// Sphere
function sphereVolume(){

let r = parseFloat(document.getElementById("sphereRadius").value);

document.getElementById("sphereResult").innerHTML =
"Volume = " + ((4/3)*Math.PI*Math.pow(r,3)).toFixed(2);

}

// Triangular Prism
function triangularPrismVolume(){

let b = parseFloat(document.getElementById("tpBase").value);
let h = parseFloat(document.getElementById("tpHeight").value);
let l = parseFloat(document.getElementById("tpLength").value);

let volume = (0.5*b*h)*l;

document.getElementById("tpResult").innerHTML =
"Volume = " + volume.toFixed(2);

}

// Rectangle
function rectanglePerimeter(){

let l = parseFloat(document.getElementById("rectLength").value);
let w = parseFloat(document.getElementById("rectWidth").value);

document.getElementById("rectangleResult").innerHTML =
"Perimeter = " + (2*(l+w)).toFixed(2);

}

// Square
function squarePerimeter(){

let s = parseFloat(document.getElementById("squareSide").value);

document.getElementById("squareResult").innerHTML =
"Perimeter = " + (4*s).toFixed(2);

}

// Triangle
function trianglePerimeter(){

let a = parseFloat(document.getElementById("side1").value);
let b = parseFloat(document.getElementById("side2").value);
let c = parseFloat(document.getElementById("side3").value);

document.getElementById("triangleResult").innerHTML =
"Perimeter = " + (a+b+c).toFixed(2);

}

// Circle
function circlePerimeter(){

let r = parseFloat(document.getElementById("circleRadius").value);

document.getElementById("circleResult").innerHTML =
"Circumference = " + (2*Math.PI*r).toFixed(2);

}

// Parallelogram
function parallelogramPerimeter(){

let b = parseFloat(document.getElementById("paraBase").value);
let s = parseFloat(document.getElementById("paraSide").value);

document.getElementById("paraResult").innerHTML =
"Perimeter = " + (2*(b+s)).toFixed(2);

}

// Rhombus
function rhombusPerimeter(){

let s = parseFloat(document.getElementById("rhombusSide").value);

document.getElementById("rhombusResult").innerHTML =
"Perimeter = " + (4*s).toFixed(2);

}

// Diameter
function calculateDiameter(){

let r = parseFloat(document.getElementById("radius1").value);

document.getElementById("diameterResult").innerHTML =
"Diameter = " + (2*r).toFixed(2);

}

// Radius
function calculateRadius(){

let d = parseFloat(document.getElementById("diameter1").value);

document.getElementById("radiusResult").innerHTML =
"Radius = " + (d/2).toFixed(2);

}

// Circumference
function calculateCircumference(){

let r = parseFloat(document.getElementById("radius2").value);

document.getElementById("circumferenceResult").innerHTML =
"Circumference = " + (2*Math.PI*r).toFixed(2);

}

// Circle Area
function calculateCircleArea(){

let r = parseFloat(document.getElementById("radius3").value);

document.getElementById("circleAreaResult").innerHTML =
"Area = " + (Math.PI*r*r).toFixed(2);

}

// Radius from Circumference
function calculateRadiusFromCircumference(){

let c = parseFloat(document.getElementById("circumferenceInput").value);

document.getElementById("radiusCircResult").innerHTML =
"Radius = " + (c/(2*Math.PI)).toFixed(2);

}

// Diameter from Circumference
function calculateDiameterFromCircumference(){

let c = parseFloat(document.getElementById("circInput").value);

document.getElementById("diamCircResult").innerHTML =
"Diameter = " + (c/Math.PI).toFixed(2);

}