$(document).ready(function () {
    $("#find").show();
    $("#publish").hide();
    requestServlet();
    // $.get('url',function (data) {
    //     for (var i = 0; i < data.length; i++) {
    //         document.getElementById("message").innerHTML += `<span>${data[i].id}<br>${data[i].name}<br></span>`;
    //     }
    // });
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



function requestServlet() {
    $.ajax({
        url:'loginCheckServlet',
        type:"get",
        async: false,
        success:function (res) {
            if(res['msg'] == 'successful'){
                alert('successful');
            }else {
                alert('fail');
            }
        },
        error:function (data,e) {
            alert(data.responseText);
        }
    })
}


