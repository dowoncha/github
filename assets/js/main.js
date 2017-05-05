$(document).ready(function() {
    console.log('Hello!')

    // Navbar active
    $('.menu li a').click(function(e) {
        const $this = $(this);

        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }

        e.preventDefault();
    });

    $('#children-possibilities .panel-header button').click(function(e) {
        let $img = $(this).parent().siblings('.panel-body').children('img');

        if ($img.hasClass('hidden')) {
            $img.removeClass('hidden');
        } else {
            $img.addClass('hidden');
        }

        console.log(img)

    });

});
