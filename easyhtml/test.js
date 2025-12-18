function callTest() {
  if (window) {
    window.app.showUrl().then(function(result) {
      alert("调用成功，返回值为：" + result);
    }).catch(function(error) {
      alert("调用失败：" + error);
    });
  } else {
    alert("objName 未定义，请检查 ArkTS 是否正确暴露方法");
  }
}
callTest();
