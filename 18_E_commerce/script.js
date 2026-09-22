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

                 <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
        
        
        </div>`;
  });
}

showProduct();
