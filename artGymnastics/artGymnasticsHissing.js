const imagesHissing = [
	'../artGymnastics/image/hissing/ball.jpg',
	'../artGymnastics/image/hissing/bed.jpg',
	'../artGymnastics/image/hissing/bike.jpg',
	'../artGymnastics/image/hissing/book.jpg',
	'../artGymnastics/image/hissing/car.jpg',
	'../artGymnastics/image/hissing/chair.jpg'
  ];
  
  // Дублируем картинки для пар
  const cardsDataHissing = [...imagesHissing, ...imagesHissing].sort(() => Math.random() - 0.5);
  
  const gameContainerHissing = document.querySelector('.hissing');
  
  // Создаем карточки с новыми классами
  cardsDataHissing.forEach((image, index) => {
	const card = document.createElement('div');
	card.classList.add('col-md-3', 'card', 'mb-3'); // Классы для колонки и карточки
  
	card.innerHTML = `
	  <div class="card-inner">
      <div class="card-front"></div>
      <div class="card-back" style="background-image: url('${image}')"></div>
    </div>
	`;
	
	// Добавляем карточку в контейнер
	gameContainerHissing.appendChild(card);
  });
  
  let flippedCardsHissing = [];
  let matchedCardsHissing = 0;
  
  // Обработка кликов
  gameContainerHissing.addEventListener('click', (e) => {
	const clickedCard = e.target.closest('.card');
	if (!clickedCard || flippedCardsHissing.includes(clickedCard) || clickedCard.classList.contains('matched')) return;
  
	clickedCard.classList.add('flip');
	flippedCardsHissing.push(clickedCard);
  
	if (flippedCardsHissing.length === 2) {
	  // Проверяем, совпадают ли картинки
	  const [firstCard, secondCard] = flippedCardsHissing;
	  const firstImage = firstCard.querySelector('.card-back').style.backgroundImage;
	  const secondImage = secondCard.querySelector('.card-back').style.backgroundImage;
  
	  if (firstImage === secondImage) {
		// Совпадение
		firstCard.classList.add('matched');
		secondCard.classList.add('matched');
		matchedCardsHissing += 2;
  
		// Победа
		if (matchedCardsHissing === cardsData.length) {
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
	  flippedCardsHissing = [];
	}
  });
  