const profiles = [
    {
        name: 'Ana Gómez',
        role: 'Desarrolladora Frontend',
        description: "Arcaise is committed to revolutionizing the construction industry through digital integration. With expertise in construction management, software integration, and project monitoring, we provide tailored solutions to drive efficiency and optimize project outcomes.",
        imgSrc: 'https://via.placeholder.com/150'
    },
    {
        name: 'Luis Pérez',
        role: 'Diseñador UI/UX',
        description: "Arcaise is committed to revolutionizing the construction industry through digital integration. With expertise in construction management, software integration, and project monitoring, we provide tailored solutions to drive efficiency and optimize project outcomes.",
        imgSrc: 'https://via.placeholder.com/150'
    },
    {
        name: 'María Rodríguez',
        role: 'Gestora de Proyectos',
        description: "Arcaise is committed to revolutionizing the construction industry through digital integration. With expertise in construction management, software integration, and project monitoring, we provide tailored solutions to drive efficiency and optimize project outcomes.",
        imgSrc: 'https://via.placeholder.com/150'
    }
];

let currentIndex = 0;

function updateProfile() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        const img = item.querySelector('.profile-img');
        const name = item.querySelector('.profile-name');
        const role = item.querySelector('.profile-role');
        const description = item.querySelector('.profile-description');

        if (index === currentIndex) {
            img.src = profiles[currentIndex].imgSrc;
            name.textContent = profiles[currentIndex].name;
            role.textContent = profiles[currentIndex].role;
            description.textContent = profiles[currentIndex].description;
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function showProfile(index) {
    if (index < 0 || index >= profiles.length) return;
    currentIndex = index;
    const offset = -100 * currentIndex;
    document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}%)`;
    updateProfile();
}

function initializeCarousel() {
    updateProfile();
}

initializeCarousel();
