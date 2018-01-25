const combinations = require('ml-combinations')

module.exports = chooseEndpoints

function chooseEndpoints ({origin, destination, waypoints}) {
  const items = [origin, destination, ...waypoints]
  const endpointChoices = choose(2, items)
  return endpointChoices.map(([origin, destination]) => ({
    origin,
    destination,
    waypoints: items.filter(item => ![origin, destination].includes(item))
  }))
}

function choose (k, items) {
  const n = items.length
  const toItem = i => items[i]
  return [...combinations(k, n)].map(indexes => indexes.map(toItem))
}
