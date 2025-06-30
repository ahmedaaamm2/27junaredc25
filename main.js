
import {pfDiv } from "./adddata.js";
import { showData } from "./showData.js";
import { colorizeTable } from "./coloring.js";
import { data } from "./database.js";
import { getDetails } from "./getdetails.js";

window.onload = leftDiv()
window.onload  = rightDiv() 
showData()
colorizeTable()
pfDiv
getDetails



//////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

function figuers(){
  // const yy = document.getElementsById("idhead")
  const search = document.getElementById("search")
  const  figuersDiv = document.createElement('div');
  figuersDiv.id = 'idfiguersDiv'
  figuersDiv.style.height = '40px'
  figuersDiv.style.width = '100%'
  figuersDiv.style.border = '1px solid gray'
  figuersDiv.style.display = 'flex'
  figuersDiv.style.border = 'space-evenly'
  figuersDiv.style.gap = '4px'
  figuersDiv.style.padding = '0px 15px';
  // figuersDiv.style.backgroundColor = 'gray'

  const btnFiguers = ['Leased 50', 'Vacant 10', 'Contract 15', 'Booked 15', 'Deposit 10', 'OnHold 0', 'Total 100']

  btnFiguers.forEach((name, index) => {
      const buttons = document.createElement('button');
      buttons.textContent = name
      buttons.style.backgroundColor = 'graay'
      buttons.style.height = '25px'
      buttons.style.borderRadius = '10px'
      buttons.style.fontSize = '13px'
      buttons.style.marginTop = '5px'
      figuersDiv.append(buttons)

      buttons.addEventListener('click', () => {
      console.log(`${name} button was clicked!`);
      alert(`Hello, ${name}!`);
      });
  })
  // yy.before(figuersDiv)
  // const aa = document.getElementById("crud")
  search.after(figuersDiv)
}
figuers()
window.figuers = figuers

//////////////////////////////////////////////////////////////////////////
  

function searchData(value){   
  let someColumns = '';
  for(let i = 0; i < data.length; i++){    
    if(data[i].Area.includes(value) || data[i].Price.toString().includes(value) || data[i].Status.includes(value)
      || data[i].Activites.toString().includes(value) || data[i].mobile.includes(value)){
      someColumns += `
        <tr class='tdrows'>
          <td>${i}</td>
          <td>${data[i].Area}</td>
          <td>${data[i].PropertyName}</td>
          <td>${data[i].PropertyType}</td>
          <td>${data[i].Bedrooms}</td>
          <td>${data[i].Furniture}</td>
          <td>${data[i].Price}</td>
          <td>${data[i].UnitNumber}</td>
          <td>${data[i].Status}</td>
          <td><button onclick="getDetails(${i})" id="idgetDetails">Details</button></td>
        </tr>        
        `
  }}
  
  document.getElementById('tbody').innerHTML = someColumns;

}
window.searchData = searchData
window.onload = document.getElementById('search').focus();




export function leftDiv(){
  // const yy = document.getElementsById("idhead")
  // const search = document.getElementById("search")
  const  figuersDiv = document.createElement('div');
  figuersDiv.id = 'idfiguersDiv'
  figuersDiv.style.display = 'flex'
  figuersDiv.style.flexDirection = 'column'
  figuersDiv.style.padding = '10px'
  figuersDiv.style.height = 'fitcontent'
  figuersDiv.style.width = '15%'
  figuersDiv.style.border = '1px solid gray'
  figuersDiv.style.display = 'flex'
  figuersDiv.style.border = 'space-evenly'
  figuersDiv.style.gap = '4px'
    figuersDiv.style.outline = '1px solid black'
  figuersDiv.style.borderRadius = '10px'
  // figuersDiv.style.backgroundColor = 'green'

  const btnFiguers = ['Leased 50', 'Vacant 10', 'Contract 15', 'Booked 15', 'Deposit 10', 'OnHold 0', 'Total 100']

  btnFiguers.forEach((name, index) => {
      const buttons = document.createElement('button');
      buttons.textContent = name
      // buttons.style.backgroundColor = 'brown'
      buttons.style.height = '30px'
      buttons.style.borderRadius = '10px'
      buttons.style.fontSize = '13px'
      buttons.style.marginTop = '5px'
      figuersDiv.append(buttons)

      buttons.addEventListener('click', () => {
      console.log(`${name} button was clicked!`);
      alert(`Hello, ${name}!`);
      });
  })
  // yy.before(figuersDiv)
  const aa = document.getElementById("idmainPage")
  // const aa = document.getElementsByName('body')
  aa.before(figuersDiv)

}

// leftDiv()



export function rightDiv(){
  // const yy = document.getElementsById("idhead")
  // const search = document.getElementById("search")
  const  figuersDiv = document.createElement('div');
  figuersDiv.id = 'idfiguersDiv'
  figuersDiv.style.display = 'flex'
  figuersDiv.style.flexDirection = 'column'
  figuersDiv.style.padding = '10px'
  figuersDiv.style.height = 'fitcontent'
  figuersDiv.style.width = '15%'
  figuersDiv.style.border = '1px solid gray'
  figuersDiv.style.display = 'flex'
  figuersDiv.style.border = 'space-evenly'
  figuersDiv.style.gap = '4px'
  figuersDiv.style.border = '4px'
  figuersDiv.style.outline = '1px solid black'
  figuersDiv.style.borderRadius = '10px'
  // figuersDiv.style.backgroundColor = 'green'


  const btnFiguers = ['Leased 50', 'Vacant 10', 'Contract 15', 'Booked 15', 'Deposit 10', 'OnHold 0', 'Total 100']

  btnFiguers.forEach((name, index) => {
      const buttons = document.createElement('button');
      buttons.textContent = name
      buttons.style.backgroundColor = 'graay'
      buttons.style.height = '30px'
      buttons.style.borderRadius = '10px'
      buttons.style.fontSize = '13px'
      buttons.style.marginTop = '5px'
      figuersDiv.append(buttons)

      buttons.addEventListener('click', () => {
      console.log(`${name} button was clicked!`);
      alert(`Hello, ${name}!`);
      });
  })
  // yy.before(figuersDiv)
  const aa = document.getElementById("idmainPage")
  // const aa = document.getElementsByName('body')
  aa.after(figuersDiv)

}

// rightDiv()



// use to start 
// window.onload = document.getElementById('search').value = ''
// window.onload = document.getElementById('search').onkeyup()
