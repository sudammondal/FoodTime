$(document).ready(function() {
// slider js// 
    $('.your-class').slick({
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        centerPadding: '0',
        centerMode: false,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1500,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    });
});