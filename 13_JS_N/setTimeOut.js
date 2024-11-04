// below function is to show that the delay in setTimeOut is not necessarily the delay for the callback function inisde setitmeout to excute(move to call stack). rather the delay is the time to move onto task queue.

// as shown in below code start will be printed ==> The setTimeout function is called and registered in the Web API environment & a counter will start for 3s ==> then end will be printed ==> the while loop will simulate a delay of 6 secondss & will block the main thread & by that time the callbackfunction from settimeout will come to task queue. But it won't be called onto call stack as the stack is busy executing while loop which is a synchronous code . once while loop is over. it will print the last log . then the global execution context will be popped off the stack. then only the event loop will push the callback function onto the stack to print the log inside the settimeout

console.log("start");

setTimeout(() => {
   console.log("should print after 5 s delay");
    
}, 3000);

console.log("end");

let start = new Date().getTime();
let end = 0;

while(end < start + 6000){
    end = new Date().getTime();
}

console.log("whole programme ends");

// final note ==> The delay specified in setTimeout only guarantees that the callback will be placed in the task queue after the delay; it does not ensure the callback will execute immediately after the delay if the call stack is busy.


