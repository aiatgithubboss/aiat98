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
function updateAvatar() {
    const fileInput = document.getElementById('avatar-upload');
    const avatar = document.getElementById('user-avatar');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            avatar.src = e.target.result; // Устанавливаем загруженное изображение как аватар
            localStorage.setItem('avatar', e.target.result); // Сохраняем изображение в localStorage
        };

        reader.readAsDataURL(fileInput.files[0]); // Читаем файл как Data URL
    }
}

// При загрузке страницы устанавливаем сохранённый аватар
document.addEventListener('DOMContentLoaded', function() {
    const savedAvatar = localStorage.getItem('avatar');
    if (savedAvatar) {
        document.getElementById('user-avatar').src = savedAvatar;
    }
});

