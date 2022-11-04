import '../sass/style.scss';

document.addEventListener('DOMContentLoaded', () => {
	const grade = document.querySelector('#grade');

	document.querySelector('#nilai').addEventListener('keyup', (e) => {
		const val = parseFloat(e.target.value);
		if (val < 40) {
			grade.textContent('D');
		} else if ((val > 40) & (val < 70)) {
			grade.textContent('C');
		} else if ((val > 70) & (val < 70)) {
			grade.textContent('C');
		}
	});
});
