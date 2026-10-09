const products = [
  {
    id: 1,
    name: "Laptop",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    price: 55000,
  },
  {
    id: 2,
    name: "Smartphone",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    price: 25000,
  },
  {
    id: 3,
    name: "Headphones",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    price: 3000,
  },
  {
    id: 4,
    name: "Smart Watch",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    price: 4500,
  },
  {
    id: 5,
    name: "Camera",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    price: 45000,
  },
  {
    id: 6,
    name: "Keyboard",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    price: 1500,
  },
  {
    id: 7,
    name: "Mouse",
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    price: 800,
  },
  {
    id: 8,
    name: "Tablet",
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    price: 22000,
  },
  {
    id: 9,
    name: "Speaker",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    price: 3500,
  },
  {
    id: 10,
    name: "Gaming Controller",
    img: "https://images.unsplash.com/photo-1592840496694-26c035b52b754",
    price: 2800,
  },
];

function showProduct() {
  const product = document.getElementById("product");

  product.innerHTML = "";

  products.forEach((p) => {
    product.innerHTML += `<div class="col-md-4 mt-3">
        
        <div  class="card product-card" >

                <img src="${p.img}" class="card-img-top product-img" alt="${p.name}">
                  <div class="card-body">
                  <h5 class="card-title">${p.name}</h5>
                 <p class="card-text">${p.price}</p>

                 <button class="btn btn-primary"  onclick = "addToCart(${p.id})"  >Add to Cart</button>
                    </div>
                </div>
        
        
        </div>`;
  });
}

showProduct();

function addToCart(id) {
  try {
    let productItem = localCartItem.find((p) => p.id === id);

    console.log("already product - script.js:94", productItem);

    if (productItem) {
      productItem.qty++;
    } else {
      productItem = products.find((p) => p.id === id);

      localCartItem.push({ ...productItem, qty: 1 });
    }

    updateLocalStorage();
    alert("item added successfully");
  } catch (error) {
    console.log(error);
  }
}

function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(localCartItem));
}

function showCartItem() {
  const cartModal = document.getElementById("cartModal");
  const modal = new bootstrap.Modal(cartModal);

  modal.show();
  showCartData();
  grandTotal();
}

function showCartData() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  localCartItem.forEach((p, index) => {
    tableBody.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td><img src=${p.img} class="cartProductImg" alt=${p.name}></img></td>
        <td>${p.name}</td>
        <td>₹${p.price}</td>
        
    <td>
    <div class="d-flex justify-content-center align-items-center gap-3" >
     <button class= "btn btn-outline-success" onclick="increaseQty(${p.id})">+</button>
     <h5>${p.qty}</h5>
     <button class= "btn btn-outline-warning" onclick="decreaseQty(${p.id})">-</button>
    </div>
    </td>
    <td>₹${p.qty * p.price}</td>
    <td><button class= "btn btn-outline-danger" onclick="removeProduct(${p.id})">Remove</button></td>
     </tr>`;
  });
}

function increaseQty(id) {
  try {
    const product = localCartItem.find((p) => p.id === id);

    if (product) {
      product.qty++;
    }

    updateLocalStorage();
    showCartData();
  } catch (error) {
    console.log(error);
  }
}

function decreaseQty(id) {
  try {
    const index = localCartItem.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error("product not found");
    }
    const product = localCartItem.find((p) => p.id === id);

    if (product) {
      product.qty--;
    }

    if (product.qty === 0) {
      localCartItem.splice(index, 1);
    }

    updateLocalStorage();
    showCartData();
  } catch (error) {
    console.log(error);
  }
}

function removeProduct(id) {
  const index = localCartItem.findIndex((p) => p.id === id);

  localCartItem.splice(index, 1);

  updateLocalStorage();
  showCartData();
}

function grandTotal() {
  const total = document.getElementById("GrandTotal");
  total.innerHTML = "";

  const totalAmounts = localCartItem.reduce((acc, curr) => {
    return (acc += curr.price * curr.qty);
  }, 0);

  total.innerHTML = `Grand Total<h5>₹${totalAmounts}</h5>`;
}
