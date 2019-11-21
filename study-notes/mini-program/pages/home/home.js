// pages/home/home.js
Page({
  data: {
    allMovies: [
      {
        title: '影院热映',
        url: 'v2/movie/in_theaters',
        movies: []
      },
      {
        title: '新片榜',
        url: 'v2/movie/new_movies',
        movies: []
      },
      {
        title: '口碑榜',
        url: 'v2/movie/weekly',
        movies: []
      },
      {
        title: '北美票房榜',
        url: 'v2/movie/us_box',
        movies: []
      },
      {
        title: 'Top250',
        url: 'v2/movie/top250',
        movies: []
      }
    ]
  },
  onLoad: function () {
    this.loadLocalData();
    // this.loadCity((city) => {
    //   this.loadNewData(0, { city: city });
    // });
    // this.loadNewData(1);
    // this.loadNewData(2);
    // this.loadNewData(3);
    // this.loadNewData(4);
  },
  loadLocalData: function () {
    for (let index = 0; index < this.data.allMovies.length; index++) {
      const obj = this.data.allMovies[index];
      obj.movies = wx.getStorageSync(obj.title);
    }
    this.setData(this.data);
  },
  loadNewData: function (idx, params) {
    wx.request({
      url: wx.db.url(this.data.allMovies[idx].url),
      data: params,
      header: { 'content-type': 'json' },
      success: (res) => {
        const movies = res.data.subjects;
        const obj = this.data.allMovies[idx];
        obj.movies = [];
        for (let index = 0; index < movies.length; index++) {
          let movie = movies[index].subject || movies[index];
          this.updateMovie(movie);
          obj.movies.push(movie);
        }
        this.setData(this.data);
        // 将movie数组缓存到本地
        wx.setStorage({
          key: obj.title,
          data: obj.movies,
        });
      },
      fail: () => {
        wx.db.toast(`获取${this.data.allMovies[idx].title}失败`);
      }
    });
  },
  loadCity: function (success) {
    // 获取经纬度
    wx.getLocation({
      success: (res) => {
        // 逆地理编码
        wx.request({
          url: 'https://api.map.baidu.com/reverse_geocoding/v3',
          // ak = 您的ak
          // output = json 
          // coordtype = wgs84ll 
          // location = 31.225696563611, 121.49884033194
          data: {
            output: 'json',
            coordtype: 'wgs84ll',
            ak: 'OUPluGSkes8BN0YxXc1nZNivW4u3NsgF',
            location: `${res.latitude},${res.longitude}`
            // location: res.latitude + ',' + res.longitude
          },
          success: (res) => {
            let city = res.data.result.addressComponent.city;
            city = city.substring(0, city.length - 1);
            success && success(city);
          },
          fail: () => {
            wx.db.toastError('获取城市失败');
          }
        });
      },
      fail: () => {
        wx.db.toastError('获取位置失败');
      }
    });
  },
  updateMovie: function (movie) {
    let stars = parseInt(movie.rating.stars);
    if (stars == 0) return;
    // movie.stars = [1, 1, 1, 0.5, 0];
    movie.stars = {};
    movie.stars.on = parseInt(stars / 10);
    movie.stars.half = (stars - (movie.stars.on) * 10) > 0;
    movie.stars.off = parseInt((50 - stars) / 10);
  },
  viewMore: function (evt) {
    const index = evt.currentTarget.dataset.index;
    const obj = this.data.allMovies[index];
    wx.navigateTo({
      url: `/pages/list/list?title=${obj.title}&url=${obj.url}`,
    });
  }
})