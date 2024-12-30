document.addEventListener('DOMContentLoaded', function() {
    // Get the home link
    const homeLink = document.querySelector('a[href="home"]');
    // Get the section
    const section = document.querySelector('.section');

    // Add click event listener
    homeLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        section.classList.add('active'); // Show the section
    });
});


// canvas start

const myCanvas = document.querySelector('.myCanvas');

myCanvas.height = window.innerHeight ;
myCanvas.width = window.innerWidth;

const ctx = myCanvas.getContext('2d');

// array kosong buat isi elemen circle
let circles = [];

// membuat function
function createCircle() {
    return {
        x: Math.random() * innerWidth, 
        y: Math.random() * innerHeight, 
        radius: Math.random() * 50 + 10, 
        color: `hsl(${Math.random() * 360}, 70%, 60%)`, 
        speedX: (Math.random() - 0.5) * 5, 
        speedY: (Math.random() - 0.5) * 5 
    };
}

// looping cirlce dan memasukan function circle ke array kosong yang di siapkan 
for (let i = 0; i < 20; i++) { 
    circles.push(createCircle());
}

function draw() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);


    for (let circle of circles) {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
        ctx.closePath();

        circle.x += circle.speedX;
        circle.y += circle.speedY;

        if (circle.x + circle.radius > innerWidth || circle.x - circle.radius < 0) {
            circle.speedX = -circle.speedX;
        }
        if (circle.y + circle.radius > innerHeight || circle.y - circle.radius < 0) {
            circle.speedY = -circle.speedY;
        }
    }
    requestAnimationFrame(draw);
}
draw();
// canvas end

// header interaktif start

const actives = document.querySelector('.active');
const header = document.querySelector('.header');
let scrolls = 50;
window.addEventListener('scroll', () => {
    if (window.scrollY > scrolls) { 
       header.classList.add('active'); 
}   else {
       header.classList.remove('active'); 
}
});
// header interaktif end


// fitur fungsi start
// fungsi reader
const accessibilitypanel = document.querySelector('.accessibility-panel');
const fiturutama = document.querySelector('.fiturutama');
fiturutama.addEventListener('click', () => {
    accessibilitypanel.classList.toggle('aktif')
})


function suara() {
    function addHoverSound(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener('mouseenter', () => {
                if (pembaca) { 
                    const textToSpeak = element.getAttribute('data-voice');
                    const utterance = new SpeechSynthesisUtterance(textToSpeak);
                    window.speechSynthesis.speak(utterance);
                }
            });
        }
    }

    addHoverSound('.hover-text1');
    addHoverSound('.sectionText');
    addHoverSound('.layananText');
    addHoverSound('.h1text');
    addHoverSound('.ptext');
    addHoverSound('.sejarahtext');
    addHoverSound('.sejarahtext2');
    addHoverSound('.sejarahtext3');
    addHoverSound('.footertext1');
}

let pembaca = false; 
const accessibilityButton = document.querySelector('.accessibility-button'); 


accessibilityButton.addEventListener('click', () => {
    pembaca = !pembaca;

    accessibilityButton.textContent = pembaca ? 'Nonaktifkan Pembaca Pria' : 'Aktifkan Pembaca Pria';

    console.log(`Pembaca Pria aktif: ${pembaca}`);

    const statusElement = document.querySelector('#status');
    if (statusElement) {
        statusElement.innerHTML = `Pembaca Pria aktif: ${pembaca}`;
    }
});
suara();

// dileksia
let dilek = false;

function dileksiaa() {
    const body = document.body;
    
    dilek = !dilek;

    if (dilek) {
        body.style.fontFamily = 'Comic Neue, sans-serif';
    } else {
        body.style.fontFamily = 'Roboto, sans-serif';
    }
}

const disleksia = document.querySelector('.dileksia');
disleksia.addEventListener('click', dileksiaa);

// kontras warna

let ubahcontras = false; 

function contras() {
    const body = document.body;
    ubahcontras = !ubahcontras;
    
    if (ubahcontras) {
        body.classList.add('hightkontras');
    } else {
        body.classList.remove('hightkontras');
    }
}
const kontras = document.querySelector('.kontras');
kontras.addEventListener('click', contras);



// atur saturasi 
const saturasi = document.querySelector('.saturasi');
let rasi = false; 

function saturation() {
    rasi = !rasi;
    const body = document.body
    if (rasi) {
        body.style.filter = 'grayscale(100%)';
    } else {
        body.style.filter = 'none';
    }
}
saturasi.addEventListener('click', saturation);

// fungsi reader end


// fitur fungsi end