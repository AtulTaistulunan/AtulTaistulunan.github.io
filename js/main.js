//點擊事件區
window.addEventListener('load',function(){
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

    //barClick被點擊
    var barClick = document.querySelectorAll('.barClick');

    for(var i = 0;i < barClick.length ; i++){
        var x = barClick[i];

        x.addEventListener('click',function(){
            location.href = 'https://www.facebook.com/sinqaningu';
        });
    }

    //gohome回首頁
    var gohome = document.querySelector('.goHome');

    gohome.addEventListener('click', function(){
        window.scrollTop = 0;
    });

});

//手機版隱藏區
window.addEventListener('load',function(){
    
    var windowWidth = window.innerWidth;

    resizeScreen(windowWidth);

    //sec3blog限制字的行數
    // var module = document.querySelector(".sec2-subtitle");
    // $clamp(module, {clamp: 3});
    //
    
    window.addEventListener('resize',function(){
        windowWidth = window.innerWidth;
        resizeScreen(windowWidth);
    });
});



//滑鼠
const cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});


document.addEventListener('mousedown', function(){
    cursorinner.classList.add('cursorinnerhover');
});

document.addEventListener('mouseup', function(){
    cursorinner.classList.remove('cursorinnerhover');
});

window.addEventListener('load',function(){
    anime({
        targets: '.mouse',
        translateY: 15,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad'
    });
});

//滾動事件
var allScroll =  document.querySelector('.allScroll');

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

        //鼠標隱藏
        hideMouse();

        //顯示scroll
        allScroll.style = 'overflow-y: scroll;';
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

        //鼠標隱藏
        hideMouse();
        
        //顯示scroll
        allScroll.style = 'overflow-y: scroll;';

        //sidebar-right
        allScroll.addEventListener('scroll',checkBoxes);
        checkBoxes();
        //sidebar-right click (tablet)
        allScroll.style = 'scroll-behavior: smooth;';
        sideRightClick();

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
        //記下每個sec的offsetTop
        setSecTop();
        //取消滾動事件
        let timer;
        
        allScroll.addEventListener('wheel',function(e){

            e.preventDefault();

            //判斷scroolUp或scrollDown
            var y = e.deltaY;
        
            let context = this;
            let args = arguments;
            // console.log(this);
            clearTimeout(timer);
            clearAnimate(now_sec_index);
            timer = setTimeout(function() {
                pageMove.apply(context, args);
            }, 1000);

            
        });

        window.addEventListener('keydown',function(e){
            if(e.key == 'ArrowDown' || e.key == 'ArrowUp'){
                e.preventDefault();
            }
        });

        //隱藏scrollbar
        allScroll.style = 'overflow-y: hidden;';

        //sidebar-right click
        // sideRightClickWeb();
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

//防抖
//allScroll
var now_child_top = 0;
var is_First_Time = true;
var now_sec_index = 0;
//放各section的offsetTop
var arychilds = [];
//放各section的name
var childnames = [];


function pageMove(e){
    
    //判斷滾上或滾下
    var y = e.deltaY;

    // 判斷上下
    //向下
    if(y >=0){
        for(var j=0; j< arychilds.length ; j++){
            if(now_child_top < arychilds[j]){
                // allScroll.scrollTop = arychilds[j];
                var getSecName = document.getElementById(childnames[j]);
    
                now_child_top = arychilds[j];
                now_sec_index = j ;

                getSecName.style = "transition: 1s;";
                getSecName.style.top = -now_child_top + 'px';
            
                detAnimete(now_sec_index);
                break;

            }   
        }
    }else{
        // 回到自己的位置
        
        var new_child_top = now_sec_index-1;
        var new_sec_index = now_sec_index-1;

        if(new_child_top<0){new_child_top = 0;}
        if(new_sec_index<0){new_sec_index = 0;}
        
        var getSecName = document.getElementById(childnames[now_sec_index]);

        getSecName.style = "transition: 2.5s;";
        getSecName.style.top = now_child_top + 'px';

        now_child_top = arychilds[new_child_top];
        now_sec_index = new_sec_index;    
        
        detAnimete(now_sec_index);
    }

    //sidebar-right
    detSideBar(now_sec_index);
}

//section動畫
function detAnimete(now_sec_index){
    var repCaseName; 
    switch(now_sec_index){
        case 0:
            repCaseName = document.getElementsByName('caseZero');
            for(var i = 0 ; i < repCaseName.length ;i++){
                repCaseName[i].classList.add("animate__animated","animate__backInLeft");
            }
            break;
        case 1:
            repCaseName = document.getElementsByName('caseOne');
            for(var i = 0 ; i < repCaseName.length ;i++){
                repCaseName[i].classList.add("animate__animated","animate__backInLeft");
            }
            
            break;
        case 2:
            repCaseName = document.getElementsByName('caseTwo');
            for(var i = 0 ; i < repCaseName.length ;i++){
                repCaseName[i].classList.add("animate__animated","animate__zoomIn");
            }
            break;
        case 3: 
            repCaseName = document.getElementsByName('caseThree');
            for(var i = 0 ; i < repCaseName.length ;i++){
                repCaseName[i].classList.add("animate__animated","animate__zoomInLeft");
            }
            break;
    }
}
    

