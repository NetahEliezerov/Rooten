console.log("HELLO!");

const runTester = () => {
    if(document.getElementsByClassName('previewModal--player-titleTreatment-logo').length != 0) {
        const htmlValue = document.getElementsByClassName('previewModal--player-titleTreatment-logo')[0].alt;
        const fixedValueForRotten = htmlValue.split(' ').join('_').toLowerCase();
        console.log(htmlValue, fixedValueForRotten);

        const buttonsInnerHtml = document.getElementsByClassName('buttonControls--container')[0].innerHTML;
        document.getElementsByClassName('buttonControls--container')[0].innerHTML = `<a class="openOnRottenBtn" href="https://www.rottentomatoes.com/tv/${fixedValueForRotten}">Open on Rotten!</a>${buttonsInnerHtml}`;
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