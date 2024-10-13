document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Function to enable Dark Mode
    function enableDarkMode() {
        document.body.classList.add('dark-theme');
        localStorage.setItem('darkMode', 'true');
        themeToggle.textContent = '🌞';
    }

    // Function to disable Dark Mode
    function disableDarkMode() {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('darkMode', 'false');
        themeToggle.textContent = '🌚';
    }

    // Check initial state
    if (isDarkMode) {
        enableDarkMode();
    }

    // Listen for toggle button click
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
});