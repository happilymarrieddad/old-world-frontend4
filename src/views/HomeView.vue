<script setup lang="ts"></script>

<template>
  <div class="home">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>Homepage</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>Welcome to Wargamelistbuilder.com. v1.0.1</h1>
    <h5>Currently, I am a single developer and this app is in heavy development.</h5>
    <h5>
      The purpose of the app is to allow table top game players to develop army lists easily. At the
      moment, the only game loaded is Warhammer: Old World
    </h5>
    <h5>
      If you want to add another game like Warhammer 40k, go to the settings pages where you can add
      what you want. Thanks and happy list building!
    </h5>
    <h5>
      If you want to donate to this project to help with server costs
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="QWMBTHBQ8847G" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </h5>
  </div>
</template>
