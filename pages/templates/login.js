const loginTemplate = () => {
    return `<div class="form">
    <h2>Masuk</h2>
    <form class="login-form">
        <p class="text-email-error">Email tidak terdaftar!</p>
        <input type="email" placeholder="Email" name="email-login" id="email-login" required>
        <p class="text-pass-error">Password salah!</p>
        <input type="password" placeholder="Password" name="password-login" id="password-login" required>        
        <p id=forget-pass>Lupa password ?</p>
        <button id="login-button">Masuk</button>
    </form>
    <div class="line-divide">                
        <span class="garis"></span>
        <span class="text-garis">atau masuk dengan</span>
        <span class="garis"></span>
    </div>
    <div class="google-login">
        <img src="images/google.png" alt="google icon">
        <p>Google</p>
    </div>
    <div class="bottom-form">
        <p>Belum punya akun? <span id=to-register>Daftar</span></p>
    </div>
    <div class="loading-animation">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    
</div>    `
}

export default loginTemplate;