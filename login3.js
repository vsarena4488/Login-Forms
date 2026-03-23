// DOM Elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');
const togglePassword = document.getElementById('togglePassword');
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const passwordRequirements = document.getElementById('passwordRequirements');

// Password requirement elements
const reqLength = document.getElementById('reqLength');
const reqNumber = document.getElementById('reqNumber');
const reqLower = document.getElementById('reqLower');
const reqUpper = document.getElementById('reqUpper');

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
passwordInput.addEventListener('focus', function () {
    passwordRequirements.style.display = 'block';
});

passwordInput.addEventListener('input', function () {
    validatePassword(this.value);
});

passwordInput.addEventListener('blur', function () {
    if (!this.value) {
        passwordRequirements.style.display = 'none';
    }
});

function validatePassword(password) {
    if (!password) {
        showPasswordFeedback('Password is required', 'error');
        return false;
    }

    const hasLength = password.length >= 8;
    const hasNumber = /[0-9]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);

    // Update requirement items
    updateRequirement(reqLength, hasLength, '8+ characters');
    updateRequirement(reqNumber, hasNumber, 'number');
    updateRequirement(reqLower, hasLower, 'lowercase');
    updateRequirement(reqUpper, hasUpper, 'uppercase');

    const isValid = hasLength && hasNumber && hasLower && hasUpper;

    if (isValid) {
        showPasswordFeedback('Strong password', 'success');
    } else {
        showPasswordFeedback('Password needs improvement', 'error');
    }

    return isValid;
}

function updateRequirement(element, isValid, text) {
    if (isValid) {
        element.className = 'requirement-item valid';
        element.querySelector('i').className = 'bi bi-check-circle-fill';
    } else {
        element.className = 'requirement-item invalid';
        element.querySelector('i').className = 'bi bi-circle';
    }
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

// Form Submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
        showToast('Cannot LOG IN', 'Please check your information', 'error');
        return;
    }

    loginBtn.classList.add('loading');

    setTimeout(() => {
        loginBtn.classList.remove('loading');
        showToast('Welcome back', 'Successfully signed in', 'success');

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
document.getElementById('forgotPassword').addEventListener('click', function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (email && validateEmail(email)) {
        showToast('Reset link sent', 'Check your email', 'success');
    } else {
        showToast('Email required', 'Please enter your email', 'info');
        emailInput.focus();
    }
});

// Sign Up
document.getElementById('signupLink').addEventListener('click', function (e) {
    e.preventDefault();
    showToast('Create account', 'Redirecting to sign up', 'info');
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

// Clean focus effects
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', function () {
        const icon = this.parentElement.querySelector('.input-icon');
        if (icon) icon.style.color = '#0071e3';
    });

    input.addEventListener('blur', function () {
        const icon = this.parentElement.querySelector('.input-icon');
        if (icon && !this.value) icon.style.color = '#86868b';
    });
});