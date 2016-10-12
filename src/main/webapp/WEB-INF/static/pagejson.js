$(function() {
    getjson(1);
});

function getjson(i) {
    $.ajax( {
        type : "get",
        url : "/messageJson-"+i,
        dataType:"json",
        success : function(jsondata) {

            $("#comments").empty();
            var data=eval(jsondata);
            var length = data.length;
            for(var i =0; i < length; i++){
                var imgUrl;
                if(data[i].imgUrl == null)
                    data[i].imgUrl = "nopic.jpg";
                var html =
                    "<div class='comment col-sm-offset-1'>" +
                        "<div class='comment-img'>" +
                            "<img src='/upload/"+data[i].imgUrl+"' width='30' height='30'>" +
                        "</div>" +
                    "<div class='comment-head '>" +
                        "<div class='row'>" +
                            "<div class='comment-name '>" +
                                "用户名：" + data[i].name +
                            "</div>" +
                            "<div class='comment-date col-sm-offset-1'>" +
                                "时间：" + data[i].date +
                            "</div>" +
                            "<div class='comment-ip col-sm-offset-1'>" +
                                "IP：" + data[i].ip +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='clear'></div>" +
                        "<div class='comment-body col-sm-offset-1'>" +
                            data[i].message +
                        "</div>" +
                    "</div>";
                $("#comments").append(html);
            }
        }
    });
    currentpage = i;
}