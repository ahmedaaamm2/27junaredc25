
import { data } from "/js/database.js";
import {colorizeTable} from "/js/coloring.js"

export function figuers(){
    const  figuersDiv = document.createElement('div');
    figuersDiv.id = 'idfiguersDiv'
    figuersDiv.style.height = '40px'
    figuersDiv.style.width = '100%'
    figuersDiv.style.border = '1px solid gray'
    figuersDiv.style.display = 'flex'
    figuersDiv.style.justifyContent = 'center'
    figuersDiv.style.alignItems = 'center'
    figuersDiv.style.border = 'space-evenly'
    figuersDiv.style.gap = '4px'
    figuersDiv.style.padding = '0px 15px';
    document.getElementById('IDseacrhDiv').after(figuersDiv)


    const btnFiguers = ['Leased 50', 'Vacant 10', 'Contract 15', 'Booked 15', 'Deposit 10', 'OnHold 0', 'All 100']

    btnFiguers.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        buttons.style.backgroundColor = 'graay'
        buttons.style.height = '90%'
        buttons.style.borderRadius = '10px'
        buttons.style.fontSize = '13px'
        figuersDiv.append(buttons)

        buttons.addEventListener('click', () => {
            onFiguresClick(name)
        })





    })




}      

// figuers()


export function onFiguresClick(name){

  let someColumns = '';
  for(let i = 0; i < data.length; i++){       
    if(data[i].Status.includes(name[0]+name[1]+name[2])) {
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
      }
    }

    if(name.includes('All')) {
      console.log('includ All')
      for(let i = 0; i < data.length; i++){     
      
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
      }
    }
    document.getElementById('tbody').innerHTML = someColumns;

  colorizeTable()      

  }