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
const forgotLink = document.getElementById('forgotPassword');
const signupLink = document.getElementById('signupLink');

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

    showEmailFeedback('Valid email', 'success');
    return true;
}

function showEmailFeedback(message, type) {
    emailFeedback.innerHTML = `<i class="bi bi-${type === 'success' ? 'check-circle-fill' : 'exclamation-circle-fill'}"></i> ${message}`;
    emailFeedback.className = `validation-feedback ${type}`;
}

// Password Validation
passwordInput.addEventListener('input', function () {
    validatePassword(this.value);
});

function validatePassword(password) {
    if (!password) {
        showPasswordFeedback('Password is required', 'error');
        return false;
    }

    if (password.length < 6) {
        showPasswordFeedback('Minimum 6 characters', 'error');
        return false;
    }

    showPasswordFeedback('Valid password', 'success');
    return true;
}

function showPasswordFeedback(message, type) {
    passwordFeedback.innerHTML = `<i class="bi bi-${type === 'success' ? 'check-circle-fill' : 'exclamation-circle-fill'}"></i> ${message}`;
    passwordFeedback.className = `validation-feedback ${type}`;
}

// Toast Notification
function showToast(title, message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const id = 'toast-' + Date.now();

    const icons = {
        success: 'bi-check-circle-fill',
        error: 'bi-exclamation-circle-fill',
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

// Form Submit
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
        showToast('Error', 'Please check your details', 'error');
        return;
    }

    // Show loading
    loginBtn.classList.add('loading');

    // Simulate API call
    setTimeout(() => {
        loginBtn.classList.remove('loading');
        showToast('Welcome', 'Successfully signed in', 'success');

        if (document.getElementById('rememberMe').checked) {
            localStorage.setItem('savedEmail', email);
        }
    }, 1500);
});

// Social Login
function socialLogin(provider) {
    showToast('Continue with ' + provider, 'Redirecting...', 'info');
}

// Forgot Password
forgotLink.addEventListener('click', function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (email && validateEmail(email)) {
        showToast('Reset Link', 'Check your email for instructions', 'success');
    } else {
        showToast('Email Required', 'Please enter your email', 'info');
        emailInput.focus();
    }
});

// Sign Up
signupLink.addEventListener('click', function (e) {
    e.preventDefault();
    showToast('Create Account', 'Redirecting to registration', 'info');
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

// Input focus effects
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', function () {
        const icon = this.parentElement.querySelector('.input-icon');
        if (icon) icon.style.opacity = '1';
    });

    input.addEventListener('blur', function () {
        const icon = this.parentElement.querySelector('.input-icon');
        if (icon && !this.value) icon.style.opacity = '0.5';
    });
});