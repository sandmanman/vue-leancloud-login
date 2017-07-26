<template>
    <div class="wrapper">
        <app-header></app-header>

        <div class="container">
            <h1>{{msg}}</h1>
        </div>
    </div>
</template>

<script>
    import AppHeader from '../components/AppHeader'
    export default {
        name: 'Home',
        components: {
            AppHeader
        },
        data() {
            return {
                msg: 'Hellow vue!'
            }
        }
    }
</script>

<style>
    
</style>