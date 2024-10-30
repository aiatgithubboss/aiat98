document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Проверяем, сохранена ли тема в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme); // Применяем сохранённую тему
    }

    // Обработчик события для кнопки смены темы
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            body.classList.add('default');
            localStorage.setItem('theme', 'default'); // Сохраняем выбранную тему
        } else {
            body.classList.remove('default');
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark'); // Сохраняем выбранную тему
        }
    });
});
