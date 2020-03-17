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
    const jokeURI = 'https://dog.ceo/api/breeds/image/random'

// fetch information
const getJoke = async () => {
    try {
        const response = await fetch(jokeURI)
        const obj = await response.json()
        console.log(`FETCHED. Response JSON ${obj}`)
        const joke = obj.message || 'No joke for you.'
        return joke
    } catch (error) { console.error(error) }
}
const updateWithJoke = async (event) => {
    try {
        document.querySelector('#dogarea').src = ''
        const answer = await getJoke()
        document.querySelector('#dogarea').src = answer
    } catch (error) { console.error(error) }
}
// document.getElementById('getscore').onclick(getJoke);
document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getscore') { updateWithJoke(event) }
})


