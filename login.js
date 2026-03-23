// ===== DOM Elements =====
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailValidation = document.getElementById('emailValidation');
const passwordValidation = document.getElementById('passwordValidation');
const togglePassword = document.getElementById('togglePassword');
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const passwordRequirements = document.getElementById('passwordRequirements');

// Password requirement elements
const reqLength = document.getElementById('reqLength');
const reqNumber = document.getElementById('reqNumber');
const reqLower = document.getElementById('reqLower');
const reqUpper = document.getElementById('reqUpper');
const reqSpecial = document.getElementById('reqSpecial');

// ===== Password Toggle =====
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('bi-eye');
    this.classList.toggle('bi-eye-slash');
});

// ===== Real-time Email Validation =====
emailInput.addEventListener('input', function () {
    validateEmail(this.value);
});

function validateEmail(email) {
    if (!email) {
        showEmailValidation('Email is required', 'error');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showEmailValidation('Please enter a valid email address', 'error');
        return false;
    }

    showEmailValidation('Email is valid', 'success');
    return true;
}

function showEmailValidation(message, type) {
    emailValidation.innerHTML = `<i class="bi bi-${type === 'success' ? 'check-circle-fill' : 'exclamation-circle-fill'}"></i> ${message}`;
    emailValidation.className = `validation-message ${type}`;

    // Update input styling
    if (type === 'success') {
        emailInput.style.borderColor = '#38a169';
    } else if (type === 'error') {
        emailInput.style.borderColor = '#e53e3e';
    } else {
        emailInput.style.borderColor = '#e2e8f0';
    }
}

// ===== Password Validation with Requirements =====
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
        showPasswordValidation('Password is required', 'error');
        return false;
    }

    // Check requirements
    const hasLength = password.length >= 8;
    const hasNumber = /[0-9]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasSpecial = /[^a-zA-Z0-9]/.test(password);

    // Update requirement items
    updateRequirement(reqLength, hasLength);
    updateRequirement(reqNumber, hasNumber);
    updateRequirement(reqLower, hasLower);
    updateRequirement(reqUpper, hasUpper);
    updateRequirement(reqSpecial, hasSpecial);

    // Calculate overall validity
    const isValid = hasLength && hasNumber && hasLower && hasUpper && hasSpecial;

    if (isValid) {
        showPasswordValidation('Password meets all requirements', 'success');
    } else {
        const missing = [];
        if (!hasLength) missing.push('8+ characters');
        if (!hasNumber) missing.push('number');
        if (!hasLower) missing.push('lowercase');
        if (!hasUpper) missing.push('uppercase');
        if (!hasSpecial) missing.push('special character');

        showPasswordValidation(`Missing: ${missing.join(', ')}`, 'error');
    }

    return isValid;
}

function updateRequirement(element, isValid) {
    element.className = `requirement-item ${isValid ? 'valid' : 'invalid'}`;
    element.querySelector('i').className = isValid ? 'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
}

function showPasswordValidation(message, type) {
    passwordValidation.innerHTML = `<i class="bi bi-${type === 'success' ? 'check-circle-fill' : 'exclamation-circle-fill'}"></i> ${message}`;
    passwordValidation.className = `validation-message ${type}`;

    // Update input styling
    if (type === 'success') {
        passwordInput.style.borderColor = '#38a169';
    } else if (type === 'error') {
        passwordInput.style.borderColor = '#e53e3e';
    } else {
        passwordInput.style.borderColor = '#e2e8f0';
    }
}

// ===== Form Submission =====
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Validate all fields
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
        showToast('Validation Error', 'Please fix the errors above', 'error');
        return;
    }

    // Show loading state
    loginBtn.classList.add('loading');

    // Simulate API call
    setTimeout(() => {
        // Hide loading state
        loginBtn.classList.remove('loading');

        // Show success message
        showToast('Login Successful', 'Redirecting to dashboard...', 'success');

        // Save to localStorage if remember me is checked
        if (document.getElementById('rememberMe').checked) {
            localStorage.setItem('rememberedEmail', email);
        }

        // Simulate redirect
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    }, 2000);
});

