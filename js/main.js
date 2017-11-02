$(".modal-close").click(function() {
    $('.modal').toggle("modal-hide");
})

$(".img-gallery").click(function() {
    $("#legend").text("");

    $(".modal").children().children('img').attr('src', $(this).attr('src'));
    $("#legend").text($(this).data('caption'));

    $('.modal').toggle("modal-hide");
})
