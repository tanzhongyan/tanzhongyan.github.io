document.addEventListener("DOMContentLoaded", function() {
    const timeline = document.querySelector('.timeline');
    const images = document.querySelectorAll('.images img');

    let eventCount = 0;
    const maxEvents = 3;

    // Bouncing Images
    images.forEach((image) => {
        image.style.position = 'absolute';
        image.style.left = `${Math.random() * (window.innerWidth - 150)}px`;
        image.style.top = `${Math.random() * (window.innerHeight - 150)}px`;

        let deltaX = Math.random() * 4 + 1;
        let deltaY = Math.random() * 4 + 1;

        function moveImage() {
            let rect = image.getBoundingClientRect();

            if (rect.left <= 0 || rect.right >= window.innerWidth) {
                deltaX = -deltaX;
            }
            if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
                deltaY = -deltaY;
            }

            image.style.left = `${rect.left + deltaX}px`;
            image.style.top = `${rect.top + deltaY}px`;

            requestAnimationFrame(moveImage);
        }

        moveImage();
    });

    // Timeline event handler
    let lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            if (eventCount < maxEvents) {
                let event = document.createElement('div');
                event.classList.add('event');
                event.innerHTML = `<h3>New Event ${eventCount + 1}</h3><p>Details about the event...</p>`;
                timeline.appendChild(event);
                eventCount++;
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
});
