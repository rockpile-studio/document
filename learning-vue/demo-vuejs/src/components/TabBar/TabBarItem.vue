<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon">
        <img slot="item-icon" src="../../assets/img/TabBar/home.png" alt="">
      </slot>
    </div>
    <div v-if="isActive">
      <slot name="item-icon-active">
        <img slot="item-icon" src="../../assets/img/TabBar/home-active.png" alt="">
      </slot>
    </div>
    <div :style="textStyle()">
      <slot name="item-text">
        <div slot="item-text">自定义</div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: {
        type: String,
        default: '-1',
        required: false,
      },
      activeColor: {
        type: String,
        default: 'red',
        required: false,
      }
    },
    data() {
      return {}
    },
    computed: {
      isActive() {
        return this.$route.path.includes('/mart/' + this.link);
      }
    },
    methods: {
      itemClick() {
        console.log('... itemClick');
        if (!this.$route.path.includes('/mart/' + this.link)) {
          this.$router.push('/mart/' + this.link);
        } else {
          console.log('相同的路由不跳转');
        }
      },
      textStyle() {
        let style = {};
        if (this.isActive) {
          style.color = this.activeColor;
        }
        return style;
      },
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: auto;
    text-align: center;
    height: 49px; /*主流APP端tab-bar的高度一般为49px*/
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 20px;
    height: 20px;
    margin-top: 3px;
    vertical-align: middle; /*去除图片底部留白的空间*/
  }

</style>
