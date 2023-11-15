<template>
    <header class="header">
        <div class="header-logo">
            <div class="header-logo-wrapper">
                <div class="header-logo-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13ZM3.80036 13C3.80036 18.0808 7.91918 22.1996 13 22.1996C18.0808 22.1996 22.1996 18.0808 22.1996 13C22.1996 7.91918 18.0808 3.80036 13 3.80036C7.91918 3.80036 3.80036 7.91918 3.80036 13Z" fill="#306BFF"/>
                        <path d="M19.3064 12.4053C19.8442 12.3546 20.3282 12.7508 20.3067 13.2906C20.2793 13.9795 20.1546 14.6627 19.9348 15.3196C19.6114 16.2866 19.0893 17.1753 18.4021 17.9285C17.7148 18.6818 16.8777 19.283 15.9443 19.6935C15.011 20.1041 14.0021 20.3149 12.9825 20.3125C11.9628 20.31 10.9549 20.0944 10.0236 19.6793C9.09221 19.2643 8.25794 18.6591 7.57433 17.9025C6.89073 17.146 6.3729 16.2548 6.0541 15.2863C5.83752 14.6283 5.71605 13.9445 5.69196 13.2555C5.67309 12.7156 6.15896 12.3218 6.69654 12.3751C7.23411 12.4284 7.61735 12.91 7.66257 13.4483C7.69751 13.8644 7.78107 14.276 7.9123 14.6747C8.14581 15.3841 8.52511 16.0368 9.02583 16.591C9.52656 17.1451 10.1376 17.5885 10.8198 17.8925C11.502 18.1965 12.2403 18.3544 12.9871 18.3562C13.734 18.358 14.473 18.2036 15.1567 17.9029C15.8403 17.6021 16.4535 17.1618 16.9569 16.61C17.4603 16.0583 17.8427 15.4073 18.0796 14.699C18.2127 14.301 18.2983 13.8898 18.3352 13.4739C18.383 12.9359 18.7686 12.4561 19.3064 12.4053Z" fill="#BB80FF"/>
                    </svg>
                </div>
                <p class="header-logo-title">Hiro</p>
            </div>
        </div>
        <nav class="header-tabs">
            <ul class="header-tabs__wrapper">
                <li class="header-tabs__item">
                    <div class="header-tabs__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M14.925 10.125H3.075C1.95 10.125 1.5 10.605 1.5 11.7975V14.8275C1.5 16.02 1.95 16.5 3.075 16.5H14.925C16.05 16.5 16.5 16.02 16.5 14.8275V11.7975C16.5 10.605 16.05 10.125 14.925 10.125Z" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.675 1.5H3.075C1.95 1.5 1.5 1.98 1.5 3.1725V6.2025C1.5 7.395 1.95 7.875 3.075 7.875H9.675C10.8 7.875 11.25 7.395 11.25 6.2025V3.1725C11.25 1.98 10.8 1.5 9.675 1.5Z" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span class="header-tabs__item-title">
                        List
                    </span>
                </li>
                <li class="header-tabs__item active">
                    <div class="header-tabs__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M7.875 14.925V3.075C7.875 1.95 7.395 1.5 6.2025 1.5H3.1725C1.98 1.5 1.5 1.95 1.5 3.075V14.925C1.5 16.05 1.98 16.5 3.1725 16.5H6.2025C7.395 16.5 7.875 16.05 7.875 14.925Z" fill="#306BFF"/>
                            <path d="M16.5 9.675V3.075C16.5 1.95 16.02 1.5 14.8275 1.5H11.7975C10.605 1.5 10.125 1.95 10.125 3.075V9.675C10.125 10.8 10.605 11.25 11.7975 11.25H14.8275C16.02 11.25 16.5 10.8 16.5 9.675Z" fill="#306BFF"/>
                        </svg>
                    </div>
                    <span class="header-tabs__item-title">
                        Board
                    </span>
                </li>
                <li class="header-tabs__item">
                    <div class="header-tabs__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M6.66667 1.66666V4.16666" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.3333 1.66666V4.16666" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.91667 7.57501H17.0833" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.5 7.08332V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08332C2.5 4.58332 3.75 2.91666 6.66667 2.91666H13.3333C16.25 2.91666 17.5 4.58332 17.5 7.08332Z" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.0789 11.4167H13.0864" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.0789 13.9167H13.0864" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.99624 11.4167H10.0037" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.99624 13.9167H10.0037" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.91192 11.4167H6.91941" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.91192 13.9167H6.91941" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span class="header-tabs__item-title">
                        Calendar
                    </span>
                </li>
            </ul>
        </nav>
        <nav class="header-right">
            <label for="header-search" class="header-right__search">
                <div class="header-right__search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.16666 16.6667C13.3088 16.6667 16.6667 13.3088 16.6667 9.16666C16.6667 5.02452 13.3088 1.66666 9.16666 1.66666C5.02452 1.66666 1.66666 5.02452 1.66666 9.16666C1.66666 13.3088 5.02452 16.6667 9.16666 16.6667Z" stroke="#306BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.7749 17.2415C16.2166 18.5748 17.2249 18.7082 17.9999 17.5415C18.7083 16.4748 18.2416 15.5998 16.9583 15.5998C16.0083 15.5915 15.4749 16.3332 15.7749 17.2415Z" stroke="#306BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <input class="header-right__search-input" type="text" id="header-search" placeholder="Search...">
            </label>
            <div class="header-search-mob">
                <div class="header-right__search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.16666 16.6667C13.3088 16.6667 16.6667 13.3088 16.6667 9.16666C16.6667 5.02452 13.3088 1.66666 9.16666 1.66666C5.02452 1.66666 1.66666 5.02452 1.66666 9.16666C1.66666 13.3088 5.02452 16.6667 9.16666 16.6667Z" stroke="#306BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.7749 17.2415C16.2166 18.5748 17.2249 18.7082 17.9999 17.5415C18.7083 16.4748 18.2416 15.5998 16.9583 15.5998C16.0083 15.5915 15.4749 16.3332 15.7749 17.2415Z" stroke="#306BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="header-right__messages">
                <div class="header-right__messages-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4821 16.4807C13.6806 19.2825 9.53227 19.8878 6.13753 18.3179C5.63638 18.1161 5.22551 17.953 4.8349 17.953C3.74693 17.9595 2.39271 19.0144 1.68889 18.3114C0.98507 17.6075 2.0408 16.2522 2.0408 15.1577C2.0408 14.767 1.88419 14.3635 1.68244 13.8614C0.111741 10.4672 0.717913 6.31747 3.51938 3.51662C7.09561 -0.0609272 12.9058 -0.060927 16.4821 3.51569C20.0647 7.09877 20.0583 12.9041 16.4821 16.4807Z" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.6111 10.3786H13.6193" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.9362 10.3786H9.94445" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.26128 10.3786H6.26953" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="circle-notif">
                    </div>
                </div>
            </div>
            <div class="header-right__notifications">
                <div class="header-right__notifications-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11.0184 2.66751C7.98419 2.66751 5.51835 5.13334 5.51835 8.16751V10.8167C5.51835 11.3758 5.28002 12.2283 4.99585 12.705L3.94169 14.4558C3.29085 15.5375 3.74002 16.7383 4.93169 17.1417C8.88252 18.4617 13.145 18.4617 17.0959 17.1417C18.205 16.775 18.6909 15.4642 18.0859 14.4558L17.0317 12.705C16.7567 12.2283 16.5184 11.3758 16.5184 10.8167V8.16751C16.5184 5.14251 14.0434 2.66751 11.0184 2.66751Z" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M12.7142 2.93332C12.43 2.85082 12.1367 2.78665 11.8342 2.74999C10.9542 2.63999 10.1108 2.70415 9.32251 2.93332C9.58834 2.25499 10.2483 1.77832 11.0183 1.77832C11.7883 1.77832 12.4483 2.25499 12.7142 2.93332Z" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.7683 17.4717C13.7683 18.9842 12.5308 20.2217 11.0183 20.2217C10.2666 20.2217 9.56998 19.91 9.07498 19.415C8.57998 18.92 8.26831 18.2233 8.26831 17.4717" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10"/>
                    </svg>
                    <div class="circle-notif">
                    </div>
                </div>
            </div>
            <div class="header-right__avatar"></div>
        </nav>
    </header>
