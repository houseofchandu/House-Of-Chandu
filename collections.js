document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "Ethnic Wear";

  const heading = document.getElementById("collectionTitle");
  const grid = document.getElementById("productGrid");

  const categories = [
    "Ethnic Wear",
    "Western Wear",
    "Occasion Wear",
    "Everyday Wear",
    "Celebration Wear"
  ];

  const activeCategory = categories.includes(category) ? category : "Ethnic Wear";
  heading.textContent = activeCategory;
  document.title = `${activeCategory} | House of Chandu`;

  const filtered = PRODUCTS.filter(product => product.category === activeCategory);

  if (!filtered.length) {
    grid.innerHTML = "<p>No products are available in this collection yet.</p>";
  } else {
    grid.innerHTML = filtered.map(product => `
      <article class="product-card" data-id="${product.id}" tabindex="0" role="link">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-meta">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-brand">${product.brand}</p>
          <div class="product-price">${formatPrice(product.price)}</div>
          <div class="size-preview">
            ${product.sizes.map(size => `<span class="size-chip">${size}</span>`).join("")}
          </div>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".product-card").forEach(card => {
      const openProduct = () => {
        window.location.href = `product.html?id=${encodeURIComponent(card.dataset.id)}`;
      };

      card.addEventListener("click", openProduct);
      card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProduct();
        }
      });
    });
  }

  document.getElementById("collectionYear").textContent = new Date().getFullYear();

  const cart = JSON.parse(localStorage.getItem("houseOfChanduCart") || "[]");
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartCount").textContent = count;

  document.getElementById("cartTrigger").addEventListener("click", () => {
    alert("Your bag contains " + count + " item(s).");
  });
});