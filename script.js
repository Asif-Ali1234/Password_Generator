
 $(document).ready(function () {
    document.oncontextmenu = document.body.oncontextmenu = function () { return false; }
});
bool=true
function  generate_password(symbol_check_id,numbers_check_id,input_id){
    var chars=""
    if(document.getElementById(symbol_check_id).checked){
        chars+="!@#$%^&*()_+?><{}[]"
    }
    if(document.getElementById(numbers_check_id).checked){
        chars+="0123456789"
    }
    chars+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    var passwordlength=12;
    var password="";

    for(var i=0;i<passwordlength;i++)
    {
        var rn=Math.floor(Math.random() * chars.length);
        password+=chars.substring(rn,rn+1)
    }
    document.getElementById(input_id).value=password
}
