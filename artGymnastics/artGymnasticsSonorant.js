const imagesSonorant = [
	'../artGymnastics/image/sonorant/drive.png',
	'../artGymnastics/image/sonorant/go.png',
	'../artGymnastics/image/sonorant/lie.png',
	'../artGymnastics/image/sonorant/look.png',
	'../artGymnastics/image/sonorant/paint.png',
	'../artGymnastics/image/sonorant/play.png'
  ];
  
  // Дублируем картинки для пар
  const cardsDataSonorant = [...imagesSonorant, ...imagesSonorant].sort(() => Math.random() - 0.5);
  
  const gameContainerSonorant = document.querySelector('.sonorant');
  
  // Создаем карточки с новыми классами
  cardsDataSonorant.forEach((image, index) => {
	const card = document.createElement('div');
	card.classList.add('col-md-3', 'card', 'mb-3'); // Классы для колонки и карточки
  
	card.innerHTML = `
	  <div class="card-inner">
      <div class="card-front"></div>
      <div class="card-back" style="background-image: url('${image}')"></div>
    </div>
	`;
	
	// Добавляем карточку в контейнер
	gameContainerSonorant.appendChild(card);
  });
  
  let flippedCardsSonorant = [];
  let matchedCardsSonorant = 0;
  
  // Обработка кликов
  gameContainerSonorant.addEventListener('click', (e) => {
	const clickedCard = e.target.closest('.card');
	if (!clickedCard || flippedCardsSonorant.includes(clickedCard) || clickedCard.classList.contains('matched')) return;
  
	clickedCard.classList.add('flip');
	flippedCardsSonorant.push(clickedCard);
  
	if (flippedCardsSonorant.length === 2) {
	  // Проверяем, совпадают ли картинки
	  const [firstCard, secondCard] = flippedCardsSonorant;
	  const firstImage = firstCard.querySelector('.card-back').style.backgroundImage;
	  const secondImage = secondCard.querySelector('.card-back').style.backgroundImage;
  
	  if (firstImage === secondImage) {
		// Совпадение
		firstCard.classList.add('matched');
		secondCard.classList.add('matched');
		matchedCardsSonorant += 2;
  
		// Победа
		if (matchedCardsSonorant === cardsData.length) {
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
	  flippedCardsSonorant = [];
	}
  });
  