<template>
    <div class="wrapper auth-wrapper">
        <el-row type="flex" align="middle" justify="center" class="auth-form-group">
            <el-card :body-style="{ padding: '0px', width: '570px' }">
                <el-row type="flex" align="middle" justify="space-between" class="card-cover-img">
                    <h3 class="card-title">登录</h3>
                    <router-link :to="{name: 'signup'}" class="quick-link text-white">
                        注册<i class="el-icon-arrow-right el-icon--right"></i>
                    </router-link>
                </el-row>
                <div class="card-content">
                    <div class="form-group">
                        <el-input
                            placeholder="输入邮箱"
                            type="email"
                            autocomplete="off"
                            v-model="inputEmail">
                        </el-input>
                    </div>
                    <div class="form-group">
                        <el-input
                            placeholder="输入密码"
                            type="password"
                            autocomplete="off"
                            v-model="inputPwd">
                        </el-input>
                    </div>
                    <div class="card-footer text-right">
                        <el-button type="primary" size="large" :disabled="disabled" @click="submitForm()">登录</el-button>
                    </div>
                </div>
            </el-card>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            inputEmail: '',
            inputPwd: '',
            disabled: true
        }
    },
    methods: {
        submitForm() {
            console.log('登录')
        }
    }
}
</script>

<style lang="scss" scoped>
.card-cover-img {
    background-image: url('../assets/images/cover_bg_1.jpeg');
}
</style>


