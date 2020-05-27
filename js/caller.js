$(document).ready(function() {
    // setTimeout(()=>{
    //     $("#callerPhone").fadeIn(100)
    // },5000)
    $(".numberPhoneInput").on('input',function(e){
        console.log("e",e)
    })
    $("#number1").on('click',function(){
        $(".numberPhoneInput").val(  $(".numberPhoneInput").val()+"1")
    })
    $("#number2").on('click',function(){
        $(".numberPhoneInput").val(  $(".numberPhoneInput").val()+"2")
    })
    $("#number3").on('click',function(){
        $(".numberPhoneInput").val(  $(".numberPhoneInput").val()+"3")
    })
    $("#number4").on('click',function(){
        $(".numberPhoneInput").val(  $(".numberPhoneInput").val()+"4")
    })
    $("#number5").on('click',function(){
        $(".numberPhoneInput").val(  $(".numberPhoneInput").val()+"5")
    })
    $("#number6").on('click',function(){
        $(".numberPhoneInput").val(  $(".numberPhoneInput").val()+"6")
    })
    $("#number7").on('click',function(){
        $(".numberPhoneInput").val(  $(".numberPhoneInput").val()+"7")
    })
    $("#number8").on('click',function(){
        $(".numberPhoneInput").val(  $(".numberPhoneInput").val()+"8")
    })
    $("#number9").on('click',function(){
        $(".numberPhoneInput").val(  $(".numberPhoneInput").val()+"9")
    })
    $("#number0").on('click',function(){
        $(".numberPhoneInput").val(  $(".numberPhoneInput").val()+"0")
    })
    $("#cancelAcceptCaller").on('click',function()
    {
        $("#acceptCallerPhone").fadeOut(200)
    })
    $(".aspectCall").on('click',function(e)
    {
        $("#callerPhone").hide()
        $("#acceptCallerPhone").show()
        var dem = 0
        var giay,phut
        setInterval(()=>{
            dem++
            if(dem<60)
            {
                giay=dem
                $("#timeCaller").text("00:"+dem)
            }
            else{
                giay = dem%60
                phut = Math.floor(dem/60).
                $("#timeCaller").text( phut+ ":"+giay)
            }

        },1000)
    }
    )
})