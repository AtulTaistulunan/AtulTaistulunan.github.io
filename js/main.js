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
    mobileNav.addEventListener('click',function(){
        this.classList.toggle('mobileNavClick');
    });
});