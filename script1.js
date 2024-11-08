document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Проверка на совпадение паролей
    if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
    } else {
        alert('Регистрация прошла успешно!');
        // Здесь вы можете добавить код для отправки данных на сервер
        // Например, используя fetch или XMLHttpRequest
    }
});
