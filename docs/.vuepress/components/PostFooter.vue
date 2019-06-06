<template>
  <div class="post-footer">
    <div class="post-footer-item">
      <span class="date">
        <b class="prefix">Last Updated: </b>
        {{ lastUpdated }}
      </span>
    </div>
    <div class="post-footer-item">
      <EditLink style="text-align: right;"/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lastUpdated() {
      return this.$page.lastUpdated;
    }
  }
}
</script>

<style lang="stylus" scoped>
.prefix {
  color: #4e6e8e;
}

.post-footer {
  display: flex; 
  justify-content: space-between;
   align-items: center;
   margin-bottom: 2rem;
}
.post-footer .post-footer-item {
  display: flex; 
  align-items: center;
}

@media (max-width: $MQMobile) {
  .post-footer {
    display: block;
  }
  .post-footer-item {
    margin-bottom: 1rem;
  }
}
</style>
