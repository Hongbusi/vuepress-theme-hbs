export default {
  data () {
    return {
      hbsShowModule: false
    }
  },
  mounted () {
    this.hbsShowModule = true
  },
  watch: {
    '$route' (newV, oldV) {
      if (newV.path === oldV.path) return

      this.hbsShowModule = false

      setTimeout(() => {
        this.hbsShowModule = true
      }, 200)
    }
  }
}
