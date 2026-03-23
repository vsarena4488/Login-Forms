// Initialize AOS
AOS.init({
    once: true,
    duration: 1000,
    easing: 'ease-out-cubic'
});

// DOM Elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');
const togglePassword = document.getElementById('togglePassword');
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const strengthMeter = document.getElementById('strengthMeter');
const strengthText = document.getElementById('strengthText');
const bars = ['bar1', 'bar2', 'bar3', 'bar4'].map(id => document.getElementById(id));

// Password Toggle
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('bi-eye');
    this.classList.toggle('bi-eye-slash');
});

// Email Validation
emailInput.addEventListener('input', function () {
    validateEmail(this.value);
});

function validateEmail(email) {
    if (!email) {
        showEmailFeedback('Email is required', 'error');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showEmailFeedback('Please enter a valid email', 'error');
        return false;
    }

    showEmailFeedback('Perfect!', 'success');
    return true;
}

function showEmailFeedback(message, type) {
    emailFeedback.innerHTML = `<i class="bi bi-${type === 'success' ? 'check-circle-fill' : 'exclamation-circle-fill'}"></i> ${message}`;
    emailFeedback.className = `validation-feedback ${type}`;
}

// Password Validation
passwordInput.addEventListener('focus', function () {
    strengthMeter.style.display = 'block';
});

passwordInput.addEventListener('input', function () {
    validatePassword(this.value);
});

passwordInput.addEventListener('blur', function () {
    if (!this.value) {
        strengthMeter.style.display = 'none';
    }
});

function validatePassword(password) {
    if (!password) {
        showPasswordFeedback('Password is required', 'error');
        updateStrength(0);
        return false;
    }

    // Check strength
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;

    updateStrength(strength);

    if (strength >= 3) {
        showPasswordFeedback('Great password!', 'success');
        return true;
    } else {
        showPasswordFeedback('Make it stronger', 'error');
        return false;
    }
}

function updateStrength(strength) {
    bars.forEach((bar, index) => {
        if (index < strength) {
            bar.classList.add('active');
        } else {
            bar.classList.remove('active');
        }
    });

    const labels = ['Very Weak', 'Weak', 'Good', 'Strong', 'Very Strong'];
    strengthText.textContent = labels[strength];
}

function showPasswordFeedback(message, type) {
    passwordFeedback.innerHTML = `<i class="bi bi-${type === 'success' ? 'check-circle-fill' : 'exclamation-circle-fill'}"></i> ${message}`;
    passwordFeedback.className = `validation-feedback ${type}`;
}

// Toast System
function showToast(title, message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const id = 'toast-' + Date.now();

    const icons = {
        success: 'bi-emoji-smile-fill',
        error: 'bi-emoji-frown-fill',
        info: 'bi-info-circle-fill'
    };

    const html = `
                <div id="${id}" class="toast ${type}">
                    <i class="bi ${icons[type]}"></i>
                    <div class="toast-content">
                        <div class="toast-title">${title}</div>
                        <div class="toast-message">${message}</div>
                    </div>
                    <i class="bi bi-x toast-close" onclick="this.parentElement.remove()"></i>
                </div>
            `;

    container.insertAdjacentHTML('beforeend', html);
    setTimeout(() => document.getElementById(id)?.remove(), 5000);
}

// Form Submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
        showToast('Oops!', 'Please check your details', 'error');
        return;
    }

    loginBtn.classList.add('loading');

    setTimeout(() => {
        loginBtn.classList.remove('loading');
        showToast('Welcome to Login! 🌟', 'Successfully signed in', 'success');

        if (document.getElementById('rememberMe').checked) {
            localStorage.setItem('savedEmail', email);
        }
    }, 1500);
});

// Social Login
function socialLogin(provider) {
    showToast('Connecting...', `Signing in with ${provider}`, 'info');
}

// Forgot Password
document.getElementById('forgotPassword').addEventListener('click', function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (email && validateEmail(email)) {
        showToast('Email sent! ✉️', 'Check your inbox', 'success');
    } else {
        showToast('Email needed', 'Please enter your email first', 'info');
        emailInput.focus();
    }
});

// Sign Up
document.getElementById('signupLink').addEventListener('click', function (e) {
    e.preventDefault();
    showToast('Creating account', 'Redirecting to sign up', 'info');
});

// Load saved email
document.addEventListener('DOMContentLoaded', function () {
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
        emailInput.value = savedEmail;
        document.getElementById('rememberMe').checked = true;
        validateEmail(savedEmail);
    }
});

// Character eye follow effect (optional)
document.addEventListener('mousemove', function (e) {
    const eyes = document.querySelectorAll('.eye::after');
    // This would require more complex implementation
    // Keeping it simple for the demo
});