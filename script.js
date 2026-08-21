// script.js

// 1. Grab all our HTML elements
const loginBtn = document.getElementById('login-btn');
const passwordInput = document.getElementById('password-input');
const sceneLogin = document.getElementById('scene-login');
const sceneLoading = document.getElementById('scene-loading');
const loadingText = document.getElementById('loading-text');
const errorMsg = document.getElementById('error-msg');
const sceneCake = document.getElementById('scene-cake');
const flame = document.getElementById('flame');
const blowText = document.getElementById('blow-text');

// Set your custom password here
const CORRECT_PASSWORD = "iloveyou"; 

// 2. Scene 1: The Login Button Click
loginBtn.addEventListener('click', () => {
    if (passwordInput.value.trim().toLowerCase() === CORRECT_PASSWORD) {
        // Hide login, show loading
        sceneLogin.classList.add('hidden');
        sceneLoading.classList.remove('hidden');
        
        startLoadingSequence();
    } else {
        // Show error message
        errorMsg.classList.remove('hidden');
    }
});

// 3. Scene 1.5: The Loading Animation
function startLoadingSequence() {
    let dotCount = 0;
    let cycles = 0;
    const maxCycles = 3; 

    const loadingInterval = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        let dots = ".".repeat(dotCount);
        loadingText.innerText = "Loading" + dots;

        if (dotCount === 3) {
            cycles++;
        }

        // Once it finishes loading, stop the interval and trigger Scene 2
        if (cycles >= maxCycles) {
            clearInterval(loadingInterval);
            
            // Hide loading screen and show the cake screen
            sceneLoading.classList.add('hidden');
            sceneCake.classList.remove('hidden'); 
        }
    }, 400); 
}

// 4. Scene 3: Blowing out the candle
flame.addEventListener('click', () => {
    // Hide the flame and stop the flicker
    flame.style.opacity = '0';
    flame.style.animation = 'none'; 
    
    // Change the text
    blowText.innerText = "Yay! Happy Birthday! 🎉";
    
    // Start a 2.5 second timer before moving to the slideshow
    setTimeout(() => {
        console.log("Ready for the slideshow!");
        // We will trigger Scene 4 here next
    }, 2500);
});
