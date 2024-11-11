const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light-theme';
document.body.classList.add(currentTheme);

function toggleTheme() {
    const newTheme = document.body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme';

    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(newTheme);

    localStorage.setItem('theme', newTheme)
}

themeToggleBtn.addEventListener('click', toggleTheme);



function add7 (x) {
    return x + 7;
}

console.log(add7(2));
console.log(add7(9));

function multiply (a, b) {
    return a * b;
}

console.log(multiply(2,3));

function capitalize () {
    return toString();
}


console.log(capitalize(Hello));