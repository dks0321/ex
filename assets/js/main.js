const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

$(document).mousemove(function(e){
    gsap.to('.custom-cursor',{
        x:e.clientX,
        y:e.clientY
    })
})

 //header
 gsap.to('.header  .video-box',{
    scrollTrigger:{
        trigger:".header",
        start:"0 10%",
        end:"100% 100%",
        //markers:true,
        scrub:1,
    },
    width:"100%",
    yPercent:30,
    borderRadius: "400px",
})
//header txt
const subTxt = new SplitType('.header .subtitle-area', { types: 'words, chars', });
setTimeout(() => {
    $('.subtitle-area').addClass('on')
    gsap.from('.header .subtitle-area .char',{
        opacity:0,
        yPercent:40,
        stagger:0.03,
    })
}, 500);


//sc-banner
gsap.to('.marquee .wrap',10,{
    xPercent:-50,
    ease:'none',
    repeat:-1,
})
swiperOn =gsap.timeline({
    scrollTrigger:{
        trigger:".sc-banner",
        start:"0% 10%",
        end:"100% 9%",
        scrub:0,
        //markers:true,
    },
})
swiperOn.to('.sc-banner .wrap',{xPercent: -100,})


gsap.to('.marquee2.rt .wrap',10,{
    xPercent:-50,
    ease:'none',
    repeat:-1,
})
gsap.to('.marquee2.lt .wrap',10,{
    xPercent:50,
    ease:'none',
    repeat:-1,
})
gsap.to('.marquee1.rt .wrap',10,{
    xPercent:-50,
    ease:'none',
    repeat:-1,
})
gsap.to('.marquee1.lt .wrap',10,{
    xPercent:50,
    ease:'none',
    repeat:-1,
})

//sc-build
gsap.to('.sc-build .bg',{
    scrollTrigger:{
        trigger:".sc-build",
        start:"0 50%",
        end:"100% 100%",
        //markers:true,
        scrub:1,
    },
    xPercent:-15
})

//
// const prtTxt = new SplitType('.sc-project .fx2 .txt-box', { types: 'words, chars', });
// gsap.to('.sc-project .fx2 .txt-box .char',{
//             scrollTrigger:{
//                 trigger:".sc-project .fx2",
//                 start:"0 60%",
//                 end:"100% 0%",
//                 //markers:true,
//             } ,
//             opacity:1,
//             yPercent:-40,
//             stagger:0.03,
//         })


// ScrollTrigger.create({
//     trigger:".sc-project .fx2",
//     start:"0 60%",
//     end:"100% 0%",
//     markers:true,
//     toggleClass:{targets:".fx2 .txt-box",className:"on"}
// })

// gsap.to('.sc-project .fx2 .txt-box .chars',{
//     scrollTrigger:{
//         trigger:".sc-identites",
//         start:"0 80%",
//         end:"100% 0%",
//         markers:true,
//     },
//     opacity:1,
//     yPercent:0,
//     ease:'none'
// })
// const prtTxt = new SplitType('.sc-project .fx2 .txt-box', { types: 'words, chars', });
// setTimeout(() => {
//     $('.sc-project .fx2 .txt-box').addClass('on')
//     gsap.from('.sc-project .fx2 .txt-box .char',{
//         opacity:0,
//         yPercent:40,
//         stagger:0.03,
//     })
// }, 500);

//sc-identites
gsap.to('.sc-identites .video-area',{
    scrollTrigger:{
        trigger:".sc-identites",
        start:"0 100%",
        end:"100% 0%",
        // markers:true,
        scrub:1,
    },
    yPercent:-15,
    ease:'none'
})

//sc-direct
gsap.to('.sc-direct  .video-area',{
    scrollTrigger:{
        trigger:".sc-direct .headline",
        start:"50% 0%",
        end:"100% 50%",
        //markers:true,
        scrub:1,
    },
    width:"40%",
})

//sc-skill
$('.skill-wrap').hover(function(){
    $(this).addClass('back')
}, function(){
    $(this).siblings().stop().removeClass('back')
})




