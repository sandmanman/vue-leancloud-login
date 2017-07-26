<template>
    <div class="wrapper auth-wrapper">
        <el-row type="flex" align="middle" justify="center" class="auth-form-group">
            <el-card :body-style="{ padding: '0px', width: '570px' }">
                <el-row type="flex" align="middle" justify="space-between" class="card-cover-img">
                    <h3 class="card-title">注册</h3>
                    <router-link :to="{name: 'login'}" class="quick-link text-white">
                        登录<i class="el-icon-arrow-right el-icon--right"></i>
                    </router-link>
                </el-row>
                <div class="card-content">
                    <div class="form-group">
                        <el-input
                            placeholder="输入用户名"
                            type="text"
                            autocomplete="off"
                            v-model="inputUsername">
                        </el-input>
                    </div>
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
                    <div class="form-group">
                        <el-input
                            placeholder="再次输入密码"
                            type="password"
                            autocomplete="off"
                            v-model="inputPwdRe">
                        </el-input>
                    </div>
                    <div class="card-footer text-right">
                        <el-button type="primary" size="large" :disabled="disabled" @click="submitForm()">注册</el-button>
                    </div>
                </div>
            </el-card>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            inputUsername: '',
            inputEmail: '',
            inputPwd: '',
            inputPwdRe: '',
            disabled: true
        }
    },
    methods: {
        submitForm() {
            console.log('注册')
        }
    }
}
</script>

<style lang="scss" scoped>
.card-cover-img {
    background-image: url('../assets/images/cover_bg_2.jpeg');
}
</style>


