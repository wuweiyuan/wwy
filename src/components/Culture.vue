<template>
  <div class="contents" id="culture">
    <Banner>
      <img :title="imgTitle" v-lazy="imgUrl" class="imgBg">
      <img :title="imgTextTitle" v-lazy="imgText" class="imgText">
    </Banner>
    <ul class="list" id="culList">
      <li v-for="(text,index) in cultureText" :key="index">
        <div class="main_text" :style="text.floatRight" ref="listText" :class="{animatedl:text.show}">
          <h2 class="title">{{text.title}}</h2>
          <div class="info" :style="text.center">{{text.mainText}}</div>
        </div>
        <img v-lazy="text.listImg" :title="text.title" :style="text.floatLeft" ref="listImg"
             :class="{animatedl:text.show}">
      </li>
    </ul>
    <MFooter></MFooter>
  </div>
</template>

<script>
  import Banner from '../base/Banner.vue';
  import MFooter from '../base/MFooter';

  export default {
    name: 'Home',
    data() {
      return {
        imgText: require('../image/dutytitle.png'),
        imgTextTitle: '让时间记录征程',
        imgUrl: require('../image/culturebanner.jpg'),
        imgTitle: '企业文化',
        cultureText: [
          {
            title: '愿景',
            show: true,
            center: {
              textAlign: 'center',
              padding: '20px',
              textIndent: 0,
            },
            floatLeft: {
              float: 'left'
            },
            floatRight: {
              float: 'right'
            },
            listImg: require('../image/culture01.jpg'),
            mainText: '为客户提供稳定商务平台及优质服务，为员工创造施展才能的平台',
          },
          {
            title: '理念',
            floatLeft: {
              float: 'right'
            },
            floatRight: {
              float: 'left'
            },
            listImg: require('../image/culture02.jpg'),
            mainText: '科技型企业的发展要最大力度激发团队的自主与创新热情，公司高层着眼长远谋大局，充分信任团队及成员，给予足够的空间和全力的支持，赋能于团队以达成各项目标，拓展业务领域，我们明白“用人不疑，疑人不用”，并持续践行',
          },
          {
            title: '价值观',
            floatLeft: {
              float: 'left'
            },
            floatRight: {
              float: 'right'
            },
            listImg: require('../image/culture03.jpg'),
            mainText: '细微之处见功底，精益求精筑品质。我们不期超凡脱俗，而相信厚积才能薄发，顺势而为，朝着目标方向笃定前行。我们贴合客户需求，力求完美，持续优化，彰显风速人的坚韧与务实。',
          },
        ]
      }
    },
    mounted() {/*滚动动画*/
      let listText = this.$refs.listText;
      let listImg = this.$refs.listImg;
      window.onscroll = () => {
        let h = win('scrollTop') + win('clientHeight');
        function offset(curEle) {
          var disLeft = curEle.offsetLeft, disTop = curEle.offsetTop, par = curEle.offsetParent;
          while (par) {
            if (navigator.userAgent.indexOf("MSIE 8") === -1) {
              disLeft += par.clientLeft;
              disTop += par.clientTop;
            }
            disLeft += par.offsetLeft;
            disTop += par.offsetTop;
            par = par.offsetParent;
          }
          return {left: disLeft, top: disTop};
        }
        function win(attr, val) {
          if (typeof val != 'undefined') {
            document.documentElement[attr] = val;
            document.body[attr] = val;
          }
          return document.documentElement[attr] || document.body[attr];
        }
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            listText.forEach((item, index1) => {
              item.t = offset(item).top;
              if (item.t < h + 50) {
                if (!item.fayl) {
                  item.className += ' animatedl';
                  item.fayl = true;
                }
              }
            })
            listImg.forEach((item, index2) => {
              item.t = offset(item).top;
              if (item.t < h + 50) {
                if (!item.fayr) {
                  item.className += ' animatedl';
                  item.fayr = true;
                }
              }
            })

        }, 60);

      }
    },
    components: {
      Banner,
      MFooter
    }
  }
