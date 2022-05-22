function() {

  var el = {{Click Element}};

  var parent = el.closest(".woocommerce-loop-product__link");

  if(parent){
    var title = parent.querySelector(".woocommerce-loop-product__title");
    var productName = title.textContent;
  }

  return productName;
  
}
