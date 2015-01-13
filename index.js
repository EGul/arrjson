
var arrjson = { };

function get(obj, path) {

  if (typeof path == 'string') path = path.split('.');

  var results = [];

  var objType = {
    obj: false,
    arr: false
  };

  var pathType = {
    obj: false
  };

  if (!Array.isArray(obj)) {
    objType.obj = true;
  }
  else {
    objType.arr = true;
  }

  if (path[0].indexOf('[') == -1) pathType.obj = true;

  if (objType.obj) {

    if (pathType.obj) {

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

  }

  if (objType.arr) {

    if (pathType.obj) {

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

  }

  return results;
}

arrjson.get = get;

module.exports = arrjson;
