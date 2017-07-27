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
                    <el-form ref="form" :model="form" :rules="rules" class="form-group">
                        <el-form-item label="用户名" prop="username">
                            <el-input 
                                v-model="form.username"
                                placeholder="输入用户名">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" prop="email">
                            <el-input 
                                v-model="form.email" 
                                type="email"
                                placeholder="输入邮箱">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input 
                                v-model="form.password" 
                                type="password"
                                placeholder="密码至少6位">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="passwordRe">
                            <el-input 
                                v-model="form.passwordRe" 
                                type="password"
                                placeholder="再次输入密码">
                            </el-input>
                        </el-form-item>

                        <el-form-item class="text-right">
                            <el-button 
                            type="primary" 
                            size="large" 
                            :disabled="disabled" 
                            @click="submitForm('form')">注册</el-button>
                        </el-form-item>

                    </el-form>
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
            form: {
                username: '',
                email: '',
                password: '',
                passwordRe: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 13, message: '长度在 3 到 13 个字符', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, message: '密码至少6位', trigger: 'blur' }
                ],
                passwordRe: [
                    { required: true, message: '请确认密码', trigger: 'blur' },
                    { message: '两次输入密码不一致!', trigger: 'blur' }
                ]
            },
            disabled: true
        }
    },
    methods: {
        submitForm(form) {
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


