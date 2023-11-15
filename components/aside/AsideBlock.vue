<template>
    <aside class="aside" :class="{hide: isHidedAside}">
        <div class="logo">
            <div class="logo-wrapper">
                <div class="logo-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13ZM3.80036 13C3.80036 18.0808 7.91918 22.1996 13 22.1996C18.0808 22.1996 22.1996 18.0808 22.1996 13C22.1996 7.91918 18.0808 3.80036 13 3.80036C7.91918 3.80036 3.80036 7.91918 3.80036 13Z" fill="#306BFF"/>
                        <path d="M19.3064 12.4053C19.8442 12.3546 20.3282 12.7508 20.3067 13.2906C20.2793 13.9795 20.1546 14.6627 19.9348 15.3196C19.6114 16.2866 19.0893 17.1753 18.4021 17.9285C17.7148 18.6818 16.8777 19.283 15.9443 19.6935C15.011 20.1041 14.0021 20.3149 12.9825 20.3125C11.9628 20.31 10.9549 20.0944 10.0236 19.6793C9.09221 19.2643 8.25794 18.6591 7.57433 17.9025C6.89073 17.146 6.3729 16.2548 6.0541 15.2863C5.83752 14.6283 5.71605 13.9445 5.69196 13.2555C5.67309 12.7156 6.15896 12.3218 6.69654 12.3751C7.23411 12.4284 7.61735 12.91 7.66257 13.4483C7.69751 13.8644 7.78107 14.276 7.9123 14.6747C8.14581 15.3841 8.52511 16.0368 9.02583 16.591C9.52656 17.1451 10.1376 17.5885 10.8198 17.8925C11.502 18.1965 12.2403 18.3544 12.9871 18.3562C13.734 18.358 14.473 18.2036 15.1567 17.9029C15.8403 17.6021 16.4535 17.1618 16.9569 16.61C17.4603 16.0583 17.8427 15.4073 18.0796 14.699C18.2127 14.301 18.2983 13.8898 18.3352 13.4739C18.383 12.9359 18.7686 12.4561 19.3064 12.4053Z" fill="#BB80FF"/>
                    </svg>
                </div>
                <p class="logo-title">Hiro</p>
                <div class="logo-arrow-hide" :class="{'logo-arrow--show':isHidedAside}" @click="toggleAside">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M9.99998 13.28L5.65331 8.93333C5.13998 8.42 5.13998 7.58 5.65331 7.06667L9.99998 2.72" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M9.99998 13.28L5.65331 8.93333C5.13998 8.42 5.13998 7.58 5.65331 7.06667L9.99998 2.72" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <AsideMenu />
        <hr class="side-hr">
        <Menu />
        <ThemeSwitcher />
    </aside>
</template>

<script>
    import AsideMenu from './AsideMenu.vue';
    import Menu from './workspace-menu/Menu.vue';
    import ThemeSwitcher from './ThemeSwitcher.vue';
    export default {
        data(){
            return {
                isHidedAside: false
            }
        },
        components: {
            AsideMenu, Menu, ThemeSwitcher
        },
        methods: {
            toggleAside() {
                this.isHidedAside = !this.isHidedAside;
            }
        }
    }
</script>

<style scoped>
    .aside{
        display: flex;
        flex-direction: column;
        width: 15.625rem;
        height: 100vh;
        position: fixed;
        box-sizing: border-box;
        border-right: 0.0625rem solid #EEF2F6;
        top: 0;
        left: 0;
        z-index: 5;
        transition: all 0.3s;
        background-color: white;
    }

    .aside.hide{
        transform: translateX(-15.625rem);
    }

    .logo{
        display: flex;
        align-items: center;
        min-height: 5.5rem;
        border-bottom: 0.0625rem solid #EEF2F6;
        box-sizing: border-box;
    }

    .logo-wrapper{
        display: flex;
        align-items: center;
        margin: 0 1.5rem;
        flex: 1;
    }

    .logo-icon{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 0.75rem;
        cursor: pointer;
    }

    .logo-title{
        color: #1E293B;
        font-family: SF Pro Display;
        font-size: 1.625rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        cursor: pointer;
    }

    .logo-arrow-hide{
        display: flex;
        align-items: center;
        margin-left: auto;
        cursor: pointer;
        transition: all 0.3s;
        padding: 0.5rem;
    }

    .logo-arrow-hide svg:last-of-type{
        margin-left: -0.5rem;
    }

    .logo-arrow-hide.logo-arrow--show{
        transform: translateX(4.2rem) translateY(4rem);
        border: 0.125rem solid #EEF2F6;
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
    }

    .logo-arrow-hide.logo-arrow--show svg{
        transform: rotate(180deg);
    }

    .side-hr{
        border: 1px solid #EEF2F6;
        margin: 0 0.75rem;
    }

    @media (max-width: 1023px){
        .aside {
            transform: translateX(-15.625rem);
        }

        .logo-arrow-hide{
            transform: translateX(4.2rem) translateY(4rem);
            border: 0.125rem solid #EEF2F6;
            border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;
        }
        .logo-arrow-hide svg{
            transform: rotate(180deg);
        }

        .aside.hide{
            transform: none;
        }

        .logo-arrow-hide.logo-arrow--show{
            transform: none;
            border: none;
        }

        .logo-arrow-hide.logo-arrow--show svg{
            transform: none;
        }
    }

</style>