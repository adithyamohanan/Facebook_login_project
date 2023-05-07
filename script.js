$(document).ready(function(){
    $("#sign-up").validate({
        rules:{
            emailAddress:{
                required:true,
                email:true
            },
            pass1:{
                required:true,
                minlength:4

            }

        },
        messages:{
            emailAddress:{
                required:"Please enter your email address or phone number"
            },
            pass1:{
                required:"Please enter your password"
            }

        }

    
        
    })
})