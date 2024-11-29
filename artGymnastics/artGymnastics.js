let imagesHissingA = [
	'../artGymnastics/image/hissing/cup.jpg',
	'../artGymnastics/image/hissing/horse.jpg',
	'../artGymnastics/image/hissing/jam.jpg',
	'../artGymnastics/image/hissing/mushroom.jpg',
	'../artGymnastics/image/hissing/pipe.jpg',
	'../artGymnastics/image/hissing/shovel.jpg'
];
let imagesSibilantA = [
	'../artGymnastics/image/sibilant/clock.jpg',
	'../artGymnastics/image/sibilant/dough.jpg',
	'../artGymnastics/image/sibilant/fence.jpg',
	'../artGymnastics/image/sibilant/pancake.jpg',
	'../artGymnastics/image/sibilant/shovel.jpg',
	'../artGymnastics/image/sibilant/swing.jpg'
];
let imagesSonorantA = [
	'../artGymnastics/image/sonorant/accordion.jpg',
	'../artGymnastics/image/sonorant/horse.jpg',
	'../artGymnastics/image/sonorant/jam.jpg',
	'../artGymnastics/image/sonorant/mushroom.jpg',
	'../artGymnastics/image/sonorant/swing.jpg',
	'../artGymnastics/image/sonorant/woodpecker.jpg'
];
let images = ['Пусто',
	'Пусто',
	'Пусто',
	'Пусто',
	'Пусто',
	'Пусто'
];
images = imagesSibilantA;
let gameContainer = document.querySelector('.sibilant');
var tabs = document.querySelectorAll('.nav-link');
tabs.forEach(function(tab) {
	tab.addEventListener('shown.bs.tab', function (event) {
		if (event.target.textContent == 'Свистящие') {	
			images = imagesSibilantA
			gameContainer = document.querySelector('.sibilant');
			const cardsData = [...images, ...images].sort(() => Math.random() - 0.5);

			cardsData.forEach((image, index) => {
				const card = document.createElement('div');
				card.classList.add('col-md-3', 'card', 'mb-3');
				card.innerHTML = 
				`
					<div class="card-inner">
						<div class="card-front"></div>
						<div class="card-back" style="background-image: url('${image}')"></div>
					</div>
				`;
				gameContainer.appendChild(card);
			});
			let flippedCards = [];
			let matchedCards = 0;
			gameContainer.addEventListener('click', (e) => {
				const clickedCard = e.target.closest('.card');
				if (!clickedCard || flippedCards.includes(clickedCard) || clickedCard.classList.contains('matched')) return;

				clickedCard.classList.add('flip');
				flippedCards.push(clickedCard);
				if (flippedCards.length === 2) {
					// Проверяем, совпадают ли картинки
					const [firstCard, secondCard] = flippedCards;
					const firstImage = firstCard.querySelector('.card-back').style.backgroundImage;
					const secondImage = secondCard.querySelector('.card-back').style.backgroundImage;
				
					if (firstImage === secondImage) {
						// Совпадение
						firstCard.classList.add('matched');
						secondCard.classList.add('matched');
						matchedCards += 2;
				
						// Победа
						if (matchedCards === cardsData.length) {
							setTimeout(() => alert('You won!'), 500);
						}
					} else {
						// Нет совпадения
						setTimeout(() => {
							firstCard.classList.remove('flip');
							secondCard.classList.remove('flip');
						}, 1000);
					}
				
					// Очищаем массив для следующего хода
					flippedCards = [];
				}
			});
		} else if (event.target.textContent == 'Шипящие') {
			images = imagesHissingA;
			gameContainer = document.querySelector('.hissing');
			const cardsData = [...images, ...images].sort(() => Math.random() - 0.5);

			cardsData.forEach((image, index) => {
				const card = document.createElement('div');
				card.classList.add('col-md-3', 'card', 'mb-3');
				card.innerHTML = 
				`
					<div class="card-inner">
						<div class="card-front"></div>
						<div class="card-back" style="background-image: url('${image}')"></div>
					</div>
				`;
				gameContainer.appendChild(card);
			});
			let flippedCards = [];
			let matchedCards = 0;
			gameContainer.addEventListener('click', (e) => {
				const clickedCard = e.target.closest('.card');
				if (!clickedCard || flippedCards.includes(clickedCard) || clickedCard.classList.contains('matched')) return;

				clickedCard.classList.add('flip');
				flippedCards.push(clickedCard);
				if (flippedCards.length === 2) {
					// Проверяем, совпадают ли картинки
					const [firstCard, secondCard] = flippedCards;
					const firstImage = firstCard.querySelector('.card-back').style.backgroundImage;
					const secondImage = secondCard.querySelector('.card-back').style.backgroundImage;
				
					if (firstImage === secondImage) {
						// Совпадение
						firstCard.classList.add('matched');
						secondCard.classList.add('matched');
						matchedCards += 2;
				
						// Победа
						if (matchedCards === cardsData.length) {
							setTimeout(() => alert('You won!'), 500);
						}
					} else {
						// Нет совпадения
						setTimeout(() => {
							firstCard.classList.remove('flip');
							secondCard.classList.remove('flip');
						}, 1000);
					}
				
					// Очищаем массив для следующего хода
					flippedCards = [];
				}
			});
		} else if (event.target.textContent == 'Сонорные') {
			images = imagesSonorantA
			gameContainer = document.querySelector('.sonorant');
			const cardsData = [...images, ...images].sort(() => Math.random() - 0.5);

			cardsData.forEach((image, index) => {
				const card = document.createElement('div');
				card.classList.add('col-md-3', 'card', 'mb-3');
				card.innerHTML = 
				`
					<div class="card-inner">
						<div class="card-front"></div>
						<div class="card-back" style="background-image: url('${image}')"></div>
					</div>
				`;
				gameContainer.appendChild(card);
			});
			let flippedCards = [];
			let matchedCards = 0;
			gameContainer.addEventListener('click', (e) => {
				const clickedCard = e.target.closest('.card');
				if (!clickedCard || flippedCards.includes(clickedCard) || clickedCard.classList.contains('matched')) return;

				clickedCard.classList.add('flip');
				flippedCards.push(clickedCard);
				if (flippedCards.length === 2) {
					// Проверяем, совпадают ли картинки
					const [firstCard, secondCard] = flippedCards;
					const firstImage = firstCard.querySelector('.card-back').style.backgroundImage;
					const secondImage = secondCard.querySelector('.card-back').style.backgroundImage;
				
					if (firstImage === secondImage) {
						// Совпадение
						firstCard.classList.add('matched');
						secondCard.classList.add('matched');
						matchedCards += 2;
				
						// Победа
						if (matchedCards === cardsData.length) {
							setTimeout(() => alert('You won!'), 500);
						}
					} else {
						// Нет совпадения
						setTimeout(() => {
							firstCard.classList.remove('flip');
							secondCard.classList.remove('flip');
						}, 1000);
					}
				
					// Очищаем массив для следующего хода
					flippedCards = [];
				}
			});
		}
	});
});

