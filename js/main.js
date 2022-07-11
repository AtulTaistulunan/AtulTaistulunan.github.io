document.addEventListener('DOMContentLoaded',function(){
    
    window.addEventListener('resize',function(){
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        console.log(windowWidth + ',' + windowHeight);
        if(window.innerWidth <= 900){
            // console.log('HI');
            // var x = document.getElementById('test');
            // x.textContent = "0.0";
        }
    });
});

// 手機版選單被點擊
document.addEventListener('DOMContentLoaded',function(){
    var mobileNav = document.getElementById('navLine');
    var showContent = document.getElementById('navContent');

    mobileNav.addEventListener('click',function(){
        this.classList.toggle('mobileNavClick');
        showContent.classList.toggle('showContent');
    });
});

//手機版隱藏區
document.addEventListener('DOMContentLoaded',function(){
    
    var windowWidth = window.innerWidth;

    resizeScreen(windowWidth);

    window.addEventListener('resize',function(){
        windowWidth = window.innerWidth;
        resizeScreen(windowWidth);
    });
});

function resizeScreen(windowWidth) {
    var objWeb = document.getElementsByName('web');
    var objMobile = document.getElementsByName('mobile');

    if(windowWidth < 768){
        //隱藏電腦
        hideEle(objWeb);
        //顯示手機
        showEle(objMobile);
    }else{
        showEle(objWeb);
        hideEle(objMobile);
    }
}

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