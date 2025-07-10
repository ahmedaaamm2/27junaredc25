import * as FncPages from "/js/allBadges.js";

const collectedData = [];



export function NewDataDivFnc(){

    const NewDataDiv = document.createElement('div')
    NewDataDiv.id = 'IDNewDataDiv'
    NewDataDiv.className = 'CLASSseacrhDiv'
    NewDataDiv.style.height = '600px'
    NewDataDiv.style.width = '100%'
    NewDataDiv.style.display = 'flex'
    NewDataDiv.style.flexDirection = 'column'
    NewDataDiv.style.justifyContent = 'center'
    NewDataDiv.style.alignItems = 'center '
    NewDataDiv.style.gap = '10px'
    document.getElementById('IDseacrhDiv').after(NewDataDiv)

}


export function closeDataDiv(){
    const dataDiv = document.getElementById('IDNewDataDiv')
    const btn = document.createElement('button');
    btn.id = 'idcoloseDataDiv'
    btn.textContent = 'close'
    btn.style.height = '50px'
    btn.style.width = '50%'
    btn.style.backgroundColor = 'red'
    // btn.style.marginTop = '0'
    // btn.style.position = 'absolute'
    btn.style.borderRadius = '10px'
    btn.style.fontSize = '12px'
    document.getElementById('IDNewDataDiv').append(btn)

    btn.addEventListener('click', () => {
        dataDiv.remove()
    })

}



export function collectDataContainer(){
    NewDataDivFnc()

    const dataDiv = document.getElementById('IDNewDataDiv')
    let newDataDivUp = document.createElement('div');
    newDataDivUp.id = 'idnewDataDivUp'

    let newDataDivDown = document.createElement('div');
    newDataDivDown.id = 'idnewDataDivDown'

    const xx = [newDataDivUp, newDataDivDown]
    for (let i = 0; i < xx.length; i++) {dataDiv.append(xx[i])}
   
    collectData()
}

//////////////////////////////////////////////////////////////////////////

export function collectData(){

    console.log('collectData is woring ')
    let bedsss = ['1 bhk', '2 bhk', '3 bhk', '4 bhk', '5 bhk' ]
    
    bedsss.forEach((name, index) => {
        console.log('forEach is woring ')
        const buttons = document.createElement('button');
        buttons.textContent = name
        buttons.className = 'adddatachosebtn'

        buttons.addEventListener('click', () => {
            collectedData.push(name) 
            document.getElementById('idnewDataDivUp').innerHTML = ''
            dataInDivUp()
            document.getElementById('idnewDataDivDown').innerHTML = ''       
            addArea()
        })
        document.getElementById('idnewDataDivDown').append(buttons)

    })
}

//////////////////////////////////////////////////////////////////////////

export function addArea(){
    console.log('addArea is woring ')

    let areass = ['Sadd', 'Lusail', 'Pearl', 'Westbay', 'Waab' ]

    areass.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        buttons.className = 'adddatachosebtn'
        document.getElementById('idnewDataDivDown').append(buttons)

        buttons.addEventListener('click', () => {
            collectedData.push(name) 
            document.getElementById('idnewDataDivUp').innerHTML = ''
            dataInDivUp()
            document.getElementById('idnewDataDivDown').innerHTML = ''       
            addPrices()
        })
        document.getElementById('idnewDataDivDown').append(buttons)
    })
}

//////////////////////////////////////////////////////////////////////////

export function addPrices(){
    console.log('addPrices is woring ')
    let prices = ['5000', '6000', '7000', '8000', '9000 +' ]

    prices.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        buttons.className = 'adddatachosebtn'

        buttons.addEventListener('click', () => {
            collectedData.push(name) 
            document.getElementById('idnewDataDivUp').innerHTML = ''
            dataInDivUp()
            document.getElementById('idnewDataDivDown').innerHTML = ''       
            showCollectedData()
        });
        document.getElementById('idnewDataDivDown').append(buttons)
    })
}


//////////////////////////////////////////////////////////////////////////
export function showCollectedData(){

    console.log('showCollectedData is woring ') 
    let addDataContainer = document.getElementById('idaddDataContainer')

    const button = document.createElement('button');
    button.textContent = 'Send Data'
    button.className = 'adddatachosebtn'
    document.getElementById('idnewDataDivDown').append(button)


    button.addEventListener('click', () => {
        const dataDiv = document.getElementById('IDNewDataDiv')
        dataDiv.innerHTML = `<p id='p'>Data has been sent sucsessfuly</p>`
        dataDiv.justifyContent = 'center'
        dataDiv.style.height = '300px'
        document.getElementById('p').style.color = 'green'
        document.getElementById('p').style.fontSize = '20px'

        setTimeout(function() {
            if (dataDiv) {
                dataDiv.innerHTML = ''   
                dataDiv.remove();
            }}, 2000);    
    });

    collectedData.length = 0
}



export function dataInDivUp(){
    collectedData.forEach((btnName, index) => {
        const btn = document.createElement('button');
        btn.textContent = btnName
        btn.style.height = '100%';
        btn.style.width = '20%'
        btn.style.padding = '10px'
        btn.style.outline = '1px solid black' 
        btn.style.borderRadius = '10px'
        document.getElementById('idnewDataDivUp').append(btn)

    })
    
}


////////////////////////////////////////////////////////////////////////////
//////////////////////////  Prope rty Finder  ///////////////////////////// 
//////////////////////////////////////////////////////////////////////////

export function pfTrigger(){
    NewDataDivFnc()
    const dataDiv = document.getElementById('IDNewDataDiv')
    const iframe = document.createElement('iframe')
    iframe.height = '100%';
    iframe.width = '100%';
    // iframe.target="_blank"
    // iframe.frameborder="0"
    iframe.src = 'https://www.propertyfinder.qa/en/agent/ahmed-abdelkader-2805';
    dataDiv.append(iframe)

}


////////////////////////////////////////////////////////////////////////////
//////////////////////////  Pray Time  ///////////////////////////// 
//////////////////////////////////////////////////////////////////////////


export function prayTimeTrigger(){
    NewDataDivFnc()
    const dataDiv = document.getElementById('IDNewDataDiv')
    const iframe = document.createElement('iframe')
    iframe.height = '100%';
    iframe.width = '100%';
    iframe.src = 'https://prayers.qa/';
    // document.getElementById('IDNewDataDiv')
    dataDiv.append(iframe)

}
