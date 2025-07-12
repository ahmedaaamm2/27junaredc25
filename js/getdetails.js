import { NewDataDivFnc } from '/js/adddata.js';
import { data } from './database.js';

// const dataDiv = document.getElementById('IDNewDataDiv')
// const detailsList = ['Booking Status','Agent','Booking Start','Booking End','Offer Price','View','Balcony', 'Pool', 'Gym', 'sauna', 'KidsArea', 'CheckOut Date','Maintainance Status','RFO Date','Remarks']
// const statusList = ['Booked',]

const user = 'Ahmed'

window.user = user

function bookBtnFnc(){
  const dataDiv = document.getElementById('IDNewDataDiv')
  // dataDiv.style.padding = '5px'
  const divCloseBook = document.createElement('div');
  divCloseBook.id = 'divCloseBook'
  divCloseBook.style.display = 'flex'
  divCloseBook.style.padding = '10px'
  divCloseBook.style.width = '100%'
  divCloseBook.style.height  = '50px'
  divCloseBook.style.backgroundColor  = 'white  '
  divCloseBook.style.justifyContent = 'space-evenly'
  divCloseBook.style.alignItems = 'center'

  const bookBtn = document.createElement('button');
  bookBtn.id = 'bookBtn'
  bookBtn.textContent = 'Book'
  bookBtn.style.height = '40px'
  bookBtn.style.width = '25%'
  bookBtn.style.backgroundColor = 'white'
  bookBtn.style.color = 'green'
  bookBtn.style.outline = '3px solid green'
  bookBtn.style.borderRadius = '10px'
  bookBtn.style.fontSize = '12px'
  // bookBtn.style.marginRight = '150px'

  const makeOffer = document.createElement('button');
  makeOffer.id = 'makeOffer'
  makeOffer.textContent = 'Make an Offfer'
  makeOffer.style.height = '40px'
  makeOffer.style.width = '25%' 
  makeOffer.style.backgroundColor = 'white'
  makeOffer.style.color = 'green'
  makeOffer.style.outline = '3px solid yellow'
  makeOffer.style.borderRadius = '10px'
  makeOffer.style.fontSize = '12px'
  
  const reportBtn = document.createElement('button');
  reportBtn.id = 'reportBtn'
  reportBtn.textContent = 'Report'
  reportBtn.style.height = '40px'
  reportBtn.style.width = '20%'
  reportBtn.style.backgroundColor = 'white'
  reportBtn.style.color = 'green'
  reportBtn.style.outline = '1px solid green'
  reportBtn.style.borderRadius = '10px'
  reportBtn.style.fontSize = '12px'

  const spareBtn = document.createElement('button');
  spareBtn.id = 'reportBtn'
  spareBtn.textContent = 'Report'
  spareBtn.style.height = '40px'
  spareBtn.style.width = '20%'
  spareBtn.style.backgroundColor = 'white'
  spareBtn.style.color = 'green'
  spareBtn.style.outline = '1px solid green'
  spareBtn.style.borderRadius = '10px'
  spareBtn.style.fontSize = '12px'
  
  const closeBtn = document.createElement('button');
  closeBtn.id = 'CloseBtn'
  closeBtn.textContent = 'Close'
  closeBtn.style.height = '40px'
  closeBtn.style.width = '25%'
  closeBtn.style.backgroundColor = 'white'
  closeBtn.style.color = 'red'
  closeBtn.style.outline = '3px solid red'
  closeBtn.style.marginRight = '30px'
  closeBtn.style.borderRadius = '10px'
  closeBtn.style.fontSize = '12px'
  // closeBtn.style.marginLeft = '150px'



  
  // divCloseBook.append(reportBtn)
  
  // divCloseBook.append(spareBtn)
  divCloseBook.append(closeBtn)
  divCloseBook.append(makeOffer)
  divCloseBook.append(bookBtn)
  dataDiv.before(divCloseBook)
  // dataDiv.after(closeBtn)

  
  bookBtn.addEventListener('click', function(){
  // const dataDiv = document.getElementById('IDNewDataDiv')
 
    // var d = new Date();

    // var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
    // d.getHours() + ":" + d.getMinutes();
    


    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    console.log('booked by Mr.' + ' '  +  user + ' ' + 'at ' + ' ' + today.toDateString())
    console.log("Tomorrow:", tomorrow.toDateString());

  })

  
  closeBtn.addEventListener('click', function(){
  const dataDiv = document.getElementById('IDNewDataDiv')
  dataDiv.remove()
  document.getElementById('divCloseBook').remove()  
  })

}




