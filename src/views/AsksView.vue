<template lang="">
  <div>
    <ListItem />
    <!-- <p v-for="item in this.$store.state.ask" :key="item.id">
      <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p> -->
  </div>
</template>
<script>
import ListItem from "@/components/ListItem.vue";
export default {
  components: {
    ListItem,
  },
  
};
</script>
<style lang="">
</style>