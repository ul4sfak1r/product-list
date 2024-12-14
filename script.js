const productsDiv = document.getElementById('products-div');
const cartDiv = document.getElementById('cart-div');
const cakeImage = document.getElementById('cake-img');
const cartMessage = document.getElementById('cart-msg');
const totalAmount = document.getElementById('totalAmount');
let products = [
	{
		id: 1,
		image: 'image-waffle-desktop.jpg',
		thumbnail: 'image-waffle-thumbnail.jpg',
		imageAlt: 'Waffle Image',
		tag: 'Waffle',
		name: 'Waffle with Berries',
		price: (6.50).toFixed(2),
		totalOrder: 0,
	},
	{
		id: 2,
		image: 'image-creme-brulee-desktop.jpg',
		thumbnail: 'image-creme-brulee-thumbnail.jpg',
		imageAlt: 'Créme Brúlée Image',
		tag: 'Créme Brúlée',
		name: 'Vanilla Bean Créme Brúlée',
		price: (7.00).toFixed(2),
		totalOrder: 0,
	},
	{
		id: 3,
		image: 'image-macaron-desktop.jpg',
		thumbnail: 'image-macaron-thumbnail.jpg',
		imageAlt: 'Macaron Image',
		tag: 'Macaron',
		name: 'Macaron Mix of Five',
		price: (8.00).toFixed(2),
		totalOrder: 0,
	}, 
	{
		id: 4,
		image: 'image-tiramisu-desktop.jpg',
		thumbnail: 'image-tiramisu-thumbnail.jpg',
		imageAlt: 'Tiramisu Image',
		tag: 'Tiramisu',
		name: 'Classic Tiramisu',
		price: (5.50).toFixed(2),
		totalOrder: 0,
	},
	{
		id: 5,
		image: 'image-baklava-desktop.jpg',
		thumbnail: 'image-baklava-thumbnail.jpg',
		imageAlt: 'Baklava Image',
		tag: 'Baklava',
		name: 'Pistachio Baklava',
		price: (4.00).toFixed(2),
		totalOrder: 0,
	},
	{
		id: 6,
		image: 'image-meringue-desktop.jpg',
		thumbnail: 'image-meringue-thumbnail.jpg',
		imageAlt: 'Pie Image',
		tag: 'Pie',
		name: 'Lemon Meringue Pie',
		price: (5.00).toFixed(2),
		totalOrder: 0,
	},
	{
		id: 7,
		image: 'image-cake-desktop.jpg',
		thumbnail: 'image-cake-thumbnail.jpg',
		imageAlt: 'Cake Image',
		tag: 'Cake',
		name: 'Red Velvet Cake',
		price: (4.50).toFixed(2),
		totalOrder: 0,
	},
	{
		id: 8,
		image: 'image-brownie-desktop.jpg',
		thumbnail: 'image-brownie-thumbnail.jpg',
		imageAlt: 'Brownie Image',
		tag: 'Brownie',
		name: 'Salted Caramel Brownie',
		price: (5.50).toFixed(2),
		totalOrder: 0,
	},
	{
		id: 9,
		image: 'image-panna-cotta-desktop.jpg',
		thumbnail: 'image-panna-cotta-thumbnail.jpg',
		imageAlt: 'Panna Cotta Image',
		tag: 'Panna Cotta',
		name: 'Vanilla Panna Cotta',
		price: (6.50).toFixed(2),
		totalOrder: 0,
	}
]

class shoppingCart {
	constructor() {
		this.items = [];
	}

