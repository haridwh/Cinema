# Cinema

> A progressive web application for searching movie sort by now playing, upcoming, popular, and top rated. Powered by themoviedb.org
<p>
<img src="https://github.com/sk-day/Cinema/blob/master/screenshot/ss-1.jpg" width="360" height="640">
<img src="https://github.com/sk-day/Cinema/blob/master/screenshot/ss-2.jpg" width="360" height="640">
</p>
<p>
<img src="https://github.com/sk-day/Cinema/blob/master/screenshot/ss-3.jpg" width="360" height="640">
<img src="https://github.com/sk-day/Cinema/blob/master/screenshot/ss-4.jpg" width="360" height="640">
</p>
<p>
<img src="https://github.com/sk-day/Cinema/blob/master/screenshot/ss-5.png" width="640" height="360">
<img src="https://github.com/sk-day/Cinema/blob/master/screenshot/ss-6.png" width="640" height="360">
</p>
## Build Setup

``` bash
# install dependencies
npm install
```

Create a src/service/service.js file:
``` javascript
export default {
  BASE_URL: 'https://api.themoviedb.org/3/movie',
  POSTER_URL: 'https://image.tmdb.org/t/p/w500/',
  API_KEY: 'YOUR_API_KEY'
}
```

``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
