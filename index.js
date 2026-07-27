import menuArray from "./data.js";

const orderSummary = document.getElementById('order-summary')

function renderMenu(){
    document.getElementById("menu").innerHTML = menuArray.map(item => `
        <div class="item">
            <img class="icon" src="images/${item.image}.png">
            <div>
                <h2 class="item-h2">${item.name}</h2>
                <p class="item-p">${item.ingredients}</p>
                <h3 class="item-h3">$${item.price}</h3>
            </div>
            <button data-id="${item.id}">+</button>
        </div>
        `
    ).join('')
}

const cart = []
function renderOrder(){
    document.getElementById("order-list").innerHTML = cart.map((item,index)=> `
        <div class="order-item">
            <h2>${item.name}</h2>
            <button data-index="${index}">remove</button>
            <h3>$${item.price}</h3>
        </div>
        `).join('')
    const totalPrice = cart.reduce((total,currentPrice)=>
        total + currentPrice.price, 0)
    document.getElementById("total-price").innerHTML = `
        <h2>Total price:</h2>
        <h3>$${totalPrice}</h3>
    `
}

document.addEventListener('click',function(e){
    if(e.target.dataset.id){
        addItem(e.target.dataset.id)
    }
    if(e.target.dataset.index !== undefined){
        removeItem(Number(e.target.dataset.index))
    }
})

function addItem(itemId){
    const targetObj = menuArray.find(item =>
        item.id == itemId)
    cart.push(targetObj)
    renderOrder()
    orderSummary.style.display = 'flex'
}

function removeItem(index){
    cart.splice(index, 1)
    renderOrder()
}

renderMenu()