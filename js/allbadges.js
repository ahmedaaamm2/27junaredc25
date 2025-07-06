import { showData } from "/js/showData.js"
import {colorizeTable} from "/js/coloring.js"

export function allBadgesFnc(){
    const centerMainDiv = document.createElement('div')
    centerMainDiv.id = 'IDcenterMainDiv'
    centerMainDiv.className = 'CLASScenterMainDiv'
    centerMainDiv.style.height = 'fitcontent'
    centerMainDiv.style.width = '70%'
    centerMainDiv.style.padding = '5px'
    centerMainDiv.style.backgroundColor = 'gray'

    centerMainDiv.style.display = 'flex'
    centerMainDiv.style.flexDirection = 'column'
    // centerMainDiv.style.justifyContent = 'center'
    centerMainDiv.style.alignItems = 'center '

    document.body.append(centerMainDiv)

    headDivFnc()
    searchDivFnc()
    tableDivFnc()

}


export function headDivFnc(){
    const headDiv = document.createElement('div')
    headDiv.id = 'IDheadDiv'
    headDiv.className = 'CLASSheadDiv'
    headDiv.style.height = '80px'
    headDiv.style.width = '100%'
    // headDiv.style.backgroundColor = 'green'

    headDiv.style.display = 'flex'
    headDiv.style.flexDirection = 'column'
    headDiv.style.justifyContent = 'center'
    headDiv.style.alignItems = 'center '
    document.getElementById('IDcenterMainDiv').append(headDiv)

    const head1Div = document.createElement('div')
    head1Div.id = 'head1Div'
    head1Div.className = 'head'
    head1Div.style.height = '40px'
    head1Div.style.width = '100%'
    // head1Div.style.backgroundColor = 'brown'

    head1Div.style.display = 'flex'
    document.getElementById('IDheadDiv').append(head1Div)

    const head2Div = document.createElement('div')
    head2Div.id = 'head2Div'
    head2Div.className = 'head'
    head2Div.style.height = '40px'
    head2Div.style.width = '100%'
    // head2Div.style.backgroundColor = 'red'

    head2Div.style.display = 'flex'
    document.getElementById('IDheadDiv').append(head2Div)

}

export function searchDivFnc(){
    const SearchDiv = document.createElement('div')
    SearchDiv.id = 'IDseacrhDiv'
    SearchDiv.className = 'CLASSseacrhDiv'
    SearchDiv.style.height = '40px'
    SearchDiv.style.width = '100%'
    // SearchDiv.style.backgroundColor = 'yellow'

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

}





export function tableDivFnc(){
    const tableDiv = document.createElement('div')
    tableDiv.id = 'tableDiv'
    tableDiv.className = 'CLASStableDiv'
    tableDiv.style.height = 'fitcontent'
    tableDiv.style.width = '100%'
    tableDiv.style.backgroundColor = 'white'
    document.getElementById('IDcenterMainDiv').append(tableDiv)

    showData()
    colorizeTable()
}


export function NewDataDivFnc(){
    const NewDataDiv = document.createElement('div')
    NewDataDiv.id = 'IDNewDataDiv'
    NewDataDiv.className = 'CLASSseacrhDiv'
    NewDataDiv.style.height = '40px'
    NewDataDiv.style.width = '100%'
    // SearchDiv.style.backgroundColor = 'yellow'

    NewDataDiv.style.display = 'flex'
    NewDataDiv.style.flexDirection = 'column'
    NewDataDiv.style.justifyContent = 'center'
    NewDataDiv.style.alignItems = 'center '
    document.getElementById('IDseacrhDiv').after(NewDataDiv)

    const SearchInput = document.createElement('input')
    SearchInput.id = 'IDSearchInput'
    SearchInput.style.height = '90%'
    SearchInput.style.width = '95%'

    NewDataDiv.append(SearchInput)

}
