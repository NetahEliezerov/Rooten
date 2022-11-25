console.log("HELLO!");

const runTester = () => {
    if(document.getElementsByClassName('previewModal--player-titleTreatment-logo').length != 0) {
        const htmlValue = document.getElementsByClassName('previewModal--player-titleTreatment-logo')[0].alt;
        const fixedValueForRotten = htmlValue.split(' ').join('_').toLowerCase();
        console.log(htmlValue, fixedValueForRotten);

        const buttonsInnerHtml = document.getElementsByClassName('buttonControls--container')[0].innerHTML;
        document.getElementsByClassName('buttonControls--container')[0].innerHTML = `
        <button class="color-primary hasLabel hasIcon ltr-1jtux27 openOnRottenBtn" tabindex="-1" onclick="window.open('https://www.rottentomatoes.com/tv/${fixedValueForRotten}','popUpWindow','height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');" type="button">
        <span class="ltr-j0gpa2">Open on Rotten!</span>
        </button>
        ${buttonsInnerHtml}`;
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