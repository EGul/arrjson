
var arrjson = { };

function get(obj, path) {

  if (typeof path == 'string') path = path.split('.');

  var results = [];

  var type = {
    obj: false,
    arr: false
  };

  var secondType = {
    obj: false
  };

  if (!Array.isArray(obj)) {
    type.obj = true;
  }
  else {
    type.arr = true;
  }

  if (path[0].indexOf('[') == -1) secondType.obj = true;

  if (secondType.obj) {

    if (type.obj) {

      if (path.length == 1) {
        results.push(obj[path[0]]);
      }
      if (path.length > 1) {
        var result = get(obj[path[0]], path.slice(1));
        result.forEach(function (e) {
          if (typeof e != 'undefined') results.push(e);
        });
      }

    }
    else {

      obj = obj.filter(function (e) {
        if (e.hasOwnProperty(path[0])) return e;
      });

      if (path.length == 1) {
        obj.forEach(function (e) {
          results.push(e[path[0]]);
        });
      }
      if (path.length > 1) {
        obj.forEach(function (e) {
          var result = get(e[path[0]], path.slice(1));
          result.forEach(function (ee) {
            if (typeof ee != 'undefined') results.push(ee);
          });
        });
      }

    }

    return results;
  }

}

arrjson.get = get;

module.exports = arrjson;
