<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="posterUrl+detail.backdrop_path" />
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="title">
        <span>{{ this.detail.title }}</span>
      </div>
      <div class="overview">
        <span>{{ this.detail.overview }}</span>
      </div>
      <div class="genre">
        Genre:
        <span v-for="genre in this.detail.genres">
          {{genre.name}},
        </span>
      </div>
      <div class="info">
        <span>Rerelease date: {{ this.detail.release_date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import service from '../service/service'

  var baseUrl = service.BASE_URL
  var apiKey = service.API_KEY

  export default {
    data () {
      return {
        detail: '',
        posterUrl: service.POSTER_URL
      }
    },

    methods: {
      getDetail () {
        axios.get(baseUrl + '/' + this.$route.params.id + '?api_key=' + apiKey + '&language=ID&append_to_response=1')
          .then(response => {
            this.detail = response.data
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },

    created () {
      this.getDetail()
    }
  }
</script>

<style scoped>
  .picture > img {
    color: #fff;
    width:100%;
  }
  .title {
    padding: 10px;
    color: #000;
    font-size: 24px;
    font-weight: bold;;
  }
  .overview {
    padding-left: 10px;
    padding-right: 10px;
    color: #000;
    font-size: 14px;
  }
  .genre {
    padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
    color: #000;
    font-size: 14px;
  }
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 12px;
  }
</style>
