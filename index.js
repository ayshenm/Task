let products = JSON.parse(localStorage.getItem("products")) || [];
console.log("products", products)

function renderProducts() {
  const productList = document.querySelector("#productList");
  const totalCount = document.querySelector("#totalCount");
  const totalPrice = document.querySelector("#totalPrice");

  productList.innerHTML = "";
  let total = 0;

  products.map((product, i) => {
    const productItem = document.createElement("li");
    productItem.className = "product-item";
    productItem.innerHTML = `
      ${product.name} (${product.price} AZN)
      <button onclick="deleteProduct(${i})">Sil</button>
    `;
    productList.appendChild(productItem);
    total += parseFloat(product.price);
  });

  totalCount.innerHTML = products.length;
  totalPrice.textContent = total.toFixed(2);
}

function removeValue() {
  productName.value = "";
  productPrice.value = "";
}

function addProduct() {
  const productName = document.querySelector("#productName").value;
  const productPrice = document.querySelector("#productPrice").value;
  const addButton = document.querySelector("#addButton");

  if (!productName || !productPrice === null) {
    alert("deyerleri bos ola bilmez!");
  }
  if (productName && productPrice) {
    products.push({ name: productName, price: productPrice });
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
    removeValue();
    alert("məhsul uğurla əlavə edildi");
  }
}

function deleteProduct(i) {
  const productList = document.querySelector("#productList");
  if (confirm("məhsulu silməyə əminsən?")) {
    products.splice(i, 1);
    localStorage.setItem("products", JSON.stringify(products));
    alert("məhsul silindi:).");
    removeValue();
  }
  renderProducts();
}

renderProducts();
