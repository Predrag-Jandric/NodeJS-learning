const EventEmitter = require('events')
const myEmiter = new EventEmitter()

myEmiter.on('newSale', ()=>{
    console.log("there was new sale");
    
})

myEmiter.on('newSale', ()=>{
    console.log("other things");
    
})

myEmiter.on('newSale', (stock)=>{
    console.log(`${stock} number`);
    
})

myEmiter.emit('newSale', 9)