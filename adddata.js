export let newDataDiv = document.createElement('div');
const collectedData = [];
let btncolor = '#52914d'

//////////////////////////////////////////////////////////////////////////

export function adddataButton(){
    const btn = document.createElement('button');
    btn.id = 'idcollectData'
    btn.textContent = 'Add'
    btn.style.height = '30px'
    btn.style.width = '15%'
    btn.style.backgroundColor = 'silver'
    btn.style.margin = 'auto'
    btn.style.borderRadius = '10px'
    btn.style.fontSize = '12px'
    document.getElementById('headDiv').appendChild(btn)

    btn.addEventListener('click', () => {
    let div = document.getElementById('idnewDataDiv');
    let div111 = document.getElementById('newDataDivDown')
    let div222 = document.getElementById('newDataDivUp')

    if (div) {
    div.remove();
    div111.remove();
    div222.remove();
    } else {
        collectData()
    }
    });

}
adddataButton() 

//////////////////////////////////////////////////////////////////////////

export function collectData(){

    console.log('collectData is woring ')
    let bedsss = ['1 bhk', '2 bhk', '3 bhk', '4 bhk', '5 bhk' ]
    
    newDataDiv.id = 'idnewDataDiv'
    newDataDiv.style.display = 'flex'
    newDataDiv.style.flexDirection = 'column'
    newDataDiv.style.alignItems = 'center'
    newDataDiv.style.height = '600px'
    newDataDiv.style.width = '100%'
    newDataDiv.style.outline = '1px gray solid'
    newDataDiv.style.borderRadius = '10px'
    newDataDiv.style.padding = '10px'
    newDataDiv.style.gap = '10px'


    let newDataDiv111 = document.createElement('div');
    let newDataDiv222 = document.createElement('div');

    newDataDiv111.id = 'newDataDivDown'
    newDataDiv222.id = 'newDataDivUp'

    bedsss.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        buttons.className = 'adddatachosebtn'
        buttons.addEventListener('click', () => {
        collectedData.push(name) 
        document.getElementById('idnewDataDiv').innerHTML = ''    
        addArea()
        showBtn()
        })

        newDataDiv111.append(buttons)
    })

    const xx = [newDataDiv222, newDataDiv111]
    for (let i = 0; i < xx.length; i++) {newDataDiv.append(xx[i])}

document.getElementById('idsearchblock').before(newDataDiv)
}

//////////////////////////////////////////////////////////////////////////

export function addArea(){
    console.log('addArea is woring ')

    let newDataDiv111 = document.createElement('div');
    let newDataDiv222 = document.createElement('div');

    newDataDiv111.id = 'newDataDivDown'
    newDataDiv222.id = 'newDataDivUp'

    let newDataDiv = document.getElementById('idnewDataDiv')

    let areass = ['Sadd', 'Lusail', 'Pearl', 'Westbay', 'Waab' ]

    areass.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        buttons.className = 'adddatachosebtn'
        buttons.addEventListener('click', () => {
            collectedData.push(name) 
            document.getElementById('idnewDataDiv').innerHTML = ''      
            addPrices()
            showBtn()
        });
        newDataDiv111.append(buttons)
    })

    const xx = [newDataDiv222, newDataDiv111]

    for (let i = 0; i < xx.length; i++) {newDataDiv.append(xx[i])}
}

//////////////////////////////////////////////////////////////////////////

export function addPrices(){
    console.log('addPrices is woring ')
    let prices = ['5000', '6000', '7000', '8000', '9000 +' ]
    let newDataDiv111 = document.createElement('div');
    let newDataDiv222 = document.createElement('div');

    newDataDiv111.id = 'newDataDivDown'
    newDataDiv222.id = 'newDataDivUp'

    let newDataDiv = document.getElementById('idnewDataDiv')

    prices.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        buttons.className = 'adddatachosebtn'

        buttons.addEventListener('click', () => {
        collectedData.push(name) 
        document.getElementById('idnewDataDiv').innerHTML = ''
        showCollectedData()
        showBtn()
        });
        newDataDiv111.append(buttons)
    })

    const xx = [newDataDiv222, newDataDiv111]
    for (let i = 0; i < xx.length; i++) {newDataDiv.append(xx[i])}
}

//////////////////////////////////////////////////////////////////////////
export function showCollectedData(){
    console.log('showCollectedData is woring ') 

    let newDataDiv111 = document.createElement('div');
    let newDataDiv222 = document.createElement('div');

    newDataDiv111.id = 'newDataDivDown'
    newDataDiv222.id = 'newDataDivUp'

    let newDataDiv = document.getElementById('idnewDataDiv')

    collectedData.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        buttons.className = 'adddatachosebtn'
        newDataDiv222.append(buttons)     
    })

    const button = document.createElement('button');
    button.textContent = 'Send Data'
    button.style.color = 'green'
    button.style.outline = '1px solid green'

    button.className = 'adddatachosebtn'
    newDataDiv111.append(button)

    button.addEventListener('click', () => {
        newDataDiv.innerHTML = `<p id='p'>Data has been sent sucsessfuly</p>`
        newDataDiv.style.justifyContent = 'center'
        document.getElementById('p').style.color = 'green'
        document.getElementById('p').style.fontSize = '20px'

        setTimeout(function() {
            if (newDataDiv) {
                newDataDiv.remove();
                newDataDiv.innerHTML = ``    
            }}, 1000);    
    });

    const xx = [newDataDiv222, newDataDiv111]
    for (let i = 0; i < xx.length; i++) {newDataDiv.append(xx[i])}  

    collectedData.length = 0
}

//////////////////////////////////////////////////////////////////////////
function showBtn(){
    collectedData.forEach((i, index) => {
        const button = document.createElement('button');
        button.textContent = i
        button.className = 'adddatachosebtn'
        // button.style.backgroundColor = btncolor
        // button.style.height = '90%'
        // button.style.width = '20%'
        // button.style.borderRadius = '10px'
        // button.style.fontSize = '13px'
    document.getElementById('newDataDivUp').append(button)})
}

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
  document.getElementById('headDiv').appendChild(btn)



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
const div = document.getElementById('idnewDataDiv');
if (div) {div.remove()} 
})
