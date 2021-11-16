let windowWidth;
let windowHeight;

let scrollY = 0;
let relativeScrollY = 0;
let totalScrollHeight = 0;
let currentScene = 0;
let calAnimationVal;

let prevDurations = 0;
let pixelDuration = 0;

let elemBody = document.body;

let animationKeyframes = [ // 여기에 스크롤에 따라 애니메이션 될 것들을 넣는 겁니다. 
    { // contentsA out
        animationVal:{
            opacity:[0.8, 0],
            circleMove:[0, -200],
            arrowMove:[0, 200]
        }
    },

    { // 엔스로포즈  1
        animationVal:{
            opacity:[0, 1],
            natureScale:[1, 1],
            natureMoveX:[0, 0],
            natureMoveY:[0, 0]
        }
    },

    { // contentsB in
        animationVal:{
            opacity:[1, 0],
            peopleScale:[1, 1.2],
            peopleMoveX:[0, -200],
            peopleMoveY:[0, 200]
        }
    },
    { // contentsB in
        animationVal:{
            opacity:[1, 0],
            peopleScale:[1, 1.2],
            peopleMoveX:[0, -200],
            peopleMoveY:[0, 200]
        }
    },
    { // contentsB in
        animationVal:{
            opacity:[1, 0],
            peopleScale:[1, 1.2],
            peopleMoveX:[0, -200],
            peopleMoveY:[0, 200]
        }
    },
    { // contentsB in
        animationVal:{
            opacity:[1, 0],
            peopleScale:[1, 1.2],
            peopleMoveX:[0, -200],
            peopleMoveY:[0, 200]
        }
    },


    /* 자연 배경 6 */
    { // contentsB out
        animationVal:{
            opacity:[0, 1],
            natureScale:[1, 1],
            natureMoveX:[0, -200],
            natureMoveY:[0, 200]
        }
    },
    /* 자연 담쟁이. 덩굴 부분 모션 7 */
    { // contentsC in
        animationVal:{
            opacity:[0, 1],
            nature1Scale:[1, 1],
            nature1MoveX:[0, -200],
            nature1MoveY:[0, 200]
        }
    },
    { // 
        animationVal:{
            opacity:[0, 1],
            nature1Scale:[1, 1],
            nature1MoveX:[0, -200],
            nature1MoveY:[0, 200]
        }
    },

    { // 
        animationVal:{
            opacity:[0, 1],
            natureScale:[0.8, 1],
            natureMoveX:[0, -200],
            natureMoveY:[0, 200]
        }
    },{ // 
        animationVal:{
            opacity:[0, 1],
            natureScale:[0.8, 1],
            natureMoveX:[0, -200],
            natureMoveY:[0, 200]
        }
    },{ // 
        animationVal:{
            opacity:[0, 1],
            natureScale:[0.8, 1],
            natureMoveX:[0, -200],
            natureMoveY:[0, 200]
        }
    },{ // 
        animationVal:{
            opacity:[0, 1],
            natureScale:[0.8, 1],
            natureMoveX:[0, -200],
            natureMoveY:[0, 200]
        }
    },{ // 
        animationVal:{
            opacity:[0, 1],
            natureScale:[0.8, 1],
            natureMoveX:[0, -200],
            natureMoveY:[0, 200]
        }
    },{ // 
        animationVal:{
            opacity:[0, 1],
            natureScale:[0.8, 1],
            natureMoveX:[0, -200],
            natureMoveY:[0, 200]
        }
    },{ // 15
        animationVal:{
            opacity:[0, 1],
            natureScale:[0.8, 1],
            natureMoveX:[0, -200],
            natureMoveY:[0, 200]
        }
    },{ // 
        animationVal:{
            opacity:[0, 1],
            natureScale:[0.8, 1],
            natureMoveX:[0, -200],
            natureMoveY:[0, 200]
        }
    },{ // 
        animationVal:{
            opacity:[0, 1],
            natureScale:[0.8, 1],
            natureMoveX:[0, -200],
            natureMoveY:[0, 200]
        }
    },{ // 
        animationVal:{
            opacity:[0, 1],
            natureScale:[0.8, 1],
            natureMoveX:[0, -200],
            natureMoveY:[0, 200]
        }
    },{ // 
        animationVal:{
            opacity:[0, 1],
            natureScale:[0.8, 1],
            natureMoveX:[0, -200],
            natureMoveY:[0, 200]
        }
    },{ // 
        animationVal:{
            opacity:[0, 1],
            natureScale:[0.8, 1],
            natureMoveX:[0, -200],
            natureMoveY:[0, 200]
        }
    },
    
    { // 엔스로포즈 21
        animationVal:{
            opacity:[1, 0],
            natureScale:[0, 0],
            natureMoveX:[0, 0],
            natureMoveY:[0, 0]
        }
    },

 /* 검정 엔딩 22  */

    { 
        animationVal:{
            opacity:[0, 1],
            natureScale:[0.8, 1.2],
            natureMoveX:[0, 0],
            natureMoveY:[0, 0]
        }
    },
     /* 엔딩  */
    { 
        animationVal:{
            opacity:[0, 1],
            natureScale:[1, 1],
            natureMoveX:[0, 0],
            natureMoveY:[0, 0]
        }
    },
    { 
        animationVal:{
            opacity:[0, 1],
            natureScale:[1, 1],
            natureMoveX:[0, 0],
            natureMoveY:[0, 0]
        }
    },
    { 
        animationVal:{
            opacity:[0, 1],
            natureScale:[1, 1],
            natureMoveX:[0, 0],
            natureMoveY:[0, 0]
        }
    },

        /* 뒤로 사라지는 엔딩1 24*/
    { 
        animationVal:{
            opacity:[1, 0],
            natureScale:[0.8, 0],
            natureMoveX:[0, 0],
            natureMoveY:[0, 0]
        }
    },
    

    { 
        animationVal:{
            opacity:[0, 1],
            natureScale:[1, 1],
            natureMoveX:[0, 0],
            natureMoveY:[0, 0]
        }
    },
    { 
        animationVal:{
            opacity:[0, 1],
            natureScale:[1, 1],
            natureMoveX:[0, 0],
            natureMoveY:[0, 0]
        }
    },
    { 
        animationVal:{
            opacity:[0, 1],
            natureScale:[1, 1],
            natureMoveX:[0, 0],
            natureMoveY:[0, 0]
        }
    },

        /* 뒤로 사라지는 엔딩28 */
    { 
        animationVal:{
            opacity:[1, 0],
            natureScale:[0.8, 0],
            natureMoveX:[0, 0],
            natureMoveY:[0, 0]
        }
    },


    { 
        animationVal:{
            opacity:[0, 1],
            natureScale:[1, 1],
            natureMoveX:[0, 0],
            natureMoveY:[0, 0]
        }
    },

    { // 화살표 엔딩
        animationVal:{
            opacity:[0, 0.8],
            circleMove:[-200, 0],
            arrowMove:[-200, 0]
        }
    },

    


]

