<template>
  <Common class="timeline-wrapper">
    <ul class="timeline-content">
      <ModuleTransition>
        <li class="desc">{{ timeLine.title }}</li>
      </ModuleTransition>
      <ModuleTransition
        v-for="(item, index) in timeLine.data"
        :key="index"
        :delay="String(0.08 * (index + 1))"
      >
        <li>
          <h3 class="year">{{ item.year }}</h3>
          <ul class="year-wrapper">
            <li v-for="(subItem, subIndex) in item.data" :key="subIndex">
              <span class="date">{{ subItem.date }}</span>
              <span class="title">{{ subItem.thing }}</span>
            </li>
          </ul>
        </li>
      </ModuleTransition>
    </ul>
  </Common>
</template>

<script>
import Common from '../components/common.vue';

export default {
  name: 'TimeLine',

  components: { Common },

  data() {
    return {
      defaultTimeLine: {
        title: '时间轴',
        data: [
          {
            year: 'empty'
          }
        ]
      }
    }
  },

  computed: {
    timeLine() {
      const timeLine = this.$themeConfig.timeLine;
      return timeLine ? timeLine : this.defaultTimeLine;
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/wrapper.styl'

.timeline-wrapper
  @extend $wrapper
  padding 4.6rem 2.5rem 0

  .timeline-content
    box-sizing border-box
    position relative
    list-style none

    &::after
      content ""
      position absolute
      top 14px
      left 0
      z-index -1
      margin-left -2px
      width 4px
      height 100%
      background var(--border-color)

    .desc,
    .year
      position relative
      color var(--text-color)
      font-size 16px
      &:before
        content ""
        position absolute
        z-index 2
        left -20px
        top 50%
        margin-left -4px
        margin-top -4px
        width 8px
        height 8px
        background var(--background-color)
        border 1px solid var(--border-color)
        border-radius 50%

    .year
      margin 80px 0 0px
      color var(--text-color)
      font-weight 700
      font-size 26px

    .year-wrapper
      padding-left 0!important

      li
        display flex
        padding 30px 0 10px
        list-style none
        border-bottom 1px dashed var(--border-color)
        position relative

        &:hover
          .date
            color $accentColor
            &::before
              background $accentColor

          .title
            color $accentColor

        .date
          width 40px
          line-height 30px
          color var(--text-color-sub)
          font-size 12px
          &::before
            content ""
            position absolute
            left -19.2px
            top 41px
            width 6px
            height 6px
            margin-left -4px
            background var(--background-color)
            border-radius 50%
            border 1px solid var(--border-color)
            z-index 2

        .title
          line-height 30px
          color var(--text-color-sub)
          font-size 16px
          cursor pointer
</style>
