document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = PRODUCTS.find(item => item.id === productId);
  const container = document.getElementById("productDetail");

  let selectedSize = "";
  let selectedImage = "";

  if (!product) {
    container.innerHTML = `
      <div>
        <h2>Product not found</h2>
        <p>This product link may be invalid.</p>
        <a class="button dark" href="index.html#collections">Browse collections</a>
      </div>
    `;
    return;
  }

  selectedImage = product.images[0];
  document.title = `${product.name} | House of Chandu`;

  document.getElementById("backToCollection").href =
    `collections.html?category=${encodeURIComponent(product.category)}`;

  function renderProduct() {
    container.innerHTML = `
      <div class="detail-gallery">
        <div class="detail-main-image">
          <img src="${selectedImage}" alt="${product.name}">
        </div>
        <div class="detail-thumbnails">
          ${product.images.map((image, index) => `
            <button class="detail-thumb ${image === selectedImage ? "active" : ""}" data-image="${image}" aria-label="View image ${index + 1}">
              <img src="${image}" alt="${product.name} view ${index + 1}">
            </button>
          `).join("")}
        </div>
      </div>

      <div class="detail-info">
        <p class="detail-brand">${product.brand}</p>
        <h1 class="detail-title">${product.name}</h1>
        <p class="detail-price">${formatPrice(product.price)}</p>
        <p class="muted">Inclusive of all taxes · Demo price</p>

        <hr class="detail-rule">

        <div class="field-label">SELECT SIZE</div>
        <div class="size-options">
          ${product.sizes.map(size => `
            <button
              class="size-option ${selectedSize === size ? "selected" : ""}"
              data-size="${size}"
              ${product.available.includes(size) ? "" : "disabled"}
            >${size}</button>
          `).join("")}
        </div>

        <p class="detail-error" id="sizeError" aria-live="polite"></p>

        <button class="add-cart" id="addToCart">ADD TO BAG</button>

        <div class="shipping-note">
          <span>Confirm shipping details before ordering</span>
          <span>Contact us to check size availability</span>
        </div>

        <h3 class="specifications-title">SPECIFICATIONS</h3>
        <div class="spec-grid">
          ${Object.entries(product.specs).map(([key, value]) => `
            <div class="spec-item">
              <span>${key}</span>
              <strong>${value}</strong>
            </div>
          `).join("")}
        </div>

        <p class="detail-description">${product.description}</p>
        <p class="demo-note">Demo catalogue data. Replace with actual product details before publishing.</p>
      </div>
    `;

    container.querySelectorAll("[data-image]").forEach(button => {
      button.addEventListener("click", () => {
        selectedImage = button.dataset.image;
        renderProduct();
      });
    });

    container.querySelectorAll("[data-size]").forEach(button => {
      button.addEventListener("click", () => {
        selectedSize = button.dataset.size;
        renderProduct();
      });
    });

    document.getElementById("addToCart").addEventListener("click", () => {
      if (!selectedSize) {
        document.getElementById("sizeError").textContent = "Please select a size first.";
        return;
      }

      const cart = JSON.parse(localStorage.getItem("houseOfChanduCart") || "[]");
      const existing = cart.find(item =>
        item.id === product.id && item.size === selectedSize
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ id: product.id, size: selectedSize, quantity: 1 });
      }

      localStorage.setItem("houseOfChanduCart", JSON.stringify(cart));
      document.getElementById("cartCount").textContent =
        cart.reduce((sum, item) => sum + item.quantity, 0);

      alert(`${product.name} — size ${selectedSize} added to your bag.`);
    });
  }

  renderProduct();

  const cart = JSON.parse(localStorage.getItem("houseOfChanduCart") || "[]");
  document.getElementById("cartCount").textContent =
    cart.reduce((sum, item) => sum + item.quantity, 0);

  document.getElementById("productYear").textContent = new Date().getFullYear();

  document.getElementById("cartTrigger").addEventListener("click", () => {
    alert("Your bag contains " + cart.reduce((sum, item) => sum + item.quantity, 0) + " item(s).");
  });
});