</script>
<style scoped lang="less">
  .contents {
    width: 100%;
    overflow-x: hidden;
    .list {
      margin: 50px auto;
      width: 1100px;
      li {
        background: #f5f5f5;
        width: 100%;
        margin-top: 100px;
        overflow: hidden;
        img {
          float: left;
          width: 420px;
          height: 252px;
          opacity: 0;
          filter: alpha(opacity=0);
        }

        .main_text {
          float: right;
          width: 680px;
          height: 252px;
          text-align: center;
          opacity: 0;
          filter: alpha(opacity=0);
          h2 {
            color: #0f0f0f;
            font-size: 26px;
            margin-top: 40px;
            font-weight: normal;
          }
          .info {
            text-align: justify;
            overflow: hidden;
            text-indent: 28px;
            padding: 20px 35px;
            line-height: 25px;
            font-size: 14px;
            color: #535353;
          }
        }
      }
    }
    img[lazy=loading] {
      margin: auto;
      width: 15px !important;
      height: 15px !important;
    }
    /*动画*/
    .animatedl {
      opacity: 1 !important;
      filter: alpha(opacity=100) !important;
      -webkit-animation: slideInUp 1s;
      -o-animation: slideInUp 1s;
      animation: slideInUp 1s;
    }
    @-webkit-keyframes slideInUp {
      from {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        visibility: visible;
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes slideInUp {
      from {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        visibility: visible;
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    .slideInUp {
      -webkit-animation-name: slideInUp;
      animation-name: slideInUp;
    }
  }

  /*移动端适配*/
  @media all and(max-width: 1200px) {
    #culList {
      width: 100%;
      li {
        width: 90%;
        margin: 100px auto 0 auto;
        img {
          float: left;
          width: 42%;
          height: 252px;
        }

        .main_text {
          float: right;
          width: 58%;
          height: 252px;
          text-align: center;
        }
      }
    }
  }

  @media screen and(min-width: 769px)and(max-width: 992px) {
    #culList {
      width: 100%;
      li {
        width: 90%;
        margin: 100px auto 0 auto;
        img {
          float: left;
          width: 42%;
          height: 252px;
        }

        .main_text {
          float: right;
          width: 58%;
          height: 252px;
          text-align: center;
        }
      }
    }
  }

  @media screen and(min-width: 641px) and(max-width: 768px) {
    #culList {
      width: 100%;
      li {
        margin-top: 85px;
        width: 80%;
        img {
          width: 100%;
        }
        .main_text {
          width: 100%;
          .title {
          }
          .info {
            padding: 35px;
          }
        }
      }
    }
  }

  @media screen and(min-width: 415px) and(max-width: 640px) {
    #culList {
      width: 100%;
      li {
        margin-top: 75px;
        width: 80%;
        img {
          width: 100%;
        }
        .main_text {
          width: 100%;
          .title {
            margin-top: 45px;
            font-size: 24px;
          }
          .info {
            line-height: 22px;
          }
        }
      }
    }
  }

  @media screen and(min-width: 375px)and(max-width: 414px) {
    #culList {
      width: 100%;
      li {
        margin-top: 55px;
        width: 80%;
        img {
          width: 100%;
          height: 220px;
        }
        .main_text {
          width: 100%;
          height: 225px;
          .title {
            margin-top: 40px;
            font-size: 22px;
          }
          .info {
            line-height: 20px;
            padding: 20px
          }
        }
      }
    }
  }

  @media screen and(max-width: 375px) {
    #culList {
      width: 100%;
      li {
        margin-top: 55px;
        width: 80%;
        img {
          width: 100%;
          height: 220px;
        }
        .main_text {
          width: 100%;
          height: 225px;
          .title {
            margin-top: 40px;
            font-size: 22px;
          }
          .info {
            line-height: 20px;
            padding: 10px
          }
        }
      }
    }
  }

</style>
