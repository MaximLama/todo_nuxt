<template>
    <div class="task">
        <div class="task-main-content">
            <div class="task-title">{{ task.title }}</div>
            <div class="task-content">
                <p class="task-text-content">
                    {{ task.description }}
                </p>
            </div>
            <!--<div class="task-label__wrapper">
                <div class="task-label purple-label">Research</div>
                <div class="task-circle-labels__wrapper">
                    <div class="task-circle-label light-orange"></div>
                    <div class="task-circle-label light-green"></div>   
                </div>
            </div>-->
        </div>
        <div class="task-footer">
            <div class="task-footer__left">
                <div class="task-comment-count__wrapper">
                    <!--<div class="task-comment-count__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7142 12.7132C10.6768 14.7509 7.65984 15.1911 5.19094 14.0493C4.82647 13.9026 4.52765 13.784 4.24358 13.784C3.45232 13.7887 2.46744 14.5559 1.95557 14.0447C1.4437 13.5327 2.2115 12.5471 2.2115 11.751C2.2115 11.4669 2.09761 11.1734 1.95088 10.8083C0.808549 8.33974 1.2494 5.32179 3.28683 3.2848C5.88773 0.68295 10.1133 0.68295 12.7142 3.28413C15.3198 5.89 15.3151 10.1121 12.7142 12.7132Z" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.6263 8.27534H10.6323" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.95361 8.27534H7.95961" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.28093 8.27534H5.28693" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="task-comment-count">3</div>-->
                    <div class="task-footer-date__title">
                            {{ deadline_formatted }}
                    </div>
                </div>
            </div>
            <div class="task-footer__right">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            task: {
                type: Object,
                default: {
                    id: {
                        type: Number
                    },
                    title: "Blank",
                    column_id: {
                        type: Number
                    },
                    deadline: {
                        type: Date
                    },
                    description: ""
                }
            },
        },
        computed:{
            deadline_formatted: function(){
                const date = new Date(this.task.deadline);
                let months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
                return months[date.getMonth()] + " " + date.getDate();
            }
        }
    }
</script>

<style scoped>
    .task{
        width: 15.625rem;
        box-sizing: border-box;
        border-radius: 0.5rem;
        border: 1px solid #E2E8F0;
        margin-bottom: 1.75rem;
        position: relative;
        background-color: white;
    }

    .task::after{
        content: "";
        display: block;
        width: 15.125rem;
        height: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #E2E8F0;
        box-sizing: border-box;
        position: absolute;
        left: 0.25rem;
        bottom: -0.5rem;
        z-index: -1;
    }

    .task-main-content{
        padding: 1.25rem 1rem 1rem 1rem;
        border-bottom: 0.0625rem solid #E2E8F0;
    }

    .task-title{
        color: #1E293B;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .task-content{
        margin-bottom: 1rem;
    }

    .task-text-content{
        font-size: 0.75rem;
        line-height: 1.05rem;
    }

    .task-img__wrapper{
        display: flex;
    }

    .task-img{
        min-width: calc(50%-0.5rem);
    }

    .task-img:nth-of-type(2n+1){
        margin-right: 0.5rem;
    }

    .task-img:last-of-type{
        margin-right: 0;
    }

    .task-img img{
        width: 100%;
        border-radius: 0.5rem;
    }

    .task-label__wrapper{
        display: flex;
        justify-content: space-between;
    }

    .task-label{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 1.5rem;
        height: 1.5rem;
        box-sizing: border-box;
        padding: 0.5rem;
        font-size: 0.75rem;
        font-weight: 600;
        border-radius: 0.25rem;
    }

    .task-circle-labels__wrapper{
        display: flex;
    }

    .task-circle-label{
        min-width: 1.75rem;
        min-height: 1.75rem;
        max-width: 1.75rem;
        max-height: 1.75rem;
        border-radius: 50%;
        border: 2px solid #FFF;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .task-circle-label span{
        font-size: 0.625rem;
        font-weight: 500;
    }

    .task-circle-label:not(:first-of-type){
        margin-left: -0.33rem;
    }

    .task-footer{
        display: flex;
        justify-content: space-between;
        padding: 1rem 1rem 1.25rem 1rem;
    }

    .task-footer__left{
        display: flex;
    }

    .task-comment-count__wrapper{
        display: flex;
        align-items: center;
        margin-right: 0.75rem;
    }

    .task-comment-count__icon{
        display: flex;
        align-items: center;
        margin-right: 0.25rem;
    }

    .task-comment-count{
        display: flex;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .task-share-count__wrapper{
        display: flex;
        align-items: center;
        margin-right: 0.75rem;
    }

    .task-share-count__icon{
        display: flex;
        align-items: center;
        margin-right: 0.25rem;
    }

    .task-share-count{
        display: flex;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .task-footer__right{
        display: flex;
        flex-wrap: wrap;
    }

    .task-footer-date__wrapper{
        display: flex;
        align-items: center;
        margin-right: 0.75rem;
    }

    .task-footer-date__icon{
        display: flex;
        align-items: center;
        margin-right: 0.25rem;
    }

    .task-footer-date__title{
        display: flex;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .task-footer-like__wrapper{
        display: flex;
        align-items: center;
        margin-right: 0.75rem;
    }

    .task-footer-like__icon{
        display: flex;
        align-items: center;
    }

    .task-footer-like__count{
        display: flex;
        align-items: center;
        margin-right: 0.25rem;
        color: #306BFF;
        font-size: 0.75rem;
        font-weight: 700;
    }

    .task-footer-done_wrapper{
        display: flex;
        align-items: center;
        margin-right: 0.75rem;
    }

    .task-footer-done__icon{
        display: flex;
        align-items: center;
        margin-right: 0.25rem;
    }

    .task-footer-done__title{
        display: flex;
        align-items: center;
        color: #78C552;
        font-size: 0.75rem;
        font-weight: 600;
    }
</style>