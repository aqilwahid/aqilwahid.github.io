const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.documentElement.style.setProperty('--background-color', '#333');
        document.documentElement.style.setProperty('--text-color', '#fafafa');
        document.documentElement.style.setProperty('--header-background', '#444');
        document.documentElement.style.setProperty('--footer-background', '#444');
        document.documentElement.style.setProperty('--footer-text-color', '#fafafa');
        themeToggle.textContent = '🌚';
    } else {
        document.documentElement.style.setProperty('--background-color', '#fafafa');
        document.documentElement.style.setProperty('--text-color', '#333');
        document.documentElement.style.setProperty('--header-background', '#fff');
        document.documentElement.style.setProperty('--footer-background', '#333');
        document.documentElement.style.setProperty('--footer-text-color', '#fff');
        themeToggle.textContent = '🌞';
    }
});
