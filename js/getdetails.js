import { allBadgesFnc } from './allBadges.js';
import { data } from './database.js';

export function getDetails(i){     
  if(document.contains(document.getElementById('idnewDiv'))){   ///// prevent doublicate when details button is clicked
    document.getElementById('idnewDiv').remove()}

  let table = '';

  table = `
    <button id="idClose" > Close </button>
    <button class='detailsButton'>${i}</button>
    <button class='detailsButton'>${data[i].area}</button>
    <button class='detailsButton'>${data[i].property}</button>
    <button class='detailsButton'>${data[i].type}</button>
    <button class='detailsButton'>${data[i].unit}</button>
    <button class='detailsButton'>${data[i].beds}</button>
    <button class='detailsButton'>${data[i].furniture}</button>
    <button class='detailsButton'>${data[i].utilities}</button>
    <button class='detailsButton'>${data[i].price}</button>
    <button class='detailsButton'>${data[i].Status}</button>
    <button class='detailsButton'>${data[i].Agent}</button>
    <button class='detailsButton'>${data[i].Start}</button>
    <button id='vedioButton' onclick='getVedio()' name='${data[i].vedio}' class='detailsButton'>${data[i].end}</button>
    <button id='locationButton' onclick=getLocation()  name='${data[i].location}' class='detailsButton'>${data[i].time}</button>

  `

  const newDiv = document.createElement('div');
  newDiv.id = 'idnewDiv';  
  newDiv.style.display = 'flex';
  newDiv.style.justifyContent = 'space-evenly';
  newDiv.style.padding = '10px';
  newDiv.style.gap = '10px';
  newDiv.style.height = 'fitcontent';
  newDiv.style.backgroundColor = '#000000';
  newDiv.style.borderRadius = '10px';
  newDiv.style.margin = '2px';
  newDiv.style.marginTop = '15px';


  const divInOne = document.createElement('div');
  const divInTwo = document.createElement('div');
  const divInThree = document.createElement('div');

  divInOne.className = 'detailsDivs'
  divInTwo.className = 'detailsDivs'
  divInThree.className = 'detailsDivs'

  divInOne.id = 'iddivInOne'
  divInThree.id = 'iddivInThree'
  const xx = [divInOne, divInTwo, divInThree]

  for (let i = 0; i < xx.length; i++) {newDiv.append(xx[i])}


  divInTwo.innerHTML = table;
  
  document.getElementById('IDseacrhDiv').after(newDiv) /// ading the created div after search bar
  

  // document.getElementById('idClose').addEventListener('click', function() {newDiv.remove()});

    // document.getElementById('idClose').addEventListener('click', function() {
    //   allBadgesFnc.disabled()});
  

  document.getElementById('idClose').onclick = function() {

    allBadgesFnc.preventDefault()
};  





/////////////////////////////////////////////////////////////////////////////////////////////////////
// close details and vedio and location container
/////////////////////////////////////////////////////////////////////////////////////////////////////
  document.getElementById('IDSearchInput').addEventListener('keyup', function() {
  const div = document.getElementById('idnewDiv');
    if (div) {div.remove()} 
  })
/////////////////////////////////////////////////////////////////////////////////////////////////////
// adding vedio and location and disable clicking    
/////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('vedioButton').click()
document.getElementById('vedioButton').click()
document.getElementById('locationButton').click()
document.getElementById('locationButton').click()

function handleClick() {
  document.getElementById('vedioButton').disabled = true;
  document.getElementById('vedioButton').removeEventListener('click', getVedio());
  document.getElementById('locationButton').disabled = true;
  document.getElementById('locationButton').removeEventListener('click', getVedio());
}
handleClick()
/////////////////////////////////////////////////////////////////////////////////////////////////////

}


window.getDetails = getDetails




export function getVedio(){
  const divInOne =  document.getElementById('iddivInOne')

  const iframe = document.createElement('iframe')
  iframe.height = '430px';

  document.getElementById('vedioButton').addEventListener('click', function() {
    iframe.src = this.name;
    divInOne.append(iframe)
  });
}
window.getVedio = getVedio

//////////////////////////////////////////////////////////////////////////

export function getLocation(){
  const divInThre =  document.getElementById('iddivInThree')

  const iframe = document.createElement('iframe')
  iframe.height = '430px';

  document.getElementById('locationButton').addEventListener('click', function() {
    iframe.src = this.name;
    divInThre.append(iframe)
  });
}
window.getLocation = getLocation
//////////////////////////////////////////////////////////////////////////