export function getDetails(i){     
  if(document.contains(document.getElementById('IDNewDataDiv'))){   ///// prevent doublicate when details button is clicked
    document.getElementById('IDNewDataDiv').remove()}
    

  let table = '';

  table = `
    
    <p class='detailsP' > <span style="color: green"> ${data[i].BookingStatus}       </span> </p> 
    <p class='detailsP' > <span style="color: green"> ${data[i].Agent}               </span> </p>
    <p class='detailsP' > <span style="color: green"> ${data[i].BookingStart}        </span> </p>
    <p class='detailsP' > <span style="color: green"> ${data[i].BookingEnd}          </span> </p>
    <p class='detailsP' > <span style="color: green"> ${data[i].OfferPrice}          </span> </p>
    <p class='detailsP' > <span style="color: green"> ${data[i].View}                </span> </p>
    <p class='detailsP' > <span style="color: green"> ${data[i].Balcony}             </span> </p>
    <p class='detailsP' > <span style="color: green"> ${data[i].Pool}                </span> </p>
    <p class='detailsP' > <span style="color: green"> ${data[i].Gym}                 </span> </p>
    <p class='detailsP' > <span style="color: green"> ${data[i].Sauna}               </span> </p>
    <p class='detailsP' > <span style="color: green"> ${data[i].kidsArea}            </span> </p>
    <p class='detailsP' > <span style="color: green"> ${data[i].CheckOutDate}        </span> </p>
    <p class='detailsP' > <span style="color: green"> ${data[i].MaintainanceStatus}  </span> </p>
    <p class='detailsP' > <span style="color: green"> ${data[i].RFODate}             </span> </p>
    <p class='detailsP' > <span style="color: green"> ${data[i].Remarks}             </span> </p>
    
  `

  // <button id="idClose" > Close </button >  
  // <button class='detailsButton' id='IDBook' style="color: green; height: 40px"; >   Book</button>  
    
  let detailsDescription = '';

  detailsDescription = `
    <p class='detailsDescription' >  Status           </p> 
    <p class='detailsDescription' >  Agent Name       </p>
    <p class='detailsDescription' >  Booking Start    </p>
    <p class='detailsDescription' >  Booking End      </p>
    <p class='detailsDescription' >  Offer            </p>
    <p class='detailsDescription' >  View             </p>
    <p class='detailsDescription' >  Balcony          </p>
    <p class='detailsDescription' >  Pool             </p>
    <p class='detailsDescription' >  GYM              </p>
    <p class='detailsDescription' >  Suna             </p>
    <p class='detailsDescription' >  Kids Area        </p>
    <p class='detailsDescription' >  CheckOut Date    </p>
    <p class='detailsDescription' >  Maintainance     </p>
    <p class='detailsDescription' >  Unit Ready By    </p>
    <p class='detailsDescription' >  Remarks          </p>
  `
    

      
  NewDataDivFnc()    
  const dataDiv = document.getElementById('IDNewDataDiv')
  dataDiv.style.flexDirection = 'row'
  // dataDiv.style.backgroundColor = 'green'
  const divInOne = document.createElement('div');
  const divInTwo = document.createElement('div');
  const divInThree = document.createElement('div');
  const oneDivInTwo = document.createElement('div');
  const twoDivInTwo = document.createElement('div'); 

  oneDivInTwo.id = 'oneDivInTwo'
  twoDivInTwo.id = 'twoDivInTwo'

  oneDivInTwo.className = 'divsInDivTwo'
  twoDivInTwo.className = 'divsInDivTwo'  

  divInOne.className = 'detailsDivs'
  // divInTwo.className = 'detailsDivs'
  divInThree.className = 'detailsDivs'
  
  divInTwo.style.width = '32%'

  divInOne.id = 'iddivInOne'
  divInThree.id = 'iddivInThree'
  const xx = [divInOne, divInTwo, divInThree]
  for (let i = 0; i < xx.length; i++) {dataDiv.append(xx[i])}


  divInTwo.append(oneDivInTwo)
  divInTwo.append(twoDivInTwo)
  divInTwo.style.display = 'flex'


  oneDivInTwo.innerHTML = detailsDescription;  
  twoDivInTwo.innerHTML = table;
    
  getVedio(i)
  getLocation(i)    
  bookBtnFnc()
  // document.getElementById('idClose').addEventListener('click', function() {dataDiv.remove()});






  /////////////////////////////////////////////////////////////////////////////////////////////////////
  // adding vedio and location and disable clicking    
  /////////////////////////////////////////////////////////////////////////////////////////////////////

    // const dataDiv = document.getElementById('IDNewDataDiv')



  // document.getElementById('bookBtn').select();


}


window.getDetails = getDetails 




export function getVedio(i){
  console.log(i)
  const divInOne =  document.getElementById('iddivInOne')

  const iframe = document.createElement('iframe')
  iframe.height = '550px';

  iframe.src = data[i].vedio;
  divInOne.append(iframe)

}
window.getVedio = getVedio

//////////////////////////////////////////////////////////////////////////

export function getLocation(i){
  const divInThre =  document.getElementById('iddivInThree')

  const iframe = document.createElement('iframe')
  iframe.height = '550px';

  iframe.src = data[i].location;
  divInThre.append(iframe)
 
}
window.getLocation = getLocation