	addItem(product) {
		const productImg = event.target.closest('.products-box').querySelector('.product-img');
		const dataId = event.target.dataset;
		
		if (product.totalOrder < 1) {
			product.totalOrder += 1;
		}

		this.items.push(product);

		if (cakeImage || cartMessage) {
			cakeImage.classList.add('hidden');
	  	cartMessage.classList.add('hidden');
		}

		if (!productImg.classList.contains('orange-border')) {
			event.target.classList.add('less-inline-padding', 'orange-background', 'orange-border');
	  	productImg.classList.add('orange-border');
		}

    event.target.innerHTML = `
      <div class="circle decrement" >
        <svg data-id="${product.id}" class="decrement-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path data-id="${product.id}" d="M5 12h14v1H5z" fill="white"/>
        </svg>
      </div>
      <p class="amount" id="amount">${product.totalOrder}</p>
      <div class="circle increment" id="increment">
        <svg data-id="${product.id}" class="increment-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path class="increment-icon" data-id="${product.id}" d="M12 5v14M5 12h14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    `;

    if (!cartDiv.querySelector('.order-info')) {
    	totalAmount.innerHTML = `${products.reduce((acc, num) => acc + num.totalOrder, 0)}`;

      cartDiv.insertAdjacentHTML('beforeend', `
        <div class="orders" id="orders">
          <div id="bottom-cart-div">
          	<div id="totalDiv">
	            <p class="order-total">Order Total</p>
	            <p class="totalPrice">$${products.reduce((acc, item) => acc + (parseFloat(item.price) * parseFloat(item.totalOrder)), 0).toFixed(2)}</p>
            </div>
          	<div class="carbon-neutral">
            	<img src="icon-carbon-neutral.svg">
            	<p>This is a <strong>carbon-neutral</strong> delivery</p>
          	</div>
          	<button id="order-btn">Confirm Order</button>
          </div>
        </div>
      `);
    }

    if (!cartDiv.querySelector(`.order-info[data-id="${product.id}"]`)) {
    	totalAmount.innerHTML = `${products.reduce((acc, num) => acc + num.totalOrder, 0)}`;

    	document.querySelector('.totalPrice').textContent = `$${products.reduce((acc, item) => acc + (parseFloat(item.price) * parseFloat(item.totalOrder)), 0)}`;
      cartDiv.querySelector('#totalDiv').insertAdjacentHTML('beforeBegin', `
        <div class="order-info" data-id="${product.id}">
          <h2>${product.name}</h2>
          <p class="amount-of-order" id="amount-of-order">${product.totalOrder}x</p>
          <p class="price-per-unit">@ ${product.price}</p>
          <p class="price-in-total" id="price-in-total">$${product.price}</p>
          <svg class="cancel cancel-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="gray">
            <line x1="4" y1="4" x2="20" y2="20" stroke="gray" stroke-width="2" stroke-linecap="round"/>
            <line x1="20" y1="4" x2="4" y2="20" stroke="gray" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      `);
    }
	}

	removeItem(event) {
		const cancelBtn = event.target.closest('.cancel');
		if (!cancelBtn) return;

		const orderInfoDiv = cancelBtn.closest('.order-info');
		if (!orderInfoDiv) return;

		const dataId = orderInfoDiv.dataset.id;
		const productId = parseInt(dataId, 10);

		const product = products.find(obj => obj.id === productId);
		if (!product) return;

		const productImg = document.querySelector(`.add-to-cart[data-id="${dataId}"]`);
		const addToCartBtn = document.querySelector(`.product-img[data-id="${dataId}"]`);
		const productBox = document.querySelector(`#products-box[data-id="${dataId}"]`);

		orderInfoDiv.remove();

		const itemIndex = this.items.findIndex(item => product.id === productId);
		if (itemIndex > -1) {
			this.items.splice(itemIndex, 1);
			const totalAmountValue = parseFloat(totalAmount.textContent) || 0;
			totalAmount.textContent = (totalAmountValue - product.totalOrder);
			product.totalOrder = 0;
		}

		if (!this.items.length) {
			const bottomCartDiv = document.getElementById('bottom-cart-div');
			bottomCartDiv?.classList.add('hidden');
			cakeImage?.classList.remove('hidden');
			cartMessage?.classList.remove('hidden');
			document.getElementById('orders').remove();
		}

		if (productImg) {
			productImg.innerHTML = `
				<img src="icon-add-to-cart.svg" alt="cart image">
				Add to Cart
			`;
		}
		addToCartBtn?.classList.remove('orange-border');
		productImg?.classList.remove('less-inline-padding', 'orange-background', 'orange-border');

		if(document.querySelector('.totalPrice')) {
			document.querySelector('.totalPrice').textContent = `$${products.reduce((acc, item) => acc + (parseFloat(item.price) * parseFloat(item.totalOrder)), 0).toFixed(2)}`;
		}
	}

	orderConfirmation() {
		this.items.forEach(({thumbnail, name, totalOrder, price}) => {
			document.getElementById('products-purchased').insertAdjacentHTML('afterBegin', `
				<div class="purchased-info">
					<img src="${thumbnail}">
					<div class="purchased-info-second">
						<h2>${name}</h2>
						<p class="price" style="margin-right: 10px">${totalOrder}x</p>
						<p class="tag">@${price}</p>
					</div>
					<div class="purchased-info-third">
						<p>$${(totalOrder * price).toFixed(2)}</p>
					</div>
				</div>
			`)
		})

		document.getElementById('products-purchased').insertAdjacentHTML('beforeEnd', 
			`<div id="totalOrder">
				<p class="order-total">Order Total</p>
				<p class="total-price">$${products.reduce((acc, item) => acc + (parseFloat(item.price) * parseFloat(item.totalOrder)), 0).toFixed(2)}</p>
			</div>`
		)

		if (!document.getElementById('order-confirmation').classList.contains('active')) {
			document.getElementById('order-confirmation').classList.add('active');
		} else {
			document.getElementById('order-confirmation').classList.remove('active');
		}
	}

