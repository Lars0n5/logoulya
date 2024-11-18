const imagesSibilant = [
	'../artGymnastics/image/sibilant/brother.jpg',
	'../artGymnastics/image/sibilant/cat.jpg',
	'../artGymnastics/image/sibilant/dog.jpg',
	'../artGymnastics/image/sibilant/grandpa.jpg',
	'../artGymnastics/image/sibilant/grandma.jpg',
	'../artGymnastics/image/sibilant/mama.jpg'
  ];
  
  // Дублируем картинки для пар
  const cardsDataSibilant = [...imagesSibilant, ...imagesSibilant].sort(() => Math.random() - 0.5);
  
  const gameContainerSibilant = document.querySelector('.sibilant');
  
  // Создаем карточки с новыми классами
  cardsDataSibilant.forEach((image, index) => {
	const card = document.createElement('div');
	card.classList.add('col-md-3', 'card', 'mb-3'); // Классы для колонки и карточки
  
	card.innerHTML = `
	  <div class="card-inner">
      <div class="card-front"></div>
      <div class="card-back" style="background-image: url('${image}')"></div>
    </div>
	`;
	
	// Добавляем карточку в контейнер
	gameContainerSibilant.appendChild(card);
  });
  
  let flippedCardsSibilant = [];
  let matchedCardsSibilant = 0;
  
  // Обработка кликов
  gameContainerSibilant.addEventListener('click', (e) => {
	const clickedCard = e.target.closest('.card');
	if (!clickedCard || flippedCardsSibilant.includes(clickedCard) || clickedCard.classList.contains('matched')) return;
  
	clickedCard.classList.add('flip');
	flippedCardsSibilant.push(clickedCard);
  
	if (flippedCardsSibilant.length === 2) {
	  // Проверяем, совпадают ли картинки
	  const [firstCard, secondCard] = flippedCardsSibilant;
	  const firstImage = firstCard.querySelector('.card-back').style.backgroundImage;
	  const secondImage = secondCard.querySelector('.card-back').style.backgroundImage;
  
	  if (firstImage === secondImage) {
		// Совпадение
		firstCard.classList.add('matched');
		secondCard.classList.add('matched');
		matchedCardsSibilant += 2;
  
		// Победа
		if (matchedCardsSibilant === cardsData.length) {
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
	  flippedCardsSibilant = [];
	}
  });
  