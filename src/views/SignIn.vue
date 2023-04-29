<template>
  <v-app>
    <v-main>
      <v-container><v-row align-content="center" :style="style">
      <div class="login-box">
        <v-card class="login-form">
          <v-card-title class="text-center">Signin</v-card-title>
          <v-card-subtitle>ユーザー情報をご入力ください</v-card-subtitle><br>
          <!-- <v-btn to="/signup" class="to-signup d-flex justify-center">新規登録はこちら</v-btn> -->
          <!-- <v-btn text color="light-blue" to="signup">signin</v-btn> -->
          <v-form ref="form" v-model="valid" lazy-validation>
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
            <br>
            <v-btn
              color="success"
              class="login-btn"
              @click="submit"
              :disabled="isValid"
              block
            >
              LOGIN
            </v-btn>

            <!-- <v-btn> CLEAR </v-btn> -->
            <v-btn to="/signup" class="to-signup d-flex justify-center">新規登録はこちら</v-btn>
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
    </v-row></v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.login-form {
  padding: 30px;
}

.login-box {
  max-width: 1000px;
  margin: auto;
  padding: 30px;
}

.login-title {
  display: inline-block;
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
import firebase from "../firebase/firebase";
import axios from "axios";

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "メールアドレスを入力してください",
      (v) => /.+@.+\..+/.test(v) || "メールアドレスが不正です",
    ],
    password: "",
    message: "",
    errorMessage: "",
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  mounted() {
    if (localStorage.message) {
      this.message = localStorage.message;
      localStorage.message = "";
    }
  },
  mounted () {
    this.onResize()
  },
  computed: {
    isValid() {
      console.log("isValid", this.valid);
      return !this.valid;
    },
    style () {
      return 'height: ' + this.windowSize.y + 'px;'
    }
  },
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      this.iconSize = window.innerHeight * 0.1
    },
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
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          this.readUser(result.user.uid);
          this.$router.push("/myevent");
        })
        .catch((error) => {
          console.log("error", error);
          this.errorMessage = "ログインに失敗しました";
        });
    },
    async readUser(uid) {
      await axios.get(`user/${uid}`).then((res) => {
        const auth = {
          name: res.data.username,
          email: res.data.email,
          uid: res.data.uid,
          icon: res.data.profile_icon,
        };
        sessionStorage.setItem("user", JSON.stringify(auth));
      });
    },
  },
};
</script>
