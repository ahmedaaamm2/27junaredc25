
const collectedData = [];

export function adddataButton(){
    const btn = document.createElement('button');
    btn.id = 'idcollectData'
    btn.textContent = 'Add'  /////////////////////////////////////////////// (   Add Button  )
    btn.style.height = '30px'
    btn.style.width = '15%'
    btn.style.backgroundColor = 'silver'
    btn.style.margin = 'auto'
    btn.style.borderRadius = '10px'
    btn.style.fontSize = '12px'
    document.getElementById('head2Div').appendChild(btn)

    btn.addEventListener('click', () => {
    let div = document.getElementById('idaddDataContainer');
    if (div) {
        div.remove();
    } else {
        collectDataContainer()
    }
    });
}

adddataButton() 



// export function btnUp(name){
//     const buttons = document.createElement('button');
//     buttons.textContent = name
//     buttons.className = 'adddatachosebtn'

// }



export function collectDataContainer(){

    let addDataContainer = document.createElement('div');
    addDataContainer.id = 'idaddDataContainer'
    document.getElementById('search').after(addDataContainer)


    let newDataDivUp = document.createElement('div');
    newDataDivUp.id = 'idnewDataDivUp'

    let newDataDivDown = document.createElement('div');
    newDataDivDown.id = 'idnewDataDivDown'

    const xx = [newDataDivUp, newDataDivDown]
    for (let i = 0; i < xx.length; i++) {addDataContainer.append(xx[i])}
   
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
        addDataContainer.innerHTML = `<p id='p'>Data has been sent sucsessfuly</p>`
        addDataContainer.justifyContent = 'center'
        addDataContainer.style.height = '300px'
        document.getElementById('p').style.color = 'green'
        document.getElementById('p').style.fontSize = '20px'

        setTimeout(function() {
            if (addDataContainer) {
                addDataContainer.innerHTML = ''   
                addDataContainer.remove();
            }}, 2000);    
    });

    collectedData.length = 0
}



export function dataInDivUp(){
    collectedData.forEach((btnName, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = btnName
        buttons.style.height = '100%';
        buttons.style.width = '15%'
        buttons.style.padding = '10px'
        buttons.style.outline = '1px solid black' 
        buttons.style.borderRadius = '10px'
        document.getElementById('idnewDataDivUp').append(buttons)

    })
    
}


////////////////////////////////////////////////////////////////////////////
//////////////////////////   Property Finder  ///////////////////////////// 
//////////////////////////////////////////////////////////////////////////

export function pfButton(){
  const btn = document.createElement('button');
  btn.id = 'idcollectData'
  btn.textContent = 'My Ads'
  btn.style.height = '30px'
  btn.style.width = '15%'
  btn.style.backgroundColor = 'silver'
  btn.style.margin = 'auto'
  btn.style.borderRadius = '10px'
  btn.style.fontSize = '12px'
  document.getElementById('head2Div').appendChild(btn)



  btn.addEventListener('click', () => {
    let div = document.getElementById('idpfDiv');
    
    if (div) {
        div.remove();
    } else {
        pfDiv()
    }
    });

  return btn;
}
pfButton() 

//////////////////////////////////////////////////////////////////////////

export function pfDiv(){
    let newDataDiv = document.createElement('div');
    newDataDiv.id = 'idpfDiv'
    newDataDiv.style.display = 'flex'
    newDataDiv.style.flexDirection = 'column'
    newDataDiv.style.justifyContent = 'space-evenly'
    newDataDiv.style.alignItems = 'center'
    newDataDiv.style.height = '620px'
    newDataDiv.style.width = '100%'
    newDataDiv.style.outline = '1px gray solid'
    newDataDiv.style.borderRadius = '10px'
    newDataDiv.style.padding = '10px'
    newDataDiv.style.gap = '5px'

    const iframe = document.createElement('iframe')
    iframe.height = '100%';
    iframe.width = '100%';
    iframe.src = 'https://www.propertyfinder.qa/en/agent/ahmed-abdelkader-2805';
    newDataDiv.append(iframe)

    document.getElementById('search').after(newDataDiv)

}


document.getElementById('search').addEventListener('keyup', function() {
const div = document.getElementById('idpfDiv');
if (div) {div.remove()} 
})

document.getElementById('search').addEventListener('keyup', function() {
const div = document.getElementById('idpfDiv');
if (div) {div.remove()} 
})
