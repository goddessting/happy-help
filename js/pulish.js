$(document).ready(function () {
    $("#find").show();
    $("#publish").hide();
    $.get('url',function (data) {
        for (var i = 0; i < data.length; i++) {
            document.getElementById("message").innerHTML += `<span>${data[i].id}<br>${data[i].name}<br></span>`;
        }
    });
    // var data = [{id: "1", name: "litingting"}, {id: "2", name: "huanglizhen"}];

    $("#li1").click(function () {
        $("#find").show();
        $("#publish").hide();
    });
    $("#li2").click(function () {
        $("#find").hide();
        $("#publish").show();
    });
});






