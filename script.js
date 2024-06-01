
let btn = document.querySelector("button");
let p = document.querySelector("#para");
btn.addEventListener("click",async ()=>{
     let joke  =  await jokes();
   p.innerText = joke;
})

let url = "https://icanhazdadjoke.com/"

async function jokes(){
    try{
        const config = { headers : {Accept : "application/json"} };
        let res = await axios.get(url,config);
        return res.data.joke;
    }
    catch(err){
      console.log(err);
      return "jokes are not found"
    }
   
}