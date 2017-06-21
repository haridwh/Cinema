<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="posterUrl+detail.backdrop_path" />
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="comment">
        <span>{{ this.detail.title }}</span><br>
        <span>{{ this.detail.overview }}</span><br>
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
        axios.get(baseUrl + '/latest?api_key=' + apiKey + '&language=ID')
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
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .comment {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>
