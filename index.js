import menuArray from "./data.js";

function renderMenu(){
    document.getElementById("menu").innerHTML = menuArray.map(item => `
        <div class="item">
            <img class="icon" src="images/${item.image}.png">
            <div>
                <h2>${item.name}</h2>
                <p>${item.ingredients}</p>
                <h3>$${item.price}</h3>
            </div>
            <button>+</button>
        </div>
        `
    ).join('')
}
console.log()
renderMenu()