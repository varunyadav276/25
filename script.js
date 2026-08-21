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

/* --- Scene 2 & 3 Styles --- */

.pop-in-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%; /* Makes the photo a circle */
    object-fit: cover;
    border: 4px solid #ff4d4d;
    transform: scale(0); /* Starts invisible */
    animation: popIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes popIn {
    to { transform: scale(1); }
}

.cake-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-100vh); /* Starts off-screen at the top */
    animation: dropDown 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    animation-delay: 0.5s; /* Waits for the photo to pop in first */
}

@keyframes dropDown {
    to { transform: translateY(0); }
}

/* Stacking the emojis so they look like one unit */
.flame {
    position: absolute;
    top: -30px;
    font-size: 40px;
    cursor: pointer;
    z-index: 10;
    transition: opacity 0.3s ease;
    animation: flicker 0.6s infinite alternate;
}

@keyframes flicker {
    from { transform: scale(1) rotate(-2deg); opacity: 1; }
    to { transform: scale(1.1) rotate(2deg); opacity: 0.8; }
}

.candle {
    font-size: 50px;
    margin-bottom: -20px; 
    z-index: 5;
}

.cake {
    font-size: 80px;
    z-index: 2;
}

.table {
    font-size: 100px;
    margin-top: -35px;
    z-index: 1;
}

.blow-text {
    margin-top: 20px;
    font-size: 20px;
    color: #ff4d4d;
    font-weight: bold;
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 2s; /* Text appears only after everything drops */
}

@keyframes fadeIn {
    to { opacity: 1; }
}
