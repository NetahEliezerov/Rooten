console.log("HELLO!");
chrome.storage.sync.get("openWithRootenButtonColor", function (value) {
    console.log(value)
});


const runTester = () => {
    if(document.getElementsByClassName('previewModal--player-titleTreatment-logo').length != 0) {
        const htmlValue = document.getElementsByClassName('previewModal--player-titleTreatment-logo')[0].alt;
        const fixedValueForRotten = htmlValue.split(' ').join('_').toLowerCase();
        chrome.storage.sync.get("openWithRootenButtonColor", function (value) {
            let colorOfBtn = "orange";
            console.log("read value:", value);
            if(value.openWithRootenButtonColor && String(value.openWithRootenButtonColor).startsWith("#")) {
                console.log("IT IS");
                colorOfBtn = value.openWithRootenButtonColor;
            };
            console.log(htmlValue, fixedValueForRotten);
            console.log(colorOfBtn);
            const buttonsInnerHtml = document.getElementsByClassName('buttonControls--container')[0].innerHTML;
            document.getElementsByClassName('buttonControls--container')[0].innerHTML = `
            <button class="color-primary hasLabel hasIcon ltr-1jtux27 openOnRottenBtn" style="background-color: ${colorOfBtn} !important;" tabindex="-1" onclick="window.open('https://www.rottentomatoes.com/tv/${fixedValueForRotten}','popUpWindow','height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');" type="button">
            <span class="ltr-j0gpa2">Open with Rotten!</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png" style="
                width: 1em;
                margin-left: 5px;
            ">
            </button>
            ${buttonsInnerHtml}`;
        } );
    }
};
runTester();

window.addEventListener('click', function (event) {
	// Log the state data to the console
	console.log(event.target.innerText.startsWith('Episodes'));
    if(event.target.innerText.startsWith('Episodes')) {
        runTester();
    }
});