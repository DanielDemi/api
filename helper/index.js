var convertUrl = exports.convertUrl = function (url) {
  // /restful/:id/:list/{id} -> restful_id_list_id
  // /restful/:id/:list/{id}.json -> restful_id_list_id
  var _url = url
    .replace(/:|{|}/g, '')
    .replace(/-/g, '_')
    .split('/')
    .filter(value => !!value).join('_');
  return _url.split('.')[0];
};

exports.convertMethod = function (mock) {
  var methodNameArr = mock.url.split('/').slice(2).map((item, index) => {
    return index > 0 ? item.replace(/^(\w)/, firstLetter => firstLetter.toUpperCase()) : item
  })
  return methodNameArr.join('')
};

exports.joinUrl = function () {
  // https://www.easy-mock.com//mock/.... => https://www.easy-mock.com/mock/....
  var url = [].slice.call(arguments, 0).join('/');
  url = url.replace(/:\//g, '://');
  url = url.replace(/([^:\s\%\3\A])\/+/g, '$1/');
  return url;
}

exports.isREST = function (url) {
  return /(:|{|})/.test(url);
}
