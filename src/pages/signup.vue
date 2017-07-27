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
                        <el-form-item label="确认密码" prop="passwordCheck">
                            <el-input 
                                v-model="form.passwordCheck" 
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
        // 二次密码校验
        var passwordCheck = (rule, value, callback) => {
            if ( value === '' ) {
                callback(new Error('请再次输入密码'))
            } else if( value !== this.form.password ) {
                callback(new Error('两次密码输入不一致'))
            } else {
                callback()
            }
        };

        return {
            form: {
                username: '',
                email: '',
                password: '',
                passwordCheck: ''
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
                passwordCheck: [
                    { validator: passwordCheck, required: true, trigger: 'blur' },
                ]
            },
            disabled: false
        }
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate((valid) => {
                if(valid) {
                    this.signUpSubmit()
                } else {
                    console.warn('校验失败')
                    return false
                }
            })
        },
        signUpSubmit() {
            this.disabled = true
            // leancloud 用户注册
            let user = new this.$AV.User()
            // 设置用户名
            user.setUsername(this.form.username)
            // 设置密码
            user.setPassword(this.form.password)
            // 设置邮箱
            user.setEmail(this.form.email)

            user.signUp().then((loginedUser) => {
                this.$message({
                    message: '注册成功',
                    type: 'success'
                });
                // 跳转到登录页
                this.$router.push('/login')
            }, (error) => {
                if (error.code === 202) {
                    this.$message({
                        showClose: true,
                        message: '用户名已被使用，换一个试试',
                        type: 'error'
                    });
                } else if(error.code === 203) {
                    this.$message({
                        showClose: true,
                        message: '邮箱已被注册',
                        type: 'error'
                    });
                } else {
                    console.error(error)
                }

                this.disabled = false
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.card-cover-img {
    background-image: url('../assets/images/cover_bg_2.jpeg');
}
</style>


