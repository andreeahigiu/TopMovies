const APIKEY= '907d7e32d38d28474de093b905531d48';
let baseURL='https://api.themoviedb.org/3/';

function makeAPIRequest(method, url) {
    return new Promise((resolve, reject)=> {
        const req= new XMLHttpRequest()
        req.open(method, url) 
        req.send()
        req.onload=function() {
           if( req.status >=200 && req.status <300){  
                const response= JSON.parse(req.response) 
                resolve(response)
            } else {
               reject(new Error(req.response))
           }
        }

}).then((data) => {
    baseImage= data.images.secure_base_url;
    configData= data.images;
    console.log('config', data);
    console.log('config fetched');
    //runSearch()
})
}

var MyArray= new Array();
let runSearch= function(url){
    fetch(url)
    .then(result=>result.json())
    .then((data) => {
        console.log(data);
        //var MyArray= new Array();
        for(let i=0;i<20;i++){
            MyArray.push(data.results[i].poster_path);
           // console.log(MyArray[i]);
        }
        
    })
}
let url1=''.concat(baseURL, 'movie/popular?api_key=', APIKEY, '&page=1'); 
let url2=''.concat(baseURL, 'movie/popular?api_key=', APIKEY, '&page=2'); 
let url3=''.concat(baseURL, 'movie/popular?api_key=', APIKEY, '&page=3'); 
let url4=''.concat(baseURL, 'movie/popular?api_key=', APIKEY, '&page=4'); 
let url5=''.concat(baseURL, 'movie/popular?api_key=', APIKEY, '&page=5'); 

runSearch(url1);
runSearch(url2);
runSearch(url3);
runSearch(url4);
runSearch(url5);


function placeImage(x)
{
    var div = document.getElementById("description");
    var cont= document.getElementById("description");

    div.innerHTML = ""; // clear images

    for (counter=1;counter<=x;counter++) {
        var image=document.createElement("img");
        var newDiv= document.createElement("div");
        var CDiv=document.createElement("div");
        var NewContent= document.createTextNode("Hi! This movie is amazing!");
        image.src="https://image.tmdb.org/t/p/w342"+ MyArray[counter];
        
        //newDiv.appendChild(NewContent);
        //image.appendChild(newDiv);
        // var styleEl = document.createElement('style');
        // styleEl.innerHTML = 'body{color:blue border: 5px solid purple;}';
        // document.head.appendChild(styleEl);
        
    

        CDiv.appendChild(NewContent);
        CDiv.classList.add("grid-element-2");
        cont.appendChild(CDiv);


        div.classList.add("grid-element");
        
        //div.appendChild(newDiv);
        div.appendChild(image);
    }
}

let urlConfig = "".concat(baseURL, 'configuration?api_key=', APIKEY); 

makeAPIRequest( 'GET', urlConfig).then(response => {
    console.log(response)
}).catch(err => {
    console.error(err)
})

window.onload = function() {
    placeImage(100);
};


