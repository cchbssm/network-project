const clock = document.querySelector("#clock");
const hours = document.querySelector("#hours");
const out = document.querySelector("#out");
const switchOut = document.querySelector("#switchOut");

function Out()
{
    var Time = String($('#time').val());
    var d = $('#day').val();
    $('#out').text(d + ' ' + Time);
    setAlarm(Time, d);
}

function alarmSwitching()
{
    var Switch = $('input[name="switch"]:checked').val();
    $.ajax({
        
    })
}

function setAlarm(Time, d)
{
$.ajax({
    url: '/setAlarm',
    type: 'GET',
    data: {time: Time, day: d},
    success: function(){
        alert("성공");
    },
    error: function(){
        alert("실패"); 
    }
})
}