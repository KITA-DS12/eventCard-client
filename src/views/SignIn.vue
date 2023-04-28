<template>
    <v-app>
        <v-main>
            <div class="login-box">
                <v-card class="login-form">
                  <v-card-title class="login-title">Signin</v-card-title>
                  <v-card-subtitle>ユーザー情報をご入力ください</v-card-subtitle>
                  <v-btn @click="signup" class="to-signup">新規登録はこちら</v-btn>
                  <!-- <v-btn text color="light-blue" to="signup">signin</v-btn> -->
                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
          
                    <v-text-field
                      v-model="password"
                      type="password"
                      label="Password"
                    ></v-text-field>
          
          
                    <v-btn
                      color="success"
                      class="login-btn"
                      @click="submit"
                      :disabled="isValid">
                      LOGIN
                    </v-btn>
          
                    <v-btn>
                      CLEAR
                    </v-btn>
                    <v-alert
                      dense
                      text
                      type="success"
                      class="success-message"
                      v-if="message"
                    >
                      {{ message }}
                    </v-alert>
                    <v-alert
                        dense
                        outlined
                        type="error"
                        class="error-message"
                        v-if="errorMessage"
                      >
                        {{ errorMessage }}
                      </v-alert>
                  </v-form>
                </v-card>
              </div>
    </v-main>
    </v-app>
</template>

<style scoped>

.login-form {
  margin-top: 20%;
  padding: 30px;
}

.login-box {
  width: 98%;
  margin: auto;
  padding: 30px;
}

.login-title {
  display: inline-block;
  text-align: center;
}

.login-btn {
  margin-right: 20px;
}

.success-message {
  margin-top: 20px;
}

.error-message {
  margin-top: 20px;
}

.to-signup {
    margin: 10px 0px;
}

</style>

<script>
  import firebase from "../firebase/firebase"

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'メールアドレスを入力してください',
        v => /.+@.+\..+/.test(v) || 'メールアドレスが不正です',
      ],
      password: '',
      message: '',
      errorMessage: '',
    }),
    mounted() {
      if(localStorage.message){
        this.message = localStorage.message
        localStorage.message = ''
      }
    },
    computed: {
      isValid() {
        console.log("isValid", this.valid);
        return !this.valid;
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      submit () {
        console.log("submit call");
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log("success", result);
          console.log("user", result.user);

          // const auth = {
          //   displayName: result.user.displayName,
          //   email: result.user.email,
          //   uid: result.user.uid,
          //   refreshToken: result.user.refreshToken
          // }
          

          // sessionStorage.setItem('user', JSON.stringify(auth))
          

          this.$router.push('/');
          // console.log(auth);
        })
        .catch((error) => {
          console.log("error", error);
          this.errorMessage = "ログインに失敗しました"
        })
      },
      signup() {
        console.log("signup!");
        window.location.href = '/signup';
      }
    },
  }
</script>