//移除動畫
function clearAnimate(now_sec_index){
    var repCaseName; 
    switch(now_sec_index){
        case 0:
            repCaseName = document.getElementsByName('caseZero');
            for(var i = 0 ; i < repCaseName.length ;i++){
                repCaseName[i].classList.remove("animate__animated","animate__backInLeft");
            }
            break;
        case 1:
            repCaseName = document.getElementsByName('caseOne');
            for(var i = 0 ; i < repCaseName.length ;i++){
                repCaseName[i].classList.remove("animate__animated","animate__backInLeft");
            }
            
            break;
        case 2:
            repCaseName = document.getElementsByName('caseTwo');
            for(var i = 0 ; i < repCaseName.length ;i++){
                repCaseName[i].classList.remove("animate__animated","animate__zoomIn");
            }
            break;
        case 3: 
            repCaseName = document.getElementsByName('caseThree');
            for(var i = 0 ; i < repCaseName.length ;i++){
                repCaseName[i].classList.remove("animate__animated","animate__zoomInLeft");
            }
            break;
    }
}

//鼠標隱藏
function hideMouse(){
    var x = document.querySelector('.cursor');
    var y = document.querySelector('.cursor2');

    x.style = 'display: none;';
    y.style = 'display: none;';    
}

//sidebar right
function detSideBar(now_index){
    var detUl= document.getElementById('detRight');
    var detAllli = detUl.childNodes;
    var aryLi = [];

    for(var i=0 ; i < detAllli.length ;i++){
        if(detAllli[i].nodeType == 1){
            aryLi.push(detAllli[i]);
        }
    }

    for(var j=0 ; j < aryLi.length; j++){
        if(j == now_sec_index){
            var targetL = aryLi[now_sec_index];
            targetL.classList.add('now_sec');
        }else{
            aryLi[j].classList.remove('now_sec');
        }
    }
    
    //更改 sidebarLine
    var sidebar = document.querySelector('.innerSidebar');
    switch (now_sec_index + 1) {
        case 1:
            sidebar.style = "width: calc(100%/4*1);";
            break;
        case 2:
            sidebar.style = "width: calc(100%/4*2);";
            break;
        case 3:
            sidebar.style = "width: calc(100%/4*3);";
            break;
        case 4:
            sidebar.style = "width: calc(100%/4*4);";
            break;
    }
}

//tablet sidebar
function checkBoxes(){
    
    var numb = 0;
    var target_li = [];
    var sec_scrolltop = [];

    var allSection = document.querySelectorAll('section');
    var target_ul = document.getElementById('detRight');
    var sidebar = document.querySelector('.innerSidebar');
    
    for(var i = 0 ; i < target_ul.childNodes.length ;i++){
        var li = target_ul.childNodes[i];

        if(li.nodeType == 1){
            target_li.push(li);
        }
    }

    allSection.forEach(sec=>{
        const boxTop = sec.getBoundingClientRect().top + sec.getBoundingClientRect().height / 2;
        const winTop = window.innerHeight ;

        if(boxTop < winTop && boxTop >=0){
            target_li[numb].classList.add('now_sec');
            
            sidebar.style.width = "calc(100% / 4*"+(numb+1)+")";
        }else{
            target_li[numb].classList.remove('now_sec');
        }
        sec_scrolltop.push(sec.offsetTop);
        numb++;
    });
}

//sidebar right Click
function sideRightClick(){
    var allSection = document.querySelectorAll('section');
    var sec_scrolltop = [];
    var target_ul = document.querySelectorAll('.RClick');
    //放入各sec的top
    allSection.forEach(sec=>{
        sec_scrolltop.push(sec.offsetTop); 
    });
    //偵測哪一個sec
    target_ul.forEach(li=>{
        li.addEventListener('click',function(){
            allScroll.scrollTop = sec_scrolltop[this.dataset.number];
        });
    });
}

//設置每個sec的offsetTop
function setSecTop(){
    //取得section
    var childsconunt = allScroll.childNodes;
    
    //存取section的name、offsetTop
    if(is_First_Time){
        
        for(var i=0; i< childsconunt.length;i++){
            var repNode = childsconunt[i];
            if(repNode.nodeType == 1){
                var elmTop = repNode.offsetTop;
                var getName = repNode.getAttribute('id');
                
                arychilds.push(elmTop);
                childnames.push(getName);
            }
        }
        is_First_Time = false;
    }
    
}

// //sidebar right click WRB
// function sideRightClickWeb (){
//     var target_ul = document.querySelectorAll('.RClick');
    
//     //偵測哪一個sec
//     target_ul.forEach(li=>{
//         li.addEventListener('click',function(){
//             var number = parseInt(this.dataset.number);
            
//             for(var i = number ; i < 4 ;i++){
//                 var Sec = document.getElementById(childnames[i]); 

//                 if(i==number){
//                     Sec.style = "transition: 2.5s;";
//                     Sec.style.top = -arychilds[i] + 'px';
                    
//                     now_child_top = arychilds[i];

//                 }else{
//                     Sec.style = "transition: 2.5s;";
//                     Sec.style.top = arychilds[i] + 'px';
//                 }
            
//                 // console.log(i);
            
//             }
//         });
//     });
// }