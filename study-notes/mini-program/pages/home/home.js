// pages/home/home.js
Page({
  onLoad: function () {
    this.loadCity(this.loadData);        
  },
  loadData: function(city) {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data: { city: city },
      header: {'content-type':'json'},
      success: (res) => {
        console.log(res);
      },
      fail: () => {
        wx.db.toastError('获取热映失败');
      }
    });
  },
  loadCity: function(success) {
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
  }
})