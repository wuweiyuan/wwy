<template>
  <div class="contents" id="about">
    <Banner>
      <img :title="imgTitle0" v-lazy="imgUrl" class="imgBg">
      <img :title="imgTextTitle" :src="imgText" class="imgText">
    </Banner>
    <div class="aub_one aub_one_show">
      <h4 class="aub_title">{{ aubOneTitle}}</h4>
      <div class="aub_text">{{aubOneText}}</div>
      <img v-lazy="listUrl" :title="imgTitle1" class="aub_img_one">
    </div>
    <div ref="aubTwo" class="aub_one aub_two" :class="{animate:aubTwo}">
      <h4 class="aub_title">{{aubTwoeTitle}}</h4>
      <div class="aub_text">{{aubTwoText}}</div>
      <ul class="aub_list clear">
        <li class="list_l" v-for="(list,key) in aub_list" :key="key">
          <div class="list_l_in">
            <img :title="list.title" v-lazy="list.imgUrl">
            <h6>{{list.title}}</h6>
          </div>
        </li>
      </ul>
      <h6 class="aub_two_title">以上是风速资本领域</h6>
    </div>
    <div ref="aubThr" class="aub_thr_show aub_thr_wrap" :class="{animate:aubThrWrap}">
      <div class="aub_one aub_thr">
        <h4 class="aub_title aub_thr_title">{{aubThrTitle}}</h4>
        <div class="aub_text">{{aubThrText}}</div>
        <img v-lazy="mapUrl" :title="imgTitle2" class="aub_img_thr">
      </div>
    </div>
    <MFooter></MFooter>
  </div>
</template>

<script>
  import Banner from '../base/Banner.vue';
  import MFooter from '../base/MFooter';

  export default {
    name: 'About',
    data() {
      return {
        aubTwo: false,
        aubThrWrap: false,
        imgTitle1: '公司简介',
        imgTitle2: '发展规划',
        imgTitle0: '关于风速',
        aub_list: [
          {
            title: '证券',
            imgUrl: require('../image/about01.jpg')
          },
          {
            title: '现货',
            imgUrl: require('../image/about02.jpg')
          },
          {
            title: '保险',
            imgUrl: require('../image/about03.jpg')
          },
          {
            title: '期货',
            imgUrl: require('../image/about04.jpg')
          },
          {
            title: '资产管理',
            imgUrl: require('../image/about05.jpg')
          },
          {
            title: '顾问',
            imgUrl: require('../image/about06.jpg')
          }
        ],
        imgText: require('../image/dutytitle.png'),
        imgTextTitle: '让时间记录征程',
        imgUrl: require('../image/dutybanner.jpg'),
        listUrl: require('../image/about_ind.png'),
        mapUrl: require('../image/about_plan.png'),
        aubOneTitle: '公司简介',
        aubOneText: '深圳风速实业有限公司注册资本1000万美元，为风速资本有限公司(Fung Financial Group Ltd)的全资子公司。公司地处深圳核心地带，仅一河之隔临近香港，对接全球经济，开拓并发展新业务。风速实业基于良好的信誉和资源优势，与海内外机构有紧密联系和深度合作，取得最大力度的业务支持，令我们的客户能获得国际上最快捷和全面的资讯，享受优质的投资咨询服务。公司80后和90后员工占比超过90%，凝聚活力与成长，打造精品服务，持续从而提高资产质量、优化资本和产业结构，促进行业健康良好发展。',
        aubTwoeTitle: '投资背景',
        aubTwoText: '母公司风速资本有限公司在2013年成立于香港，旗下拥有7家全资子公司，4家控股子公司，6家参股公司和3家合伙企业。业务涉猎领域广泛，在金融行业包括证券、现货、保险、期货、资产管理和顾问等多项业务。此外，随着近年香港及内地的税务调整及政策鼓励，公司亦逐渐布局红酒、汽车和资讯科技等市场。为更好地适应多元化企业的发展，集团在发展模式、组织架构、公司治理等方面不断革新，借助资本市场力量整合并丰富各项资源，在战略管理、领导发展、价值创造等方面形成了适合自身特色的管理模式。',
        aubThrTitle: '发展规划',
        aubThrText: '随着互联网和移动端的迅猛发展，全球迎来大数据时代，为各个传统行业带来了新的机遇和挑战。风速实业在国际专业领域深耕细作，通过实战积累，开发符合国内业务拓展的模式。打造线上线下全面服务的综合体系。为企业、员工和社会创造价值。我们拥有一支实干敬业，高效运作的精英队伍，业务遍及华南、华中、华东和华北地区。风速实业，正以扎实奋进的工作作风成就行业典范。',
      }
    },
    components: {
      Banner,
      MFooter
    },
    mounted() {/*滚动动画*/
      let aubTwo = this.$refs.aubTwo;
      let aubThr = this.$refs.aubThr;
      window.onscroll = () => {
        let h = win('scrollTop') + win('clientHeight');
        let aubTwoTop=offset(aubTwo).top;
        let aubThrTop=offset(aubThr).top;
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
              if (aubTwoTop < h + 50) {
                this.aubTwo = true
              }
              if (aubThrTop < h) {
                this.aubThrWrap = true
              }
          }, 60);
      }
    }
  }
