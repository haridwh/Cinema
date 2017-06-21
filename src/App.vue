<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header mdl-color--black">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Cinema</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title"><b>Cinema</b></span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Now Playing</router-link>
        <router-link class="mdl-navigation__link" to="/up-coming" @click.native="hideMenu">Upcoming</router-link>
        <router-link class="mdl-navigation__link" to="/popular" @click.native="hideMenu">Popular</router-link>
        <router-link class="mdl-navigation__link" to="/top-rated" @click.native="hideMenu">Top Rated</router-link>
        <!-- <router-link class="mdl-navigation__link" to="/lates" @click.native="hideMenu">Lates</router-link> -->
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  require('material-design-lite')

  export default {
    name: 'app',
    methods: {
      hideMenu: function () {
        document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
        document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
</style>
