$(function() {
  function startAnime() {
    startIn()
      .then(startOut)
      .then(menuIn)
      .then(mainIn);
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
    $("#start").toggle('clip', 1000, function() {
      d.resolve();
    });
    return d.promise();
  }

  function menuIn() {
    var d = new $.Deferred;
    $("#menu").delay(500).animate({
      width: 'toggle'
    }, 'slow', function() {
      d.resolve();
    });
    return d.promise();
  }

  function mainIn() {
    var d = new $.Deferred;
    $("#main").fadeIn(1500, function() {
      d.resolve();
    });
    return d.promise();
  }
  // 実行
  startAnime();
});
