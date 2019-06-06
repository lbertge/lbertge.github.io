<template>
  <span class="tags">
    <span class="tag" v-for="tag in tagList">
      <router-link :to="$tags.map[tag].path">
      <Badge vertical="center">{{ tag }}</Badge>
      </router-link>
    </span>
  </span>
</template>

<script>
  export default {
    props: {
      tags: {
        type: Array,
        required: false,
        /** Defaults to current page's tags */
        default: function(){
          return null
        }
      },
    },
    computed: {
      tagList() {
        return this.tags || this.$page.frontmatter.tags
      }
    }
  }
</script>

<style>
.tags {
  align-items: center;
  justify-content: left;
  width: 100%;
}

.tag .badge {
  margin-right: 5px;
  background-color: var(--tag-badge-color) !important;
  white-space: nowrap;
}
</style>
