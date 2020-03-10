QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST multiplication', assert => {
  assert.equal(mult(2,2,2,2), 16, 'multiplication value')
  assert.equal(mult(-2,2,2,2), -16, 'Negative multiplication value')
  assert.equal(mult(0,8,2,2), 0, 'Zero multiplication value')
  assert.equal(mult(2,2,2,2.2), 17.6, 'decimal multiplication value')
  assert.equal(mult(0,0,0,0), 0, 'zero multication value')
})

// QUnit.config.autostart = false 


// window.addEventListener('load', () => {
//     const appURL = '../index.html' // reach out to the html for the app (js-gui)
//     const openingTag = '<main class="container mt-5 flex-fill">'
//     const closingTag = '</main>' // go grab it!
//     fetch(appURL, { method: 'GET' })
//       .then(response => {
//         return response.text() // returns promise
//       })
//       .then(txt => {                
//         const start = txt.indexOf(openingTag)
//         const end = txt.indexOf(closingTag) + closingTag.length
//         const html = txt.substring(start, end) // we only want part of the page
//         const qunitFixtureBody = document.querySelector('#qunit-fixture')
//         qunitFixtureBody.innerHTML = html // put the page into the DOM - the second div associated with this page
//         console.info(qunitFixtureBody) // print it out so we can see it (it doesn't get inserted into the page)
//         QUnit.start() // start the actual testing - it finds and runs both the tests, defined in QUnit.test()
//       })
//       .catch(error => {
//         console.error('error:', error);
//         QUnit.start()
//       })

    
  