const cardsData = [...images, ...images].sort(() => Math.random() - 0.5);

cardsData.forEach((image, index) => {
	const card = document.createElement('div');
	card.classList.add('col-md-3', 'card', 'mb-3');
	card.innerHTML = 
	`
		<div class="card-inner">
			<div class="card-front"></div>
			<div class="card-back" style="background-image: url('${image}')"></div>
		</div>
	`;
	gameContainer.appendChild(card);
});
let flippedCards = [];
let matchedCards = 0;
gameContainer.addEventListener('click', (e) => {
	const clickedCard = e.target.closest('.card');
	if (!clickedCard || flippedCards.includes(clickedCard) || clickedCard.classList.contains('matched')) return;

	clickedCard.classList.add('flip');
	flippedCards.push(clickedCard);
	if (flippedCards.length === 2) {
		// Проверяем, совпадают ли картинки
		const [firstCard, secondCard] = flippedCards;
		const firstImage = firstCard.querySelector('.card-back').style.backgroundImage;
		const secondImage = secondCard.querySelector('.card-back').style.backgroundImage;
	
		if (firstImage === secondImage) {
			// Совпадение
			firstCard.classList.add('matched');
			secondCard.classList.add('matched');
			matchedCards += 2;
	
			// Победа
			if (matchedCards === cardsData.length) {
				setTimeout(() => alert('You won!'), 500);
			}
		} else {
			// Нет совпадения
			setTimeout(() => {
				firstCard.classList.remove('flip');
				secondCard.classList.remove('flip');
			}, 1000);
		}
	
		// Очищаем массив для следующего хода
		flippedCards = [];
	}
});