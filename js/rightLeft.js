

export function leftDiv(){
    const  figuersDiv = document.createElement('div');
    figuersDiv.id = 'idfiguersDiv'
    figuersDiv.className = 'CLASSfiguersDiv'
    figuersDiv.style.display = 'flex'
    figuersDiv.style.flexDirection = 'column'
    figuersDiv.style.padding = '10px'
    figuersDiv.style.height = 'fitcontent'
    figuersDiv.style.width = '15%'
    figuersDiv.style.border = '1px solid gray'
    figuersDiv.style.border = 'space-evenly'
    figuersDiv.style.gap = '4px'
    figuersDiv.style.outline = '1px solid black'
    figuersDiv.style.borderRadius = '10px'
    // figuersDiv.style.backgroundColor = '#e8d1d1'

    const btnFiguers = ['Leased 50', 'Vacant 10', 'Contract 15', 'Booked 15', 'Deposit 10', 'OnHold 0', 'Total 100']

    btnFiguers.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        buttons.style.height = '30px'
        buttons.style.borderRadius = '10px'
        buttons.style.fontSize = '13px'
        buttons.style.marginTop = '5px'
        figuersDiv.append(buttons)

        buttons.addEventListener('click', () => {
        console.log(`${name} button was clicked!`);
        alert(`Hello, ${name}!`);
        });
    })

    const aa = document.getElementById('IDcenterMainDiv')
    aa.before(figuersDiv)
}

// leftDiv()


//////////////////////////////////////////////////////////////////////////
//////////////////////         Right Div           ///////////////////////            
//////////////////////////////////////////////////////////////////////////

export function rightDiv(){
    const  figuersDiv = document.createElement('div');
    figuersDiv.id = 'idfiguersDiv'
    figuersDiv.className = 'CLASSfiguersDiv'
    figuersDiv.style.display = 'flex'
    figuersDiv.style.flexDirection = 'column'
    figuersDiv.style.padding = '10px'
    figuersDiv.style.height = 'fitcontent'
    figuersDiv.style.width = '15%'
    figuersDiv.style.border = 'space-evenly'
    figuersDiv.style.gap = '4px'
    figuersDiv.style.border = '4px'
    figuersDiv.style.outline = '1px solid black'
    figuersDiv.style.borderRadius = '10px'
    // figuersDiv.style.backgroundColor = '#e8d1d1'

    const btnFiguers = ['Leased 50', 'Vacant 10', 'Contract 15', 'Booked 15', 'Deposit 10', 'OnHold 0', 'Total 100']

    btnFiguers.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        // buttons.style.backgroundColor = 'gray'
        buttons.style.height = '30px'
        buttons.style.borderRadius = '10px'
        buttons.style.fontSize = '13px'
        buttons.style.marginTop = '5px'
        figuersDiv.append(buttons)

        buttons.addEventListener('click', () => {
        console.log(`${name} button was clicked!`);
        alert(`Hello, ${name}!`);
        });
    })


    const aa = document.getElementById('IDcenterMainDiv')
    aa.after(figuersDiv)

}

// rightDiv()


// window.leftDiv = leftDiv
// window.rightDiv = rightDiv