$(function () {
    //Select all products function
    $(".selectAll").click(function () {
        if ($(this).prop("checked") == true) {
            $(".selectAll").prop("checked", true);
            $(".selectProduct").prop("checked", true).parent().parent().addClass("selected");
        } else {
            $(".selectAll").prop("checked", false);
            $(".selectProduct").prop("checked", false).parent().parent().removeClass("selected");
        }
    })

    //Select single product function
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

    //delete single product function
    $(".deleteProduct").click(function () {
        var bothTrue = true;

        $(this).parent().parent().remove();

        $(".selectProduct").each(function () {
            if ($(this).prop("checked") == false) {
                bothTrue = false;
            }
        });

        $(".selectAll").prop("checked", bothTrue);
    });

    //delete all products function
    $(".deleteAll").click(function () {
        $(".selectProduct").parent().parent().remove();
    });

    $(".deleteSelected").click(function () {
        $(".selected").remove();
    });

    $("input[type=number]").on("keyup", function (event) {
        var singlePrice = parseFloat($(this).parent().parent().siblings(".singlePrice").text().substring(1));
        var count = parseFloat($(this).val());
        if (isNaN(count)) {
            count = 0;
        }

        $(this).val(count);
        $(this).parent().parent().siblings(".smallTotal").text("￥" + Math.round(singlePrice * count * 10) / 10);
    });

    //add the number of product that you want to buy by input field
    $("input[type=number]").change(function () {
        var singlePrice = parseFloat($(this).parent().parent().siblings(".singlePrice").text().substring(1));
        var count = parseFloat($(this).val());
        if (isNaN(count)) {
            count = 0;
        }

        $(this).val(count);
        $(this).parent().parent().siblings(".smallTotal").text("￥" + Math.round(singlePrice * count * 10) / 10);
    })

    //add the number of product by add button
    $(".numCounterSub").click(function () {
        var singlePrice = parseFloat($(this).parent().parent().siblings(".singlePrice").text().substring(1));
        var count = parseFloat($(this).siblings("input[type=number]").val());
        count--;
        if (isNaN(count) || count<0) {
            count = 0;
        }

        $(this).siblings("input[type=number]").val(count);
        $(this).parent().parent().siblings(".smallTotal").text("￥" + Math.round(singlePrice * count * 10) / 10);
    })

    $(".numCounterAdd").click(function () {
        var singlePrice = parseFloat($(this).parent().parent().siblings(".singlePrice").text().substring(1));
        var count = parseFloat($(this).siblings("input[type=number]").val());
        count++;
        if (isNaN(count)) {
            count = 0;
        }
        $(this).siblings("input[type=number]").val(count);
        $(this).parent().parent().siblings(".smallTotal").text("￥" + Math.round(singlePrice * count * 10) / 10);
    })
});
