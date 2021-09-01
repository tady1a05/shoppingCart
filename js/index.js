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

        setTotalCount();
        setTotalPrice();
    });

    //delete all products function
    $(".deleteAll").click(function () {
        $(".selectProduct").parent().parent().remove();

        setTotalCount();
        setTotalPrice();
    });

    $(".deleteSelected").click(function () {
        $(".selected").remove();

        setTotalCount();
        setTotalPrice();
    });

    $("input[type=number]").on("keyup", function (event) {
        var singlePrice = getSinglePrice($(this));
        var count = parseFloat($(this).val());
        if (isNaN(count)) {
            count = 0;
        }

        $(this).val(count);

        setSmallTotal($(this), smallTotalFormula(singlePrice, count))
        setTotalCount();
        setTotalPrice();
    });

    //add the number of product that you want to buy by input field
    $("input[type=number]").change(function () {
        var singlePrice = getSinglePrice($(this));
        var count = parseFloat($(this).val());
        if (isNaN(count)) {
            count = 0;
        }

        $(this).val(count);

        setSmallTotal($(this), smallTotalFormula(singlePrice, count))
        setTotalCount();
        setTotalPrice();
    })

    //add the number of product by add button
    $(".numCounterSub").click(function () {
        var singlePrice = getSinglePrice($(this));
        var count = parseFloat($(this).siblings("input[type=number]").val());
        count--;
        if (isNaN(count) || count < 0) {
            count = 0;
        }

        $(this).siblings("input[type=number]").val(count);

        setSmallTotal($(this), smallTotalFormula(singlePrice, count))
        setTotalCount();
        setTotalPrice();
    })

    $(".numCounterAdd").click(function () {
        var singlePrice = getSinglePrice($(this));
        var count = parseFloat($(this).siblings("input[type=number]").val());

        count++;
        if (isNaN(count)) {
            count = 0;
        }
        $(this).siblings("input[type=number]").val(count);

        setSmallTotal($(this), smallTotalFormula(singlePrice, count))
        setTotalCount();
        setTotalPrice();
    })
});

function setTotalCount() {
    var totalCount = 0;
    $("input[type=number]").each(function (index, ele) {
        totalCount += parseInt($(ele).val());
    })

    $(".quantity").text(totalCount);
}

function setTotalPrice() {
    var totalPrice = 0;

    $(".smallTotal").each(function (index, ele) {
        totalPrice += parseFloat($(ele).text().substring(1));
    })

    $(".Total").text("￥" + totalPrice.toFixed(2));
}

function getSinglePrice(ele) {
    return parseFloat(ele.parent().parent().siblings(".singlePrice").text().substring(1));
}

function smallTotalFormula(singlePrice, count) {
    return (Math.round(singlePrice * count * 10) / 10).toFixed(2);
}

function setSmallTotal(ele, smallTotal) {
    ele.parent().parent().siblings(".smallTotal").text("￥" + smallTotal);
}