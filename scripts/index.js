let bagItems;
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayBagIcon();
    displayItemsOnHomePage();
}

function addToBag(item) {
    bagItems.push(item);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}
function displayBagIcon() {
    let bagItemCount = document.querySelector('.bag-item-count');
    if (!bagItemCount) {
        return;
    }
    if (bagItems.length > 0) {
        bagItemCount.innerText = bagItems.length;
        bagItemCount.style.visibility = 'visible';
    }
    else {
        bagItemCount.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage() {
    let itemcontainer = document.querySelector(".items-container");
    if (!itemcontainer) {
        return;
    }
    let data = '';
    items.forEach(item => {
        data += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
    });
    itemcontainer.innerHTML = data;
}