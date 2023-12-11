$(function() {
    $('input').iCheck({
        checkboxClass : 'icheckbox_square-blue',
        radioClass : 'iradio_square-blue',
        increaseArea : '20%' // optional
    });
});


function checkCapsLock(e) {
    if (e.getModifierState("CapsLock")) {
        /* $('#password').tooltip({'trigger':'focus', 'title': 'Password tooltip'}); */
    }else{
        /* $('#tooltip-1').tooltip("close"); */
    }
}