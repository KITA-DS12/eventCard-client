<template>
  <div>test</div>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    follower_uid: "",
  }),
  methods: {
    async createFriend() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const uid = user.uid;
      await axios
        .post(`friend/${uid}`, {
          follower_uid: this.follower_uid,
        })
        .then((res) => {
          console.log("ok");
          console.log(res.data);
        })
        .catch((err) => {
          console.log("ng");
          console.log(err);
        });
    },
  },
  mounted() {
    this.follower_uid = this.$route.params.uid;
    this.createFriend();
  },
};
</script>
