(function() {
    
    chrome.storage.local.get('grayscale', function(result){
        grayscale = result.grayscale || false;
        
        chrome.browserAction.onClicked.addListener(function () {
            grayscale = !grayscale;
            chrome.storage.local.set({'grayscale':grayscale});
            if(grayscale){
                chrome.browserAction.setIcon({
                    path: "off.png"
                });
                chrome.browserAction.setTitle({
                    title: "คลิกเพื่อเข้าโหมดภาพสี"
                });
                chrome.tabs.executeScript(null, {
                    code: 'css.innerHTML = "body { filter: grayscale(1) !important; }";'
                });
            }else{
                chrome.browserAction.setIcon({
                    path: "on.png"
                });
                chrome.browserAction.setTitle({
                    title: "คลิกเพื่อเข้าโหมดขาวดำ"
                });
                chrome.tabs.executeScript(null, {
                    code: 'css.innerHTML = "html *,* { filter: initial !important; }";'
                });
            }
        });
    });
    
})();