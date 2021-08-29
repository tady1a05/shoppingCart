$(function () {
    $(".selectAll").click(function () {
        if ($(this).prop("checked") == true) {
            $(".selectAll").prop("checked", true);
            $(".selectProduct").prop("checked", true).parent().parent().addClass("selected");
        } else {
            $(".selectAll").prop("checked", false);
            $(".selectProduct").prop("checked", false).parent().parent().removeClass("selected");
        }
    })

    $(".selectProduct").click(function () {
        var bothTrue = true;

        $(this).parent().parent().toggleClass("selected");

        $(".selectProduct").each(function () {
            if ($(this).prop("checked") == false) {
                bothTrue = false;
            }
        });

        $(".selectAll").prop("checked", bothTrue);

    });

    $(".deleteProduct").click(function () {
        $(this).parent().parent().remove();
    });

    $(".deleteAll").click(function () {
        $(".selectProduct").parent().parent().remove();
    });

    $(".deleteSelected").click(function () {
        $(".selected").remove();
    });
});
