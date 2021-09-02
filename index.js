chrome.tabs.query({}, function (tabs) {
    $('#tabnum').text('現在開いているタブの数は[' + tabs.length + ']個です');

    for (var i in tabs) {
        $('#tabs').after('<tr><td>' + tabs[i].title + '</td><td>' + tabs[i].url + '</td></tr>');
    }
});

var dateCurrent= new Date(), 
correction = dateCurrent.getTimezoneOffset()*60*1000;
var now = Date.now();
var corrected_now = correction + now;
var from = corrected_now - 3600;

chrome.history.search({text: '', maxResults: 10}, function(data) {
    for (var i in data) {
        $('#histories').after('<tr><td>' + data[i].title + '</td><td>' + data[i].url + '</td></tr>');
    }
});