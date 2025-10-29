let btn = document.querySelector("button");
btn.addEventListener("click", async () => {;
let fact = await getFact();
console.log(fact);
document.getElementById("fact").innerText = fact;
});


let url = "https://catfact.ninja/fact";
async function getFact() {
    try{
        let response = await axios.get(url);
        return response.data.fact;
    }catch(error){
        return "Error: Could not fetch cat fact.";
    }
}









