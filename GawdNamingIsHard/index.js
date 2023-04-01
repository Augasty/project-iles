const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);



let total = 0

setInterval(() => {
  // inside the element, we are selecting a random configuration and roundness combo 
  
  // and we are also making sure that we are not repeating the last pattern
  let curconfig = rand(1,4)
  let curround = rand(1,4)

  let curtotal = curconfig*10 + curround
  console.log('bo' + curtotal)
  while (curtotal === total){
    curconfig = rand(1,3)
    curround = rand(1,4)
  
    curtotal = curconfig*10 + curround

    console.log('yo' + curtotal)

  }
  wrapper.dataset.configuration = curconfig
  wrapper.dataset.roundness = curround
  total = curtotal
  console.log('fo' + total)

}, 1000);