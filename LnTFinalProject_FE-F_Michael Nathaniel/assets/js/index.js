$(document).ready(function(){
    $(".alert").hide();
});
$(".dropdown-item").click(function(){
    $(".dropdown-toggle").text($(this).text());
});
$(".submit").click(function(e){
    let valid = false;
    if ($("#username").val().length < 3){
        $("#name_minimum").show();
        valid = false;
    } else if ($("#username").val().length < 3 == false){
        $("#name_minimum").hide();
        valid = true;
    }

    if ($("#phonenumber").val().charAt(0) != '0' || $("#phonenumber").val().charAt(1) != '8' || $("#phonenumber").val().length > 14){
        $("#phone_minimum").show();
        valid = false;
    } else if ($("#phonenumber").val().charAt(0) == '0' || $("#phonenumber").val().charAt(1) == '8' || $("#phonenumber").val().length <= 14){
        $("#phone_minimum").hide();
        valid = true;
    }

    if ($("#email").val().indexOf("@") == -1){
        $("#email_minimum").show();
        valid = false;
    } else if ($("#email").val().indexOf("@") != -1){
        $("#email_minimum").hide();
        valid = true;
    }

    if ($(".dropdown-toggle").text() == "Event"){
        $("#drop_minimum").show();
        valid = false;
    } else if ($(".dropdown-toggle").text() != "Event"){
        $("#drop_minimum").hide();
        valid = true;
    }
    if (valid){
        var param = {"nama": $("#username").val(), "nomor": $("#phonenumber").val(), "email": $("#email").val(), "event": $(".dropdown-toggle").text()};
        $.ajax({
            accept: "application/json",
            contentType: "application/json; charset=utf-8",
            url: "https://myownproject-a2e8b-default-rtdb.asia-southeast1.firebasedatabase.app/.json",
            type: "POST",
            data: JSON.stringify(param),
            success: function () {
                alert("success");
              }
        });
    };
    e.preventDefault();
})