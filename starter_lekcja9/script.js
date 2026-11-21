"use strict";

// 1. Zmienna przechowująca stan licznika
let licznik = 0;

// 2. Pobranie elementów wyświetlaczy ze strony HTML
const counterDisplay = document.getElementById('counter-display');
const randomDisplay = document.getElementById('random-display');

// 3. Funkcja zwiększająca licznik o 1 i aktualizująca wyświetlacz
function addPoint() {
    licznik++;
    if (counterDisplay) {
        counterDisplay.textContent = licznik;
    }
}

// 4. Funkcja resetująca licznik do zera
function resetCounter() {
    licznik = 0;
    if (counterDisplay) {
        counterDisplay.textContent = licznik;
    }
}

// 5. Tablica z elementami do losowania
const items = [
    "Nekromanta z Żabki",
    "Rycerz Kartonowej Tarczy",
    "Alchemik Rosółu",
    "Berserker po Trzech Kawach",
    "Bard od Disco Polo",
    "Druid Gołębi",
    "Mnich Bez Wi-Fi",
    "zakrzepica żył głębokich"
];

// 6. Funkcja losująca element z tablicy i wyświetlająca go na stronie
function drawItem() {
    const randomIndex = Math.floor(Math.random() * items.length);
    if (randomDisplay) {
        randomDisplay.textContent = items[randomIndex];
    }
}

// 7. Animacja fali po kliknięciu w dowolny przycisk
document.querySelectorAll('button').forEach(przycisk => {
    przycisk.addEventListener('click', function (e) {
        const fala = document.createElement('span');
        fala.classList.add('fala-klik');

        const prostokat = this.getBoundingClientRect();
        const rozmiar = Math.max(prostokat.width, prostokat.height);
        fala.style.width = fala.style.height = `${rozmiar}px`;
        fala.style.left = `${e.clientX - prostokat.left - rozmiar / 2}px`;
        fala.style.top = `${e.clientY - prostokat.top - rozmiar / 2}px`;

        this.appendChild(fala);
        setTimeout(() => fala.remove(), 500);
    });
});

// 8. Oczy podążające za kursorem myszki
document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.eye');

    eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        if (!pupil) return;

        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const maxDistance = 18;
        const moveX = Math.cos(angle) * maxDistance;
        const moveY = Math.sin(angle) * maxDistance;

        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// 9. Wylatywanie kozy po kliknięciu w nos
const nose = document.getElementById('nose');

if (nose) {
    nose.addEventListener('click', () => {
        const koza = document.createElement('span');
        koza.textContent = '🐐';
        koza.classList.add('wylatujaca-koza');

        const rect = nose.getBoundingClientRect();
        koza.style.left = `${rect.left + rect.width / 2 - 16}px`;
        koza.style.top = `${rect.top + rect.height / 2}px`;

        const losoweX = (Math.random() - 0.5) * 240;
        koza.style.setProperty('--kierunek-x', `${losoweX}px`);

        document.body.appendChild(koza);

        setTimeout(() => {
            koza.remove();
        }, 1100);
    });
}
