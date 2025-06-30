export function colorizeTable() {
    const table = document.getElementById('tbody'); 
    const rows = table.getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cell = row.cells[8];
        // console.log(row.cells[9])
        const value = cell.textContent.trim();
        // row.style.backgroundColor = '#e7e8e3'
        
    
        if (value === 'Vacant') {
            cell.style.outline = '1px solid green'
            cell.style.borderRadius = '15px'
            cell.style.width = '90px'
            cell.style.paddingRight = '10px'
        }else if(value === 'Booked') {
            cell.style.outline = '2px solid yellow'
            cell.style.borderRadius = '15px'
            cell.style.width = '90px'
            cell.style.paddingRight = '10px'
        }else if(value === 'Contract') {
            cell.style.outline = '2px solid Orange'
            cell.style.borderRadius = '15px'
            cell.style.width = '90px'
            cell.style.paddingRight = '10px'
        }else if(value === 'Deposit') {
            cell.style.outline = '2px solid brown'
            cell.style.borderRadius = '15px'
            cell.style.width = '90px'
            cell.style.paddingRight = '10px'
        }else if(value === 'OnHold') {
            cell.style.outline = '2px solid Blue'
            cell.style.borderRadius = '15px'
            cell.style.width = '90px'
            cell.style.paddingRight = '10px'
        }else if(value === 'Leased') {
            cell.style.outline = '2px solid red'
            cell.style.borderRadius = '15px'
            cell.style.width = '90px'
            cell.style.paddingRight = '10px'
        }
    
    }
        
}
    

