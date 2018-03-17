// webpage scripts
// main function
$(document).ready(function() {
    // different page display mechanics (only for codecademy)
    $(".pageContentWrapper").css("display", "none");
    $(".pageCurrent").css("display", "block");
    
    // sets header navbar top to header bottom
    $("#navigationButtons").offset({top: $("header").offset().top + $("header").height() + 20});
    
    // change page function
    function changePage(element) {
        if ($(".pageContentWrapper." + $(element).attr("class")).css("display") === "none") {
            $(".pageContentWrapper").css("display", "none");
            $(".pageContentWrapper." + $(element).attr("class")).css("display", "block");
            $("#navigationButtons .active").removeClass("active");
            $(document).scrollTop(0);
        }
    };
    
    // navigation button click
    $("#navigationButtons li a").click(function() {
        if ($(".pageContentWrapper." + $(this).attr("class")).css("display") === "none") {
            changePage(this);
            $(this).addClass("active");
        }
    });
    
    // redirect button click
    $("#homeContentWrapper .button.redirectButton").click(function() {
        $(".pageContentWrapper").css("display", "none");
        $(".pageContentWrapper." + jQuery(this).attr('class').split(' ')[0]).css("display", "block");
        $("#navigationButtons li a").removeClass("active");
        $("#navigationButtons li a." + jQuery(this).attr('class').split(' ')[0]).addClass("active");
        $(document).scrollTop(0);
    });
    
    // redirect link click
    $("span.links a:not(.icon)").click(function() {
        if ($(".pageContentWrapper." + $(this).attr("class")).css("display") === "none") {
            changePage(this);
            $("#navigationButtons li a."  + $(this).attr("class")).addClass("active");
        }
    });
    
    // header navbar animation
    var animating = false;
    
    // open and close functions
    function closeHeaderNavbar() {
        animating = true;
        // close menu
        $("#navigationButtons").css("left", "-80%");
        // animating menu icon
        $(".menuIconDiv:nth-child(1)").css("-webkit-transform", "rotate(45deg)");
        $(".menuIconDiv:nth-child(1)").css("-ms-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(1)").css("-moz-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(1)").css("-o-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(1)").css("transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-webkit-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-ms-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-moz-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-o-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("transform", "rotate(0deg)");
        setTimeout(function() {
            $(".menuIconDiv:nth-child(1)").css("margin-top", "5px");
            $(".menuIconDiv:nth-child(2)").css("margin-top", "5px"); 
            $(".menuIconDiv:nth-child(3)").css("margin-top", "5px");
            $(".menuIconDiv:nth-child(2)").css("visibility", "visible");
            animating = false;
        }, 500);
    };
    
    function openHeaderNavbar() {
        animating = true;
        // open menu
        $("#navigationButtons").css("left", "0%");
        // animating menu icon
        $(".menuIconDiv:nth-child(2)").css("visibility", "hidden");
        $(".menuIconDiv:nth-child(1)").css("margin-top", "13px");
        $(".menuIconDiv:nth-child(2)").css("margin-top", "-3px");
        $(".menuIconDiv:nth-child(3)").css("margin-top", "-3px");
        setTimeout(function() {
            $(".menuIconDiv:nth-child(1)").css("-webkit-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("-ms-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("-moz-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("-o-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(3)").css("-webkit-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("-ms-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("-moz-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("-o-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("transform", "rotate(-45deg)");
            animating = false;
        }, 500);
    };
    
    $("header.primary nav .menuIcon").click(function() {
        // toggling header navbar class on click
        $("#navigationButtons").toggleClass("open");
        // toggling header navbar class on click
        $("header.primary nav .menuIcon").toggleClass("active");
        
        if (!$("header.primary nav .menuIcon").hasClass("active") && !$("#navigationButtons").hasClass("open") && !animating) {
            // close menu
            closeHeaderNavbar();
        } else if ($("header.primary nav .menuIcon").hasClass("active") && $("#navigationButtons").hasClass("open") && !animating) {
            // open menu
            openHeaderNavbar();
        }
    });
    
    // header navbar animation upon document click
    $("main.primary, footer.primary").click(function() {
        if ($("header.primary nav .menuIcon").hasClass("active") && $("#navigationButtons").hasClass("open") && !animating) {
            // toggling header navbar class on click
            $("#navigationButtons").toggleClass("open");
            // toggling header navbar class on click
            $("header.primary nav .menuIcon").toggleClass("active");
            closeHeaderNavbar();
        }
    });
    
    // page structure identifiers
    $("#mainPageContentWrapper #pageStructureLinks li a").mouseenter(function() {
        $($(this).attr("class")).css("background-color", "red");
    });
    
    $("#mainPageContentWrapper #pageStructureLinks li a").mouseleave(function() {
        $("*").css("background-color", "");
    });
});