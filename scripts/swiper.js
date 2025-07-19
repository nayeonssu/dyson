const manSwiper = new Swiper('#ad_swiper', {
    loop:true,
    autoplay:{delay:3000},
    direction:'horizontal',
    navigation:{
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next',
    },
    scrollbar:{el:'#ad_swiper ~ .swiper-scrollbar'},/* 스크롤바 */
})