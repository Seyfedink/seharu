var owl = $('.slide-one');
owl.owlCarousel({
    items: 4,
    loop: false,
    mouseDrag: false,
    margin: 30,
});

$('.btnPrev2').click(function() {
    owl.trigger('prev.owl.carousel');
})
$('.btnNext2').click(function() {
    owl.trigger('next.owl.carousel');
})

var owl2 = $('.slide-two');
owl2.owlCarousel({
    items: 4,
    loop: false,
    mouseDrag: false,
    margin: 30,
});

$('.btnPrev').click(function() {
    owl2.trigger('prev.owl.carousel');
})
$('.btnNext').click(function() {
    owl2.trigger('next.owl.carousel');
})

var owl3 = $('.slide-three');
owl3.owlCarousel({
    items: 4,
    loop: false,
    mouseDrag: false,
    margin: 30,
});

$('.btnPrev3').click(function() {
    owl3.trigger('prev.owl.carousel');
})
$('.btnNext3').click(function() {
    owl3.trigger('next.owl.carousel');
})
