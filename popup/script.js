const colorPicker = document.getElementById('colorPicker');
const platformPicker = document.getElementById('platformPicker');

chrome.storage.sync.get("platformToOpenWith", function (platformValue) {
    platformPicker.value = platformValue.platformToOpenWith;
})

chrome.storage.sync.get("openWithRootenButtonColor", function (colorValue) {
    colorPicker.value = colorValue.openWithRootenButtonColor;
})

colorPicker.addEventListener('change', () => {
    const updatedColor = document.getElementById('colorPicker');
    console.log(updatedColor.value)
    chrome.storage.sync.set({openWithRootenButtonColor: updatedColor.value}, function () {
        console.log("color had saved!");
        // chrome.storage.sync.get("test", function (value) { console.log("read value: ", value.test); } );
    });
});

platformPicker.addEventListener('change', () => {
    const updatedPlatform = document.getElementById('platformPicker');
    console.log(updatedPlatform.value)
    chrome.storage.sync.set({platformToOpenWith: updatedPlatform.value}, function () {
        console.log("platform had saved!");
        // chrome.storage.sync.get("test", function (value) { console.log("read value: ", value.test); } );
    });
});