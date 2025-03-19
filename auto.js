


document.addEventListener("DOMContentLoaded", function () {
    const numCircles = 40; // Numărul de cerculețe (ajustabil)
    const body = document.body;
    const pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
    );

    for (let i = 0; i < numCircles; i++) {
        let circle = document.createElement("div");
        circle.classList.add("bokeh");

        let size = Math.random() * 60 + 20; // Dimensiuni între 20px și 80px
        let posX = Math.random() * window.innerWidth;
        let posY = Math.random() * pageHeight; // Acum se distribuie pe toată pagina
        let duration = Math.random() * 5 + 5; // 5s - 10s animație
        let delay = Math.random() * 3; // Întârziere pentru efect natural

        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${posX}px`;
        circle.style.top = `${posY}px`;
        circle.style.animationDuration = `${duration}s`;
        circle.style.animationDelay = `${delay}s`;

        body.appendChild(circle);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.4 } // Elementul trebuie să fie vizibil în proporție de 20% pentru a se activa
    );

    hiddenElements.forEach(el => observer.observe(el));
});

