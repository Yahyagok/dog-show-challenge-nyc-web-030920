document.addEventListener('DOMContentLoaded', () => {
    let tableBody = document.getElementById('table-body')
    let nameDog = document.getElementsByClassName('padding center')[0]
    let editDogs = document.getElementsByClassName('padding center')[3]
    fetchDogs()
    fetchEditDogs

   function  fetchDogs(){
    fetch("http://localhost:3000/dogs")
    .then(r=> r.json())
    .then(dogs => renderDogs(dogs))
    
   }
   function renderDogs(dogs){
   dogs.forEach(dog => showAllDog(dog))
  
   }

   function showAllDog(dog){
    tableBody.innerHTML += `<tr><td>${dog.name}</td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button>Edit</button></td></tr>`
    // dogId = dog.setAttribute('data-id', dog.id)
  
//    const name = 
   }

   let form = document.getElementById('dog-form')

   let name = form.name.value 
   let breed = form.breed.value
   let sex = form.sex.value 

   let  editDog = {name, breed, sex }


   function fetchEditDogs(){

       fetch(' http://localhost:3000/dogs/:id',{
       method: "PATCH",
       header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editDog)

    })
       .then(r => r.json())
       
   }

  
       editDogs.addEventListener('submit', editThem )
      function editThem(event) {
           console.log("!!!!")
       }



  

})