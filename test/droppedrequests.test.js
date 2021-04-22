const droppedRequests = require('../src/droppedrequests')

test('[1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,11,11,11,11] => 7', () => {
  expect(droppedRequests([1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,11,11,11,11])).toEqual(7)
})

test('[1,1,1,1,2] => 1', () => {
  expect(droppedRequests([1,1,1,1,2])).toEqual(1)
})