let products = document.querySelectorAll('.product-item');

for (product of products) {
 if (!product.querySelector('.old-price')) {
    product.querySelector('.caption-product').classList.add('product-no-stock');
 };
};
   

