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
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
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
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
  };

</script>
<style lang="scss">
  @import "../../common/scss/mixin";
  .header {
    color: #fff;
    background: #333;
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
  }

</style>