function init() //시작할 때 실행되는 함수
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    render();
    resizeHandler();
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
}

function scrollHandler()
{
    scrollY = window.pageYOffset;

    if(scrollY < 0 || scrollY > (totalScrollHeight - windowHeight))
    {
        return;
    }

    if(scrollY > pixelDuration+ prevDurations)
    {
        prevDurations += pixelDuration;
        currentScene++;
    }
    else if(scrollY < prevDurations)
    {
        currentScene--;
        prevDurations -= pixelDuration;
    }

    relativeScrollY = scrollY - prevDurations;

    render(currentScene);
}

function resizeHandler() //애니메이션 프레임 수를 조정한다.
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    totalScrollHeight = 0;
    pixelDuration = windowHeight * 0.5;

    for(let i = 0; i < animationKeyframes.length; i++)
    {
        totalScrollHeight += pixelDuration;
    }
    totalScrollHeight += windowHeight;

    elemBody.style.height = totalScrollHeight + 'px';

    console.log(totalScrollHeight);
}

/*
화면 움직임 있을 목표치 모음. 
스크롤 양에 따라 애니메이션 되는 샘플
스크롤에 따라 scene인덱스 변화 및 css 애니메이션 동작은 scene 1번 참고

아래 변수에 타겟 엘레먼트 추가하고 밑에 render함수에서 scene넘버에 맞게 조정하시면 됩니다. 
*/
let blackWall = document.querySelector('.black'); // 검은화면
let scrollC = document.querySelector('.iSC'); // 원
let scrollT = document.querySelector('.iST'); // 텍스트
let scrollA = document.querySelector('.iSA'); // 화살표


let introTypo = document.querySelector('#introTypo');

let bgnature = document.querySelector('.bgnature'); // 자연 배경
let bgivy = document.querySelector('.bgivy'); // 자연 아이비
let bgtree = document.querySelector('.bgtree'); // 자연 아이비

let bgblck = document.querySelector('.bgblck'); // 검정 배경

