// Event Handling Section
document.addEventListener('DOMContentLoaded', () => {
    // Button color change (Planet Colors)
    const colorButton = document.getElementById('color-button');
    const colors = ['#4fc3f7', '#7e57c2', '#26a69a', '#ffa726', '#ef5350'];
    let colorIndex = 0;

    colorButton.addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colors.length;
        colorButton.style.backgroundColor = colors[colorIndex];
        colorButton.style.transform = 'scale(1.1)';
        setTimeout(() => colorButton.style.transform = 'scale(1)', 200);
    });

    // Hover effect (Thruster Activation)
    const hoverArea = document.getElementById('hover-area');
    hoverArea.addEventListener('mouseenter', () => {
        hoverArea.textContent = 'Thrusters Activated! 🚀';
        hoverArea.style.backgroundColor = '#ffa726';
    });
    hoverArea.addEventListener('mouseleave', () => {
        hoverArea.textContent = 'Hover to activate thrusters!';
        hoverArea.style.backgroundColor = '#7e57c2';
    });

    // Key press detection (Space Navigation)
    const keyPress = document.getElementById('key-press');
    const navigationMessages = [
        'Navigating through asteroid field...',
        'Adjusting course...',
        'Scanning nearby planets...',
        'Checking star charts...',
        'Calculating trajectory...'
    ];

    document.addEventListener('keydown', (event) => {
        keyPress.textContent = `Key pressed: ${event.key} - ${navigationMessages[Math.floor(Math.random() * navigationMessages.length)]}`;
        keyPress.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });

    // Secret double-click action (Wormhole Discovery)
    const secretButton = document.getElementById('secret-button');
    let clickCount = 0;
    let clickTimer;

    secretButton.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 1) {
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 400);
        } else if (clickCount === 2) {
            clearTimeout(clickTimer);
            clickCount = 0;
            secretButton.textContent = 'Wormhole Discovered! 🌌';
            secretButton.style.backgroundColor = '#7e57c2';
            createSpaceEffect();
        }
    });

    // Image Gallery (Planet Exploration)
    const galleryImg = document.getElementById('gallery-img');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentImageIndex = 1;

    function updateImage() {
        galleryImg.style.opacity = '0';
        setTimeout(() => {
            galleryImg.src = `https://picsum.photos/400/300?random=${currentImageIndex}`;
            galleryImg.style.opacity = '1';
        }, 300);
    }

    prevBtn.addEventListener('click', () => {
        currentImageIndex = currentImageIndex > 1 ? currentImageIndex - 1 : 5;
        updateImage();
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = currentImageIndex < 5 ? currentImageIndex + 1 : 1;
        updateImage();
    });

    // Accordion (Space Mission Log)
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.style.display === 'block';
            
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.display = 'none';
            });

            if (!isOpen) {
                content.style.display = 'block';
                content.style.animation = 'slideIn 0.3s ease-out';
            }
        });
    });

    // Form Validation (Space Cadet Registration)
    const form = document.getElementById('validation-form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    function validateInput(input, validationFn, errorMessage) {
        const validationMessage = input.nextElementSibling;
        const isValid = validationFn(input.value);
        
        input.classList.toggle('success', isValid);
        input.classList.toggle('error', !isValid);
        validationMessage.textContent = isValid ? '' : errorMessage;
    }

    username.addEventListener('input', () => {
        validateInput(
            username,
            value => value.length >= 3,
            'Cadet name must be at least 3 characters long'
        );
    });

    email.addEventListener('input', () => {
        validateInput(
            email,
            value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            'Please enter a valid space communication ID'
        );
    });

    password.addEventListener('input', () => {
        validateInput(
            password,
            value => value.length >= 8 && /[A-Z]/.test(value) && /[0-9]/.test(value),
            'Security code must be at least 8 characters long and contain a number and uppercase letter'
        );
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isValid = [username, email, password].every(input => 
            input.classList.contains('success')
        );

        if (isValid) {
            alert('Space Cadet Registration Successful! Welcome aboard! 🚀');
            form.reset();
            [username, email, password].forEach(input => {
                input.classList.remove('success');
            });
        } else {
            alert('Please complete all registration requirements');
        }
    });
});

// Space Effect for Wormhole Discovery
function createSpaceEffect() {
    const colors = ['#4fc3f7', '#7e57c2', '#26a69a', '#ffa726', '#ef5350'];
    const particleCount = 100;
    const container = document.querySelector('.container');

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background-color: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}vw;
            transform: rotate(${Math.random() * 360}deg);
            animation: spaceFall ${Math.random() * 3 + 2}s linear;
            border-radius: 50%;
            box-shadow: 0 0 10px currentColor;
        `;

        container.appendChild(particle);

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }
}

// Add space animation to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes spaceFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(960deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 