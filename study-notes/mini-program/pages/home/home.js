// pages/home/home.js
Page({
  data: {
    movies: []
  },
  onLoad: function () {
    this.loadCity(this.loadData);
  },
  loadData: function (city) {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data: { city: city },
      header: { 'content-type': 'json' },
      success: (res) => {
        // this.data.movies = res.data.subjects;
        // this.setData(this.data);
        let movies = res.data.subjects;
        for (let index = 0; index < movies.length; index++) {
          this.updateMovie(movies[index]);
        }
        this.setData({
          movies: movies
        });
        // console.log(this.data);
      },
      fail: () => {
        wx.db.toastError('获取热映失败');
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
  }
})