let peoples = document.querySelectorAll('.people'); // 사람들. All로 불렀으니 배열로 들어옵니다. [0]은 people4. 

let natures = document.querySelectorAll('.nature'); // 자연 동물

let scrollEC = document.querySelector('.eSC');
let scrollET = document.querySelector('.eST');

function render(nowState)
{
    switch(nowState)
    {
        case 0:{ // scene번호 입니다. 
            let opacityVal, circleMove, arrowMove;
            opacityVal = calcAni(animationKeyframes[0].animationVal.opacity);
            circleMove = calcAni(animationKeyframes[0].animationVal.circleMove);
            arrowMove = calcAni(animationKeyframes[0].animationVal.arrowMove);
            blackWall.style.opacity = opacityVal;
            introTypo.style.opacity = opacityVal;
            scrollC.style.transform = 'translateY(' + circleMove + 'px)';
            scrollC.style.opacity = opacityVal;
            scrollT.style.opacity = opacityVal;
            scrollA.style.transform = 'translateY(' + arrowMove + 'px)';
        }break;

        case 1:{ // 앤스로포즈 
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[1].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[1].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[1].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[1].animationVal.natureScale);
            natures[23].style.opacity = opacityVal; 
            natures[23].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[23].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[23].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 2:{
            let opacityVal, peopleMoveX, peopleMoveY, peopleScale;
            opacityVal = calcAni(animationKeyframes[2].animationVal.opacity);
            peopleMoveX = calcAni(animationKeyframes[2].animationVal.peopleMoveX);
            peopleMoveY = calcAni(animationKeyframes[2].animationVal.peopleMoveY);
            peopleScale = calcAni(animationKeyframes[2].animationVal.peopleScale);
            peoples[3].style.opacity = opacityVal; // peoples[3]은 현재 html에 4번째. 즉 제일 앞에 있는 사람. people1. 고정값이 아닌 유기적 순서를 가져오려면 people.[people.lenght-1]
            peoples[3].style.transform = 'translateX(' + peopleMoveX + 'px)';
            peoples[3].style.transform = 'translateY(' + peopleMoveY + 'px)';
            peoples[3].style.transform = 'scale(' + peopleScale + ')';

        }break;
        case 3:{
            let opacityVal, peopleMoveX, peopleMoveY, peopleScale;
            opacityVal = calcAni(animationKeyframes[3].animationVal.opacity);
            peopleMoveX = calcAni(animationKeyframes[3].animationVal.peopleMoveX);
            peopleMoveY = calcAni(animationKeyframes[3].animationVal.peopleMoveY);
            peopleScale = calcAni(animationKeyframes[3].animationVal.peopleScale);
            peoples[2].style.opacity = opacityVal; 
            peoples[2].style.transform = 'translateX(' + peopleMoveX + 'px)';
            peoples[2].style.transform = 'translateY(' + peopleMoveY + 'px)';
            peoples[2].style.transform = 'scale(' + peopleScale + ')';
        }break;
        case 4:{
            let opacityVal, peopleMoveX, peopleMoveY, peopleScale;
            opacityVal = calcAni(animationKeyframes[4].animationVal.opacity);
            peopleMoveX = calcAni(animationKeyframes[4].animationVal.peopleMoveX);
            peopleMoveY = calcAni(animationKeyframes[4].animationVal.peopleMoveY);
            peopleScale = calcAni(animationKeyframes[4].animationVal.peopleScale);
            peoples[1].style.opacity = opacityVal; 
            peoples[1].style.transform = 'translateX(' + peopleMoveX + 'px)';
            peoples[1].style.transform = 'translateY(' + peopleMoveY + 'px)';
            peoples[1].style.transform = 'scale(' + peopleScale + ')';
            
        }break;
        case 5:{
            let opacityVal, peopleMoveX, peopleMoveY, peopleScale;
            opacityVal = calcAni(animationKeyframes[5].animationVal.opacity);
            peopleMoveX = calcAni(animationKeyframes[5].animationVal.peopleMoveX);
            peopleMoveY = calcAni(animationKeyframes[5].animationVal.peopleMoveY);
            peopleScale = calcAni(animationKeyframes[5].animationVal.peopleScale);
            peoples[0].style.opacity = opacityVal; 
            peoples[0].style.transform = 'translateX(' + peopleMoveX + 'px)';
            peoples[0].style.transform = 'translateY(' + peopleMoveY + 'px)';
            peoples[0].style.transform = 'scale(' + peopleScale + ')';
            
        }break;

        /* 자연 배경 */
        case 6:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[6].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[6].animationVal.nature1MoveX);
            natureMoveY = calcAni(animationKeyframes[6].animationVal.nature1MoveY);
            natureScale = calcAni(animationKeyframes[6].animationVal.nature1Scale);
            bgnature.style.opacity = opacityVal; 
            bgnature.style.transform = 'translateX(' + natureMoveX + 'px)';
            bgnature.style.transform = 'translateY(' + natureMoveY + 'px)';
            bgnature.style.transform = 'scale(' + natureScale + ')';
            
        }break;