// ===== Toast Notification System =====
function showToast(title, message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    const toastId = 'toast-' + Date.now();

    const icons = {
        success: 'bi-check-circle-fill',
        error: 'bi-exclamation-circle-fill',
        info: 'bi-info-circle-fill'
    };

    const toastHtml = `
                <div id="${toastId}" class="toast-message ${type}">
                    <i class="bi ${icons[type]}"></i>
                    <div class="toast-content">
                        <div class="toast-title">${title}</div>
                        <div class="toast-text">${message}</div>
                    </div>
                    <i class="bi bi-x toast-close" onclick="this.parentElement.remove()"></i>
                </div>
            `;

    toastContainer.insertAdjacentHTML('beforeend', toastHtml);

    // Auto remove after 5 seconds
    setTimeout(() => {
        const toast = document.getElementById(toastId);
        if (toast) toast.remove();
    }, 5000);
}

// ===== Social Login Handler =====
function socialLogin(provider) {
    showToast('Social Login', `Connecting to ${provider}...`, 'info');

    // Simulate OAuth flow
    setTimeout(() => {
        showToast('Demo Mode', `${provider} login would open in production`, 'info');
    }, 1500);
}

// ===== Forgot Password Handler =====
document.getElementById('forgotPassword').addEventListener('click', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (email && validateEmail(email)) {
        showToast('Password Reset', `Reset link sent to ${email}`, 'success');
    } else {
        showToast('Password Reset', 'Please enter your email address first', 'info');
        emailInput.focus();
    }
});

// ===== Help Link Handler (NEW) =====
document.getElementById('helpLink').addEventListener('click', function (e) {
    e.preventDefault();
    showToast('Help Center', 'Redirecting to support page...', 'info');

    setTimeout(() => {
        window.location.href = 'help.html';
    }, 1500);
});

// ===== Sign Up Handler =====
document.getElementById('signupLink').addEventListener('click', function (e) {
    e.preventDefault();
    showToast('Sign Up', 'Redirecting to registration page...', 'info');

    setTimeout(() => {
        window.location.href = 'register.html';
    }, 1500);
});

// ===== Check for Remembered Email =====
document.addEventListener('DOMContentLoaded', function () {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        emailInput.value = rememberedEmail;
        document.getElementById('rememberMe').checked = true;
        validateEmail(rememberedEmail);
    }

    // Welcome toast
    setTimeout(() => {
        showToast('Welcome', 'Please Log In to continue', 'info');
    }, 500);
});

// ===== Input Focus Effects =====
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.querySelector('.input-icon').style.color = '#667eea';
    });

    input.addEventListener('blur', function () {
        if (!this.value) {
            this.parentElement.querySelector('.input-icon').style.color = '#a0aec0';
        }
    });
});

// ===== Additional Login Features (NEW) =====

// Show/Hide password requirements based on input
passwordInput.addEventListener('keyup', function () {
    if (this.value.length > 0) {
        passwordRequirements.style.display = 'block';
    }
});

// Auto-dismiss validation messages on typing
emailInput.addEventListener('keydown', function () {
    if (emailValidation.classList.contains('error')) {
        emailValidation.style.opacity = '0.5';
    }
});

emailInput.addEventListener('keyup', function () {
    emailValidation.style.opacity = '1';
});

// Add keyboard support (Enter key already works via form submit)

// Prevent multiple rapid form submissions
let isSubmitting = false;
loginForm.addEventListener('submit', function (e) {
    if (isSubmitting) {
        e.preventDefault();
        return;
    }
    isSubmitting = true;
    setTimeout(() => {
        isSubmitting = false;
    }, 3000);
});

// Session timeout warning (simulated)
let sessionTimer;
function resetSessionTimer() {
    clearTimeout(sessionTimer);
    sessionTimer = setTimeout(() => {
        showToast('Session Timeout', 'You will be logged out due to inactivity', 'warning');
    }, 300000); // 5 minutes
}

// Reset timer on user activity
['click', 'keypress', 'scroll', 'mousemove'].forEach(event => {
    document.addEventListener(event, resetSessionTimer);
});

// Initialize session timer
resetSessionTimer();