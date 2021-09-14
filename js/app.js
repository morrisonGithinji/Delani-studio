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
  

  $("#form").submit(function (e) {
    e.preventDefault();
   var user=$("input#name").val();
   alert(user+" we have received your message. Thank you for reaching out to us.");
  });
}
)