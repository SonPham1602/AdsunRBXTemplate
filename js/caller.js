$(document).ready(function() {
    // setTimeout(()=>{
    //     $("#callerPhone").fadeIn(100)
    // },5000)
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