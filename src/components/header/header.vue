<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div class="detail" v-show="detailShow">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>
<!--<script type="text/ecmascript-6">-->
<script>
  /* eslint-disable no-console */

  export default {
    props: {
      seller: {
        type: Object,
      },
    },
    data() {
      return {
        detailShow: false,
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
  };

</script>
<style lang="scss">
  @import "../../common/scss/mixin";
  .header {
    color: #fff;
    position: relative;
    background-color: rgba(7, 17, 27, 0.5);
    overflow: hidden;
    .content-wrapper {
      padding: 24px 12px 18px 24px;
      position: relative;
      font-size: 0;
      .avatar {
        display: inline-block;
        vertical-align: top;
        margin-right: 16px;
        img {
          border-radius: 2px;
        }
      }
      .content {
        display: inline-block;
        .title {
          margin: 2px 0 8px 0;
          .brand {
            width: 30px;
            height: 18px;
            background-size: 30px 18px;
            display: inline-block;
            @include bg-img("brand");
            background-repeat: no-repeat;
            vertical-align: top;
            margin-right: 6px;
          }
          .name {
            margin-right: 6px;
            font-size: 16px;
            line-height: 18px;
            font-weight: bold;
          }
        }
        .description {
          margin-bottom: 10px;
          line-height: 12px;
          font-size: 12px;
        }
        .support {
          .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            vertical-align: top;
            &.decrease {
              @include bg-img('decrease_1');
            }
            &.discount {
              @include bg-img('discount_1');
            }
            &.guarantee {
              @include bg-img('guarantee_1');
            }
            &.invoice {
              @include bg-img('invoice_1');
            }
            &.special {
              @include bg-img('special_1');
            }
          }
          .text {
            line-height: 12px;
            font-size: 10px;
          }
        }
      }
      .support-count {
        position: absolute;
        right: 12px;
        bottom: 14px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background-color: rgba(0, 0, 0, 0.2);
        text-align: center;
        .count {
          font-size: 10px;
          vertical-align: top;
        }
        .icon-keyboard_arrow_right {
          font-size: 10px;
          line-height: 24px;
          margin-left: 2px;
        }
      }
    }
    .bulletin-wrapper {
      height: 28px;
      line-height: 28px;
      padding: 0 22px 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      background: rgba(7, 17, 27, 0.2);
      .bulletin-title {
        display: inline-block;
        margin-top: 8px;
        width: 22px;
        height: 12px;
        @include bg-img("bulletin");
        background-size: 22px 12px;
        background-repeat: no-repeat;
        vertical-align: top;
      }
      .bulletin-text {
        font-size: 10px;
        margin: 0 4px;
        vertical-align: top;
      }
      .icon-keyboard_arrow_right {
        position: absolute;
        font-size: 12px;
        right: 12px;
        top: 8px;
      }
    }
    .background {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      filter: blur(10px);
    }
    .detail {
      position: fixed;
      z-index: 100;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(7, 17, 27, 0.9);
      top: 0;
      left: 0;
      .detail-wrapper {
        min-height: 100%;
        overflow: hidden;
        .detail-main {
          margin-top: 64px;
          padding-bottom: 64px;
          .name {}
        }
      }
      .detail-close {
        position: relative;
        width: 32px;
        height: 32px;
        margin: -64px auto 0 auto;
        clear: both;
        font-size: 32px;
      }
    }
  }

</style>
