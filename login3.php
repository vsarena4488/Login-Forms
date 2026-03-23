<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOG IN | Minimalist Design</title>
    
    <!-- Bootstrap 5 CSS (minimal use) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons - subtle icons only -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    
    <!-- Google Fonts - SF Pro inspired (Inter) -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="../CSS CODE/login3.css">

    <!-- Custom JS -->
    <script src="../JS CODE/login3.js" defer></script>
</head>
<body>
    <!-- Toast Container -->
    <div class="toast-container" id="toastContainer"></div>

    <!-- Main Container -->
    <div class="login-container">
        <!-- Logo Section -->
        <div class="logo-section">
            <div class="logo-icon">
                <i class="bi bi-trophy text-primary "></i>
            </div>
            <div class="logo-text">VISHAL</div>
            <div class="logo-sub">minimal • elegant • premium</div>
        </div>

        <!-- Login Card -->
        <div class="login-card">
            <!-- Form Title -->
            <div class="form-title">
                <h1>LOG IN</h1>
                <p>Enter your credentials to access your account</p>
            </div>

            <!-- Login Form -->
            <form id="loginForm" novalidate>
                <!-- Email Field -->
                <div class="form-group">
                    <label class="form-label">Email address</label>
                    <div class="input-wrapper">
                        <i class="bi bi-envelope input-icon"></i>
                        <input type="email" class="form-control" id="email" 
                               placeholder="name@company.com" autocomplete="email">
                    </div>
                    <div class="validation-feedback" id="emailFeedback"></div>
                </div>

                <!-- Password Field -->
                <div class="form-group">
                    <div class="d-flex justify-content-between align-items-center">
                        <label class="form-label">Password</label>
                    </div>
                    <div class="password-wrapper">
                        <i class="bi bi-lock input-icon"></i>
                        <input type="password" class="form-control" id="password" 
                               placeholder="••••••••" autocomplete="current-password">
                        <i class="bi bi-eye password-toggle" id="togglePassword"></i>
                    </div>
                    <div class="validation-feedback" id="passwordFeedback"></div>

                    <!-- Password Requirements (subtle, hidden by default) -->
                    <div class="password-requirements" id="passwordRequirements" style="display: none;">
                        <div class="requirements-title">Password must include:</div>
                        <div class="requirement-item invalid" id="reqLength">
                            <i class="bi bi-circle"></i>
                            <span>At least 8 characters</span>
                        </div>
                        <div class="requirement-item invalid" id="reqNumber">
                            <i class="bi bi-circle"></i>
                            <span>At least one number</span>
                        </div>
                        <div class="requirement-item invalid" id="reqLower">
                            <i class="bi bi-circle"></i>
                            <span>At least one lowercase letter</span>
                        </div>
                        <div class="requirement-item invalid" id="reqUpper">
                            <i class="bi bi-circle"></i>
                            <span>At least one uppercase letter</span>
                        </div>
                    </div>
                </div>

                <!-- Options Row -->
                <div class="options-row">
                    <div class="checkbox-group">
                        <input type="checkbox" id="rememberMe">
                        <label for="rememberMe">Keep me signed in</label>
                    </div>
                    <a href="#" class="forgot-link" id="forgotPassword">
                        Forgot password?
                    </a>
                </div>

                <!-- Login Button -->
                <button type="submit" class="btn-login" id="loginBtn">
                    <i class="bi bi-arrow-right"></i>
                    <span class="btn-text">LOG IN</span>
                    <span class="spinner"></span>
                </button>

                <!-- Divider -->
                <div class="divider">
                    <span class="divider-line"></span>
                    <span>or</span>
                    <span class="divider-line"></span>
                </div>

                <!-- Social Login (minimal) -->
                <div class="social-login">
                    <button type="button" class="social-btn google" onclick="socialLogin('google')" title="Continue with Google">
                        <i class="bi bi-google"></i>
                    </button>
                    <button type="button" class="social-btn apple" onclick="socialLogin('apple')" title="Continue with Apple">
                        <i class="bi bi-apple"></i>
                    </button>
                    <button type="button" class="social-btn facebook" onclick="socialLogin('facebook')" title="Continue with Facebook">
                        <i class="bi bi-facebook"></i>
                    </button>
                </div>

                <!-- Sign Up Link -->
                <div class="signup-section">
                    <p>
                        New to VISHAL?
                        <a href="#" id="signupLink">Create an account</a>
                    </p>
                </div>
            </form>
        </div>

        <!-- Footer -->
        <div class="footer">
            <a href="#">Privacy</a>
            <span>•</span>
            <a href="#">Terms</a>
            <span>•</span>
            <a href="#">Contact</a>
        </div>
    </div>

</body>
</html>