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
const signinBtn = document.getElementById('signinBtn');
const strengthIndicator = document.getElementById('strengthIndicator');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

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
        showEmailFeedback('Invalid email format', 'error');
        return false;
    }

    showEmailFeedback('Email is valid', 'success');
    return true;
}

function showEmailFeedback(message, type) {
    emailFeedback.innerHTML = `<i class="bi bi-${type === 'success' ? 'check-circle-fill' : 'exclamation-circle-fill'}"></i> ${message}`;
    emailFeedback.className = `validation-feedback ${type}`;
    emailInput.style.borderColor = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#e5e7eb';
}

// Password Validation
passwordInput.addEventListener('focus', function () {
    strengthIndicator.style.display = 'block';
});

passwordInput.addEventListener('input', function () {
    validatePassword(this.value);
});

passwordInput.addEventListener('blur', function () {
    if (!this.value) {
        strengthIndicator.style.display = 'none';
        strengthText.textContent = '';
    }
});

function validatePassword(password) {
    if (!password) {
        showPasswordFeedback('Password is required', 'error');
        updateStrengthMeter(0);
        return false;
    }

    // Calculate strength (0-5)
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    // Update strength meter
    updateStrengthMeter(strength);

    // Password is valid if at least 4 criteria met
    const isValid = strength >= 4;

    if (isValid) {
        showPasswordFeedback('Strong password', 'success');
    } else {
        showPasswordFeedback('Password is too weak', 'error');
    }

    return isValid;
}

function updateStrengthMeter(strength) {
    const classes = ['', 'weak', 'fair', 'good', 'strong', 'strong'];
    const texts = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Excellent'];

    if (strength > 0) {
        strengthBar.className = `strength-bar ${classes[strength]}`;
        strengthText.textContent = texts[strength] + ' password';
    }
}

function showPasswordFeedback(message, type) {
    passwordFeedback.innerHTML = `<i class="bi bi-${type === 'success' ? 'check-circle-fill' : 'exclamation-circle-fill'}"></i> ${message}`;
    passwordFeedback.className = `validation-feedback ${type}`;
    passwordInput.style.borderColor = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#e5e7eb';
}

// Toast Notification System
function showToast(title, message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    const toastId = 'toast-' + Date.now();

    const icons = {
        success: 'bi-check-circle-fill',
        error: 'bi-exclamation-circle-fill',
        info: 'bi-info-circle-fill'
    };

    const toastHtml = `
                <div id="${toastId}" class="toast ${type}">
                    <i class="bi ${icons[type]}"></i>
                    <div class="toast-content">
                        <div class="toast-title">${title}</div>
                        <div class="toast-message">${message}</div>
                    </div>
                    <i class="bi bi-x toast-close" onclick="this.parentElement.remove()"></i>
                </div>
            `;

    toastContainer.insertAdjacentHTML('beforeend', toastHtml);

    setTimeout(() => {
        const toast = document.getElementById(toastId);
        if (toast) toast.remove();
    }, 5000);
}

// Form Submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
        showToast('Validation Error', 'Please check your input', 'error');
        return;
    }

    // Show loading state
    signinBtn.classList.add('loading');

    // Simulate API call
    setTimeout(() => {
        signinBtn.classList.remove('loading');
        showToast('Success', 'Login successful!', 'success');

        if (document.getElementById('rememberMe').checked) {
            localStorage.setItem('savedEmail', email);
        }
    }, 2000);
});

// Social Login Handler
function socialLogin(provider) {
    showToast('Social Login', `Connecting to ${provider}...`, 'info');
}

// Forgot Password Handler
document.getElementById('forgotPassword').addEventListener('click', function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (email && validateEmail(email)) {
        showToast('Reset Link Sent', `Check your email`, 'success');
    } else {
        showToast('Email Required', 'Please enter your email', 'info');
        emailInput.focus();
    }
});

// Sign Up Handler
document.getElementById('signupLink').addEventListener('click', function (e) {
    e.preventDefault();
    showToast('Create Account', 'Redirecting to signup...', 'info');
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