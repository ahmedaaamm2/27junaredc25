import { NewDataDivFnc } from '/js/adddata.js';
import { data } from './database.js';

// const dataDiv = document.getElementById('IDNewDataDiv')
const detailsList = ['Booking Status','Agent','Booking Start','Booking End','Offer Price','View','Balcony', 'Pool', 'Gym', 'sauna', 'KidsArea', 'CheckOut Date','Maintainance Status','RFO Date','Remarks']

export function getDetails(i){     
  if(document.contains(document.getElementById('IDNewDataDiv'))){   ///// prevent doublicate when details button is clicked
    document.getElementById('IDNewDataDiv').remove()}
    

  let table = '';

  table = `
    <button id="idClose" > Close </button>
    <button class='detailsButton'> <span style="color: black;"> Status : </span> ${data[i].BookingStatus}</button>
    <button class='detailsButton'><span style="color: black;"> Agent Name : </span> ${data[i].Agent}</button>
    <button class='detailsButton'><span style="color: black;"> Booking Start : </span> ${data[i].BookingStart}</button>
    <button class='detailsButton'><span style="color: black;"> Booking End </span> :${data[i].BookingEnd}</button>
    <button class='detailsButton'><span style="color: black;"> Offer : </span> ${data[i].OfferPrice}</button>
    <button class='detailsButton'><span style="color: black;"> View : </span> ${data[i].View}</button>
    <button class='detailsButton'><span style="color: black;"> Balcony : </span> ${data[i].Balcony}</button>
    <button class='detailsButton'><span style="color: black;"> Pool : </span> ${data[i].Pool}</button>
    <button class='detailsButton'><span style="color: black;"> GYM : </span> ${data[i].Gym}</button> 
    <button class='detailsButton'><span style="color: black;"> Suna : </span> ${data[i].Sauna}</button>
    <button class='detailsButton'><span style="color: black;"> Kids Area : </span> ${data[i].kidsArea}</button>
    <button class='detailsButton'><span style="color: black;"> CheckOut Date : </span> ${data[i].CheckOutDate}</button>
    <button class='detailsButton'><span style="color: black;"> Maintainance : </span> ${data[i].MaintainanceStatus}</button>
    <button class='detailsButton'><span style="color: black;"> Unit Ready By : </span> ${data[i].RFODate}</button>
    <button class='detailsButton'><span style="color: black;"> Remarks : </span> ${data[i].Remarks}</button>
  `

      
  NewDataDivFnc()    
  const dataDiv = document.getElementById('IDNewDataDiv')
  dataDiv.style.flexDirection = 'row'
  const divInOne = document.createElement('div');
  const divInTwo = document.createElement('div');
  const divInThree = document.createElement('div');

  divInOne.className = 'detailsDivs'
  divInTwo.className = 'detailsDivs'
  divInThree.className = 'detailsDivs'

  divInOne.id = 'iddivInOne'
  divInThree.id = 'iddivInThree'
  const xx = [divInOne, divInTwo, divInThree]
  for (let i = 0; i < xx.length; i++) {dataDiv.append(xx[i])}


  divInTwo.innerHTML = table;
  getVedio(i)
  getLocation(i)    
  document.getElementById('idClose').addEventListener('click', function() {dataDiv.remove()});


  /////////////////////////////////////////////////////////////////////////////////////////////////////
  // adding vedio and location and disable clicking    
  /////////////////////////////////////////////////////////////////////////////////////////////////////


  document.getElementById('IDSearchInput').focus();


}


window.getDetails = getDetails 




export function getVedio(i){
  console.log(i)
  const divInOne =  document.getElementById('iddivInOne')

  const iframe = document.createElement('iframe')
  iframe.height = '450px';

  iframe.src = data[i].vedio;
  divInOne.append(iframe)

}
window.getVedio = getVedio

//////////////////////////////////////////////////////////////////////////

export function getLocation(i){
  const divInThre =  document.getElementById('iddivInThree')

  const iframe = document.createElement('iframe')
  iframe.height = '450px';

  iframe.src = data[i].location;
  divInThre.append(iframe)
 
}
window.getLocation = getLocation
//////////////////////////////////////////////////////////////////////////


