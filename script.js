document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            localStorage.setItem('theme', 'default');
        } else {
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});


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
