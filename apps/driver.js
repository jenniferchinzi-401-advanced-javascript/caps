// Drivers Module
// Monitor the system for events …

// On the ‘pickup’ event …
//    Wait 1 second
//    Log “DRIVER: picked up [ORDER_ID]” to the console.
//    Emit an ‘in-transit’ event with the payload you received

// Wait 3 seconds
//    Log “delivered” to the console
//    Emit a ‘delivered’ event with the same payload

const events = require('../lib/events.js');

events.on('pickup', onPickup);

function onPickup(order){
//    Wait 1 second
  setTimeout(() => {

    //    Log “DRIVER: picked up [ORDER_ID]” to the console.
    console.log(`DRIVER: picked up ${order.orderId}`);
    //    Emit an ‘in-transit’ event with the payload you received
    events.emit('in-transit', order);

  }, 1000);

  // Wait 3 seconds
  setTimeout(() => {

    //    Log “delivered” to the console
    console.log(`DRIVER: delivered ${order.orderId}`);

    //    Emit a ‘delivered’ event with the same payload
    events.emit('delivered', order);

  }, 3000);

}