</script>
<style scoped lang="less">
  .contents {
    width: 100%;
    overflow-x: hidden;
    .aub_one {
      width: 1100px;
      margin: 50px auto 0 auto;
      .aub_title {
        text-align: center;
        font-size: 26px;
        color: #292523;
        font-weight: normal;
      }
      .aub_text {
        font-size: 14px;
        color: #535353;
        text-align: left;
        margin-top: 30px;
        text-indent: 28px;
        line-height: 30px;

      }
      .aub_img_one {
        display: block;
        width: 300px;
        margin: 60px auto 0 auto;
      }
    }
    .aub_two {
      opacity: 0;
      filter: alpha(opacity=0);
      .aub_list {
        margin-top: 38px;
        width: 100%;
        padding: 0 20px;
        -webkit-animation: slideInUp 1s;
        -o-animation: slideInUp 1s;
        animation: slideInUp 1s;
        li {
          float: left;
          width: 174px;
          height: 252px;
          -webkit-animation: slideInUp 1s;
          -o-animation: slideInUp 1s;
          animation: slideInUp 1s;
          .list_l_in {
            position: relative;
            width: 174px;
            height: 252px;
            margin: 0 auto;
            img {
              display: inline-block;
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              border: 8px solid #fff;
            }
            img[lazy=loading] {
              margin: auto;
              width: 15px !important;
              height: 15px !important;
            }

            h6 {
              position: absolute;
              left: 0;
              top: 65%;
              color: #fff;
              width: 100%;
              font-size: 16px;
              font-weight: normal;
              text-align: center;
            }
          }
        }
      }
    }
    .aub_two_title {
      font-size: 14px;
      color: #757575;
      text-align: center;
      margin-top: 25px;
    }
    .aub_one_show {
      -webkit-animation: slideInUp 1s;
      -o-animation: slideInUp 1s;
      animation: slideInUp 1s;
    }

    .aub_thr_wrap {
      width: 100%;
      background: #f5f5f5;
      opacity: 0;
      filter: alpha(opacity=0);
      .aub_thr {
        width: 1100px;
        overflow: hidden;
        .aub_thr_title {
          margin-top: 50px;
        }
        .aub_img_thr {
          display: block;
          margin: 50px auto;
          -webkit-animation: slideInUp 1.5s;
          -o-animation: slideInUp 1.5s;
          animation: slideInUp 1.5s;
        }
      }
    }
    /*动画*/
    .animate {
      opacity: 1;
      filter: alpha(opacity=100);
      -webkit-animation: slideInUp 1s;
      -o-animation: slideInUp 1s;
      animation: slideInUp 1s;
    }
    @-webkit-keyframes slideInUp {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    .slideInUp {
      -webkit-animation-name: fadeInUp;
      animation-name: fadeInUp;
    }

  }

  /*移动端适配*/
  @media all and(max-width: 1200px) {
    #about {
      .aub_one {
        width: 80%;
        margin: 50px auto 0 auto;
        .aub_title {
          font-size: 22px;
        }
        .aub_img_one {
          width: 280px;
        }
        .aub_list {
          width: 100%;
          padding: 0;
          li {
            width: 33.33%;
          }
        }
      }
    }
  }

  @media screen and(min-width: 769px)and(max-width: 992px) {
    #about {
      .aub_one {
        width: 80%;
        margin: 50px auto 0 auto;
        .aub_title {
          font-size: 22px;
        }
        .aub_img_one {
          width: 280px;
        }
        .aub_list {
          width: 100%;
          padding: 0;
          li {
            width: 33.33%;
          }
        }
      }
      .aub_thr {
        img {
          width: 80%;
        }
      }
    }

  }

  @media screen and(min-width: 641px) and(max-width: 768px) {
    #about {
      .aub_one {
        width: 80%;
        margin: 50px auto 0 auto;
        .aub_title {
          font-size: 22px;
        }
        .aub_img_one {
          width: 270px;
        }
        .aub_list {
          width: 100%;
          padding: 0;
          li {
            width: 33.33%;
          }
        }
      }
      .aub_thr {
        img {
          width: 75%;
        }
      }
    }
  }

  @media screen and(max-width: 640px) {
    #about {
      .aub_one {
        width: 90%;
        margin: 50px auto 0 auto;
        .aub_title {
          font-size: 22px;
        }
        .aub_img_one {
          width: 260px;
        }
        .aub_list {
          width: 100%;
          padding: 0;
          display: flex;
          flex-flow: row wrap;
          li {
            width: 33.33%;
            height: 240px;
            padding: 10px 0;
            .list_l_in {
              width: 95%;
              height: 100%;
              margin: auto;
              img {
                width: 98%;
                height: 100%;
                border: none;
              }
            }
          }
        }
      }
      .aub_thr {
        img {
          width: 70%;
        }
      }
    }
  }

  @media screen and(max-width: 520px) {
    #about {
      .aub_one {
        width: 90%;
        margin: 50px auto 0 auto;
        .aub_title {
          font-size: 22px;
        }
        .aub_img_one {
          width: 260px;
        }
        .aub_list {
          width: 100%;
          padding: 0;
          display: flex;
          flex-flow: row wrap;
          li {
            width: 33.33%;
            height: 220px;
            padding: 10px 0;
            .list_l_in {
              width: 95%;
              height: 100%;
              margin: auto;
              h6 {
                font-size: 14px;
              }
              img {
                width: 98%;
                height: 100%;
                border: none;
              }
            }
          }
        }
      }
      .aub_thr {
        img {
          width: 70%;
        }
      }
    }
  }

  @media screen and(max-width: 460px) {
    #about {
      .aub_one {
        width: 90%;
        margin: 50px auto 0 auto;
        .aub_title {
          font-size: 22px;
        }
        .aub_img_one {
          width: 260px;
        }
        .aub_list {
          width: 100%;
          padding: 0;
          display: flex;
          flex-flow: row wrap;
          li {
            width: 33.33%;
            height: 200px;
            padding: 10px 0;
            .list_l_in {
              width: 95%;
              height: 100%;
              margin: auto;
              h6 {
                font-size: 14px;
              }
              img {
                width: 98%;
                height: 100%;
                border: none;
              }
            }
          }
        }
      }
      .aub_thr {
        img {
          width: 70%;
        }
      }
    }
  }

  @media screen and(max-width: 414px) {
    #about {
      .aub_one {
        width: 90%;
        margin: 50px auto 0 auto;
        .aub_title {
          font-size: 22px;
        }
        .aub_img_one {
          width: 250px;
        }
        .aub_list {
          width: 100%;
          padding: 0;
          display: flex;
          flex-flow: row wrap;
          li {
            width: 33.33%;
            height: 180px;
            padding: 10px 0;
            .list_l_in {
              width: 95%;
              height: 100%;
              margin: auto;
              h6 {
                font-size: 14px;
              }
              img {
                width: 98%;
                height: 100%;
                border: none;
              }
            }
          }
        }
      }
      .aub_thr {
        img {
          width: 70%;
        }
      }
    }
  }

  @media screen and(min-width: 321px)and(max-width: 375px) {
    #about {
      .aub_one {
        width: 90%;
        margin: 50px auto 0 auto;
        .aub_title {
          font-size: 22px;
        }
        .aub_img_one {
          width: 240px;
        }
        .aub_list {
          width: 100%;
          padding: 0;
          display: flex;
          flex-flow: row wrap;
          li {
            width: 33.33%;
            height: 160px;
            padding: 10px 0;
            .list_l_in {
              width: 95%;
              height: 100%;
              margin: auto;
              h6 {
                font-size: 14px;
              }
              img {
                width: 98%;
                height: 100%;
                border: none;
              }
            }
          }
        }
      }
      .aub_thr {
        img {
          width: 70%;
        }
      }
    }
  }

  @media screen and(max-width: 320px) {
    #about {
      .aub_one {
        width: 90%;
        margin: 50px auto 0 auto;
        .aub_title {
          font-size: 22px;
        }
        .aub_img_one {
          width: 240px;
        }
        .aub_list {
          width: 100%;
          padding: 0;
          display: flex;
          flex-flow: row wrap;
          li {
            width: 33.33%;
            height: 160px;
            padding: 10px 0;
            .list_l_in {
              width: 95%;
              height: 100%;
              margin: auto;
              h6 {
                font-size: 14px;
              }
              img {
                width: 98%;
                height: 100%;
                border: none;
              }
            }
          }
        }
      }
      .aub_thr {
        img {
          width: 70%;
        }
      }
    }
  }

</style>
