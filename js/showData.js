import { data } from "./database.js";


const aredcBookingShort = ['Num', 'Area', 'Propert yName','Property Type','Bedrooms','Furniture','Price','Unit Number','Status','Details',]


export function showData(){
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    table.id = 'table'
    headerRow.className = 'throws'
    aredcBookingShort
    aredcBookingShort.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    window.tbody = tbody
    tbody.id = 'tbody'
    showSpesific()
    table.appendChild(tbody);
    document.getElementById("tableDiv").append(table)
}

export function showSpesific(){
    let someColumns = '';
    for(let i = 0; i < data.length; i++){ 
        console.log(data[i])
        someColumns += `
        <tr class='tdrows'>
            <td>${i}</td>
            <td>${data[i].Area}</td>
            <td><button onclick="rr()" class='qqq' >${data[i].PropertyName}</button></td>
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
        
    tbody.innerHTML = someColumns;

}



// 'Source','Date','Description','Type','AdsType','SaleOr','Area','Activites','SQM','Price','Per','Status','Sub_Type','BHK','Count','SQM','Income','Age','Remarks','View','Mobile','Name','AgentType','Company','commsion','Deal_Rate','Agent',

