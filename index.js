async function loadHTML(elementId, filePath) {
    try{
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Ошибка загрузки ${filePath}: ${response.statusText}`);
        }
        const content = await response.text();
        document.getElementById(elementId).innerHTML = content;
    } catch (error) {
        console.error(`Error loading HTML: ${error}`);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header', '/header.html'); // Загрузка заголовка
    loadHTML('footer', '/footer.html'); // Загрузка подвала
});