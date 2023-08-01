var options=document.querySelector('.options');
var showCollections=document.querySelector('.show-selections');
var submit=document.querySelector('.submit');
// for options image styling
var itemListing='';
var images=[
    {
        src : "./images/1.png",
        value : 1,
    },
    {
        src : "./images/2.png",
        value : 2,
    },
    {
        src : "./images/3.png",
        value : 3,
    },
    {
        src : "./images/4.png",
        value : 4,
    },
    {
        src : "./images/5.png",
        value : 5,
    },
    {
        src : "./images/6.png",
        value : 6,
    },
    {
        src : "./images/7.png",
        value : 7,
    },
    {
        src : "./images/8.png",
        value : 8,
    },
]


// random-ness generater
function random(){
    var x=Math.floor(Math.random()*images.length)+1;
    return x-1;
}

//checking for repeation
function repeation(arr1,rnum){
    for(var j=0;j<arr1.length;j++){
        if(rnum==arr1[j]){
            return true;
        }
    }
    return false;
}

//array for store the random number
function storeRandom(){
    var arr=[];
    for(var i=0;i<images.length;i++){
        var y=random();
        if(!repeation(arr,y)){
            arr.push(y);
        }
        else{
            i--;
        }   
    }
    return arr;
}

//image listing and add the innerHTML
var arrayImgList=[];
arrayImgList=storeRandom();
for(var i=0;i<images.length;i++){
   
    itemListing+=`
                <div class="item" value="${arrayImgList[i]}">
                    <div class="num">
                        <h1></h1>
                    </div>
                    <img src="${images[arrayImgList[i]].src}" alt="${images[arrayImgList[i]].value}">
                </div>
                `
                
}
options.innerHTML=itemListing;


//option selection
var item=document.querySelectorAll('.item');
var num=document.querySelectorAll('.num');
var win=[];
var click=1;
var selectlist=[];
var flag='win';
var showList='';
console.log(item);
item.forEach((element)=> {
    element.addEventListener('click',(event)=>{
        showList+=`
                <div class="show-item">
                    <img src='${element.childNodes[3].src}' alt='${element.childNodes[3].alt}'/>
                </div>
            `
        showCollections.innerHTML=showList;
        win.push(element.childNodes[3].alt);
        event.currentTarget.childNodes[1].childNodes[0].nextSibling.innerHTML=click;
        if(element.childNodes[3].alt!=click){
            flag='lose';
        }
        click+=1;
        element.style.pointerEvents='none';
    })
   
});


//submit button 
submit.addEventListener('click',()=>{
    if(flag=='lose'){
        var lose=document.querySelector('.lose');
        var yuckySound=document.querySelector('#yuckySound');
        yuckySound.play();
        lose.style.display='block';
        
    }
    else{
        var gif=document.querySelector('#gif');
        var win=document.querySelector('.win');
        var awesomeSound=document.querySelector('#awesomeSound');
        awesomeSound.play();
        win.style.display='block';
        gif.style.display='block';
        console.log('you are winner');
    }
    submit.style.pointerEvents='none';
})
