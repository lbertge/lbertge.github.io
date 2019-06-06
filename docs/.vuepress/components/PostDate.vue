<template>
    <p>
        <i>Initially published: {{ prettyDate() }}</i>
    </p>
</template>

<script>
export default {
    methods: {
        prettyDate () {
            return new Date(this.$page.lastUpdated)
                .toString()
                .split(' ')
                .slice(1, 4)
                .join(' ')
                .replace(/( \d+)$/, ',$1')
        }
    }

}
</script>

