/**
 * Created by 良敏 on 2017/2/6.
 */
$(document).ready(function () {
    $("#tab1 li").each(function (index) {
        var liNode = $(this);
        $(this).mouseover(function () {
            timeoutid=setTimeout(function () {
                $("div.content").removeClass("content");
                $("#tab1 li.tabin").removeClass("tabin");
                $("div").eq(index).addClass("content");
                liNode.addClass("tabin");
            },300)
        }).mouseout(function () {
            clearTimeout(timeoutid);
        })

    });

    $("#realcontent").load("mytab.html");
    $("#tab2 li").each(function (index) {
        $(this).click(function () {
            $("#tab2 li.tabin").removeClass("tabin");
            $(this).addClass("tabin");
            if(index==0){
                $("#realcontent").load("mytab.html");
            }else if(index==1){
                $("#realcontent").load("mytab.html");
            }else if(index==2){
                $("#realcontent").load("mytab.html");
            }
        })
    })
});