QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST multiplication', assert => {
  assert.equal(mult(2,2,2,2), 16, 'multiplication value')
  assert.equal(mult(-2,2,2,2), -16, 'Negative multiplication value')
  assert.equal(mult(0,8,2,2), 0, 'Zero multiplication value')
  assert.equal(mult(2,2,2,2.2), 17.6, 'decimal multiplication value')
  assert.equal(mult(0,0,0,0), 0, 'zero multication value')
})



    
  