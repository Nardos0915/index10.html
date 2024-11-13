function delay(ms){


    return new Promise(resolve=>{

        setTimeout(resolve, ms);
    })
}

async function something(){
  console.log("hello")
   
  await delay(5000)

  console.log("world")

}

something()