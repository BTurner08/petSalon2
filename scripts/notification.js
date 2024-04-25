function showNotification(msg,style){
    $("#notification").show();
    $("#notificationText").text(msg);
    $("#notification").addClass(style);
    setTimeout( hideNotification, 3000);
}
function hideNotification(){
    $("#notification").hide();
}
