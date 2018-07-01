<template>
  <main class="blog" :class="{ 'blog--reading': this.post }">
    <blog-nav :content="content" :filters="filters" :navs="navs"/>
    <div v-if="!about">
      <blog-feed :filters="filters"/>
      <blog-post :post="post"/>
    </div>
    <div v-else>
      <blog-about/>
    </div>

    <blog-footer/>
  </main>
</template>

<script>
import BlogNav from './BlogNav'
import BlogFeed from './BlogFeed'
import BlogPost from './BlogPost'
import BlogFooter from './BlogFooter'
import BlogAbout from './BlogAbout'

export default {
  name: 'blog',
  components: { BlogNav, BlogFeed, BlogPost, BlogFooter, BlogAbout },
  resource: 'Blog',
  props: {
    post: String,
    author: String,
    about: Boolean
  },

  data() {
    return {
      navs: 0,
      title: '',
      labels: {
        post: '',
        author: ''
      }
    }
  },

  computed: {
    content() {
      return { title: this.title, labels: this.labels }
    },

    filters() {
      let filters = {}

      if (this.post) filters.post = this.post
      if (this.author) filters.author = this.author

      return filters
    }
  },

  watch: {
    '$route.name' (to, from) {
      if (to !== from) this.navs++
    }
  }
}
</script>
