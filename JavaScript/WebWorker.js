//creating a web worker that will run in the bg  - in different thread 

//this is a dedicated web worker

self.onmessage = function (event){ //onmessage event handler is a function that gets triggered whenever a message is sent to a Web Worker
  //onmessgae is like a listener 
  console.log("Message recevied by the worker!");
  let result = 0;
  for(let i = 0; i<event.data; i++){ //event.data s the actual data sent fromt the main thread 
    result += i;  
}
self.postMessage(result);
}