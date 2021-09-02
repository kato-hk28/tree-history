// chrome.tabs.query({}, function (tabs) {
//     $('#tabnum').text('現在開いているタブの数は[' + tabs.length + ']個です');

//     for (var i in tabs) {
//         $('#tabs').after('<tr><td>' + tabs[i].title + '</td><td>' + tabs[i].url + '</td></tr>');
//     }
// });

var dateCurrent= new Date();
var correction = dateCurrent.getTimezoneOffset()*60*1000;
// var now = Date.now();
// var corrected_now = correction + now;
// var from = corrected_now - 3600;

var from = Number(localStorage.getItem('time'));

chrome.history.search({text: '', startTime: from, maxResults: 1000}, function(data) {
    for (var i in data) {
        $('#histories').after('<tr><td>' + data[i].title + '</td><td>' + data[i].url + '</td></tr>');
    }
    console.log(from);
});