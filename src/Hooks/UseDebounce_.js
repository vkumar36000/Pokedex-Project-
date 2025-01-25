


function UseDebounce(callback, delay=400) {
   let timerId;
   
   return (...args) => {
    // console.log(args);
    clearTimeout(timerId);
    timerId = setTimeout(() =>{
        callback(...args);
    }, delay);
    } 
}

export default UseDebounce;