$(function() {
  function startAnime() {
    startIn()
      .then(startOut)
      .then(menuIn);
  }

  // startInの処理
  function startIn() {
    var d = new $.Deferred;
    $("#start p").fadeIn(2000, function() {
      d.resolve();
    });
    return d.promise();
  }

  function startOut() {
    var d = new $.Deferred;
    $("#start").toggle('clip', 1500, function() {
      d.resolve();
    });
    return d.promise();
  }

  function menuIn() {
    var d = new $.Deferred;
    $(".no-display").fadeIn(1500, function() {
      d.resolve();
    });
    return d.promise();
  }
  // 実行
  startAnime();
});
