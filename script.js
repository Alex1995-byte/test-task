
const closeBtns = document.querySelectorAll("div.close > img");
closeBtns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		const grandPa = e.target.parentElement.parentElement;
		console.log(grandPa);
		grandPa.remove();
	});
});