/* ad 스와이퍼 */
const adSwiper = new Swiper('#ad_swiper', {
    scrollbar:{el:'#ad_swiper .swiper-scrollbar'},/* 스크롤바 */
    loop:true,
    autoplay:{delay:3000},
    direction:'horizontal',
    navigation:{
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next',
    },
})
/* 기술 스와이퍼 */
const skillSwiper = new Swiper('#skill_swiper', {
    loop:true,
    autoplay:{delay:4000},
    direction:'horizontal',
})