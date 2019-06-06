<template>
  <div class="date-container">
    <span class="date">{{dateFormatted}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      page: {
        type: Object,
        required: false,
        default: () => {
          return null
        }
      },

      date: {
        type: String,
        required: false
      },
    },
    computed: {
      dateFormatted() {
        const page = this.page || this.$page
        const date = this.date || page.frontmatter.date
        return new Date(date).toLocaleDateString(['en-US'], {
          month: 'long', 
          day: '2-digit', 
          year: 'numeric'
        })
      }
    },
  }
</script>

<style>
.date {
  font-weight: 400;
  font-size: 14px;
  color: hsl(0,0%, 60%);
}
</style>
