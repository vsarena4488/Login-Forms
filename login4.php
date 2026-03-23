<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Login! | 3D Playful SaaS</title>
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    
    <!-- Google Fonts - Friendly Rounded Font -->
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- AOS Animation Library -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="../CSS CODE/login4.css">

    <!-- Custom JS -->
    <script src="../JS CODE/login4.js" defer></script>
</head>
<body>
    <!-- Soft Pastel Blobs -->
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>
    <div class="bg-blob blob-3"></div>

    <!-- Toast Container -->
    <div class="toast-container" id="toastContainer"></div>

    <!-- Main Container -->
    <div class="login-container">
        <div class="content-wrapper" data-aos="fade-up" data-aos-duration="1000">
            <!-- 3D Illustration Section -->
            <div class="illustration-section">
                <div class="scene-3d">
                    <div class="character">
                        <!-- Character Head -->
                        <div class="character-head">
                            <div class="hair"></div>
                            <div class="eyes">
                                <div class="eye eye-left"></div>
                                <div class="eye eye-right"></div>
                            </div>
                            <div class="cheeks">
                                <div class="cheek"></div>
                                <div class="cheek"></div>
                            </div>
                            <div class="mouth"></div>
                        </div>

                        <!-- Character Body -->
                        <div class="character-body">
                            <div class="hoodie">
                                <div class="hoodie-string hoodie-string-left"></div>
                                <div class="hoodie-string hoodie-string-right"></div>
                            </div>
                            
                            <!-- Arms -->
                            <div class="arm arm-left">
                                <div class="hand"></div>
                            </div>
                            <div class="arm arm-right">
                                <div class="hand"></div>
                            </div>
                            
                            <!-- Pocket -->
                            <div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); width: 100px; height: 40px; background: #ffb88c; border-radius: 30px; opacity: 0.5;"></div>
                        </div>
                    </div>

                    <!-- Floating Elements -->
                    <div class="floating-element floating-1">
                        <i class="bi bi-emoji-smile floating-icon"></i>
                    </div>
                    <div class="floating-element floating-2">
                        <i class="bi bi-heart-fill floating-icon"></i>
                    </div>
                    <div class="floating-element floating-3">
                        <i class="bi bi-star-fill floating-icon"></i>
                    </div>
                </div>
            </div>

            <!-- Login Card Section -->
            <div class="login-section">
                <div class="login-card">
                    <div class="welcome-text">
                        <h2>Welcome to Login!</h2>
                        <p>So happy to see you again ✨</p>
                    </div>

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
                                       placeholder="hello@design.com" autocomplete="email">
                            </div>
                            <div class="validation-feedback" id="emailFeedback"></div>
                        </div>

                        <!-- Password Field -->
                        <div class="form-group">
                            <div class="d-flex justify-content-between align-items-center">
                                <label class="form-label">
                                    <i class="bi bi-lock-fill"></i>
                                    Password
                                </label>
                                <a href="#" class="forgot-link" id="forgotPassword">
                                    Forgot?
                                </a>
                            </div>
                            <div class="password-wrapper">
                                <i class="bi bi-lock input-icon"></i>
                                <input type="password" class="form-control" id="password" 
                                       placeholder="••••••••" autocomplete="current-password">
                                <i class="bi bi-eye password-toggle" id="togglePassword"></i>
                            </div>
                            <div class="validation-feedback" id="passwordFeedback"></div>

                            <!-- Password Strength Meter -->
                            <div class="strength-meter" id="strengthMeter" style="display: none;">
                                <div class="strength-bars">
                                    <div class="strength-bar" id="bar1"></div>
                                    <div class="strength-bar" id="bar2"></div>
                                    <div class="strength-bar" id="bar3"></div>
                                    <div class="strength-bar" id="bar4"></div>
                                </div>
                                <div class="strength-text" id="strengthText"></div>
                            </div>
                        </div>

                        <!-- Options -->
                        <div class="options-row">
                            <div class="checkbox-group">
                                <input type="checkbox" id="rememberMe">
                                <label for="rememberMe">Keep me logged in</label>
                            </div>
                        </div>

                        <!-- Log in Button -->
                        <button type="submit" class="btn-login" id="loginBtn">
                            <i class="bi bi-arrow-right-circle"></i>
                            <span class="btn-text">Log in</span>
                            <span class="spinner"></span>
                        </button>

                        <!-- Divider -->
                        <div class="divider">
                            <span class="divider-line"></span>
                            <span>OR</span>
                            <span class="divider-line"></span>
                        </div>

                        <!-- Social Login -->
                        <div class="social-login">
                            <button type="button" class="social-btn google" onclick="socialLogin('Google')" title="Log in with Google">
                                <i class="bi bi-google"></i>
                            </button>
                            <button type="button" class="social-btn facebook" onclick="socialLogin('Facebook')" title="Log in with Facebook">
                                <i class="bi bi-facebook"></i>
                            </button>
                            <button type="button" class="social-btn twitter" onclick="socialLogin('Twitter')" title="Log in with Twitter">
                                <i class="bi bi-twitter-x"></i>
                            </button>
                        </div>

                        <!-- Sign Up -->
                        <div class="signup-section">
                            <p>
                                New here?
                                <a href="#" id="signupLink">
                                    Create an account <i class="bi bi-arrow-right"></i>
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
      
    </script>
</body>
</html>