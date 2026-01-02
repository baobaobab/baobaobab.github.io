document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('welcomButton');
	const message = document.getElementById('message');

	button.addEventListener('click', () => {
		message.textContent = 'Hahahaahahahaha';
	});

	document.getElementById('somethingButton').addEventListener('click', () => {
		message.textContent = 'Click it??';
	});
});