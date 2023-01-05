<template lang="">
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in listItems" :key="item.id">

        <div class="points">
          {{ item.points || 0 }}
        </div>

        <div>
          <p class="news-title">
              <a :href="item.url" v-if="item.domain">
                {{ item.title }}
              </a>
              <a v-else :href="`item/${item.id}`">
                {{ item.title }}
              </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
              <router-link v-if="item.user" :to="`/user/${item.user}`">{{ item.user }}</router-link>
              <a :href="item.url" v-else>
                {{ item.domain }}
              </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    listItems() {
      return this.$store.state.list
    },
  },
};
</script>
<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>