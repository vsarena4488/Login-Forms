<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VISHAL | Luxury Login</title>

    <!-- Bootstrap 5 CSS (minimal) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">

    <!-- Google Fonts - Elegant Serif & Sans Serif Combination -->
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap"
        rel="stylesheet">

    <!-- AOS Animation -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="../CSS CODE/login5.css">

    <!-- Custom JS -->
    <script src="../JS CODE/login5.js" defer></script>
</head>

<body>
    <!-- Luxury Background -->
    <div class="luxury-background"></div>
    <div class="spotlight"></div>
    <div class="gold-pattern"></div>

    <!-- Floating Gold Particles -->
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>

    <!-- Toast Container -->
    <div class="toast-container" id="toastContainer"></div>

    <!-- Main Container -->
    <div class="login-container" style="width: 697.6px;" data-aos-duration="1000">
        <!-- Premium Login Card -->
        <div class="login-card">
            <!-- Corner Accents -->
            <div class="corner corner-tl"></div>
            <div class="corner corner-tr"></div>
            <div class="corner corner-bl"></div>
            <div class="corner corner-br"></div>

            <!-- Logo Section -->
            <div class="logo-section">
                <div class="monogram">M</div>
                <div class="divider"></div>
                <div class="brand-name">VISHAL</div>
                <div class="brand-tagline">L'Art de Vivre</div>
            </div>

            <!-- Form Title -->
            <div class="form-title">
                <h2>Welcome Login</h2>
                <p>Sign in to your account</p>
            </div>

            <!-- Login Form -->
            <form id="loginForm" novalidate>
                <!-- Email Field -->
                <div class="form-group">
                    <label class="form-label">
                        <i class="bi bi-envelope-fill"></i>
                        Email
                    </label>
                    <div class="input-wrapper">
                        <i class="bi bi-envelope input-icon"></i>
                        <input type="email" class="form-control" id="email" placeholder="your@email.com"
                            autocomplete="email">
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
                        <input type="password" class="form-control" id="password" placeholder="••••••••"
                            autocomplete="current-password">
                        <i class="bi bi-eye password-toggle" id="togglePassword"></i>
                    </div>
                    <div class="validation-feedback" id="passwordFeedback"></div>
                </div>

                <!-- Options Row -->
                <div class="options-row">
                    <div class="checkbox-group">
                        <input type="checkbox" id="rememberMe">
                        <label for="rememberMe">Remember me</label>
                    </div>
                    <a href="#" class="forgot-link" id="forgotPassword">Forgot password?</a>
                </div>

                <!-- Sign In Button -->
                <button type="submit" class="btn-login" id="loginBtn">
                    <i class="bi bi-arrow-right"></i>
                    <span class="btn-text">Sign In</span>
                    <span class="spinner"></span>
                </button>

                <!-- Divider -->
                <div class="divider">
                    <span class="divider-line"></span>
                    
                    <span class="divider-line"></span>
                </div>

                <!-- Social Login -->
                <div class="social-login">
                    <button type="button" class="social-btn" onclick="socialLogin('Google')"
                        title="Sign in with Google">
                        <i class="bi bi-google"></i>
                    </button>
                    <button type="button" class="social-btn" onclick="socialLogin('Apple')" title="Sign in with Apple">
                        <i class="bi bi-apple"></i>
                    </button>
                    <button type="button" class="social-btn" onclick="socialLogin('Facebook')"
                        title="Sign in with Facebook">
                        <i class="bi bi-facebook"></i>
                    </button>
                </div>

                <!-- Sign Up Link -->
                <div class="signup-section">
                    <p>
                        New to VISHAL?
                        <a href="#" id="signupLink">Create account</a>
                    </p>
                </div>
            </form>
        </div>

        <!-- Footer -->
        <div class="footer">
            <span>PRIVACY</span>
            <span>•</span>
            <span>TERMS</span>
            <span>•</span>
            <span>COLLECTION</span>
        </div>
    </div>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
</body>

</html>