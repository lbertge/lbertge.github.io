<template>
  <transition appear name="v--mask">
    <footer v-once class="blog__footer">
      <a href="https://github.com/lbertge">
      <img v-bind:src="github" :width="width">
      </a>
      <a href="https://github.com/lbertge">
      <img v-bind:src="gmail" :width="width">
      </a>
      <a href="https://github.com/lbertge">
      <img v-bind:src="twitter" :width="width">
      </a>
    </footer>
  </transition>
</template>

<script>
import github from '@/assets/svg/github.svg'
import gmail from '@/assets/svg/gmail.svg'
import twitter from '@/assets/svg/twitter.svg'
export default {
  name: 'blog-footer',

  data() {
    return {
      github: github,
      gmail: gmail,
      twitter: twitter,
      width: 30
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    margin: 0px 10px 0px 10px;
    width: 25;
    height: 25;
    fill: aqua;
  }

</style>
