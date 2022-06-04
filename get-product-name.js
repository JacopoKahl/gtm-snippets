//Return the product name of WooCommerce product

function(){

  var url = {{Page URL}};

  if(url.includes("/product/")) {
    var titleEl = document.getElementByClassName("product_title");
    var procuctName = titleEl[0].textContent;
    return productName;
  }

 return "NA";

}
