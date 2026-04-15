async function loadProducts() {
  let res = await fetch("/products");
  let data = await res.json();

  let output = "";
  data.forEach(p => {
    output += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id}, '${p.name}', ${p.price})">
          Add to Cart
        </button>
      </div>
    `;
  });

  document.getElementById("products").innerHTML = output;
}

async function addToCart(id, name, price) {
  await fetch("/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, name, price })
  });

  loadCart();
}

async function loadCart() {
  let res = await fetch("/cart");
  let data = await res.json();

  let output = "";
  data.forEach(item => {
    output += `<p>${item.name} - ₹${item.price}</p>`;
  });

  document.getElementById("cart").innerHTML = output;
}

loadProducts();
loadCart();
async function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  let data = await res.json();
  document.getElementById("loginMsg").innerText = data.message;
}