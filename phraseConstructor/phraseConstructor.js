const mapping = {
    cat: ["drive", "paint", "read", "speek", "stand", "swim"],
    dog: ["drive", "paint", "read", "speek", "swim"]
  };
const selectElementSubject = document.getElementById('subject');
const imageElementSubject = document.getElementById('imageS');

const selectElementVerb = document.getElementById('verb');
const imageElementVerb = document.getElementById('imageV');

const selectElementItem = document.getElementById('item');
const imageElementItem = document.getElementById('imageI');
function updateVerb() {
    const selectedSubject = selectElementSubject.value;
    const allowedVerb = mapping[selectedSubject];
    Array.from(selectElementVerb.options).forEach(option => {
        if (allowedVerb.includes(option.value)) {
          option.disabled = true; // Делаем опцию доступной
        } else {
          option.disabled = false; // Закрываем опцию
        }
      });
    //selectElementVerb.value = Array.from(selectElementVerb.option).find(option => !option.disabled)?.value || "";
}
selectElementSubject.addEventListener("change", updateVerb);
selectElementSubject.addEventListener('change', () => {
    if (selectElementSubject.value === 'dog') {
        
    }
    imageElementSubject.src = "Subject/" + selectElementSubject.value + ".jpg";
  });

selectElementVerb.addEventListener('change', () => {
    imageElementVerb.src = "Verb/" + selectElementVerb.value + ".png";
  });

selectElementItem.addEventListener('change', () => {
    imageElementItem.src = "Item/" + selectElementItem.value + ".jpg";
  });


function randomSubject() {
	let r = Math.floor(Math.random() * document.getElementById('subject').options.length);
    selectElementSubject.selectedIndex = r;
    imageElementSubject.src = "Subject/" + document.getElementById('subject').value + ".jpg";
    
}

function randomVerb() {
	let r = Math.floor(Math.random() * document.getElementById('verb').options.length);
    if (selectElementSubject.selectedIndex == 6 || selectElementSubject.selectedIndex == 6){
        let n = 1;
        while (r == 0 || r == 4 || r == 6 || r == 10 || r == 12) {
            console.log(n);
            n++;
            r = Math.floor(Math.random() * document.getElementById('verb').options.length);
        } 
    }
    document.getElementById('verb').selectedIndex = r;
    document.getElementById('imageV').src = "Verb/" + document.getElementById('verb').value + ".png";
}

function randomItem() {
	let r = Math.floor(Math.random() * document.getElementById('item').options.length);
    document.getElementById('item').selectedIndex = r;
    document.getElementById('imageI').src = "Item/" + document.getElementById('item').value + ".jpg";
}

function randomAll(){
    randomSubject();
    randomVerb();
    randomItem();
}