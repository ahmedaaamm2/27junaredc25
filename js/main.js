
import * as FncPages from "/js/allBadges.js";
// import * as AddData from "/js/adddata.js";
import { colorizeTable } from "/js/coloring.js";
import { data } from "/js/database.js";
import { getDetails } from "/js/getdetails.js";

window.onload = FncPages.allBadgesFnc()
// getDetails


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

