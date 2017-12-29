
<template>
  <div>
    <h1>{{helloMsg}}</h1>
    <button v-on:click="greet()">change greeting</button>
    <router-link to="/page1">page1</router-link>
    <router-link to="/page2">page2</router-link>
    <div>
      this is app
    </div>
            <router-view></router-view>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>
<style lang="scss" src="./app.scss" scoped></style>
