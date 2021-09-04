//↓画像とかだと正しく動かない
$("a").click(function (event) {
    var all = $(event.target);
    console.log(all);
    var url = $(event.target).attr("href");
    console.log(url);
});

