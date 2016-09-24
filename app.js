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

    //將Section icon 在hover狀態時變大

    //TODO:選擇section下選單的id
    //幫id找出來存起來
    //I-phone圖示變大
    var selectedIphoneIcon = ".iPhoneIcon";
    //設定 mouseover時狀態
    $(".iPhoneIcon").mouseover(function () {
        //設定改變尺寸
        $(selectedIphoneIcon).width("250px");
    });
    //設定 mouseleave時狀態
    $(".iPhoneIcon").mouseleave(function () {
        $(selectedIphoneIcon).width("150px");
    });

    //食記圖示變大
    var selectedDinigIcon = ".diningIcon";
    $(".diningIcon").mouseover(function () {
        $(selectedDinigIcon).width("250px");
    });
    $(".diningIcon").mouseleave(function () {
        $(selectedDinigIcon).width("150px");
    });
    
    //網頁設計圖示變大
    var selectedWebIcon = ".webIcon";
    $("#webDesign").mouseover(function () {
        
        $(selectedWebIcon).width("250px");
    });
    $("#webDesign").mouseleave(function () {
        $(selectedWebIcon).width("150px");
    });

    //心理測驗圖示變大
    var selectedPsychologicalIcon = ".psychologicalIcon";
    $(".psychologicalIcon").mouseover(function () {
        $(selectedPsychologicalIcon).width("250px");
    });
    $(".psychologicalIcon").mouseleave(function () {
        $(selectedPsychologicalIcon).width("150px");
    });

});
