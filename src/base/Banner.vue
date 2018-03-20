<template>
  <div class="bus_nav" id="busNav">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  .bus_nav {
    position: relative;
    width: 100%;
    height: 100%;
    .imgBg {
      display: block;
      width: 100%;
      height: 100%;
    }
    .imgText {
      position: absolute;
      left: 50%;
      top: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      display: inline-block;
      width: 373px;
      height: 34px;
      -webkit-animation: fadeIn 2.5s;
      -o-animation: fadeIn 2.5s;
      animation: fadeIn 2.5s;
    }
    @-webkit-keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    .fadeIn {
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
    }
    img[lazy=loading] {
      margin: 50px auto 0 auto !important;
      width: 15px !important;
      height: 15px !important;
    }
  }

  /*适配*/
  @media screen and(min-width: 769px)and(max-width: 992px) {
    #busNav {
      .imgText {
        width: 350px;
        height: 30px;
      }
    }
  }

  @media screen and(min-width: 641px) and(max-width: 768px) {
    #busNav {
      .imgBg {
        height: 135px;
      }
      .imgText {
        width: 315px;
        height: 28px;
      }
    }

  }

  @media screen and(max-width: 640px) {
    #busNav {
      .imgBg {
        height: 135px;
      }
      .imgText {
        width: 290px;
        height: 24px;
      }
    }

  }

  @media all and(max-width: 500px) {
    #busNav {
      .imgBg {
        height: 125px;
      }
      .imgText {
        width: 255px;
        height: 22px;
      }
    }
  }

  @media all and(max-width: 375px) {
    #busNav {
      .imgBg {
        height: 100px;
      }
      .imgText {
        width: 213px;
        height: 19px;
      }
    }
  }


</style>
