<template lang="">
  <div>
    <user-profile :info="userInfo"></user-profile>
    <!-- <p>id : {{ userInfo.id }}</p>
    <p>created : {{ userInfo.created }}</p>
    <p>karma : {{ userInfo.karma }}</p> -->
  </div>
</template>
<script>
import UserProfile from "@/components/UserProfile.vue";
export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    console.log(this.$route.params);
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>
<style lang="">
</style>