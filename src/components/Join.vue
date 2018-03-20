<template>
  <div class="contents" id="join" @scroll="">
    <Banner>
      <img :title="imgTitle" v-lazy="imgUrl" class="imgBg">
      <img :title="imgTextTitle" v-lazy="imgText" class="imgText">
    </Banner>
    <div class="title_text">
      <h5>我们期待每一位有创见且勇于付诸行动的人加入风速。</h5>
      <h5>在这里，无论哪个部门，哪种职位，您都可以尽情施展自己的才华！</h5>
    </div>
    <div class="job_info" :class="{animete:jobInfoc}" ref="jobinfo">
      <h2 class="job_info-title">
        <span>{{jobTitle}}</span>
      </h2>
      <div class="job_info_main" v-for="(info,index) in jobInfo" :key="index">
        <div class="job_info_header clear">
          <h5 class="job_info_header_title">{{info.job}}</h5>
          <p class="job_info_time"><span class="req">需求：{{info.number}}</span><span
            class="timer">发布时间：{{info.timer}}</span></p>
          <i class="job_ico" :class="{job_ico_up:info.show}" @click="downslice(info.oId,jobInfo)"></i>
        </div>
        <transition enter-active-class="listshow fadeIn" leave-active-class="listhide">
          <div class="job_lists" v-show="info.show">
            <ul class="job_info_duty">
              <li v-for="(info,index) in info.duty" :key="index">
                <p>{{info}}</p>
              </li>
            </ul>
            <ul class="job_info_duty job_info_req">
              <li v-for="(info,index) in info.require" :key="index">
                <p>{{info}}</p>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
    <div class="job_emain" :class="{animete:jobEmainc}" ref="emain">
      <div class="emain_wrap">
        <h6 class="job_emain_text">
          <span class="job_emain_ico"></span>
          <span>请将简历发送至</span>
          <strong>hr@fungfg.com,</strong>
          <span class="job_emain_wrap">我们会尽快与您取得联系。</span>
        </h6>
      </div>
    </div>
    <div class="job_weal" :class="{animete:jobWealc}" ref="wealc" v-lazy:background-image="wealUrl">
      <div class="job_weal_lists">
        <h2 class="job_weal_title">
          <span>{{jobWealTitle}}</span>
        </h2>
        <ul class="job_weal_list">
          <li class="clear" v-for="(text,index) in jobWeal" :key="index">
            <em>{{text.title}}</em>
            <p>{{text.text}}</p>
          </li>
        </ul>
      </div>
    </div>
    <MFooter></MFooter>
  </div>
</template>

