<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <nuxt-link to="/" class="navbar-brand">Frontend</nuxt-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/" class="nav-link">Posts</nuxt-link>
                    </li>
                </ul>
                <template v-if="!authenticated">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link to="/register" class="nav-link">Register</nuxt-link>
                        </li>
                    </ul>
                </template>
                <template v-if="authenticated">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link">{{user.name}}</a>
                        </li>
                        <li class="nav-item">
                            <a @click.prevent="logout" class="nav-link">Logout</a>
                        </li>
                    </ul>
                </template>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        methods: {
            logout(){
                this.$auth.logout()
            }
        }
    }
</script>