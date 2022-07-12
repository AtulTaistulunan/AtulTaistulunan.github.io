//點擊事件區
document.addEventListener('DOMContentLoaded',function(){
    //手機版選單被點擊
    var mobileNav = document.getElementById('navLine');
    var showContent = document.getElementById('navContent');
    
    mobileNav.addEventListener('click',function(){
        this.classList.toggle('mobileNavClick');
        showContent.classList.toggle('showContent');
    });
    //sec2Img被點擊
    var s2Img = document.getElementById('sec2Img');
    
    s2Img.addEventListener('click',function(){
        location.href = "https://atultaistulunan.github.io/Atul_SchoolProject/";
    });
});

//手機版隱藏區
document.addEventListener('DOMContentLoaded',function(){
    
    var windowWidth = window.innerWidth;

    resizeScreen(windowWidth);

    //sec3blog限制字的行數
    var module = document.querySelector(".sec2-subtitle");
    $clamp(module, {clamp: 3});
    //
    
    window.addEventListener('resize',function(){
        windowWidth = window.innerWidth;
        resizeScreen(windowWidth);
    });
});

//**** 函式區 ****//

function resizeScreen(windowWidth) {
    var objWeb = document.getElementsByName('web');
    var objMobile = document.getElementsByName('mobile');

    if(windowWidth <= 767){
        //隱藏網頁
        hideEle(objWeb);
        //顯示手機
        showEle(objMobile);
        //sec1抬頭css
        addClass('intro','rwdIntro');

        // **sec2**
        // title
        changeHTML('sec2Title','踏進山林挖掘被遺忘的生活');
        addClass('sec-2','rwdBlog');

        // ** sec3 ** 
        //title
        changeHTML('se3-title','服務項目Service');
        addClass('service','rwdService');
        //移除平板
        removeClass('service','rwdtbService');

        //**sec4** 
        addClass('works', 'rwdworks');


        //** sec4 **
        changeHTML('works-title','作品集Works');

        
    }else if(windowWidth >= 768 && windowWidth <= 992){
        //顯示網頁
        showEle(objWeb)
        //隱藏手機
        hideEle(objMobile);
        // ** sec3 **
        //title
        changeHTML('se3-title','服務項目<br><span>Service</span>');
        addClass('service','rwdtbService');
        removeClass('service','rwdService');

        //**sec4**
        changeHTML('works-title','作品集<br><span>Works</span>');
        removeClass('works', 'rwdworks');

    }else{
        // 網頁版

        showEle(objWeb);
        hideEle(objMobile);

        removeClass('intro','rwdIntro');
        removeClass('sec-2','rwdBlog');
        // **sec2**
        //title 恢復
        changeHTML('sec2Title','踏進山林<br>挖掘被遺忘的生活');

        // ** sec3 ** 
        //title恢復
        changeHTML('se3-title','服務項目<br><span>Service</span>');
        removeClass('service','rwdService');
        removeClass('service','rwdtbService');

        //**sec4 **
        changeHTML('works-title','作品集<br><span>Works</span>');
        removeClass('works', 'rwdworks');
    }
}

//show與hide函式區
function hideEle(obj){
    for(var i =0;i < obj.length ;i++){
        var x = obj[i];
        x.style.visibility = 'collapse';
    }
}
function showEle(obj){
    for(var i =0;i < obj.length ;i++){
        var x = obj[i];
        x.style.visibility = 'visible';
    }
}

//增加或刪除class
function addClass(addObjName,className){
    var target_obj = document.getElementById(addObjName); 

    target_obj.classList.add(className);
}
function removeClass(addObjName,className){
    var target_obj = document.getElementById(addObjName); 

    target_obj.classList.remove(className);
}

//改變HTML
function changeHTML(target_Obj, replaceHTML){
    var x = document.getElementById(target_Obj);
    x.innerHTML = replaceHTML;
}