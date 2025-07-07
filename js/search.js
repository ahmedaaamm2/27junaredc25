
import { data } from "/js/database.js";


export function searchDivFnc(){
    const SearchDiv = document.createElement('div')
    SearchDiv.id = 'IDseacrhDiv'
    SearchDiv.className = 'CLASSseacrhDiv'
    SearchDiv.style.height = '40px'
    SearchDiv.style.width = '100%'
    SearchDiv.style.display = 'flex'
    SearchDiv.style.flexDirection = 'column'
    SearchDiv.style.justifyContent = 'center'
    SearchDiv.style.alignItems = 'center '
    document.getElementById('IDcenterMainDiv').append(SearchDiv)

    const SearchInput = document.createElement('input')
    SearchInput.id = 'IDSearchInput'
    SearchInput.style.height = '90%'
    SearchInput.style.width = '95%'

    SearchDiv.append(SearchInput)

    // searchData()

}


window.searchDivFnc = searchDivFnc

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



    document.getElementById('IDSearchInput').addEventListener('keyup', function() {
    const div = document.getElementById('idpfDiv');
    if (div) {div.remove()} 

    })

}



