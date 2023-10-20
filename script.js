function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  let savedPerson = null;
  
  const btnSave = document.getElementById("saveInfo");
  btnSave.addEventListener("click", saveInfo);
  
  function saveInfo(){
    let nom = prompt('Nom: ');
    let cognom  = prompt('Cognom: ');
    let edat = prompt('Edat: ');
  
    savedPerson = new Person(nom,cognom,edat);
  
    alert("Informació guardada correctament");
  }
  
  const btnShow = document.getElementById("showInfo");
  btnShow.addEventListener("click", showInfo);
  
  function showInfo(){
    const writeInfo = document.getElementById("writeInfo");
    if(savedPerson !== null){
      writeInfo.innerHTML = 
      `
      <h2>Informació guardada</h2>
      <p>Nom: ${savedPerson.firstName}</p>
      <p>Cognom: ${savedPerson.lastName}</p>
      <p>Edat: ${savedPerson.age}</p>  
      `;
    }else{
      alert("No hi ha cap informació guardada");
    }
    
  }