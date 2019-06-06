<template>
  <div>
    <div class="content">
      <TagBadges :tags="[tagName]"/>
      <Archive :groupByYear="false" :filter="filterByTag"/>
    </div>
    <ParentLayout/>
  </div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  components: { ParentLayout },
  methods: {
    filterByTag(page) {
      return page.frontmatter.tags.indexOf(this.tagName) > -1;
    }
  },
  computed: {
    tagName() {
      return this.$route.meta.tagName;
    }
  }
};
</script>

<style scoped>
.tags {
  padding-left: 1.2em;
}
</style>
