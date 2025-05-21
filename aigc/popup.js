document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeColorButton');
    button.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, {action: 'changeBackgroundColor'});
            }
        });
    });
});