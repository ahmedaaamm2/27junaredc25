import * as addData from "/js/adddata.js";


export function leftDiv(){
    const leftSideDiv = document.createElement('div');
    leftSideDiv.id = 'idfiguersDiv'
    leftSideDiv.className = 'CLASSfiguersDiv'
    leftSideDiv.style.display = 'flex'
    leftSideDiv.style.flexDirection = 'column'
    leftSideDiv.style.padding = '10px'
    leftSideDiv.style.height = 'fitcontent'
    leftSideDiv.style.width = '15%'
    leftSideDiv.style.border = '1px solid gray'
    leftSideDiv.style.border = 'space-evenly'
    leftSideDiv.style.gap = '4px'
    leftSideDiv.style.outline = '1px solid black'
    leftSideDiv.style.borderRadius = '10px'
    // figuersDiv.style.backgroundColor = '#e8d1d1'

    const leftSideBtnList = ['My Ads PF', 'Add Unit', 'Pray Time', 'Booked 15', 'Deposit 10', 'OnHold 0', 'Total 100']

    leftSideBtnList.forEach((name, index) => {
        const btn = document.createElement('button');
        btn.textContent = name
        btn.style.height = '30px'
        btn.style.borderRadius = '10px'
        btn.style.fontSize = '13px'
        btn.style.marginTop = '5px'
        leftSideDiv.append(btn)

        btn.addEventListener('click', () => {
            const dataDiv = document.getElementById('IDNewDataDiv')
            if (dataDiv) {
                dataDiv.remove();
            } else {
                if(name.includes('My Ads')){
                    addData.pfTrigger()
                }else if(name.includes('Pray')){
                    addData.prayTimeTrigger()
                }else if(name.includes('Add')){
                    addData.collectDataContainer()
                    addData.closeDataDiv()
                }
            }

        });
    })

    const aa = document.getElementById('IDcenterMainDiv')
    aa.before(leftSideDiv)
}

// leftDiv()


//////////////////////////////////////////////////////////////////////////
//////////////////////         Right Div           ///////////////////////            
//////////////////////////////////////////////////////////////////////////

export function rightDiv(){
    const rightDivSide = document.createElement('div');
    rightDivSide.id = 'idfiguersDiv'
    rightDivSide.className = 'CLASSfiguersDiv'
    rightDivSide.style.display = 'flex'
    rightDivSide.style.flexDirection = 'column'
    rightDivSide.style.padding = '10px'
    rightDivSide.style.height = 'fitcontent'
    rightDivSide.style.width = '15%'
    rightDivSide.style.border = 'space-evenly'
    rightDivSide.style.gap = '4px'
    rightDivSide.style.border = '4px'
    rightDivSide.style.outline = '1px solid black'
    rightDivSide.style.borderRadius = '10px'
    // figuersDiv.style.backgroundColor = '#e8d1d1'

    const rightSideBtnList = ['Leased 50', 'Vacant 10', 'Contract 15', 'Booked 15', 'Deposit 10', 'OnHold 0', 'Total 100']

    rightSideBtnList.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        // buttons.style.backgroundColor = 'gray'
        buttons.style.height = '30px'
        buttons.style.borderRadius = '10px'
        buttons.style.fontSize = '13px'
        buttons.style.marginTop = '5px'
        rightDivSide.append(buttons)

        buttons.addEventListener('click', () => {
        console.log(`${name} button was clicked!`);
        alert(`Hello, ${name}!`);
        });
    })


    const aa = document.getElementById('IDcenterMainDiv')
    aa.after(rightDivSide)

}


// sides.leftDiv()
// sides.rightDiv()