/* 담쟁이 */
        case 7:{
            let opacityVal, nature1MoveX, nature1MoveY, nature1Scale;
            opacityVal = calcAni(animationKeyframes[7].animationVal.opacity);
            nature1MoveX = calcAni(animationKeyframes[7].animationVal.nature1MoveX);
            nature1MoveY = calcAni(animationKeyframes[7].animationVal.nature1MoveY);
            nature1Scale = calcAni(animationKeyframes[7].animationVal.nature1Scale);
            bgivy.style.opacity = opacityVal; 
            bgivy.style.transform = 'translateX(' + nature1MoveX + 'px)';
            bgivy.style.transform = 'translateY(' + nature1MoveY + 'px)';
            bgivy.style.transform = 'scale(' + nature1Scale + ')';
            
        }break;
/* 덩굴 */
        case 8:{
            let opacityVal, nature1MoveX, nature1MoveY, nature1Scale;
            opacityVal = calcAni(animationKeyframes[8].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[8].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[8].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[8].animationVal.natureScale);
            bgtree.style.opacity = opacityVal; 
            bgtree.style.transform = 'translateX(' + nature1MoveX + 'px)';
            bgtree.style.transform = 'translateY(' + nature1MoveY + 'px)';
            bgtree.style.transform = 'scale(' + nature1Scale + ')';
            
        }break;

        case 9:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[9].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[9].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[9].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[9].animationVal.natureScale);
            natures[3].style.opacity = opacityVal; 
            natures[3].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[3].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[3].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 10:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[10].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[10].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[10].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[10].animationVal.natureScale);
            natures[4].style.opacity = opacityVal; 
            natures[4].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[4].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[4].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 11:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[11].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[11].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[11].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[11].animationVal.natureScale);
            natures[5].style.opacity = opacityVal; 
            natures[5].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[5].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[5].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 12:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[12].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[12].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[12].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[12].animationVal.natureScale);
            natures[6].style.opacity = opacityVal; 
            natures[6].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[6].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[6].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 13:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[13].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[13].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[13].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[13].animationVal.natureScale);
            natures[7].style.opacity = opacityVal; 
            natures[7].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[7].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[7].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 14:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[14].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[14].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[14].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[14].animationVal.natureScale);
            natures[8].style.opacity = opacityVal; 
            natures[8].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[8].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[8].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 15:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[15].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[15].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[15].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[15].animationVal.natureScale);
            natures[9].style.opacity = opacityVal; 
            natures[9].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[9].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[9].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 16:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[16].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[16].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[16].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[16].animationVal.natureScale);
            natures[10].style.opacity = opacityVal; 
            natures[10].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[10].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[10].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 17:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[17].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[17].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[17].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[17].animationVal.natureScale);
            natures[11].style.opacity = opacityVal; 
            natures[11].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[11].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[11].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 18:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[18].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[18].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[18].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[18].animationVal.natureScale);
            natures[12].style.opacity = opacityVal; 
            natures[12].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[12].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[12].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 19:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[18].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[18].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[18].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[18].animationVal.natureScale);
            natures[13].style.opacity = opacityVal; 
            natures[13].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[13].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[13].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 20:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[20].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[20].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[20].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[20].animationVal.natureScale);
            natures[14].style.opacity = opacityVal; 
            natures[14].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[14].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[14].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 21:{ // 앤스로포즈 
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[21].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[21].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[21].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[21].animationVal.natureScale);
            natures[23].style.opacity = opacityVal; 
            natures[23].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[23].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[23].style.transform = 'scale(' + natureScale + ')';
            
        }break;

