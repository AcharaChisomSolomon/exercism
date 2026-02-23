// @ts-check

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limeCount = 0;
  let total = 0;

  let id = 0;
  while (total < wedgesNeeded && id < limes.length) {
    const limeType = limes[id];
    id++;

    switch (limeType) {
      case "small":
        total += 6;
        break;
      case "medium":
        total += 8;
        break;
      case "large":
        total += 10;
    }

    limeCount++;
  }

  return limeCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let id = 0;
  while(timeLeft > 0 && id < orders.length) {
    timeLeft -= timeToMixJuice(orders[id]);
    id++;
  }

  return orders.slice(id);
}
