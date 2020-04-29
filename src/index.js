document.addEventListener('DOMContentLoaded', () => {
    let tableBody = document.getElementById('table-body')
    let nameDog = document.getElementsByClassName('padding center')[0]
    let editDogs = document.getElementsByClassName('padding center')[3]
    fetchDogs()

   function  fetchDogs(){
    fetch("http://localhost:3000/dogs")
    .then(r=> r.json())
    .then(dogs => renderDogs(dogs))
    
   }
   function renderDogs(dogs){
   dogs.forEach(dog => showAllDog(dog))
   }

   function showAllDog(dog){
  
    tableBody.innerHTML +=  `<tr><td>${dog.name}</td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button>Edit</button></td></tr>`

   }

  

})