	clearAll() {
		this.items = [];

		document.querySelector('.overlay').classList.add('hidden');
		document.getElementById('order-confirmation').classList.add('hidden');
		document.getElementById('products-purchased').innerHTML = " ";

		const bottomCartDiv = document.getElementById('bottom-cart-div');
		bottomCartDiv?.classList.add('hidden');
		cakeImage?.classList.remove('hidden');
		cartMessage?.classList.remove('hidden');
		document.getElementById('orders').remove();
		totalAmount.innerText = 0;

		const hasOrangeBorder = Array.from(document.querySelectorAll('.product-img')).some(element => element.classList.contains('orange-border'));
		if (hasOrangeBorder) {
			document.querySelectorAll('.product-img').forEach((image) => {
				image.classList.remove('orange-border');
			});
			document.querySelectorAll('.add-to-cart').forEach((div) => {
				div.classList.remove('less-inline-padding', 'orange-background', 'orange-border');
				div.innerHTML = `
					<img src="icon-add-to-cart.svg" alt="cart image">
					Add to Cart
				`;
			})
		}

		products.forEach(product => product.totalOrder = 0)
	}
}

const myCart = new shoppingCart();

products.forEach(({id, image, imageAlt, tag, name, price}) => {
	productsDiv.innerHTML += `
		<div class="products">
			<div class="products-box" id="products-box" data-id="${id}">
				<img src="${image}" alt="${imageAlt}" class="product-img" data-id="${id}">
				<div class="add-to-cart" data-id="${id}">
					<img src="icon-add-to-cart.svg" alt="cart image">
					Add to Cart
				</div>
			</div>
			<div class="info-box">
				<p class="tag">${tag}</p>
				<p class="name">${name}</p>
				<p class="price">$${price}</p>
			</div>
		</div>
	`;
});

productsDiv.addEventListener('click', (event) => {
  const dataId = event.target.dataset.id;
  const product = products.find(obj => obj.id === parseInt(dataId));

  if (event.target.matches('.add-to-cart')) {
    myCart.addItem(product);
  }

  if (event.target.matches('.decrement-icon')) {
    if (product.totalOrder > 1) {
    	const amountElement = event.target.closest('.add-to-cart').querySelector('.amount');
			const orderInfo = cartDiv.querySelector(`.order-info[data-id="${product.id}"]`);

    	product.totalOrder -= 1;

    	document.querySelector('.totalPrice').textContent = `$${products.reduce((acc, item) => acc + (parseFloat(item.price) * parseFloat(item.totalOrder)), 0).toFixed(2)}`;
	    amountElement.textContent = product.totalOrder;
	    
	    if (orderInfo) {
	      const amountOfOrder = orderInfo.querySelector('.amount-of-order');
	      const priceInTotal = orderInfo.querySelector('.price-in-total');
	      amountOfOrder.textContent = `${product.totalOrder}x`;
	      priceInTotal.textContent = `$${(parseFloat((product.price) * product.totalOrder)).toFixed(2)}`;
	      totalAmount.innerHTML = `${products.reduce((acc, num) => acc + num.totalOrder, 0)}`;
	    }
    }
  }

  if (event.target.matches('.increment-icon')) {
  	const amountElement = event.target.closest('.add-to-cart').querySelector('.amount');
    const orderInfo = cartDiv.querySelector(`.order-info[data-id="${product.id}"]`);

    product.totalOrder += 1;

    document.querySelector('.totalPrice').textContent = `$${products.reduce((acc, item) => acc + (parseFloat(item.price) * parseFloat(item.totalOrder)), 0).toFixed(2)}`;
    amountElement.textContent = product.totalOrder;

    if (orderInfo) {
      const amountOfOrder = orderInfo.querySelector('.amount-of-order');
      const priceInTotal = orderInfo.querySelector('.price-in-total');
      amountOfOrder.textContent = `${product.totalOrder}x`;
      priceInTotal.textContent = `$${(parseFloat(product.price) * product.totalOrder).toFixed(2)}`;
      totalAmount.innerHTML = `${products.reduce((acc, num) => acc + num.totalOrder, 0)}`;
    }
  }
});

cartDiv.addEventListener('click', (event) => {
	const dataId = event.target.dataset.id;
  const product = products.find(obj => obj.id === parseInt(dataId));

	if (event.target.closest('.cancel')) {
		myCart.removeItem(event);
	}

	if (event.target.matches('#order-btn')) {
		document.querySelector('.overlay').classList.remove('hidden');

		myCart.orderConfirmation();
	}
});	

document.getElementById('new-order').addEventListener('click', () => {
	myCart.clearAll();
})