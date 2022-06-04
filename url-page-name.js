//Get the page name from the URL
function(){
  var pathName = window.location.pathname;
  var page_name = "";
  
  if(pathName == "/"){
   page_name = "home";
    return page_name;
  }else {
  var slicePath = pathName.slice(1);
  var page_name = slicePath.replaceAll("/", ":");
  
  return page_name;
    }
}
