<template>
  <div id="app" style="color:gray;font-family:Arial">
  <div>
<span style="padding-left:100px;"><img src="./images/bfly.jpg" height="100px"></span>
<el-menu :default-active="activeIndex" active-text-color="#409EFF" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="float:right;padding-right:100px;padding-top:50px;font-family: Georgia,serif,Times, TimesNR;font-weight:500;">
  <el-menu-item index="0">HOME</el-menu-item>
  <el-submenu index="1" >
  <template slot="title">PRODUCTS</template>
  <el-menu-item index="1-1">PRODUCT1</el-menu-item>
    <el-menu-item index="1-2">PRODUCT2</el-menu-item>
    <el-menu-item index="1-3">PRODUCT3</el-menu-item>
   <el-menu-item index="1-4">PRODUCT4</el-menu-item>
   </el-submenu>
  <el-submenu index="2">
    <template slot="title" >SOLUTIONS</template>
    <el-menu-item index="2-1">SOLUTION1</el-menu-item>
    <el-menu-item index="2-2">SOLUTION2</el-menu-item>
    <el-menu-item index="2-3">SOLUTION3</el-menu-item>
	<el-menu-item index="2-4">SOLUTION4</el-menu-item>
	<el-menu-item index="2-5">SOLUTION5</el-menu-item>
    <el-submenu index="2-6">
      <template slot="title"><img src="./images/chinesefood.jpg"></template>
      <el-menu-item index="2-6-1">东坡肉</el-menu-item>
      <el-menu-item index="2-6-2">狮子头</el-menu-item>
      <el-menu-item index="2-6-3">川菜</el-menu-item>
      <el-menu-item index="2-6-4">粤菜</el-menu-item>
      <el-menu-item index="2-6-5">湘菜</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3">TECHNOLOGY</el-menu-item>
  <el-submenu index="4">
  <template slot="title">COMPANY</template>
  <el-menu-item index="4-1">NEWS</el-menu-item>
  <el-menu-item index="4-2">MANAGEMENT TEAM</el-menu-item>
  <el-menu-item index="4-3">CAREERS</el-menu-item>
  <el-menu-item index="4-4">CONTACT US</el-menu-item>
  </el-submenu>
</el-menu>
</div>
<p>

    <router-view/>
</p>

    <div>
    <el-row  type="flex" class="row-bg" justify="center" style="font-family: Arial;background-color:  #272727  ">
      <el-col :span="6" style="padding: 40px;color:white;font-size:12px">

         <div><a href="#"> <img src="./images/footer.jpg" class="image"></a>
    	  </div>
          <div >

    We specialize in WAN optimization of dynamic wireless links that experience high latency, asymmetric connections, and high bit error rates, characteristics that are consistent across any wireless or mobile communication networks.
          </div>



     </el-col>
      <el-col :span="6" style="padding:20px">


    	 <p style="font-family:Arial;border-bottom:1px dotted white">
    <span style="border-bottom:3px solid #00F;font-size:20px;color:#606266"><b>Latest News</b></span>
    </p>
    <div style="font-size:12px;color:#606266">
       <span > Announcement1</span><br>
       <router-link to="/a"> Every Vue application starts by creating a new Vue instance with the Vue function:</router-link><br>
       <span>_______________________________________</span><br><br>
       <span>  Announcement2</span><br>
      <router-link to="/b"> Although not strictly associated with the MVVM pattern:</router-link><br>
      <span>_______________________________________</span><br><br>
       <span>Interview</span><br>
        <router-link to="/c">It's important to be prepared to respond effectively to the questions</router-link>


       </div>

    </el-col>

      <el-col :span="6" style="padding:20px">
    	 <p style="font-family:Arial;border-bottom:1px dotted white"><span style="border-bottom:3px solid #00F;font-size:20px;color:#606266"><b>Support</b></span></p>
      <div   style="font-size:12px;color:#606266">
      <a href="#"> Online Support(toTop)</a><br>
       <span style="font-size:12px;color:#606266">_______________________________________</span><br><br>

       <a href="#"> FAQs(toTop)</a><br>
       <span style="font-size:12px;color:#606266">_______________________________________</span><br><br>

       <a href="#"> Careers(toTop)</a><br>
       <span style="font-size:12px;color:#606266">_______________________________________</span><br><br>

      <a href="#"> Technical Info(toTop)</a><br>
       <span style="font-size:12px;color:#606266">_______________________________________</span><br><br>

       <a href="#"> Contact Us(toTop)</a><br>
       <span style="font-size:12px;color:#606266">_______________________________________</span><br><br>

      </div>
      </el-col>
      <el-col :span="6" style="padding:20px">
       <p style="font-family:Arial;border-bottom:1px dotted white">
    <span style="border-bottom:3px solid #00F;font-size:20px;color:white"><b>Contact Us</b></span>
    </p>


            <div style="font-size:14px;color:white;line-height:150%">

    WebService Inc.<br>
    4200 St. Laurent Blvd<br>
    Montreal, Quebec H2W 2R2<br>
    Canada
    		</div>
      </el-col>
    </el-row>
    <div style="background-color: #222222;padding-left:100px;line-height:50px;font-size:12px">2018 © All Rights Reserved.<div style="float:right;padding-top:10px"><a href="#"><img src="./images/totop.jpg" title="scroll back to top"></a></div></div>
    </div>
    <i class="el-icon-delete"></i>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
     return {
       activeIndex:'0'
       }
     },
  methods: {
       handleSelect(key, keyPath) {
         document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.$router.push('/'+key)
         console.log(key, keyPath);
          console.log(key.length);
       }
     }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
a:link { text-decoration: none;color: white}
a:hover { text-decoration:underline;color:  #2ed1d3 }
/*a:visited { text-decoration: none;color:  white }*/
</style>
