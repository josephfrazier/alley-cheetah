const test = require('tape')
const chooseEndpoints = require('../src/choose.js')

test('5 locations', function (t) {
  const locations = {
    origin: 0,
    destination: 4,
    waypoints: [1, 2, 3]
  }

  const expected = [
    { origin: 2, destination: 3, waypoints: [ 0, 4, 1 ] },
    { origin: 0, destination: 3, waypoints: [ 4, 1, 2 ] },
    { origin: 4, destination: 3, waypoints: [ 0, 1, 2 ] },
    { origin: 1, destination: 3, waypoints: [ 0, 4, 2 ] },
    { origin: 1, destination: 2, waypoints: [ 0, 4, 3 ] },
    { origin: 0, destination: 2, waypoints: [ 4, 1, 3 ] },
    { origin: 4, destination: 2, waypoints: [ 0, 1, 3 ] },
    { origin: 4, destination: 1, waypoints: [ 0, 2, 3 ] },
    { origin: 0, destination: 1, waypoints: [ 4, 2, 3 ] },
    { origin: 0, destination: 4, waypoints: [ 1, 2, 3 ] }
  ]

  t.deepEqual(chooseEndpoints(locations), expected)
  t.end()
})
