const registerTemplate = () => {
    return `
    <div class="form">
        <h2>Daftar Sekarang</h2>
        <form class="register-form">
            <input type="email" placeholder="Email" name="email-register" id="email-register" required>
            <input type="password" placeholder="Password" name="password-register" id="password-register" required>
            <button id="register-button">Daftar</button>
        </form>
        <div class="line-divide">                
            <span class="garis"></span>
            <span class="text-garis">atau daftar dengan</span>
            <span class="garis"></span>
        </div>
        <div class="google-login">
            <img src="images/google.png" alt="google icon">
            <p>Google</p>
        </div>
        <div class="bottom-form">
            <p>Sudah punya akun? <span id=to-login>Masuk</span></p>
        </div>
        <div class="loading-animation">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
    `
};

export default registerTemplate;