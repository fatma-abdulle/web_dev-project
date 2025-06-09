const cartItems = [
  {
    id: 1,
    name: "Luxury Chocolate Box",
    price: 29.99,
    image: "/images/gifts/chocolate-box.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Scented Candle Set",
    price: 34.99,
    quantity: 2,
  },
];

function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";
  let subtotal = 0;

  cartItems.forEach((item) => {
    subtotal += item.price * item.quantity;

    const card = document.createElement("div");
    card.className = "cart-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)} each</p>
        <div class="cart-actions">
          <select data-id="${item.id}">
            ${[...Array(10)].map((_, i) => {
              const val = i + 1;
              return `<option value="${val}" ${val === item.quantity ? "selected" : ""}>${val}</option>`;
            }).join("")}
          </select>
          <button class="remove-btn" data-remove="${item.id}">Remove</button>
        </div>
      </div>
      <p>$${(item.price * item.quantity).toFixed(2)}</p>
    `;

    container.appendChild(card);
  });

  document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
  document.getElementById("total").innerText = `$${(subtotal + 4.99).toFixed(2)}`;

  // Event listeners
  document.querySelectorAll("select[data-id]").forEach((select) => {
    select.addEventListener("change", (e) => {
      const id = Number(e.target.dataset.id);
      const newQty = Number(e.target.value);
      const item = cartItems.find((i) => i.id === id);
      if (item) item.quantity = newQty;
      renderCart();
    });
  });

  document.querySelectorAll("button[data-remove]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = Number(e.target.dataset.remove);
      const index = cartItems.findIndex((i) => i.id === id);
      if (index > -1) cartItems.splice(index, 1);
      renderCart();
    });
  });
}

renderCart();
