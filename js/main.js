
import * as FncPages from "/js/allBadges.js";
// import * as AddData from "/js/adddata.js";
import { colorizeTable } from "/js/coloring.js";
import { data } from "/js/database.js";
import { getDetails } from "/js/getdetails.js";

window.onload = FncPages.allBadgesFnc()



//////////////////////////////////////////////////////////////////////////
//////////////////////         Figures           ///////////////////////            
//////////////////////////////////////////////////////////////////////////






  


////////////////////////////////////////////////////////////////////////////
//////////////////////         Seacrh           ///////////////////////////            
//////////////////////////////////////////////////////////////////////////
  

export function searchData(value){   
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
// window.searchData = searchData
window.onload = document.getElementById('IDSearchInput').focus();


//////////////////////////////////////////////////////////////////////////
//////////////////////         Left  Div           ///////////////////////            
//////////////////////////////////////////////////////////////////////////

function leftDiv(){

  const  figuersDiv = document.createElement('div');
  figuersDiv.id = 'idfiguersDiv'
  figuersDiv.className = 'CLASSfiguersDiv'
  figuersDiv.style.display = 'flex'
  figuersDiv.style.flexDirection = 'column'
  figuersDiv.style.padding = '10px'
  figuersDiv.style.height = 'fitcontent'
  figuersDiv.style.width = '15%'
  figuersDiv.style.border = '1px solid gray'
  figuersDiv.style.border = 'space-evenly'
  figuersDiv.style.gap = '4px'
  figuersDiv.style.outline = '1px solid black'
  figuersDiv.style.borderRadius = '10px'
  // figuersDiv.style.backgroundColor = '#e8d1d1'

  const btnFiguers = ['Leased 50', 'Vacant 10', 'Contract 15', 'Booked 15', 'Deposit 10', 'OnHold 0', 'Total 100']

  btnFiguers.forEach((name, index) => {
      const buttons = document.createElement('button');
      buttons.textContent = name
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
  const aa = document.getElementById('IDcenterMainDiv')
  aa.before(figuersDiv)
}

leftDiv()
//////////////////////////////////////////////////////////////////////////
//////////////////////         Right Div           ///////////////////////            
//////////////////////////////////////////////////////////////////////////

function rightDiv(){
  const  figuersDiv = document.createElement('div');
  figuersDiv.id = 'idfiguersDiv'
  figuersDiv.className = 'CLASSfiguersDiv'
  figuersDiv.style.display = 'flex'
  figuersDiv.style.flexDirection = 'column'
  figuersDiv.style.padding = '10px'
  figuersDiv.style.height = 'fitcontent'
  figuersDiv.style.width = '15%'
  figuersDiv.style.border = 'space-evenly'
  figuersDiv.style.gap = '4px'
  figuersDiv.style.border = '4px'
  figuersDiv.style.outline = '1px solid black'
  figuersDiv.style.borderRadius = '10px'
  // figuersDiv.style.backgroundColor = '#e8d1d1'


  const btnFiguers = ['Leased 50', 'Vacant 10', 'Contract 15', 'Booked 15', 'Deposit 10', 'OnHold 0', 'Total 100']

  btnFiguers.forEach((name, index) => {
      const buttons = document.createElement('button');
      buttons.textContent = name
      buttons.style.backgroundColor = 'gray'
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

 
  const aa = document.getElementById('IDcenterMainDiv')
  aa.after(figuersDiv)

}

rightDiv()