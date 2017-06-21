<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div v-for="movie in this.movies" class="image-card" @click="displayDetails(movie.id)">
          <div class="image-card__picture">
            <img :src="posterUrl+movie.poster_path" />
          </div>
          <div class="image-card__comment mdl-card__actions">
            <span>{{ movie.title }}</span>
          </div>
        </div>
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
        movies: [],
        errors: [],
        posterUrl: service.POSTER_URL
      }
    },

    methods: {
      getNowPlaying () {
        axios.get(baseUrl + '/now_playing?api_key=' + apiKey + '&language=ID&page=1&region=ID')
          .then(response => {
            this.movies = response.data.results
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      displayDetails (id) {
        this.$router.push({name: 'detail', params: { id: id }})
      }
    },

    created () {
      this.getNowPlaying()
    }
  }
</script>

<style scoped>
  .image-card {
    position: relative;
    margin-bottom: 4px;
  }
  .image-card__picture > img {
    width:100%;
  }
  .image-card__comment {
    position: absolute;
    bottom: 0;
    height: 52px;
    padding: 16px;
    text-align: left;
    background: rgba(0, 0, 0, 0.5);
  }
  .image-card__comment > span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
</style>
