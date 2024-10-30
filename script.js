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


