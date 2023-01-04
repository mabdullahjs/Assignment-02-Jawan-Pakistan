let arr = [
    {
        brand:"samsung",
        model:"a34",
        ram:"4",
        rom:"64",
    },
    {
        brand:"samsung",
        model:"note10",
        ram:"6",
        rom:"128",
    },
    {
        brand:"xiomi",
        model:"note11",
        ram:"8",
        rom:"256",
    },
    {
        brand:"xiomi",
        model:"redmi3",
        ram:"4",
        rom:"128",
    },
    {
        brand:"oppo",
        model:"f10",
        ram:"6",
        rom:"256",
    },
    {
        brand:"oppo",
        model:"f11",
        ram:"4",
        rom:"64",
    },
    {
        brand:"vivo",
        model:"y31",
        ram:"4",
        rom:"64",
    },
    {
        brand:"vivo",
        model:"y23",
        ram:"8",
        rom:"128",
    },
    {
        brand:"infinix",
        model:"hot11",
        ram:"6",
        rom:"256",
    },
    {
        brand:"infinix",
        model:"hot10",
        ram:"2",
        rom:"64",
    }

];

let select = document.getElementById("keys");
let input = document.getElementById("input");
let button = document.getElementById("button");
let box = document.getElementById("main");



let selectVal = Object.keys(arr[0])
selectVal.map((item)=>{
    select.innerHTML += `<option>${item}</option>` 
});





button.addEventListener("click" , ()=>{
    box.innerHTML = "";
    let filters = arr.filter((item)=>{
        if(item[select.value] == input.value){
            return item;
        }
    })
    if(filters.length == 0){
        swal("Please fill the correct value");
    }
    input.value = "";
    console.log(filters);
    let ui = filters.map((item)=>{
        return box.innerHTML +=` <div>
            Brand = ${item.brand}<br>
            Name = ${item.model}<br>
            Ram = ${item.ram} GB<br>
            Rom = ${item.rom} GB<br>
        </div> <br>`
    })
    
})