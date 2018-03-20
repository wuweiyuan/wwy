<template>
  <div class="contents" id="bus">
    <Banner>
      <img :title="imgTitle" v-lazy="imgUrl" class="imgBg imgs">
      <img :title="imgTextTitle" v-lazy="imgText" class="imgText">
    </Banner>
    <ul class="bus_list" id="busList">
      <li class="clear" v-for="(item,key) in buscontes" :class="{list_bg:(key%2!=0)}" :key="key">
        <div class="bus_wrap">
          <div class="bus_l" ref="busLeft" :style="item.show"
               :class="{float_l:!item.float_l,float_r:item.float_r,animatedl:item.show}">
            <h3>{{item.title}}</h3>
            <div class="bus_text">
              {{item.bustext}}
            </div>
          </div>
          <div class="bus_r" ref="busRight" :class="{float_l:item.float_l,float_r:!item.float_r,animatedl:item.show}">
            <img v-lazy="item.imgurl" :title="item.title">
          </div>
        </div>
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
        imgTitle: '公司业务',
        imgText: require('../image/dutytitle.png'),
        imgTextTitle: '让时间记录征程',
        imgUrl: require('../image/businessbanner.jpg'),
        buscontes: [
          {
            title: '珠宝商城',
            float_r: false,
            float_l: false,
            show: true,
            imgurl: require('../image/business01.png'),
            bustext: '珠宝商城意欲摒除所有无意义于消费者的附加费用，抽丝剥茧，以薄利多销的方式给予消费者价格保障。基于深厚的专业背景和业务资源，风速实业对接多家合作伙伴，减少中间环节，直接获得准确、有效的实时资讯。透明、快捷、稳健的珠宝首饰资讯和电子商务服务，有助于客户了解市场行情，把握机会。客户可通过简单、直观的操作界面，实时掌握资讯及订单执行情况，体验轻松购物。'
          },
          {
            title: '运维中心',
            float_r: true,
            float_l: true,
            imgurl: require('../image/business02.png'),
            bustext: '中国市场对于环球市场的影响力逐渐显现，各国商贾纷纷进驻中国，欲大展拳脚。而在不同行业里，中国固有的经营特色、本土属性却让不少公司水土不服，失败而归，当中更不乏知名的跨国大企业。我们为外商企业开拓中国市场提供形象推广、渠道建设的专业顾问服务。建立紧密沟通，为本地客户了解产品和服务提供支持。为潜在客户量身定做高效益的托管服务，稳健发展，成本可控。'
          },
          {
            title: '技术支持',
            float_r: false,
            float_l: false,
            imgurl: require('../image/business03.png'),
            bustext: '我们深信，未来的时代对大数据的需求日益旺盛，善用数据能够为各行各业带来新的经营思维和巩固行业地位，发挥优势，尤其是各国政府提倡的金融科技行业。金融虽是古老的行业，却又历久不衰，其遵循的原则是不断创新，引领行业革新进步。我们能让企业快速反应，及时调整策略，完善风险管理。深度挖掘大数据、整合数据、掌握流量。为各行业提供多元化的桥接服务，连接不同板块，汇流成海。'
          },
          {
            title: '金融咨询',
            float_r: true,
            float_l: true,
            imgurl: require('../image/business04.png'),
            bustext: '基于核心团队的国际化专业背景和投资视野，公司提供贴心的咨询服务。帮助客户高效处理业务，以轻松便捷地应对不同情景下的业务操作，实现互惠共赢。我们凭借广阔的业务网络，结合客户自身的业务重点和需求，予以专业、全面的咨询建议，帮助客户实现多领域投资，分散风险，建立长期稳定的合作关系。配合强大的一站式客户后台管理功能，可精细化跟进客户所有流程，与客户零距离接触。'
          }
        ]
      }
    },
    mounted() {/*滚动动画*/
      let busLeft = this.$refs.busLeft;
      let busRight = this.$refs.busRight;
      window.onscroll = () => {
        let h = win('scrollTop') + win('clientHeight');
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            busLeft.forEach((item, index1) => {
              item.t = offset(item).top;
              if (item.t < h + 50) {
                if (!item.fayl) {
                  item.className += ' animatedl';
                  item.fayl = true;
                }
              }
            })
            busRight.forEach((item, index2) => {
              item.t = offset(item).top;
              if (item.t < h + 50) {
                if (!item.fayr) {
                  item.className += ' animatedl';
                  item.fayr = true;
                }
              }
            })
        }, 60);
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
  }

  .bus_list {
    width: 100%;
    li {
      margin: 0 auto;
      width: 100%;
      overflow: hidden;
      height: 500px;
      .bus_wrap {
        width: 1100px;
        height: 100%;
        margin: 0 auto;
        .bus_l {
          display: inline-block;
          opacity: 0;
          filter: alpha(opacity=0);
          height: 100%;
          width: 50%;
          h3 {
            font-size: 30px;
            margin-top: 136px;
            color: #0f0f0f;
            font-weight: normal;
          }
          .bus_text {
            margin-top: 25px;
            width: 100%;
            color: #535353;
            overflow: hidden;
            line-height: 30px;
            font-size: 14px;
            text-align: justify;
          }

        }
        .bus_r {
          opacity: 0;
          filter: alpha(opacity=0);
          position: relative;
          width: 50%;
          height: 100%;
          text-align: center;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 360px;
            height: 233px;
          }
        }
        .float_l {
          float: left;
        }
        .float_r {
          float: right;
        }
      }
    }
    .list_bg {
      background: #fbfbfb
    }
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

  img[lazy=loading] {
    margin: auto;
    width: 15px !important;
    height: 15px !important;
  }

  /*移动端适配*/
  @media all and(max-width: 1200px) {
    #busList {
      .bus_wrap {
        width: 100%;
        height: 100%;
        .bus_l {
          width: 50%;
          height: 100%;
          h3 {
            width: 100%;
            text-align: center;
          }
          .bus_text {
            width: 75%;
            margin: 30px auto;
          }
        }

        .bus_r {
          width: 50%;
          height: 100%;
        }
      }

    }
  }

  @media screen and(min-width: 769px)and(max-width: 992px) {
    #busList {
      li {
        width: 100%;
        height: 700px;
        .bus_wrap {
          width: 100%;
          height: 100%;
          .bus_l {
            width: 100%;
            height: 50%;
            margin: 0 auto;
            h3 {
              margin-top: 88px;
              width: 100%;
              text-align: center;
            }
            .bus_text {
              width: 80%;
              margin: 35px auto;
            }
          }

          .bus_r {
            width: 100%;
            height: 50%;
            margin: 0 auto;
          }
        }
      }
    }
  }

  @media screen and(min-width: 641px) and(max-width: 768px) {
    #busList {
      li {
        width: 100%;
        height: 700px;
        .bus_wrap {
          width: 100%;
          height: 100%;
          .bus_l {
            width: 100%;
            height: 50%;
            margin: 0 auto;
            h3 {
              width: 100%;
              text-align: center;
              margin-top: 75px;
            }
            .bus_text {
              width: 80%;
              margin: 30px auto;
            }
          }

          .bus_r {
            width: 100%;
            height: 50%;
            margin: 0 auto;
          }
        }
      }
    }

  }

  @media screen and(min-width: 415px) and(max-width: 640px) {
    #busList {
      li {
        width: 100%;
        height: 700px;
        .bus_wrap {
          width: 100%;
          height: 100%;
          .bus_l {
            width: 100%;
            height: 50%;
            margin: 0 auto;
            h3 {
              width: 100%;
              text-align: center;
              margin-top: 68px;
            }
            .bus_text {
              width: 85%;
              margin: 30px auto;
            }
          }
          .bus_r {
            width: 100%;
            height: 50%;
            margin: 0 auto;
            img {
              width: 315px;
              height: 200px;
            }
          }
        }
      }
    }
  }

  @media screen and(min-width: 375px)and(max-width: 414px) {
    #busList {
      li {
        width: 100%;
        height: 700px;
        .bus_wrap {
          width: 100%;
          height: 100%;
          .bus_l {
            width: 100%;
            height: 50%;
            margin: 0 auto;
            h3 {
              width: 100%;
              text-align: center;
              margin-top: 55px;
            }
            .bus_text {
              width: 88%;
              margin: 30px auto;
            }
          }
          .bus_r {
            width: 100%;
            height: 50%;
            margin: 0 auto;
            img {
              width: 315px;
              height: 190px;
            }
          }
        }
      }
    }
  }

  @media screen and(min-width: 321px)and(max-width: 375px) {
    #busList {
      li {
        width: 100%;
        height: 700px;
        .bus_wrap {
          width: 100%;
          height: 100%;
          .bus_l {
            width: 100%;
            height: 50%;
            margin: 0 auto;
            h3 {
              width: 100%;
              text-align: center;
              margin-top: 50px;
            }
            .bus_text {
              width: 90%;
              margin: 30px auto;
            }
          }
          .bus_r {
            width: 100%;
            height: 50%;
            margin: 0 auto;
            img {
              width: 251px;
              height: 160px;
            }
          }
        }
      }
    }
  }

  @media screen and(max-width: 320px) {
    #busList {
      li {
        width: 100%;
        height: 700px;
        .bus_wrap {
          width: 100%;
          height: 100%;
          .bus_l {
            width: 100%;
            height: 50%;
            margin: 0 auto;
            h3 {
              width: 100%;
              text-align: center;
              margin-top: 50px;
            }
            .bus_text {
              width: 90%;
              margin: 30px auto;
            }
          }
          .bus_r {
            width: 100%;
            height: 50%;
            margin: 0 auto;
            img {
              width: 251px;
              height: 160px;
            }
          }
        }
      }
    }
  }

</style>
