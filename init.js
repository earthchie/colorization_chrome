(function(){
    
    chrome.storage.local.get('grayscale', function(result){
        grayscale = result.grayscale || false;
        if(grayscale){
            css.innerHTML = "body { filter: grayscale(1) !important; }";
        }else{
            css.innerHTML = "html *, * { filter: initial !important; }";
        }

    });
    
})();