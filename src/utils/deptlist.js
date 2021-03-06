// 部门循环遍历得到树形结构
export const deptsAll = (ary, data) => {   //  json渲染树结构
  var datas = ''
  var it = this
  if (data) {
    datas = data
  } else {
    datas = (function(ary) {
      var tempAry = []
      var idList = []
      ary.forEach(function(item) {
        idList.push(item.value)
      })
      function deb(value, idList) {
        var flag = true
        for (var ida in idList) {
          if (value === idList[ida]) {
            flag = false
          }
        }
        return flag
      }
      for (var i = 0, len = ary.length; i < len; i++) {
        if (ary[i].parentId === undefined || (ary[i].parentId !== undefined && deb(ary[i].parentId, idList))) {
          var obj = {
            label: ary[i].label,
            value: ary[i].value
          }
          tempAry.push(obj)
        }
      }
      it.deptlistlists = tempAry
      return tempAry
    }(ary))
  }
  var temp = 0
  if (datas.constructor === Array) {
    for (var i = 0, len = datas.length; i < len; i++) {
      for (var j = 0, lenA = ary.length; j < lenA; j++) {
        if (ary[j].parentId === datas[i].value) {
          var obj = {
            label: ary[j].label,
            value: ary[j].value
          }
          datas[i].children = datas[i].children || []
          datas[i].children.push(obj)
          temp++
        }
      }
    }
  }
  if (temp > 0) {
    if (datas.constructor === Array) {
      for (var n = 0, lenB = datas.length; n < lenB; n++) {
        datas[n].children = deptsAll(ary, datas[n].children ? datas[n].children : [])
        if (datas[n].children.length === 0) {
          delete datas[n].children
        }
        // delete datas[n].value
      }
    }
  } else {
    for (var n2 = 0, lenB2 = datas.length; n2 < lenB2; n2++) {
      // delete datas[n2].value
    }
  }
  return datas
}
