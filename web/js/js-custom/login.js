/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $("#login").click(function () {
        console.log("click");
        var username = $("#username").val();
        var password = $("#password").val();
        console.log(username+password);
        $.post("../login",{
                    username: username,
                    password: password
                },function (data, status) {
                    alert("Data: " + data.length + data  + "\nStatus: " + status);
                  var result = $.trim(data);
                    //belom bener if nya
              console.log(result)
                    if(result === "0"){
                         alert("welcome admin");
//                          window.location.href="index.html?code="+result;
                    }
                    else if(result ==="1"){
                         alert("welcome client");
//                          window.location.href="index.html?code="+result;
                    }
                    else{
                        
                    };
                });
    });

});