$(document).ready(function(){

  $("#design-image").click(function(){
    $("#design-image").hide();
    $(".design").show();
    $(".design").click(function(){
      $(".design").hide();
      $("#design-image").show();
    })
  
  }
  )
  
  $("#dev-image").click(function(){
    $("#dev-image").hide();
    $(".development").show();
    $(".development").click(function(){
      $(".development").hide();
      $("#dev-image").show();
    })
  }
  )
  

  $("#product-image").click(function(){
    $("#product-image").hide();
    $(".product").show();
    $(".product").click(function(){
      $(".product").hide();
      $("#product-image").show();
    })
  }
  )

$("#tuesday").hover(function () {
  $("#blm-txt").show();
},
function(){
  $("#blm-txt").hide();
});

$("#security").hover(function () {
  $("#security-txt").show();
},
function(){
    $("#security-txt").hide();
})

$("#Prism").hover(function () {
  $("#prism-txt").show();
},
function(){
    $("#prism-txt").hide();
})


$("#hollywood").hover(function () {
  $("#hollywood-txt").show();
},
function(){
    $("#hollywood-txt").hide();
})

$("#music").hover(function () {
  $("#music-txt").show();
},
function(){
    $("#music-txt").hide();
})

$("#motivation").hover(function () {
  $("#daily-txt").show();
},
function(){
    $("#daily-txt").hide();
})

$("#art").hover(function () {
  $("#art-txt").show();
},
function(){
    $("#art-txt").hide();
})

$("#restuarant").hover(function () {
  $("#restaurant-txt").show();
},
function(){
    $("#restaurant-txt").hide();
})

  $("#form").submit(function (e) {
    e.preventDefault();
   var user=$("input#name").val();
   var email=$("input#email").val();
   var text =$("#message").val

   if(!user||!email){
     alert("please enter name and email!");
   }
   else
     {
     alert(user+", we have received your message. Thank you for reaching out to us.");
   }
   
  
  });

});

