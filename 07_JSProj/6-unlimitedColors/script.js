const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.round(Math.random() * 16)];
    
  }
  return color;
};
let intervalId;
  const start = function () {
    if(!intervalId){
        intervalId = setInterval(random, 1000);
    }
    function random() {
      document.body.style.backgroundColor = randomColor();
      console.log("Changed Color")
    }
    
  };

  const stop = function () {
    clearInterval(intervalId)
    intervalId=null
    console.log("STOPPED")
  };

  document.querySelector("#start").addEventListener("click", start);
  document.querySelector("#stop").addEventListener("click", stop);

