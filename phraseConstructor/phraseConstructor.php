<?php
// Подключение к базе данных
$host = "localhost";
$username = "root";
$password = "";
$database = "your_database_name";

$conn = new mysqli($host, $username, $password, $database);

// Проверка подключения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL-запрос для получения данных из таблицы subject
$sql = "SELECT name, image_path FROM subject";
$result = $conn->query($sql);

// Проверяем, есть ли записи в таблице
if ($result->num_rows > 0) {
    echo '<select name="subjects" id="subjects">';
    echo '<option value="" disabled selected>Выберите предмет</option>'; // Placeholder
    while ($row = $result->fetch_assoc()) {
        echo '<option value="' . htmlspecialchars($row['image_path']) . '">' . htmlspecialchars($row['name']) . '</option>';
    }
    echo '</select>';
} else {
    echo "Нет доступных данных для выбора.";
}

$conn->close();
?>
