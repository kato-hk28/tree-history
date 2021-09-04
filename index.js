var dateCurrent= new Date();
var correction = dateCurrent.getTimezoneOffset()*60*1000;
// var now = Date.now();
// var corrected_now = correction + now;
// var from = corrected_now - 3600;

var from = Number(localStorage.getItem('time'));

var nodes = new vis.DataSet();
chrome.history.search({text: '', startTime: from, maxResults: 1000}, function(data) {
    for (var i in data) {
        var node = { id: i, label: data[i].title, url: data[i].url };
        console.log(node);
        nodes.add(node);
    }
    console.log(from);
    
});

//var nodes = new vis.DataSet([
//
//    {id: 1, label: 'URL',url: "https://visjs.github.io/vis-data/data/index.html"},
//    { id: 2, label: 'B', url: "https://miro.com/app/board/o9J_l0feEak=/"},
//    {id: 3, label: 'C' },
//    {id: 4, label: 'D' },
//    {id: 5, label: 'E' },
//    {id: 6, label: 'F' },
//    {id: 7, label: 'G' },
//    {id: 8, label: 'H' },
//]);
var edges = new vis.DataSet([
//    {from: 1, to: 2, arrows: 'to' },
//    {from: 1, to: 3, arrows: 'to' },
//    {from: 3, to: 4, arrows: 'to' },
//    {from: 6, to: 1, arrows: 'to' },
//    {from: 7, to: 8, arrows: 'to' },
//    {from: 8, to: 7, arrows: 'to' },
]);
var container = $('#network')[0];
var data = {
    nodes: nodes,
    edges: edges
    };
var options = {
    //physics: false,
    size: 20

};
var network = new vis.Network(container, data, options);

network.on("click",function(params){
    if(params.nodes.length == 1){
        var nodeId = params.nodes[0];
        var node = nodes.get(nodeId);
        window.open(node.url, '_blank');
    }
});
