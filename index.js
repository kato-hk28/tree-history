chrome.tabs.query({}, function (tabs) {
    $('#tabnum').text('現在開いているタブの数は[' + tabs.length + ']個です');

    for (var i in tabs) {
        $('tbody').after('<tr><td>' + tabs[i].title + '</td><td>' + tabs[i].url + '</td></tr>');
    }
});