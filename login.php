<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Login | Secure Dashboard</title>
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    
    <!-- Google Fonts - Inter for modern typography -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Custom CSS for styling -->
     <link rel="stylesheet" href="../CSS CODE/login.css">
</head>
<body>
    <!-- Animated background shapes -->
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>

    <!-- Toast notification container -->
    <div class="toast-container" id="toastContainer"></div>

    <!-- Main container -->
    <div class="login-container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card login-card">
                    <div class="row g-0">
                        <!-- Left panel - Login Info (CHANGED from Welcome to Login Info) -->
                        <div class="col-lg-6">
                            <div class="brand-panel">
                                <div class="brand-icon">
                                    <i class="bi bi-box-arrow-in-right"></i>
                                </div>
                                <h2 class="brand-title">Access Your Account</h2>
                                <p class="brand-description">
                                    Secure login with multi-factor authentication and enterprise-grade protection.
                                </p>
                                
                                <ul class="feature-list">
                                    <li class="feature-item">
                                        <div class="feature-icon">
                                            <i class="bi bi-shield-lock"></i>
                                        </div>
                                        <div class="feature-text">
                                            <h6>Secure Authentication</h6>
                                            <small>2FA & biometric support</small>
                                        </div>
                                    </li>
                                    <li class="feature-item">
                                        <div class="feature-icon">
                                            <i class="bi bi-clock-history"></i>
                                        </div>
                                        <div class="feature-text">
                                            <h6>Session Management</h6>
                                            <small>Track active sessions</small>
                                        </div>
                                    </li>
                                    <li class="feature-item">
                                        <div class="feature-icon">
                                            <i class="bi bi-device"></i>
                                        </div>
                                        <div class="feature-text">
                                            <h6>Cross-Platform</h6>
                                            <small>Access from any device</small>
                                        </div>
                                    </li>
                                </ul>
                                
                                <!-- Security Tips (CHANGED from Testimonial to Security Tips) -->
                                <div class="mt-4 p-3" style="background: rgba(255,255,255,0.1); border-radius: 16px;">
                                    <div class="d-flex align-items-center gap-2 mb-2">
                                        <i class="bi bi-shield-check text-warning"></i>
                                        <span class="fw-semibold">Security Tips</span>
                                    </div>
                                    <ul class="small mb-0 ps-3" style="color: rgba(255,255,255,0.9);">
                                        <li class="mb-1">Use a strong, unique password</li>
                                        <li class="mb-1">Enable two-factor authentication</li>
                                        <li class="mb-1">Don't share your credentials</li>
                                    </ul>
                                </div>
                                
                                <!-- Help Link (NEW) -->
                                <div class="text-center mt-4">
                                    <a href="#" id="helpLink" class="text-white text-decoration-none small" style="opacity: 0.8;">
                                        <i class="bi bi-question-circle"></i> Need help signing in?
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Right panel - Login form (SAME but with improved validation) -->
                        <div class="col-lg-6">
                            <div class="form-panel">
                                <div class="form-header">
                                    <h3>Log In</h3>
                                    <p>Enter your credentials to continue</p>
                                </div>
                                
                                <form id="loginForm" novalidate>
                                    <!-- Email field (SAME) -->
                                    <div class="form-group">
                                        <label class="form-label">
                                            <i class="bi bi-envelope-fill"></i>
                                            Email Address
                                        </label>
                                        <div class="input-wrapper">
                                            <i class="bi bi-envelope input-icon"></i>
                                            <input type="email" class="form-control" id="email" 
                                                   placeholder="name@company.com" autocomplete="email">
                                        </div>
                                        <div class="validation-message" id="emailValidation"></div>
                                    </div>
                                    
                                    <!-- Password field (SAME) -->
                                    <div class="form-group">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <label class="form-label">
                                                <i class="bi bi-lock-fill"></i>
                                                Password
                                            </label>
                                            <a href="#" class="forgot-link" id="forgotPassword">
                                                <i class="bi bi-question-circle"></i> Forgot?
                                            </a>
                                        </div>
                                        <div class="password-wrapper">
                                            <i class="bi bi-lock input-icon"></i>
                                            <input type="password" class="form-control" id="password" 
                                                   placeholder="Enter your password" autocomplete="current-password">
                                            <i class="bi bi-eye password-toggle" id="togglePassword"></i>
                                        </div>
                                        <div class="validation-message" id="passwordValidation"></div>
                                    </div>
                                    
                                    <!-- Password requirements (SAME) -->
                                    <div class="password-requirements" id="passwordRequirements" style="display: none;">
                                        <div class="requirements-title">
                                            <i class="bi bi-shield-check me-1"></i>
                                            Password must contain:
                                        </div>
                                        <div class="requirement-item invalid" id="reqLength">
                                            <i class="bi bi-x-circle-fill"></i>
                                            <span>At least 8 characters</span>
                                        </div>
                                        <div class="requirement-item invalid" id="reqNumber">
                                            <i class="bi bi-x-circle-fill"></i>
                                            <span>At least one number</span>
                                        </div>
                                        <div class="requirement-item invalid" id="reqLower">
                                            <i class="bi bi-x-circle-fill"></i>
                                            <span>At least one lowercase letter</span>
                                        </div>
                                        <div class="requirement-item invalid" id="reqUpper">
                                            <i class="bi bi-x-circle-fill"></i>
                                            <span>At least one uppercase letter</span>
                                        </div>
                                        <div class="requirement-item invalid" id="reqSpecial">
                                            <i class="bi bi-x-circle-fill"></i>
                                            <span>At least one special character</span>
                                        </div>
                                    </div>
                                    
                                    <!-- Remember me checkbox (SAME) -->
                                    <div class="checkbox-group">
                                        <input type="checkbox" id="rememberMe">
                                        <label for="rememberMe">
                                            <i class="bi bi-laptop me-1"></i>
                                            Remember this device
                                        </label>
                                    </div>
                                    
                                    <!-- Submit button (SAME) -->
                                    <button type="submit" class="btn-login" id="loginBtn">
                                        <i class="bi bi-box-arrow-in-right btn-icon"></i>
                                        <span class="btn-text">Log In</span>
                                        <span class="spinner"></span>
                                    </button>
                                    
                                    <!-- Divider (SAME) -->
                                    <div class="divider">
                                        <span class="divider-line"></span>
                                        <span>or</span>
                                        <span class="divider-line"></span>
                                    </div>
                                    
                                    <!-- Social login (SAME) -->
                                    <div class="social-login">
                                        <button type="button" class="social-btn google" onclick="socialLogin('google')" title="Log In with Google">
                                            <i class="bi bi-google"></i>
                                        </button>
                                        <button type="button" class="social-btn github" onclick="socialLogin('github')" title="Log In with GitHub">
                                            <i class="bi bi-github"></i>
                                        </button>
                                        <button type="button" class="social-btn microsoft" onclick="socialLogin('microsoft')" title="Log In with Microsoft">
                                            <i class="bi bi-microsoft"></i>
                                        </button>
                                    </div>
                                    
                                    <!-- Sign up link (SAME) -->
                                    <div class="signup-link">
                                        Don't have an account?
                                        <a href="#" id="signupLink">
                                            Create account <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap 5 JS Bundle (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Custom JavaScript for form validation and interactivity -->
    <script src="../JS CODE/login.js"> </script>
</body>
</html>