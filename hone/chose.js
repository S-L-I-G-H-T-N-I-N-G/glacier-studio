$(function(){
    $.ajax({
        async: true,
        type: "GET",
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'callbackfunction',
        url: "https://api.codemao.cn/web/works/subjects/640/works?&offset=0&limit=20&sort=-n_likes&work_subject_id=640",
        data: "",
        timeout: 3000,
        contentType: "application/json;utf-8",
        success: function(msg) {
            console.log(msg);
        }
    });
})