<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import header from './components/header/header';
  /* eslint-disable no-console */
  const ERR_OK = 0;

  console.log(header, '9999999');
  export default {
    data() {
      return {
        seller: {},
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        const result = response.body;
        console.log(this);
        if (result.errno === ERR_OK) {
          this.seller = result.data;
          console.log(this.seller);
        }
      });
    },
    components: {
      'v-header': header,
    },
  };

</script>
<!--rel="stylesheet/stylus"-->
<style lang="scss">
  @import "./common/scss/mixin";
  #app {
    .tab {
      display: flex;
      width: 100%;
      line-height: 40px;
      @include border-1px(rgba(7, 17, 27, 0.1), top, before);
      @include border-1px(rgba(7, 17, 27, 0.1), bottom, after);
      .tab-item {
        flex: 1;
        text-align: center;
        &>a {
          display: block;
          text-decoration: none;
          font-size: 14px;
          color: rgb(77, 85, 93);
          &.active {
            color: rgb(240, 20, 20);
          }
        }
      }
    }
  }

</style>
