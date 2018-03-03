<template>
  <div><br>
<div>
 <el-carousel indicator-position="outside" height="450px">
    <el-carousel-item>
     <img src="../images/IMG_0298.jpg">
     </el-carousel-item>
     <el-carousel-item>
      <img src="../images/IMG_0299.jpg">
      </el-carousel-item>
      <el-carousel-item>
       <img src="../images/IMG_0300.jpg">
       </el-carousel-item>
  </el-carousel>
</div>
  <h2 style="text-align: center;font-size:36px;font-style:oblique;font-weight:700;font-family: Arial">Come and visit us</h2>

  <div>
  <el-row  type="flex" class="row-bg" justify="space-around" style="font-family: Arial;padding-left:0px">

    <el-col :span="7" v-for="item in 3" :key="item">
     <el-container>
    <el-aside style="width:120px;text-align:right">
    <br>
    <img src="../images/upload.jpg">
    </el-aside>
    <el-container>
       <el-header style="color:#606266">
  	<h3>Maximum Capacity for WEB</h3>
      <div>
    Scan to log in to WeChat. Log in on phone to use WeChat on Web. QR Code expired,Click Refresh. Scan successful. Confirm login on mobile WeChat.
    </div><br>
    <el-button style="padding: 3px 0" @click="click" type="primary">More Details</el-button>
  </el-header>
  <el-main></el-main>
    </el-container>
  </el-container>
   </el-col>

  </el-row>
  </div><br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <p style="padding-left:50px;font-family:Arial">
  <span style="border-bottom:2px solid #00F;font-size:28px;color:#606266"><b>Key Markets Served</b></span>
  </p>


  <div>
  <el-row  type="flex" class="row-bg"  style="font-family: Arial">
    <el-col :span="6" v-for="item in 4" :key="item">
    <el-card :body-style="{ padding: '40px' }">
       <div style="position:relative;display:inline-block;"> <img src="../images/antana1.jpg" class="image">
  	  <el-button type="primary" size="small" @click="click1" class="button" style=" position:absolute;right:1px;bottom:10px;">read more +</el-button>
  	  </div>
        <div style="padding: 14px;">
          <div>
  <p style="font-size:20px;font-family:Arial">Mont Tremblant</p>
  Four-season holiday destination and ski resort, Tremblant welcomes families, couples, friends, and groups in the heart of the Laurentians
  		</div>
         </div>
      </el-card>
   </el-col>
  </el-row>
  </div><br>

  <el-row>
  <el-col :span="17">
  <div>
  <p style="padding-left:80px;font-family:Arial">
  <span style="border-bottom:2px solid #00F;font-size:28px;color:#606266"><b>LTE Backhaul Optimization</b></span>
  </p>
  </div>
  <div>
  <el-row>
  <el-col :span="8">
  <div style="position:relative;display:inline-block;"> <img src="../images/lte.jpg" class="image" style="padding-left:80px">
  </div>
  </el-col>
  <el-col :span="9">

  <a href="http://www.w3school.com/" target="_blank" style="color:#2ed1d3">We can optimize LTE backhaul for:</a><br><br>
  <div style="font-size:15px">
  <span><img src="../images/checkicon.jpg">
      Enhanced User Experience</span><br>
  <span><img src="../images/checkicon.jpg">
      Big Bandwidth Savings with Advanced
      Cellular Compression (ACC) technology</span><br>
  <span><img src="../images/checkicon.jpg">
      Enhanced Quality of Service</span><br>
  <span><img src="../images/checkicon.jpg">
      Combine with LBB and other technologies</span>
  </div>

  </el-col>

  </el-row>


  </div>
  </el-col>

  <el-col :span="7">
  <div> <img src="../images/ad.jpg" class="image">
  </div>
  <div style="font-size:15px">
  <a href="#"  style="color:#2ed1d3">This was named as a<br>
  “Top 10 WAN Optimization Solutions 2016”<br>
  by Enterprise Networking Magazine</a>

  </div>
  </el-col>
  </el-row>

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <i class="el-icon-delete"></i>
</div>
</template>

<script>
export default {
  name:'HelloWorld',
  methods:{
click(){
document.body.scrollTop = document.documentElement.scrollTop = 0;
this.$router.push('/moreDetails')
},
click1(){
document.body.scrollTop = document.documentElement.scrollTop = 0;
this.$router.push('/readMore+')
},
}

  }

</script>
