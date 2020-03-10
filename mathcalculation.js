function mult(a,b,c,d){

    if(isNaN(a || b || c || d)){

        throw error('The given argument is not number')
    }

   return a*b*c*d
}




function multiplyBy()
{
      const  num1 = document.getElementById("firstNumber").value;
      const  num2 = document.getElementById("secondNumber").value;
      const  num3 = document.getElementById("thirdNumber").value;
      const  num4 = document.getElementById("fourthNumber").value;
      localStorage.setItem("num1",num1)
      localStorage.setItem("num2",num2)
      localStorage.setItem("num3",num3)
      localStorage.setItem("num4",num4)
      let a=localStorage.getItem("num1")
      let b=localStorage.getItem("num2")
      let c=localStorage.getItem("num3")
      let d=localStorage.getItem("num4")
      let e=mult(a,b,c,d)
      document.getElementById("result").innerHTML = e
}


// $(document).ready(function(){
//     $('#firstNumber').val(localStorage.getItem('firstNumber'));
//     $('#secondNumber').val(localStorage.getItem('secondNumber'));
//     $('#thirdNumber').val(localStorage.getItem('thirdNumber'));
//     $('#fourthNumber').val(localStorage.getItem('fourthNumber'));
    
// })

// const Multiply=(num1,num2,num3,num4)=>{return ((num1 * num2 * num3 * num4) / 100)}

// function multiplyBy() {
//     let firstNumber;
//     let secondNumber;
//     let thirdNumber;
//     let fourthNumber;

//     firstNumber = document.getElementById('firstNumber').value;
//     localStorage.setItem('firstNumber', firstNumber);

//     secondNumber = document.getElementById('secondNumber').value;
//     localStorage.setItem('secondNumber', secondNumber);
   
//     thirdNumber = document.getElementById('thirdNumber').value;
//     localStorage.setItem('thirdNumber', thirdNumber);
   
//     fourthNumber = document.getElementById('fourthNumber').value;
//     localStorage.setItem('fourthNumber', fourthNumber);

//     var result = Multiply(firstNumber,secondNumber,thirdNumber,fourthNumber);
    
//     document.getElementById('Multiply').value = result;
// }
