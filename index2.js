
let container1=document.querySelector('.container');
async function j2(){

const res=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
const data=await res.json();
data.categories.forEach(element => {
    console.log(element);
    let divt=document.createElement('div');
    let image=document.createElement('img');
    let h2=document.createElement('h2');
    let p=document.createElement('p');
    let btn=document.createElement('button');
    
    let divd=document.createElement('div');
  
  
    divd.classList.add("block");
    

    
    divt.appendChild(image);
    divt.appendChild(h2);
    divd.appendChild(p);
    divt.appendChild(btn);
    divt.appendChild(divd);
    
    
  image.src=element.strCategoryThumb;
  h2.innerText=element.strCategory;
  

  container1.appendChild(divt);
  
  btn.addEventListener('click',function(){
    p.innerHTML=element.strCategory;
    divd.style.display="block";
  })

  

  

  


});

}
j2();
