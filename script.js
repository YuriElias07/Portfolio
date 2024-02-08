window.sr = ScrollReveal({ reset: true });

sr.reveal('#area1', {duration: 1300});

sr.reveal('#curse', {duration: 1300});

sr.reveal('#area2', {
    rotate: {x:100, y:0, z:0},
    duration: 1500,
});

// ROLAGEM

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 1200)
})