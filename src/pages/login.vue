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
                    <el-form ref="form" :model="form" :rules="rules" class="form-group">
                        <el-form-item prop="email">
                            <i class="iconfont icon-mail_fill"></i>
                            <el-input 
                                v-model="form.email" 
                                type="email"
                                placeholder="输入邮箱"
                                class="form-control-icon">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <i class="iconfont icon-lock_fill"></i>
                            <el-input 
                                v-model="form.password" 
                                type="password"
                                placeholder="密码"
                                class="form-control-icon">
                            </el-input>
                        </el-form-item>
                        <el-form-item class="text-right">
                            <el-button 
                            type="primary" 
                            size="large" 
                            :disabled="isDisabled" 
                            @click="submitForm('form')">登录</el-button>
                        </el-form-item>
                    </el-form>
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
            form: {
                email: '',
                password: ''
            },
            rules: {
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入登录密码', trigger: 'blur' },
                ]
            }
        }
    },
    computed: {
        isDisabled() {
            return this.form.email == '' || this.form.password == ''
        }
    },
    methods: {
        submitForm(form) {
            console.log('ssss')
        }
    }
}
</script>

<style lang="scss" scoped>
.card-cover-img {
    background-image: url('../assets/images/cover_bg_1.jpeg');
}
.auth-form-group {
    .iconfont {
        position: absolute;
        left: 10px;
        top: 50%;
        z-index: 2;

        color: #97a8be;
        font-size: 18px;

        transform: translateY(-50%);
    }
}
</style>


