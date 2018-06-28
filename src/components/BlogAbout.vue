<template>
  <transition name="slide-fade" mode="out-in">
      <section class="post__body rte">
        <p>
              I am a software engineer at Abbvie Stemcentrx.
              In my spare time, I like to think intentionally about stupid ideas.
        </p>
        <pre v-highlightjs>
          <code class="python">
          @requires_authorization
          def somefunc(param1='', param2=0):
              r'''A docstring'''
              if param1 > param2: # interesting
                  print 'Gre\'ater'
              return (param2 - param1 + 1 + 0b10l) or None

          class SomeClass:
              pass

          >>> message = '''interpreter
          ... prompt'''
          </code>
        </pre>
        <pre v-highlightjs><code class="javascript">const s = new Date().toString()</code></pre>
      </section>
  </transition>
</template>

<script>
export default {
  name: 'blog-about'
}
</script>