<script>
  import Banner from '../base/Banner.vue';
  import MFooter from '../base/MFooter';
  import axios from 'axios';

  export default {
    name: 'Join',
    data() {
      return {
        jobInfoc: true,
        jobEmainc: false,
        jobWealc: false,
        jobTitle: '招聘职位',
        jobInfo: '',
        jobIco: false,
        imgTitle: '加入我们',
        imgText: require('../image/recruittitle.png'),
        imgTextTitle: '同心同行 风雨相伴',
        imgUrl: require('../image/recruitbanner.jpg'),
        wealUrl: require("../image/recruit_welfare.jpg"),
        jobWealTitle: '员工福利',
        jobWeal: [
          {
            title: '保障',
            text: '入职当月即为员工购买五险一金，并酌情为员工购买额外商业保险'
          },
          {
            title: '奖金',
            text: '对优秀团队和个人，公司予以分红奖励'
          },
          {
            title: '年假',
            text: '转正后即享5天年假，可按比例休年假，每增加一年司龄，即增加1天年假'
          },
          {
            title: '活动',
            text: '不定期举行多种团队拓展活动，包括：聚餐派对、年度旅游、拓展活动、年会等'
          }
        ],
      }
    },
    directives: {},
    components: {
      Banner,
      MFooter
    },
    methods: {/*简历动画*/
      downslice(oId, jobInfo) {
        jobInfo.forEach(function (item, index) {
          item.oId == oId ? item.show = true : item.show = false;
        })
      },
    },
    created() {
      axios.get('/static/job.json').then((response) => {
        this.jobInfo = response.data;
      })
    },
    mounted() {/*滚动动画*/
      let emain = this.$refs.emain;
      let jobinfo = this.$refs.jobinfo;
      let wealc = this.$refs.wealc;
      window.onscroll=() => {
        let h = win('scrollTop') + win('clientHeight');
        let emainTop =emain.offsetTop;
        let jobinfoTop =jobinfo.offsetTop;
        let wealcTop =wealc.offsetTop;
        function win(attr, val) {
          if (typeof val != 'undefined') {
            document.documentElement[attr] = val;
            document.body[attr] = val;
          }
          return document.documentElement[attr] || document.body[attr];
        }
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
              if (emainTop < h + 50) {
                this.jobEmainc = true
              }
              if (jobinfoTop < h + 50) {
                this.jobInfoc = true
              }
              if (wealcTop < h + 50) {
                this.jobWealc = true
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
    .title_text {
      width: 1100px;
      margin: 100px auto;
      text-align: center;
      -webkit-animation: slideInUp 1s;
      -o-animation: slideInUp 1s;
      animation: slideInUp 1s;
      h5 {
        color: #333;
        font-size: 18px;
        line-height: 30px;
        font-weight: normal;
      }
    }
    .job_info {
      background: #f0f0f0;
      overflow: hidden;
      width: 100%;
      .job_info-title {
        margin: 40px auto 0 auto;
        border-bottom: 1px solid #c9c9c9;
        width: 1100px;
        font-size: 28px;
        font-weight: normal;
        text-align: center;
        -webkit-animation: slideInUp 1s;
        -o-animation: slideInUp 1s;
        animation: slideInUp 1s;
        span {
          display: inline-block;
          line-height: 35px;
          padding-bottom: 10px;
          border-bottom: 2px solid #45caff;
        }
      }
      .job_info_main {
        width: 1100px;
        margin: 20px auto;
        border-bottom: 1px solid #c9c9c9;
        -webkit-animation: slideInUp 1s;
        -o-animation: slideInUp 1s;
        animation: slideInUp 1s;
        .job_info_header {
          position: relative;
          width: 100%;
          margin: 30px 0 0 10px;
          .job_info_header_title {
            font-size: 20px;
            color: #45caff;
          }
          .job_info_time {
            line-height: 40px;
            font-size: 14px;
            color: #535353;
            .req {
              margin-right: 20px;
            }
          }
          .job_ico {
            position: absolute;
            top: 25px;
            right: 20px;
            cursor: pointer;
            width: 34px;
            height: 34px;
            background: url("../image/recruit_post_a.png") no-repeat;
          }
          .job_ico_up {
            background: url("../image/recruit_post_b.png") no-repeat;
          }
        }
        .job_lists {
          width: 100%;
          margin-bottom: 30px;
          .job_info_duty {
            width: 100%;
            li {
              text-align: left;
              font-size: 14px;
              overflow: hidden;
              margin-left: 10px;
              color: #535353;
              -webkit-animation: slideInUp 1s;
              -o-animation: slideInUp 1s;
              animation: slideInUp 1s;
              p {
                line-height: 35px;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
    .job_emain {
      width: 100%;
      background: #f0f0f0;
      height: 220px;
      opacity: 0;
      filter: alpha(opacity=0);
      .emain_wrap {
        margin: 0 auto;
        width: 1100px;
        height: 100%;
        line-height: 220px;
        overflow: hidden;
        -webkit-animation: slideInUp 1s;
        -o-animation: slideInUp 1s;
        animation: slideInUp 1s;
        div {
          display: inline-block;
          height: 100%;
          font-size: 20px;
          text-align: center;
          font-weight: normal;
          color: #333;
        }

        .job_emain_text {
          width: 100%;
          height: 60px;
          text-align: center;
          color: #333;
          font-size: 20px;
          font-weight: normal;
          -webkit-animation: slideInUp 1.5s;
          -o-animation: slideInUp 1.5s;
          animation: slideInUp 1.5s;
          span {
            display: inline-block;
            height: 60px;
            line-height: 60px;
          }
          .strong {
            line-height: 25px;
            margin: 0 5px;
          }
        }
        .job_emain_ico {
          transform: translateY(20px);
          display: inline-block;
          width: 60px;
          height: 60px;
          background: url("../image/recruit_email.png") no-repeat;
        }
      }
    }
    .job_weal {
      width: 100%;
      height: 314px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      opacity: 0;
      filter: alpha(opacity=0);
      .job_weal_lists {
        position: relative;
        width: 1100px;
        height: 100%;
        margin: 0 auto;
        .job_weal_title {
          width: 100%;
          text-align: center;
          font-size: 28px;
          font-weight: normal;
          color: #fff;
          span {
            display: inline-block;
            margin-top: 50px;
            border-bottom: 2px solid #45caff;
          }
        }

        .job_weal_list {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: left;
          overflow: hidden;
          margin: 36px auto 0 auto;
          li {
            width: 100%;
            font-size: 16px;
            color: #fff;
            margin-left: 28%;
            em {
              float: left;
              height: 100%;
              line-height: 35px;
              font-style: normal;
              margin-right: 10px;
              font-weight: bold;
            }
            p {
              margin-left: 50px;
              line-height: 35px;
              overflow: hidden;
            }
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
    .animete {
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

  /*动画*/

  .listhide {
   display: none;
  }

  .listshow {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
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

  /*移动端适配*/
  @media all and(max-width: 1200px) {
    #join {
      .title_text {
        width: 100%;
      }
      .job_info-title {
        width: 100%;
      }
      .job_info_main {
        width: 100%;
        .job_info_header {
          width: 80%;
          margin: 0 auto;
        }
        .job_lists {
          width: 80%;
          margin: 0 auto 20px auto;
        }
      }
      .emain_wrap {
        width: 90%;
        margin: 0 auto;
      }
      .job_weal_lists {
        width: 100%;
        li {
          width: 80%;
          margin: 0 0 0 28%;
        }
      }
    }
  }

  @media screen and(min-width: 769px)and(max-width: 992px) {
    #join {
      .title_text {
        margin: 70px auto;
      }
      .job_info-title {
        width: 100%;
        span {
          font-size: 26px;
        }
      }
      .job_info_main {
        width: 100%;
        .job_info_header {
          width: 80%;
          margin: 0 auto;
        }
        .job_lists {
          width: 80%;
          margin: 0 auto 20px auto;
        }
        .emain_wrap {
          width: 80%;
          margin: 0 auto;
        }
      }
      .emain_wrap {
        width: 90%;
        margin: 0 auto;
        .job_emain_text {
          font-size: 18px;
        }
      }
      .job_weal_lists {
        .job_weal_title {
          span {
            margin-top: 40px;
          }
        }
        width: 100%;
        li {
          width: 70%;
          margin: 0 auto;
        }
      }
    }
  }

  @media screen and(min-width: 641px) and(max-width: 768px) {
    #join {
      .title_text {
        margin: 60px auto;
      }
      .job_info-title {
        width: 100%;
        span {
          font-size: 24px;
        }
      }
      .job_info_main {
        width: 100%;
        .job_info_header {
          width: 80%;
          margin: 0 auto;
          .job_info_header_title {
            font-size: 20px;
          }
        }
        .job_lists {
          width: 80%;
          margin: 0 auto 20px auto;
          .job_info_duty {
            li {
              p {
                line-height: 30px;
              }
            }
          }
        }
      }
      .job_emain {
        height: 150px;
        .emain_wrap {
          width: 99%;
          height: 150px;
          line-height: 150px;
          margin: 0 auto;
          .job_emain_text {
            position: relative;
            font-size: 18px;
            height: 130px;
            .job_emain_ico {
              position: absolute;
              left: 50%;
              top: 0;
              transform: translate(-50%, 11%);
              width: 55px;
              height: 55px;
              background: url("../image/recruit_email.png") no-repeat;
              background-size: 100% 100%;
            }
            span {
              display: inline;
            }
          }
        }
      }
      .job_weal_lists {
        .job_weal_title {
          span {
            margin-top: 35px;
          }
        }
        .job_weal_list {
          width: 100%;
          margin-top: 40px;
          li {
            width: 80%;
            margin: 0 auto;
            em {
              line-height: 35px;
            }
            p {
              line-height: 35px;
            }
          }
        }
      }
    }
  }

  @media screen and(max-width: 640px) {
    #join {
      .title_text {
        margin: 50px auto;
        h5 {
          font-size: 16px;
          padding: 0 20px;
        }
      }
      .job_info-title {
        width: 100%;
        span {
          font-size: 22px;
        }
      }
      .job_info_main {
        width: 100%;
        .job_info_header {
          width: 90%;
          margin: 0 auto;
          .job_info_header_title {
            font-size: 18px;
          }
        }
        .job_lists {
          width: 90%;
          margin: 0 auto 20px auto;
          .job_info_duty {
            li {
              p {
                line-height: 28px;
              }
            }
          }

        }
        .emain_wrap {
          width: 80%;
          margin: 0 auto;
        }
      }
      .job_emain {
        height: 130px;
        .emain_wrap {
          width: 99%;
          height: 130px;
          line-height: 130px;
          margin: 0 auto;
          .job_emain_text {
            position: relative;
            font-size: 14px;
            height: 130px;
            .job_emain_ico {
              position: absolute;
              left: 50%;
              top: 0;
              transform: translate(-50%, 11%);
              width: 50px;
              height: 50px;
              background: url("../image/recruit_email.png") no-repeat;
              background-size: 100% 100%;
            }
            span {
              display: inline;
            }
          }
        }
      }
      .job_weal_lists {
        .job_weal_title {
          span {
            margin-top: 35px;
            font-size: 26px;
          }
        }
        .job_weal_list {
          width: 100%;
          margin-top: 40px;
          li {
            width: 90%;
            font-size: 16px;
            margin: 0 auto;
            em {
              line-height: 30px;
            }
            p {
              line-height: 30px;
            }
          }
        }
      }
    }
  }

  @media screen and(max-width: 500px) {
    #join {
      .emain_wrap {
        width: 95%;
        margin: 0 auto;
        .job_emain_text {
          position: relative;
          font-size: 14px;
          .job_emain_ico {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -10%);
          }
        }
      }
    }
  }

  @media screen and(min-width: 375px)and(max-width: 414px) {
    #join {
      .title_text {
        margin: 50px auto;
        h5 {
          font-size: 14px;
          padding: 0 20px;
        }
      }
      .job_info-title {
        width: 100%;
        span {
          font-size: 20px;
        }
      }
      .job_info_main {
        width: 100%;
        .job_info_header {
          width: 80%;
          margin: 0 auto;
          .job_info_header_title {
            font-size: 16px;
          }
        }
        .job_ico {
          top: 0;
          right: 0;
          width: 30px;
          height: 30px;
        }
        .job_lists {
          width: 90%;
          margin: 0 auto 20px auto;
          .job_info_duty {
            li {
              p {
                line-height: 25px;
              }
            }
          }
        }
        .emain_wrap {
          width: 80%;
          margin: 0 auto;
        }
      }
      .job_emain {
        height: 125px;
        .emain_wrap {
          width: 99%;
          height: 125px;
          line-height: 125px;
          margin: 0 auto;
          .job_emain_text {
            position: relative;
            font-size: 12px;
            height: 120px;
            .job_emain_ico {
              position: absolute;
              left: 50%;
              top: 0;
              transform: translate(-50%, 11%);
              width: 45px;
              height: 45px;
              background: url("../image/recruit_email.png") no-repeat;
              background-size: 100% 100%;
            }
            span {
              display: inline;
            }
          }
        }
      }
      .job_weal_lists {
        .job_weal_title {
          span {
            font-size: 24px;
            margin-top: 35px;
          }
        }
        .job_weal_list {
          width: 100%;
          margin-top: 28px;
          li {
            width: 90%;
            font-size: 14px;
            margin: 0 auto;
            em {
              line-height: 25px;
            }
            p {
              line-height: 25px;
            }
          }
        }
      }
    }
  }

  @media screen and(min-width: 321px)and(max-width: 375px) {
    #join {
      .title_text {
        margin: 40px auto;
        h5 {
          font-size: 14px;
          padding: 0 20px;
        }
      }
      .job_info-title {
        width: 100%;
        span {
          font-size: 20px;
        }
      }
      .job_info_main {
        width: 100%;
        .job_info_header {
          width: 80%;
          margin: 0 auto;
          .job_info_header_title {
            font-size: 16px;
          }
        }
        .job_ico {
          top: 0;
          right: 0;
          width: 30px;
          height: 30px;
        }
        .job_lists {
          width: 90%;
          margin: 0 auto 20px auto;
          .job_info_duty {
            li {
              p {
                line-height: 25px;
              }
            }
          }

        }
        .emain_wrap {
          width: 80%;
          margin: 0 auto;
        }
      }
      .job_emain {
        height: 120px;
        .emain_wrap {
          width: 99%;
          height: 120px;
          line-height: 120px;
          margin: 0 auto;
          .job_emain_text {
            position: relative;
            font-size: 12px;
            height: 120px;
            .job_emain_ico {
              position: absolute;
              left: 50%;
              top: 0;
              transform: translate(-50%, 11%);
              width: 45px;
              height: 45px;
              background: url("../image/recruit_email.png") no-repeat;
              background-size: 100% 100%;
            }
            span {
              display: inline;
            }
          }
        }
      }
      .job_weal_lists {
        .job_weal_title {
          span {
            margin-top: 35px;
            font-size: 22px;
          }
        }
        .job_weal_list {
          width: 100%;
          margin-top: 28px;
          li {
            width: 90%;
            font-size: 14px;
            margin: 0 auto;
            em {
              line-height: 25px;
            }
            p {
              line-height: 25px;
            }
          }
        }
      }
    }
  }

  @media screen and(max-width: 320px) {
    #join {
      .title_text {
        margin: 40px auto;
        h5 {
          font-size: 14px;
          padding: 0 20px;
        }
      }
      .job_info-title {
        width: 100%;
        span {
          font-size: 20px;
        }
      }
      .job_info_main {
        width: 100%;
        .job_info_header {
          width: 80%;
          margin: 0 auto;
          .job_info_header_title {
            font-size: 16px;
          }
        }
        .job_ico {
          top: 0;
          right: 0;
          width: 30px;
          height: 30px;
        }
        .job_lists {
          width: 90%;
          margin: 0 auto 20px auto;
          .job_info_duty {
            li {
              p {
                line-height: 25px;
              }
            }
          }

        }
        .emain_wrap {
          width: 80%;
          margin: 0 auto;
        }
      }
      .job_emain {
        height: 120px;
        .emain_wrap {
          width: 99%;
          height: 120px;
          line-height: 120px;
          margin: 0 auto;
          .job_emain_text {
            position: relative;
            font-size: 12px;
            height: 120px;
            .job_emain_ico {
              position: absolute;
              left: 50%;
              top: 0;
              transform: translate(-50%, 11%);
              width: 45px;
              height: 45px;
              background: url("../image/recruit_email.png") no-repeat;
              background-size: 100% 100%;
            }
            span {
              display: inline;
            }
          }
        }
      }
      .job_weal_lists {
        .job_weal_title {
          span {
            margin-top: 35px;
            font-size: 22px;
          }
        }
        .job_weal_list {
          width: 100%;
          margin-top: 28px;
          li {
            width: 90%;
            font-size: 14px;
            margin: 0 auto;
            em {
              line-height: 25px;
            }
            p {
              line-height: 25px;
            }
          }
        }
      }
    }
  }
</style>
