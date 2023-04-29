<template>
  <v-app>
    <div class="login-box">
      <v-card class="login-form">
        <v-card-title class="login-title">SignUp</v-card-title>
        <v-card-subtitle>ユーザー情報をご入力ください</v-card-subtitle>
        <v-btn text class="to-login" to="/signin">ログイン画面はこちら</v-btn>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="UserName"
            required
          ></v-text-field>

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
            :disabled="isValid"
          >
            SIGN UP
          </v-btn>

          <v-btn> CLEAR </v-btn>
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
  </v-app>
</template>

<style scoped>
.login-form {
  margin-top: 150px;
  padding: 30px;
}

.login-box {
  width: 95%;
  margin: 0px auto;
  padding: 30px;
}

.login-title {
  display: inline-block;
}

.login-btn {
  margin-right: 20px;
}

.error-message {
  margin-top: 20px;
}

.to-login {
  margin: 10px 0px;
}
</style>

<script>
import firebase from "../firebase/firebase";
import axios from "axios";

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "名前を入力してください",
      (v) => (v && v.length <= 10) || "名前は10文字以内で入力してください",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "メールアドレスを入力してください",
      (v) => /.+@.+\..+/.test(v) || "メールアドレスが不正です",
    ],
    password: "",
    errorMessage: "",
  }),
  computed: {
    isValid() {
      console.log("isValid", this.valid);
      return !this.valid;
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submit() {
      console.log("submit call");
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(async (result) => {
          this.createUser(result.user.uid);
          await result.user.updateProfile({ displayName: this.name });

          localStorage.message = "新規作成に成功しました";

          // Loginにリダイレクト処理
          this.$router.push("/signin");
        })
        .catch((error) => {
          console.log("fail", error);

          // エラーメッセージを表示
          this.errorMessage = "ユーザーの新規作成に失敗しました。";
        });
    },
    async createUser(uid) {
      await axios
        .post("user", {
          uid: uid,
          username: this.name,
          email: this.email,
          profile_icon: "",
        })
        .then((res) => {
          const auth = {
            name: res.data.username,
            email: res.data.email,
            uid: res.data.uid,
            icon: res.data.profile_icon,
            //  refreshToken: result.user.refreshToken,
          };
          sessionStorage.setItem("user", JSON.stringify(auth));
        });
    },
  },
};
</script>
