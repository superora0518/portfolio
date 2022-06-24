(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 30
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    

    // Typed Initiate
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    function myFunctioin() {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");

        // Add the "show" class to DIV
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
    }
    $("document").ready(function (){
        $(".alert").css('display','none');
        $('#gmail_form').submit(function(e) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: 'message_send.php',
                data: $(this).serialize(),
                success: function(response)
                {
                    if(response.indexOf("mygmail_success") != -1){
                        $("#snackbar").html("Email message sent successfully.");
                    }else {
                        $("#snackbar").html("Error in sending email.");
                    }
                    myFunctioin();
                }
            });
        });
        $('#hire_form').submit(function(e) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: 'hire_message_send.php',
                data: $(this).serialize(),
                success: function(response)
                {
                    if(response.indexOf("mygmail_success") != -1){
                        $("#snackbar").html("Email message sent successfully.");
                    }else {
                        $("#snackbar").html("Error in sending email.");
                    }
                    myFunctioin();
                    $(".alert").css('display', 'none');
                }
            });
        });
    });
    $(".hire_me").click(function (){
        $(".alert").css('display', 'inherit');
    });
})(jQuery);

