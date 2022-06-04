//Return the WooCommerce product rating
function(){
    
    var ratings = document.querySelectorAll('#commentform > div > p > span > a');

    for(var i = 0; i < ratings.length; i++){
        var elClass = ratings[i].className;
        if(elClass && elClass.includes("active")){
            return i + 1;
        }
    }
    return "NA";
}
