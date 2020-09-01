'use strict';

// Main Hub Application

// Manages the state of every package (ready for pickup, in transit, delivered, etc)

// Logs every event to the console with a timestamp and the event payload
//     i.e. “EVENT {}”

const events = require('./lib/events.js');
require('./apps/driver.js');
require('./apps/vendor.js');

events.on('pickup', payload => log('pickup', payload));
events.on('in-transit', payload => log('in-transit', payload));
events.on('delivered', payload => log('delivered', payload));

function log(event, payload){

  let time = new Date();
  console.log('EVENT', {
    event,
    time,
    payload,
  });

}