/* 엔딩 검정 */
        case 22:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[22].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[22].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[22].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[22].animationVal.natureScale);
            bgblck.style.opacity = opacityVal; 
            bgblck.style.transform = 'translateX(' + natureMoveX + 'px)';
            bgblck.style.transform = 'translateY(' + natureMoveY + 'px)';
            bgblck.style.transform = 'scale(' + natureScale + ')';
            
        }break;

    /* 엔딩 */
        case 23:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[23].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[23].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[23].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[23].animationVal.natureScale);
            natures[16].style.opacity = opacityVal; 
            natures[16].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[16].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[16].style.transform = 'scale(' + natureScale + ')';
            
        }break;
        
    
        case 24:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[24].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[24].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[24].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[24].animationVal.natureScale);
            natures[17].style.opacity = opacityVal; 
            natures[17].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[17].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[17].style.transform = 'scale(' + natureScale + ')';
            
        }break;
        case 25:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[25].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[25].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[25].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[25].animationVal.natureScale);
            natures[18].style.opacity = opacityVal; 
            natures[18].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[18].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[18].style.transform = 'scale(' + natureScale + ')';
            
        }break;

/* 사라지는 엔딩 */
        
        case 26:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[26].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[26].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[26].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[26].animationVal.natureScale);
            natures[16].style.opacity = opacityVal; 
            natures[16].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[16].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[16].style.transform = 'scale(' + natureScale + ')';
            natures[17].style.opacity = opacityVal; 
            natures[17].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[17].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[17].style.transform = 'scale(' + natureScale + ')';
            natures[18].style.opacity = opacityVal; 
            natures[18].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[18].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[18].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        
        case 27:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[27].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[27].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[27].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[27].animationVal.natureScale);
            natures[19].style.opacity = opacityVal; 
            natures[19].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[19].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[19].style.transform = 'scale(' + natureScale + ')';
            
            
        }break;


        case 28:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[28].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[28].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[28].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[28].animationVal.natureScale);
            natures[20].style.opacity = opacityVal; 
            natures[20].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[20].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[20].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 29:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[29].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[29].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[29].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[29].animationVal.natureScale);
            natures[21].style.opacity = opacityVal; 
            natures[21].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[21].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[21].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 30:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[30].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[30].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[30].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[30].animationVal.natureScale);
            natures[19].style.opacity = opacityVal; 
            natures[19].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[19].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[19].style.transform = 'scale(' + natureScale + ')';
            natures[20].style.opacity = opacityVal; 
            natures[20].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[20].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[20].style.transform = 'scale(' + natureScale + ')';
            natures[21].style.opacity = opacityVal; 
            natures[21].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[21].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[21].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        case 31:{
            let opacityVal, natureMoveX, natureMoveY, natureScale;
            opacityVal = calcAni(animationKeyframes[31].animationVal.opacity);
            natureMoveX = calcAni(animationKeyframes[31].animationVal.natureMoveX);
            natureMoveY = calcAni(animationKeyframes[31].animationVal.natureMoveY);
            natureScale = calcAni(animationKeyframes[31].animationVal.natureScale);
            natures[22].style.opacity = opacityVal; 
            natures[22].style.transform = 'translateX(' + natureMoveX + 'px)';
            natures[22].style.transform = 'translateY(' + natureMoveY + 'px)';
            natures[22].style.transform = 'scale(' + natureScale + ')';
            
        }break;

        // 추가로 화살표 다시 올라오는 그거 //

        case 32:{ 
            let opacityVal, circleMove, arrowMove;
            opacityVal = calcAni(animationKeyframes[32].animationVal.opacity);
            circleMove = calcAni(animationKeyframes[32].animationVal.circleMove);
            

            //  scrollC 부분을 클릭으로 바꾸면 좋겠다 //
            scrollEC.style.transform = 'translateY(' + circleMove + 'px)';
            scrollEC.style.opacity = opacityVal;
            scrollET.style.opacity = opacityVal;
        }break;
    }
}


function calcAni(value)
{
    return( relativeScrollY / pixelDuration) * (value[1] - value[0]) + value[0];
}

init();



//처음으로 돌아가기
window.addEventListener('scroll', scrollFn); // 스크롤이벤트 

let nowScrollPos;
let animationHandler;

let topArrow = document.querySelector('.endingScroll'); //화살표
topArrow.addEventListener('click', goTop); //화살표이벤트 

function scrollFn()
{
    nowScrollPos = pageYOffset;
    if(nowScrollPos >= 300)
    {
        topArrow.classList.add('on');
    }
    else{
        topArrow.classList.remove('on');
    }
}

function goTop()
{
    animationHandler = requestAnimationFrame(goAnimation);
    
}

function goAnimation()
{
    nowScrollPos += (0-nowScrollPos) * 0.02;
    window.scroll(0, nowScrollPos);
    animationHandler = requestAnimationFrame(goAnimation);
    if(Math.abs(0-nowScrollPos)<1)
    {
        cancelAnimationFrame(animationHandler);
    }

}