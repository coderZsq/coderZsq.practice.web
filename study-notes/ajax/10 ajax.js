function $ajax(obj) {
    let defaults = {
        type: 'get',
        async: true,
        url: '#',
        dataType: 'text',
        jsonp: 'callback',
        jsonpCallback: undefined,
        data: {},
        success: function (data) {
            console.log(data);
        }
    };
    for (let key in obj) {
        defaults[key] = obj[key];
    }
    if (defaults.dataType === 'jsonp') {
        $ajax4Jsonp(defaults);
    } else {
        $ajax4Json(defaults);
    }
}



function $ajax4Json(defaults){
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    let param = '';
    for (let attr in defaults.data) {
        param += attr + '=' + defaults.data[attr] + '&';
    }
    if (param) {
        param = param.substring(0,param.length - 1);
    }
    if(defaults.type === 'get'){
        defaults.url += '?' + encodeURI(param);
    }
    xhr.open(defaults.type, defaults.url, defaults.async);
    let data = null;
    if(defaults.type === 'post'){
        data = param;
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    xhr.send(data);
    if (!defaults.async) {
        if (defaults.dataType === 'json') {
            return JSON.parse(xhr.responseText);
        } else {
            return xhr.responseText;
        }
    }
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let data = xhr.responseText;
                if(defaults.dataType === 'json'){
                    data = JSON.parse(data);
                }
                defaults.success(data);
            }
        }
    }
}


function $ajax4Jsonp(defaults) {
    let jsonpCallback = 'jQuery' + ('1.11.1' + Math.random()).replace(/\D/g, "") + '_' + (new Date().getTime());
    if (defaults.jsonpCallback) {
        jsonpCallback = defaults.jsonpCallback;
    }
    window[jsonpCallback] = function(data) {
        defaults.success(data);
    };
    let param = '';
    for (let attr in defaults.data) {
        param += attr + '=' + defaults.data[attr] + '&';
    }
    if (param) {
        param = param.substring(0, param.length - 1);
        param = '&' + param;
    }
    let script = document.createElement('script');
    script.src = defaults.url + '?' + defaults.jsonp + '=' + jsonpCallback + param;
    head.appendChild(script);
}


