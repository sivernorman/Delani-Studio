$(document).ready(function (){
    $(".design").on("click", function () {
        $("#design").show();
        $(this).hide();
    });
    $("#design").on("click",function(){
        $(this).hide();
        $(".design").show();
    })
    
 });

$(".dev").on("click",function(){
    $("#dev").show();
    $(this).hide();
});
$("#dev").on("click",function(){
    $(".dev").show();
    $(this).hide();
})
$(".product").on("click",function(){
    $("#product").show();
    $(this).hide();
})
$("#product").on("click",function(){
    $(".product").show();
    $(this).hide();
});

 $("#work1").hover(
    function () {
      $(".text1").show("");
    },
    function () {
      $(".text1").hide("");
    }
  );
  $("#work2").hover(function(){
      $(".text2").show("");
  },function(){
      $(".text2").hide("");
  }
  );
  $("#work3").hover(function(){
    $(".text3").show("");
},function(){
    $(".text3").hide("");
}
);
$("#work4").hover(function(){
    $(".text4").show("");
},function(){
    $(".text4").hide("");
}
);
$("#work5").hover(function(){
    $(".text5").show("");
},function(){
    $(".text5").hide("");
}
);
$("#work6").hover(function(){
    $(".text6").show("");
},function(){
    $(".text6").hide("");
}
);
 $("#work7").hover(function(){
     $(".text7").show();
 },function(){
     $(".text7").hide();
 }
 );
 $("#work8").hover(function(){
     $(".text8").show();
 },function(){
     $(".text8").hide();
 }
 );

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
 form.addEventListener("submit",getUserInfo);
 function getUserInfo(e){
     if( nameInput.value){
         alert(` we have received your message. , ${nameInput.value}  Thank you for reaching out to us.`)
      }else{
          alert("please fill the input field")
      }
       e.preventDefault();
    
  }
