const dataLeft = document.querySelector('.rate__body__left__dataOne');
const moneyLeft = document.querySelector('#currency-one');
const dataRight = document.querySelector('.rate__body__right__dataTwo');
const moneyRight = document.querySelector('#currency-two');
const btn = document.querySelector('.rate__body__swap');
const info = document.querySelector('.rate__info');

const calculate = () => {
	const URL = 'https://api.exchangerate.host/latest';
	fetch(URL)
		.then((res) => res.json())
		.then((data) => console.log(data));
};

calculate();
