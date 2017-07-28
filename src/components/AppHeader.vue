<template>
<header class="app-header">
    <el-menu theme="dark" class="app-menu" mode="horizontal">
        <el-menu-item index="0" class="logo">
            <img src="../assets/images/logo.png" alt="Vue">
        </el-menu-item>
    </el-menu>

    <div class="app-header-aside">
        <el-dropdown>
            <span class="el-dropdown-link user-dropdown-link">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-user"></use>
                </svg>
                {{users.name}}<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="signOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            users: {
                name: null
            }
        }
    },
    created() {
        let currentUser = AV.User.current()
        if (currentUser) {
            this.users = {
                name: currentUser.get('username')
            }
        }
    },
    methods: {
        signOut() {
            AV.User.logOut().then(() => {
                this.$router.push('/login')
                // 登出后跳转到登录页面
                //this.$message('正在退出...')
            }, (error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>