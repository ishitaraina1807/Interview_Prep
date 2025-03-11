//creating a librbary kinda thing that can be used to do local stroage stuff


const setItem = (key, value) => {
  if(typeof value == Object){
    localStorage.setItem(key, JSON.stringify(value));
  }
  localStorage.setItem(key, value);
}

const getItem = (key) => {
      if (typeof localStorage.getItem(key) == Object){
        return JSON.parse(localStorage.getItem(key))
      }
      
      console.log(localStorage.getItem(key));
      return localStorage.getItem(key)
}

const removeItem =(key)=>{
    localStorage.removeItemItem(key);
}
const clearLocal = () => {
    localStorage.clear();
}

setItem("hello", "Ishita")
getItem("hello")
setItem("hello", "ekloveyouu")