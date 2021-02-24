let products = document.querySelectorAll(".product-item");

for (product of products) {
 if (!product.querySelector(".old-price")) {
    if (!product.querySelector(".caption-product").classList.contains("product-no-stock")) {
      product.querySelector(".caption-product").classList.add("product-no-stock");
    };
 };
};