let button = document.getElementById('btn')
// let divv = document.getElementById('add')

function refresh(){
    const ul = document.querySelector('#add')
    const newListItem = document.createElement('li')
    newListItem.textContent = 'Green Bazaar'
    newListItem.classList.add('list-group-item')
    ul.appendChild(newListItem)
    const newListItem2 = document.createElement('li')
    newListItem2.textContent = '\u20B9 3399'
    newListItem2.classList.add('list-group-item')
    ul.appendChild(newListItem2)
}