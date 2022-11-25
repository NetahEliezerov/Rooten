const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', () => {
    const updatedColor = document.getElementById('colorPicker');
    console.log(updatedColor.value)
    chrome.storage.sync.set({openWithRootenButtonColor: updatedColor.value}, function () {
        console.log("had saved!");
        // chrome.storage.sync.get("test", function (value) { console.log("read value: ", value.test); } );
    });
});