// Função para cifra de César
function caesarCipher(str, shift) {
    return str.split('').map(char => {
        const charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        }
        return char;
    }).join('');
}

// Timer para o dia 28/10 às 22:30
const targetDate = new Date(2023, 9, 28, 22, 30, 0);
const timerElement = document.getElementById('timer');

setInterval(() => {
    const now = new Date();
    const timeDiff = targetDate - now;

    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    timerElement.textContent = hours + "h " + minutes + "m " + seconds + "s";
}, 1000);

// Alterar imagem e link de acordo com a hora
const imageElement = document.getElementById('mainImage');
const linkElement = document.getElementById('codedLink');

setInterval(() => {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour === 17 || currentHour === 19 || currentHour === 20 || currentHour === 4 || currentHour === 5) {
        setTimeout(() => {
            imageElement.src = 'imagemPadrao.jpg';
        }, 10000);
        imageElement.src = 'imagemEspecial.jpg';
    }

    const currentHour12 = currentHour % 12 || 12;
    const originalURL = "https://seusite.com.br/original";
    const encryptedURL = caesarCipher(originalURL, currentHour12);
    linkElement.innerHTML = encryptedURL;

}, 1000);