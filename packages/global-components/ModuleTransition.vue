<template>
  <transition
    name="module"
    @enter="setStyle"
    @appear="setStyle"
    @before-leave="setStyle"
    @after-appear="unsetStyle"
    @after-enter="unsetStyle"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'ModuleTransition',

  props: {
    delay: {
      type: String,
      default: '0'
    },

    duration: {
      type: String,
      default: '.25'
    },

    transform: {
      type: Array,
      default() {
        return ['translateY(-20px)', 'translateY(0)']
      }
    }
  },

  methods: {
    setStyle(el) {
      el.style.transition = `transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`;
      el.style.transform = this.transform[0];
      el.style.opacity = 0;
    },

    unsetStyle(el) {
      el.style.transform = this.transform[1];
      el.style.opacity = 1;
    }
  }
}
</script>
