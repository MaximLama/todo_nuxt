<template>
    <div class="column">
        <div class="column-title__wrapper">
            <div class="column-title">{{ column.title }}</div>
            <div class="column-title__count">{{ column.tasks.length }}</div>
            <div class="column-settings__dots">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53977 4.62691 9.16667 4.16668 9.16667C3.70644 9.16667 3.33334 9.53977 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 10C10.8334 9.53977 10.4603 9.16667 10 9.16667C9.53978 9.16667 9.16669 9.53977 9.16669 10C9.16669 10.4602 9.53978 10.8333 10 10.8333Z" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53977 16.2936 9.16667 15.8333 9.16667C15.3731 9.16667 15 9.53977 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="column-color" :style="{background: column.color}"></div>
        </div>
        <Task 
            v-for="task in column.tasks"
            :key="task.id"
            :task="task"
        />
        <!-- <div class="task">
            <div class="task-main-content">
                <div class="task-title">UX Adjustments</div>
                <div class="task-content">
                    <p class="task-text-content">
                        It just needs to adapt the UI from what you did before.
                    </p>
                </div>
                <div class="task-label__wrapper">
                    <div class="task-label purple-label">Research</div>
                    <div class="task-circle-labels__wrapper">
                        <div class="task-circle-label light-orange"></div>
                        <div class="task-circle-label light-green"></div>   
                    </div>
                </div>
            </div>
            <div class="task-footer">
                <div class="task-footer__left">
                    <div class="task-comment-count__wrapper">
                        <div class="task-comment-count__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7142 12.7132C10.6768 14.7509 7.65984 15.1911 5.19094 14.0493C4.82647 13.9026 4.52765 13.784 4.24358 13.784C3.45232 13.7887 2.46744 14.5559 1.95557 14.0447C1.4437 13.5327 2.2115 12.5471 2.2115 11.751C2.2115 11.4669 2.09761 11.1734 1.95088 10.8083C0.808549 8.33974 1.2494 5.32179 3.28683 3.2848C5.88773 0.68295 10.1133 0.68295 12.7142 3.28413C15.3198 5.89 15.3151 10.1121 12.7142 12.7132Z" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.6263 8.27534H10.6323" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.95361 8.27534H7.95961" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.28093 8.27534H5.28693" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="task-comment-count">3</div>
                    </div>
                </div>
                <div class="task-footer__right">
                </div>
            </div>
        </div>
        <div class="task">
            <div class="task-main-content">
                <div class="task-title">Moodboards</div>
                <div class="task-content">
                    <div class="task-img__wrapper">
                        <div class="task-img"><img src="img/img1.png"></div>
                        <div class="task-img"><img src="img/img2.png"></div>
                    </div>
                </div>
                <div class="task-label__wrapper">
                    <div class="task-label blue-label">UI Design</div>
                    <div class="task-circle-labels__wrapper">
                        <div class="task-circle-label light-orange"></div>
                    </div>
                </div>
            </div>
            <div class="task-footer">
                <div class="task-footer__left">
                    <div class="task-comment-count__wrapper">
                        <div class="task-comment-count__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7142 12.7132C10.6768 14.7509 7.65984 15.1911 5.19094 14.0493C4.82647 13.9026 4.52765 13.784 4.24358 13.784C3.45232 13.7887 2.46744 14.5559 1.95557 14.0447C1.4437 13.5327 2.2115 12.5471 2.2115 11.751C2.2115 11.4669 2.09761 11.1734 1.95088 10.8083C0.808549 8.33974 1.2494 5.32179 3.28683 3.2848C5.88773 0.68295 10.1133 0.68295 12.7142 3.28413C15.3198 5.89 15.3151 10.1121 12.7142 12.7132Z" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.6263 8.27534H10.6323" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.95361 8.27534H7.95961" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.28093 8.27534H5.28693" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="task-comment-count">2</div>
                    </div>
                    <div class="task-share-count__wrapper">
                        <div class="task-share-count__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.70666 7.29337C10.2067 8.79337 10.2067 11.22 8.70666 12.7134C7.20666 14.2067 4.77999 14.2134 3.28666 12.7134C1.79332 11.2134 1.78666 8.7867 3.28666 7.29337" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.05998 8.94001C5.49998 7.38001 5.49998 4.84668 7.05998 3.28001C8.61998 1.71335 11.1533 1.72001 12.72 3.28001C14.2867 4.84001 14.28 7.37335 12.72 8.94001" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="task-share-count">2</div>
                    </div>
                </div>
                <div class="task-footer__right">
                    <div class="task-footer-date__wrapper">
                        <div class="task-footer-date__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M5.33334 1.33334V3.33334" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.6667 1.33334V3.33334" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.33334 6.06003H13.6667" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 5.66668V11.3333C14 13.3333 13 14.6667 10.6667 14.6667H5.33333C3 14.6667 2 13.3333 2 11.3333V5.66668C2 3.66668 3 2.33334 5.33333 2.33334H10.6667C13 2.33334 14 3.66668 14 5.66668Z" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.4631 9.13338H10.4691" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.4631 11.1334H10.4691" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.99699 9.13338H8.00298" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.99699 11.1334H8.00298" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.52954 9.13338H5.53553" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.52954 11.1334H5.53553" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="task-footer-date__title">
                            Nov 23
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    import Task from './Task.vue'
    export default {
        props: {
            column: {
                type: Object,
                default: {
                    id: {
                        type: Number
                    },
                    color: "#000000",
                    project_id: {
                        type: Number
                    },
                    tasks: [],
                    title: "Blank"
                }
            },
        },
        components:{
            Task
        }
    }
</script>

<style scoped>
    .column{
        display: flex;
        flex-direction: column;
        min-width: 15.625rem;
        width: 15.635rem;
        margin-right: 2rem;
        height: 100%;
    }

    .column:last-of-type{
        margin-right: 0;
    }

    .column-title__wrapper{
        min-height: 2.5rem;
        height: 2.5rem;
        display: flex;
        position: relative;
        margin-bottom: 2rem;
    }

    .column-color{
        height: 0.125rem;
        width: 100%;
        border-radius: 3.125rem;
        background: #1E293B;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .column-title{
        display: flex;
        align-items: center;
        height: 1.5rem;
        color: #1E293B;
        font-size: 0.875rem;
        font-weight: 700;
        letter-spacing: 0.0625rem;
        text-transform: uppercase;
        margin-right: 0.75rem;
    }

    .column-title__count{
        display: flex;
        align-items: center;
        height: 1.5rem;
        box-sizing: border-box;
        padding: 0 0.5rem;
        border-radius: 62.5rem;
        border: 1px solid #E2E8F0;
        font-size: 0.75rem;
    }

    .column-settings__dots{
        display: flex;
        align-items: center;
        height: 1.5rem;   
        margin-left: auto;
        cursor: pointer;
    }
</style>