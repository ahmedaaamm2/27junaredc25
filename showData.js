import { data } from "./database.js";
import { getDetails } from "./getdetails.js";

const SaleHeaders = ['id', 'Type', 'AdsType', 'SaleOr', 'Area', 'Activites', 'SQM', 'Price', 'Per', 'Name',  'Mobile', 'Status', 'Details'];
// const RentHeaders = ['id', 'Type', 'AdsType',	'SaleOr', 'Area', 'Activites', 'LandSQM', 'Price', 'Per', 'Status', 'Details'];
// const DetailsHeaders = ['id', 'Type', 'AdsType',	'SaleOr', 'Area', 'Activites', 'LandSQM', 'Price', 'Per', 'Status', 'Details'];
// const AgentHeaders = ['id', 'Type', 'AdsType',	'SaleOr', 'Area', 'Activites', 'LandSQM', 'Price', 'Per', 'Status', 'Details'];
// const TopAgentHeaders = ['id', 'Type', 'AdsType',	'SaleOr', 'Area', 'Activites', 'LandSQM', 'Price', 'Per', 'Status', 'Details'];


const fullHeader =  ['Source','Date','Description','Type','AdsType','SaleOr','Area','Activites','SQM','Price','Per','Status','Sub_Type','BHK','Count','SQM','Income','Age','Remarks','View','Mobile','Name','AgentType','Company','commsion','Deal_Rate','Agent']

export function showData(){
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    table.id = 'table'
    headerRow.className = 'throws'
    SaleHeaders
    SaleHeaders.forEach(headerText => {
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
                <td>${data[i].Type}</td>
                <td>${data[i].AdsType}</td>
                <td>${data[i].SaleOr}</td>
                <td>${data[i].Area}</td>
                <td>${data[i].Activites}</td>
                <td>${data[i].SQM}</td>
                <td>${data[i].Price}</td>
                <td>${data[i].Per}</td>
                <td>${data[i].AgentName}</td>
                <td>${data[i].mobile}</td>
                <td>${data[i].Status}</td>
                <td><button onclick="getDetails(${i})" id="idgetDetails">Details</button></td>
            </tr>        
        `

        }
        
    tbody.innerHTML = someColumns;

}






// 'Source','Date','Description','Type','AdsType','SaleOr','Area','Activites','SQM','Price','Per','Status','Sub_Type','BHK','Count','SQM','Income','Age','Remarks','View','Mobile','Name','AgentType','Company','commsion','Deal_Rate','Agent',

