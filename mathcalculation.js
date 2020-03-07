function multiplyBy() {
    num1 = document.getElementById("Number1").value;
    num2 = document.getElementById("Number2").value;
    num3 = document.getElementById("Number3").value;
    num4 = document.getElementById("Number4").value;
    document.getElementById("Number5").value = fn;
}
    
const fn=(x,y,z,a)=>{return x*y*z*a}