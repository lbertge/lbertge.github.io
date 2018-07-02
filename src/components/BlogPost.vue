<template>
  <transition name="post">
    <article v-if="post" class="post">
      <header class="post__header">
        <h2 class="post__title">{{ title }}</h2>

        <h3 class="post__meta">
          <time>{{ prettyDate(published) }}</time>
        </h3>

        <blockquote class="post__subtitle">{{ description }}</blockquote>
      </header>

      <section class="post__body rte" v-html="content"></section>

      <footer class="post__footer">
        This is a footer
      </footer>
    </article>
  </transition>
</template>

<script>
import { kebabify, prettyDate } from '../helpers'

export default {
  name: 'blog-post',
  resource: 'BlogPost',
  props: { post: String },

  data() {
    return {
      title: '',
      content: '',
      published: '',
      description: '',
      commentsReady: false
    }
  },

  watch: {
    post(to, from) {
      if (to === from || !this.post) return;

      this.commentsReady = false
      this.$getResource('post', to)
        .then(this.showComments)
    }
  },

  methods: {
    kebabify,
    prettyDate,
    showComments() {
      setTimeout(() => {
        this.commentsReady = true
      }, 1000)
    }
  },

  beforeMount() {
    if (!this.post) return;
    const that = this;
    fetch('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=TeX-MML-AM_CHTML')
      .then(res => {
        that.$nextTick(() => {
          window.MathJax.Hub.Config({
            tex2jax: {inlineMath: [['$', '$'], ['\\(', '\\)']]}
          })
          window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub])
        })
      }
    )

    this.$getResource('post', this.post)
      .then(this.showComments)
  },

  updated() {
    // this throws an error for some reason, even though I'm pretty sure it works
    try {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub])
    } catch (error) {
      // silently fail
    }
  }

}
</script>
