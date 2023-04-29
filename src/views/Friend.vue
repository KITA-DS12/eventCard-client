<template>
  <div>test</div>
</template>
<script>
import axios from "axios";

export default {
  methods: {
    async createFriend() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const uid = user.uid;
      await axios
        .post(`friend/${uid}`, {
          follower_uid: this.$route.params.uid,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.createFriend();
  },
};
</script>
