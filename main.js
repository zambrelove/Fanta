var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start: "0% 95%",
    end: "70% 70%",
    scrub:  true,
    // markers: true, 
}})

tl.to("#fanta",{
    top:"137%",
    left:"5%",
    width:"30%"
}, 'orange')
tl.to("#orange-cut",{
    top:"155%",
    left:"25%",
    width:"10%",
}, 'orange')
tl.to("#orange",{
    top:"171%",
    right:"17%",
    width:"15%",
}, 'orange')
tl.to("#leaf",{
    top:"120% ",
    left:"87%",
    rotate:"270deg",
}, 'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start: "0% 95%",
    end: "70% 70%",
    scrub:  true,
    markers: true, 
}})
tl2.from(".card-orange-1",{
    rotate:"-90deg",
    left:"-130%",
    top:"150%"
}, 'three')
tl2.from("#cocacola",{
    rotate:"-120deg",
    top:"100%"
}, 'three')
tl2.from(".card-orange-2",{
    rotate:"90deg",
    right:"-180%",
    top:"150%"
}, 'three')
tl2.from("#pepsi",{
    rotate:"120deg",
    top:"100%",
    right:"-120%"
}, 'three')

tl2.to("#orange-cut",{
    width:"15%",
    left:"43.2%",
    top:"200%"
}, 'three')
tl2.to("#fanta",{
    width:"35%",
    top:"215%",
    left:"33%"
}, 'three')
