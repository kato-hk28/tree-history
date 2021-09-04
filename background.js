//async function getCurrentTab() {
//  let queryOptions = { active: true, currentWindow: true };
//  let [tab] = await chrome.tabs.query(queryOptions);
//  return tab;
//}
//
//var currentTab = getCurrentTab();
//console.log(currentTab);

//chrome.history.onVisited.addListener(
//    function (historyitem) {
//        console.log("visitURL");
//        console.log(historyitem.url);
//    }
//
//)
var preURL="";
var nowURL="";
//var preTitle="";
var nowTitle="";
function tree_register(preURL, nowURL, nowTitle) { 
    var tree_dict_arr = localStorage.getItem("tree_dict_arr");
    var tree_dict = {from:preURL,to:nowURL,title:nowTitle};
    tree_dict_arr.push(tree_dict);
}
chrome.tabs.onActivated.addListener(
    function (activeinfo) {
        chrome.tabs.get(activeinfo["tabId"],
            function (tabinfo) {
                console.log("nowURL");
                console.log(tabinfo.url);
                console.log(tabinfo.title);
                preURL = nowURL;
                //preTitle = nowTitle;
                nowURL = tabinfo.url;
                nowTitle = tabinfo.title;
                tree_register(preURL,nowURL,nowTitle);
        }
        )
    }
)


var onCreatedFlag = false
chrome.tabs.onCreated.addListener(
    function (tab) {
        console.log("created")
        console.log(tab.pendingUrl)
        onCreatedFlag = true
        
    }
)

chrome.tabs.onUpdated.addListener(
    function (tabid, changeInfo, tab) {
        if (changeInfo.status == "loading") {
            if (!onCreatedFlag) {
                console.log("updated")
                console.log(changeInfo.url)
                console.log(changeInfo.title)
                preURL = nowURL;
                //preTitle = nowTitle;
                nowURL = changeInfo.url;
                nowTitle = changeInfo.title;
                tree_register(preURL, nowURL, nowTitle);
            }
            onCreatedFlag=false
        }
    }
)

