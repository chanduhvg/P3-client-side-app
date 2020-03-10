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
      
      document.getElementById("result").innerHTML = mult(num1,num2,num3,num4)
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

const jokeURI = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'

// fetch information
const getJoke = async () => {
  try {
    const response = await fetch(jokeURI)
    const obj = await response.json()
    console.log(`FETCHED. Response JSON ${obj}`)
    const joke = obj.value.joke || 'No joke for you.'
    return joke
  } catch (error) { console.error(error) }
}

// interact with DOM
const updateWithJoke = async (event) => {
  try {
    document.querySelector('#result').innerHTML = ''
    const answer = await getJoke()
    document.querySelector('#result').innerHTML = answer
  } catch (error) { console.error(error) }
}

