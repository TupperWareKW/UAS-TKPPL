import loginTemplate from "./templates/login.js";

const Landing = {
    render() {
        return `
            <div class="text-header"><h1>Tupperware KW</h1></div>
            <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/45ab29df.png" alt="" class="background-login">
            <div class="main"></div>
        `;
    },

    afterRender() {
        this.showLogin();
    },

    showLogin() {
        document.querySelector('.main').innerHTML = loginTemplate();
        const buttonToregister = document.querySelector('#to-register');
        const formLogin = document.querySelector('.login-form');
        const email = document.querySelector('#email-login');
        const password = document.querySelector('#password-login');
        const googleLogin = document.querySelector('.google-login');
        const inputForm = document.querySelector('.login-form input');

        buttonToregister.onclick = () => {
            this.showRegister();
        }

        inputForm.addEventListener('input', () => {
            document.querySelector('.text-email-error').style.display = 'none';
            document.querySelector('.text-pass-error').style.display = 'none';
        })

        formLogin.addEventListener('submit', (event) => {
            event.preventDefault();
            showAnimation();
            loginFirebase(email.value, password.value);
        })

        googleLogin.addEventListener('click', () => {
            showAnimation();
            loginGoogle();
        })


    },

    showRegister() {
        document.querySelector('.main').innerHTML = registerTemplate();
        const buttonToLogin = document.querySelector('#to-login');
        const formRegister = document.querySelector('.register-form');
        const email = document.querySelector('#email-register');
        const password = document.querySelector('#password-register');
        const googleLogin = document.querySelector('.google-login');

        buttonToLogin.onclick = () => {
            this.showLogin();
        }

        formRegister.addEventListener('submit', event => {
            event.preventDefault();
            showAnimation();
            registerFirebase(email.value, password.value);
        })

        googleLogin.addEventListener('click', () => {
            showAnimation();
            loginGoogle();
        })
    }
};

export default Landing;