<template>
    <div class="container">
        <div class="login">
            <div class="back-block">
                <div class="back-block__wrapper">
                    <svg class="back-block__img" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 1560 1560" xml:space="preserve">
                        <g>
                            <path d="M1524 811.8H36c-17.7 0-32-14.3-32-32s14.3-32 32-32h1410.7l-194.2-194.2c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l248.9 248.9c9.2 9.2 11.9 22.9 6.9 34.9-5 11.9-16.7 19.7-29.6 19.7z" fill="#94a3b8" opacity="1" data-original="#000000"/>
                            <path d="M1274.8 1061c-8.2 0-16.4-3.1-22.6-9.4-12.5-12.5-12.5-32.8 0-45.3l249.2-249.2c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-249.2 249.2c-6.3 6.3-14.5 9.4-22.7 9.4z" fill="#94a3b8" opacity="1" data-original="#000000"/>
                        </g>
                    </svg>
                    <nuxt-link class="back-block__link" to="/">На главную</nuxt-link>
                </div>
            </div>
            <div class="login__links">
                <nuxt-link to="/login" class="login-links__item">
                    Вход
                </nuxt-link>
                <p class="login-links__item active">
                    Регистрация
                </p>
            </div>
            <form class="form" @submit.prevent="submit">
                <div class="form-inputs__wrapper">
                    <div class="form-input__wrapper">
                        <input v-model.trim="form.name" class="form-item__input" type="text" id="name" autofocus required>
                        <label for="name" class="form-item__label">Имя</label>
                    </div>
                    <div class="form-input__wrapper">
                        <input v-model.trim="form.surname" class="form-item__input" type="text" id="surname" required>
                        <label for="surname" class="form-item__label">Фамилия</label>
                    </div>
                    <div class="form-input__wrapper">
                        <input v-model.trim="form.email" class="form-item__input" type="text" id="email" required>
                        <label for="email" class="form-item__label">E-mail</label>
                    </div>
                    <div class="form-input__wrapper">
                        <input v-model.trim="form.password" class="form-item__input" type="password" id="password" required>
                        <label for="password" class="form-item__label">Пароль</label>
                    </div>
                    <div class="form-input__wrapper">
                        <input v-model.trim="form.password_confirmation" class="form-item__input" type="password" id="password-confirm" required>
                        <label for="password-confirm" class="form-item__label">Подтвердите пароль</label>
                    </div>
                </div>
                <button class="btn btn--blue">Зарегистрироваться</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                form: {
                    email: '',
                    name: '',
                    surname: '',
                    password: '',
                    password_confirmation: ''
                }
            } 
        },
        methods:{
            async submit(){
                await this.$axios.$get('sanctum/csrf-cookie');
                await this.$axios.$post('register', this.form);
                const response = await this.$auth.loginWith("laravelSanctum", {
                    data: {
                        email: this.form.email,
                        password: this.form.password
                    }
                });
                console.log(response);
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        height: 100vh;
    }

    .login{
        border-radius: 1.875rem;
        background: #FFF;
        box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 0.17);
        margin: auto;
        padding: 5.44rem 5.75rem 5.19rem 5.75rem;
    }

    .back-block{
        margin-bottom: 1rem;
    }

    .back-block__wrapper{
        display: inline-flex;
        align-items: center;
    }

    .back-block__wrapper:hover{
        border-bottom: 1px solid #94A3B8;
    }

    .back-block__img{
        height: 1.5rem;
        width: 1.5rem;
        margin-right: 0.5rem;
        transform: rotate(180deg);
    }

    .back-block__link{
        font-size: 0.75rem;
    }

    .login__links{
        display: flex;
        margin-bottom: 1rem;
        align-items: center;
    }

    .login-links__item{
        color: #1E293B;
        font-size: 0.875rem;
        font-weight: 700;
        letter-spacing: 0.0625rem;
        text-transform: uppercase;
        padding-bottom: 0.31rem;
        position: relative;
    }

    .login-links__item.active::after{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 0.125rem;
        border-radius: 3.125rem;
        background: #306BFF;
        bottom: 0;
        left: 0;
    }

    .login-links__item:first-of-type{
        margin-right: 3rem;
    }

    .form{
        display: flex;
        flex-direction: column;
    }

    .form-inputs__wrapper{
        display: flex;
        flex-direction: column;
        margin-bottom: 2.31rem;
    }

    .form-input__wrapper{
        display: flex;
        flex-direction: column;
        background: #F8FAFC;
        margin-bottom: 0.56rem;
        height: 3rem;
        width: 17.0625rem;
        border-radius: 0.4375rem;
        padding: 1rem 1rem 0.5rem 1rem;
        position: relative;
        box-sizing: border-box;
    }

    .form-item__label{
        cursor: text;
        font-size: 1rem;
        transform: translateY(-1rem);
        transition: all 0.3s;
        margin: 0;
    }

    .form-item__input{
        transition: all 0.3s;
        color: #1E293B;
        font-weight: 500;
        margin: auto 0;
    }

    .form-item__input:focus + .form-item__label{
        font-size: 0.75rem;
        margin-bottom: 0.12rem;
        transform: translateY(-1.5rem);
    }

    .form-item__input:valid + .form-item__label{
        font-size: 0.75rem;
        margin-bottom: 0.12rem;
        transform: translateY(-1.5rem);
    }

    .form-item__input:focus{
        transform: translateY(0.5rem);
    }

    .form-item__input:valid{
        transform: translateY(0.5rem);
    }

    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: 2.5rem;
        width: 17.0625rem;
        border-radius: 0.4375rem;
        font-weight: 700;
        letter-spacing: 0.0625rem;
        text-transform: uppercase;
    }

    .btn:hover{
        cursor: pointer;
    }

    .btn--blue{
        background:#306BFF;
        color: white;
    }

</style>