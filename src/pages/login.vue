<template>
    <div class="wrapper auth-wrapper">
        <el-row type="flex" align="middle" justify="center" class="auth-form-group">
            <el-card :body-style="{ padding: '0px', width: '460px' }">
                <el-row type="flex" align="middle" justify="space-between" class="card-cover-img">
                    <h3 class="card-title">登录</h3>
                    <router-link :to="{name: 'signup'}" class="quick-link text-white">
                        注册<i class="el-icon-arrow-right el-icon--right"></i>
                    </router-link>
                </el-row>
                <div class="card-content">
                    <el-form ref="form" :model="form" :rules="rules" class="form-group">
                        <el-form-item prop="email">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-mail_fill"></use>
                            </svg> 
                            <el-input 
                                v-model="form.email" 
                                type="email"
                                placeholder="输入邮箱"
                                class="form-control-icon">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-lock_fill"></use>
                            </svg>
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
                            :disabled="!isDisabled"
                            :loading="isLoading"
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
    beforeRouteEnter(to, from, next) {
        // 进入路由前判断是否已登录
        next(VM => {
            if( AV.User.current() ) {
                VM.$router.push('/')
            } else {
                return false
            }
        })
    },
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
            },
            isLoading: false
        }
    },
    computed: {
        isDisabled() {
            return this.form.email !== '' && this.form.password !== ''
        }
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate((valid)=>{
                if(valid) {
                    this.loginSubmit()
                } else if(error) {
                    console.log(error)
                }
            })
        },
        resetForm() {
            // 重置表单
            this.$refs['form'].resetFields()
        },
        loginSubmit() {
            AV.User.logIn(this.form.email, this.form.password)
                .then((loginedUser) => {
                    this.isLoading = true
                    // 登录成功跳转默认跳转到首页
                    this.$router.push('/home')
                    //console.log(loginedUser)
                }, (error) => {
                    this.isLoading = false

                    if(error.code === 211) {
                        this.$message({
                            showClose: true,
                            message: '用户不存在',
                            type: 'error'
                        })

                        this.resetForm()
                    } else if(error.code === 210) {
                        this.$message({
                            showClose: true,
                            message: '用户名和密码不匹配',
                            type: 'error'
                        })
                    } else {
                        console.log(error)
                    }
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.card-cover-img {
    background-image: url('../assets/images/cover_bg_1.jpeg');
}
.auth-form-group {
    .icon {
        position: absolute;
        left: 10px;
        top: 50%;
        z-index: 2;

        width: 18px;
        height: 18px;

        fill: #97a8be;

        transform: translateY(-50%);
    }
}
</style>


