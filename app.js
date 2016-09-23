$(function () {


    $("#webDesign").hover(function () {
        var showSubMenu = ".subMenu";

        $(".subMenu").fadeToggle();
    });

    //設定myData　
    //幫.websiteDesign-on加上 click 事件

    $("#readMore-btn").click(function () {
        var showdata = ".dataHide";

        $(showdata).fadeIn();
    });
});
