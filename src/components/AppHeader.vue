<template>
<header class="app-header">
    <el-menu theme="dark" class="app-menu" mode="horizontal">
        <el-menu-item index="0" class="logo">
            <img src="../assets/images/logo.png" alt="Vue">
        </el-menu-item>
    </el-menu>
</header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.app-menu {
    border-radius: 0;
}
.logo {
    > img {
        max-height: 30px;
        vertical-align: middle;
    }
}
</style>