</template>

<style scoped>
    .header{
        display: flex;
        height: 5.5rem;
        width: 100%;
        flex-shrink: 0;
        box-sizing: border-box;
        border-bottom: 0.0625rem solid #EEF2F6;
        justify-content: space-between;
        padding: 0 3rem;
        padding-left: 15.625rem;
        position: fixed;
        background-color: white;
        z-index: 4;
        transition: all 0.3s;
    }

    .aside.hide + .header{
        padding-left: 0;
    }

    .header-logo{
        display:none;
    }

    .header-logo-wrapper{
        display: flex;
        align-items: center;
        margin: 0 1.5rem;
    }

    .header-logo-icon{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 0.75rem;
        cursor: pointer;
    }

    .header-logo-title{
        color: #1E293B;
        font-family: SF Pro Display;
        font-size: 1.625rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        cursor: pointer;
    }

    .header-tabs{
        display: flex;
    }

    .header-tabs__wrapper{
        display: flex;
        align-items: center;
        margin: 0;
    }

    .header-tabs__item{
        display: flex;
        align-items: center;
        padding: 0 1rem;
        position: relative;
        height: 2.5rem;
        cursor: pointer;
    }

    .header-tabs__item .header-tabs__item-icon{
        margin-right: 0.75rem;
    }

    .header-tabs__item.active .header-tabs__item-title::after{
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 0.125rem;
        border-radius: 3.125rem;
        background: #306BFF;
        bottom: -1.5rem;
        left: 0;
    }

    .header-tabs__item.active .header-tabs__item-title{
        color: #306BFF;
        font-weight: 700;
    }

    .header-right{
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    .header-right__search{
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 0.75rem;
        margin-right: 1.5rem;
        height: 2.5rem;
        width: 10.8125rem;
        border-radius: 3.125rem;
        border: 1px solid #E2E8F0;
    }

    .header-right__search-icon{
        width: 1.25rem;
        height: 1.25rem;
    }

    .header-right__search-input{
        border: none;
        margin-left: 0.5rem;
        width: 7rem;
    }

    .header-right__search-input:focus-visible{
        outline: none;
    }

    .header-search-mob{
        display: none;
    }

    .header-right__messages{
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1.5rem;
    }

    .header-right__messages-wrapper{
        height: 20px;
        position: relative;
        cursor: pointer;
    }

    .header-right__notifications{
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1.5rem;
        position: relative;
    }

    .header-right__notifications-wrapper{
        height: 20px;
        position: relative;
        cursor: pointer;
    }

    .circle-notif{
        width: 4px;
        height: 4px;
        position: absolute;
        background: #EF5DA8;
        border-radius: 50%;
        border: 1px solid white;
        top: 0;
        right: 0;
    }

    .header-right__notifications-wrapper .circle-notif{
        top: 1px;
        right: 2px;
    }

    .header-right__avatar{
        width: 2.5rem;
        height: 2.5rem;
        background: #FFE1CC;
        border-radius: 50%;
        cursor: pointer;
    }

    @media (max-width: 1023px){
        .header{
            padding-left: 0;
        }

        .header-logo{
            display: flex;
        }

        .header-tabs{
            display: none;
        }
    }

    @media (max-width: 767px){
        .header-right__search{
            display: none;
        }
    }
</style>