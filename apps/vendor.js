'use strict';

const faker = require('faker');
const events = require('../lib/events.js');
require('./driver.js');

// Vendor Module
// Declare your store name (perhaps in a .env file, so that this module is re-usable)

// Every 5 seconds, simulate a new customer order
//    Create a fake order, as an object:
//        storeName, orderId, customerName, address


const store = '1-206-flowers';
let orderId = faker.random.uuid();
let customerName = faker.name.findName();
let address = faker.address.streetAddress();

const Order = {
  store,
  orderId,
  customerName,
  address,
};

//    Emit a ‘pickup’ event and attach the fake order as payload
//        HINT: Have some fun by using the faker library to make up phony information

setInterval(start, 5000);

function start(){
  events.emit('pickup', Order);
}

// Monitor the system for events …
//    Whenever the ‘delivered’ event occurs
//        Log “thank you” to the console

events.on('delivered', payload => confirmDelivery(payload));

function confirmDelivery(payload){
  console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
}

module.exports = {
  start,
  confirmDelivery,
};