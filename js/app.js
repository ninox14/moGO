$(function () {

    let header = $("#header");
    let introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        };
    }




    // nav toggle

    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();
        $("#nav").toggleClass("active");
        $(this).toggleClass("active");
    });

    // data collapse
    $("[data-collapse]").on("click", function (e) {
        e.preventDefault();
        let $this = $(this);
        let blockId = $this.data('collapse');

        $this.toggleClass("active");
    });
});