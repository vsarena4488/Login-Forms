<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SaaS Login | Modern Split-Screen Design</title>
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    
    <!-- Google Fonts - Modern Sans Serif -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- AOS Animation Library -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="../CSS CODE/login2.css">

    <!-- Custom JS -->
    <script src="../JS CODE/login2.js" defer></script>
</head>
<body>
    <!-- Toast Container -->
    <div class="toast-container" id="toastContainer"></div>

    <!-- Split Screen Layout -->
    <div class="split-screen">
        <!-- Left Panel - Pure Abstract Art (No Text/Branding) -->
        <div class="left-panel" data-aos="fade-right" data-aos-duration="1000">
            <!-- Floating Shapes Only - No Text Elements -->
            <div class="floating-shapes">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
                <div class="shape shape-4"></div>
                <div class="shape shape-5"></div>
                <div class="shape shape-6"></div>
            </div>
        </div>
        
        <!-- Right Panel - Pure Login Form -->
        <div class="right-panel" data-aos="fade-left" data-aos-duration="1000">
            <div class="login-container">
                
                <!-- Header -->
                <div class="login-header">
                    <h2>Log In</h2>
                    <p>Enter your credentials to access your account</p>
                </div>
                
                <!-- Login Form -->
                <form id="loginForm" novalidate>
                    <!-- Email Field -->
                    <div class="form-group">
                        <label class="form-label">
                            <i class="bi bi-envelope-fill"></i>
                            Email address
                        </label>
                        <div class="input-wrapper">
                            <i class="bi bi-envelope input-icon"></i>
                            <input type="email" class="form-control" id="email" 
                                   placeholder="name@company.com" autocomplete="email">
                        </div>
                        <div class="validation-feedback" id="emailFeedback"></div>
                    </div>
                    
                    <!-- Password Field -->
                    <div class="form-group">
                        <label class="form-label">
                            <i class="bi bi-lock-fill"></i>
                            Password
                        </label>
                        <div class="password-wrapper">
                            <i class="bi bi-lock input-icon"></i>
                            <input type="password" class="form-control" id="password" 
                                   placeholder="Enter your password" autocomplete="current-password">
                            <i class="bi bi-eye password-toggle" id="togglePassword"></i>
                        </div>
                        <div class="validation-feedback" id="passwordFeedback"></div>
                        
                        <!-- Password Strength Indicator -->
                        <div class="password-strength" id="strengthIndicator" style="display: none;">
                            <div class="strength-bar" id="strengthBar"></div>
                        </div>
                        <div class="strength-text" id="strengthText"></div>
                    </div>
                    
                    <!-- Options Row -->
                    <div class="options-row">
                        <div class="checkbox-group">
                            <input type="checkbox" id="rememberMe">
                            <label for="rememberMe">Remember me</label>
                        </div>
                        <a href="#" class="forgot-link" id="forgotPassword">
                            Forgot password?
                        </a>
                    </div>
                    
                    <!-- Log In Button -->
                    <button type="submit" class="btn-signin" id="signinBtn">
                        <i class="bi bi-box-arrow-in-right"></i>
                        <span class="btn-text">Log In</span>
                        <span class="spinner"></span>
                    </button>
                    
                    <!-- Divider -->
                    <div class="divider">
                        <span class="divider-line"></span>
                        <span>or</span>
                        <span class="divider-line"></span>
                    </div>
                    
                    <!-- Social Login -->
                    <div class="social-login">
                        <button type="button" class="social-btn google" onclick="socialLogin('google')" title="Google">
                            <i class="bi bi-google"></i>
                        </button>
                        <button type="button" class="social-btn github" onclick="socialLogin('github')" title="GitHub">
                            <i class="bi bi-github"></i>
                        </button>
                        <button type="button" class="social-btn twitter" onclick="socialLogin('twitter')" title="Twitter">
                            <i class="bi bi-twitter-x"></i>
                        </button>
                    </div>
                    
                    <!-- Sign Up Link -->
                    <div class="signup-section">
                        <p>
                            Don't have an account?
                            <a href="#" id="signupLink">Create account</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    
</body>
</html>