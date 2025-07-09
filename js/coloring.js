export function colorizeTable() {
    const table = document.getElementById('tbody'); 
    const rows = table.getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const btn = document.getElementById('idgetDetails')
        const row = rows[i];
        const cell = row.cells[8];
        const value = cell.textContent.trim();
        
        cell.style.padding = '0 20px'

        if (value === 'Vacant') {
            cell.style.outline = '3px outset green'
            cell.style.borderRadius = '10px'
            row.style.backgroundColor = '#e7e8e3'
        }else if(value === 'Booked') {
            cell.style.outline = '3px outset yellow'
            cell.style.borderRadius = '10px'
        }else if(value === 'Contract') {
            cell.style.outline = '3px outset Orange'
            cell.style.borderRadius = '10px'
        }else if(value === 'Deposit') {
            cell.style.outline = '2px outset brown'
            cell.style.borderRadius = '10px'
        }else if(value === 'OnHold') {
            cell.style.outline = '2px outset Blue'
            cell.style.borderRadius = '10px'
        }else if(value === 'Leased') {
            cell.style.outline = '2px outset red'
            cell.style.borderRadius = '10px'
        }
    
    }
        
}

// colorizeTable()

