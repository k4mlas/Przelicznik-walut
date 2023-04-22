const dataLeft = document.querySelector('.rate__body__left__dataOne'); //To jest INPUT
const moneyLeft = document.querySelector('#currency-one'); // To jest WALUTA
const dataRight = document.querySelector('.rate__body__right__dataTwo'); // To JEST INPUT
const moneyRight = document.querySelector('#currency-two'); // TO JEST DRUGA WALUTA
const btn = document.querySelector('.rate__body__swap');
const info = document.querySelector('.rate__info');

const calculate = () => {
	const URL = `https://api.exchangerate.host/convert?from=${moneyLeft.value}&to=${moneyRight.value}`;
	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			const dataRate = data.info.rate;
			info.textContent = `1 ${moneyLeft.value} = ${dataRate.toFixed(4)} ${
				moneyRight.value
			}`;
			dataRight.value = (dataLeft.value * dataRate).toFixed(2);
		});
};

dataLeft.addEventListener('input', calculate);
moneyLeft.addEventListener('change', calculate);
moneyRight.addEventListener('change', calculate);
calculate();
