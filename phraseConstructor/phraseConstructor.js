var subject = ['Мама','Папа','Мальчик','Девочка','Дедушка','Бабушка','Собака','Кошка'];
var verb = [];
var item = [];

function randomSubject() {
	let r = Math.floor(Math.random() * document.getElementById('subject').options.length);
    document.getElementById('subject').selectedIndex = r;
}

function randomVerb() {
	let r = Math.floor(Math.random() * document.getElementById('verb').options.length);
    document.getElementById('verb').selectedIndex = r;
}

function randomItem() {
	let r = Math.floor(Math.random() * document.getElementById('item').options.length);
    document.getElementById('item').selectedIndex = r;
}

function randomAll(){
    randomSubject();
    randomVerb();
    randomItem();
}

function GO() {
	document.getElementById('imageS').src = "Subject/" + document.getElementById('subject').value;
	document.getElementById('imageV').src = "Verb/" + document.getElementById('verb').value;
    document.getElementById('imageI').src = "Item/" + document.getElementById('item').value;
}