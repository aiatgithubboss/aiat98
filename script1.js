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

// script.js
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'rotateY(20deg) rotateX(15deg)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});
