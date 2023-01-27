let hName=document.getElementById('heroName');
let heroInfoDiv=document.getElementById('heroInfo');
let input = document.getElementById('heroInput');
let search=document.getElementById('search');
let newHero=document.getElementById('newHero');
let noOfHeroes=731
let rand = () =>{
   let r= Math.floor(Math.random()*noOfHeroes) + 1; 
   return r;
} 
let url='https://superheroapi.com/api.php/3447444422144225'

let getStats =(heroObject) => {
  let stats= Object.keys(heroObject.powerstats).map(stat => {
      return `<p>| ${stat.toUpperCase()} : ${heroObject.powerstats[stat]}`
   })
       
   return stats.join('')

}
let getSuperHero = (id) => {
   fetch(`${url}/${id}`)
   .then(response => response.json())
   .then(json => {
      console.log(json)
    document.getElementById('heroImage').src=`${json.image.url}`
    hName.innerText=`${json.name}`;
   heroInfoDiv.innerHTML=getStats(json)

})
}

let heroSearch =(name) =>{
   fetch(`${url}/search/${name}`)
   .then(response => response.json())
   .then(json => {
      document.getElementById('heroImage').src=`${json.results[0].image.url}` 
      hName.innerText=`${json.results[0].name}`;
      heroInfoDiv.innerHTML=getStats(json.results[0])

   })
}


newHero.onclick = () => getSuperHero(rand());
search.onclick = () =>heroSearch(input.value);