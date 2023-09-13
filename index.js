

const btn=document.getElementById('btn');
const search=document.getElementById('search');
const container=document.querySelector('.container');
const center=document.querySelector('.center');
const close=document.getElementById('close');
const content=document.querySelector('.content');
const detail=document.querySelector('.detail');


async function recipe(query){
container.innerHTML="Fetching Recipes..";
try {
    

const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
const data=await res.json();
container.innerHTML="";
data.meals.forEach(element => {
    const d=document.createElement('div');

    d.innerHTML=`
    <img src="${element.strMealThumb}">
    <h3>${element.strMeal}</h3>
    <p>${element.strArea}  Dish</p>
    <p>Belongs to ${element.strCategory}</p>
    
    
    `;

    const button=document.createElement('button');
    button.classList.add('btn1');
    button.innerHTML="View Recipe";
    d.appendChild(button);
    container.appendChild(d);

    button.addEventListener('click',function(){
    
        content.innerHTML=`
        <h2>${element.strMeal}</h2>
        <h3>Ingredents:</h3>
        <ol>${indi(element)}<ol>
        <div>
         <h3>Instructions:</h3>
         <p>${element.strInstructions}</p>
        </div>

    
        
        `;
        
        close.addEventListener('click',function(){
            detail.style.display="none";
        })
        detail.style.display="block";
    });

     


});
} catch (error) {
  container.innerHTML="Error in Fetching Recipes..";  
}

}

btn.addEventListener('click',function(){
    if(!search.value){
        container.innerHTML="Type the meal in the search box.";
        return;
    }
    else{
    recipe(search.value.trim());
    }
})
function indi(element){
    let indidList="";
    for(let i=1;i<=20;i++){
        const indid=element[`strIngredient${i}`];
        if(indid){
            const mesure=element[`strMeasure${i}`];
            indidList+=`<li>${mesure} ${indid}</li>`
        }
        else{
            break;
        }
    }
    return indidList;
}



    
