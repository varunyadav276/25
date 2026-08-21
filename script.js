// script.js
const loginBtn = document.getElementById('login-btn');
const passwordInput = document.getElementById('password-input');
const sceneLogin = document.getElementById('scene-login');
const sceneLoading = document.getElementById('scene-loading');
const loadingText = document.getElementById('loading-text');
const errorMsg = document.getElementById('error-msg');

// Set your custom password here (maybe a special date or inside joke)
const CORRECT_PASSWORD = "iloveyou"; 

loginBtn.addEventListener('click', () => {
    // Check if the password matches (ignoring capital letters or extra spaces)
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

function startLoadingSequence() {
    let dotCount = 0;
    let cycles = 0;
    const maxCycles = 3; // How many times it loops before moving to Scene 2

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
            
            // Temporary alert until we build Scene 2
            console.log("Ready for Scene 2!"); 
            loadingText.innerText = "Complete!";
        }
    }, 400); // The dots update every 400 milliseconds
}
