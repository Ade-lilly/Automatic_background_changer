//creating a database of quote
const quotes = [
    {
         quote:"If you think you can, you are right and if you think you can not, you are as well right",
        author:"Adeniyi"

    },
    {
        quote:"The main of a man can be his biggest cage if not enlightened",
        author:"Adeniyi"
    
    },
    {
        quote:"Follow peace with all men and holiness withour which no man shall see the Lord",
        author:"Adeniyi"
    
    },
    {
        quote:"The height of accomplishment of a man is equal to his conviction",
        author:"Adeniyi"
    
    }
]

function bgChanger(){
    let bg_box = document.getElementById('bg_box');
    let rgb_box = document.getElementById('rgb_box');

    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    let rgb = `rgb(${red}, ${green}, ${blue})`;
    bg_box.style.backgroundColor = rgb;
     rgb_box.innerHTML = rgb
}

bgChanger();

function quoteChanger(x){
    let quote_box = document.getElementById('quote_box');
    let quote_author_box = document.getElementById('quote_author-box');

    let num_of_quotes = x.length;
    let selected = Math.floor(Math.random() * num_of_quotes)

    x.forEach((element, index, arr)=>{
        if(index == selected){
            quote_box.innerHTML = element.quote;
            quote_author_box.innerHTML = element.author;
        }
    })
   
 }

setInterval(()=>{
    bgChanger();
    quoteChanger(quotes);
},1000);