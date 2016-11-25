 $(function(){
            $("#city").hover(function (e) {
                SelCity(this,e);
            });

             $(".outer").hover(function(){
                 $(this).css("background","white");
                 $(this).children(".inner").show();
                 $(this).children("a").css("color","#cc3333");
           },function(){
                $(this).css("background","#cc3333");
                $(this).children(".inner").hide();
                $(this).children("a").css("color","white");
           });
           var slider = new osSlider({
                pNode:'.slider',
                cNode:'.slider-main li',
                speed:3000,
                autoPlay:true
            });     

            $(".middle .info .contai ul li").mouseover(function(){
                $(this).css("background-color","white").css("color","red").css("border-top","2px solid red").css("border-bottom","0");
                $(".middle .info .contai ul li").not($(this)).css("background-color","white").css("color","#666666").css("border-top","0").css("border-bottom","1px solid #cccccc");
                var $i = $(".middle .info .contai ul li").index($(this));
                $(".cont").eq($i).show();
                $(".cont").each(function(i){
                    if(i !== $i){
                        $(this).hide();
                    }
                })
            });  
            $("#mine").hover(function(){
                $(".v").show();
                $(".v .v2 li a").hover(function(){
                    $(this).css("color","red");
                },function(){
                    $(this).css("color","black"); 
                });
            },function(){
                $(".v").hide();
            });  
            
            $(".top-title").hover(function(){
                $(".botinfo").css("top","-272px");
            }); 

            $(".moveTop").click(function(){
                $(".botinfo").css("top","-10px");
            }); 
            

                 var block = document.querySelector(".block"); 
          var left = 0; 
          block.style.left = block.offsetLeft + "px"; 
          var frames = 0;
          var moveframes = 0;

          var outid,innerid,outid2,innerid2;
          function interval(){
               cancelAnimationFrame(outid2);
               frames++;
               if(frames%180 == 0){
                   innerid = requestAnimationFrame(moveLeft);
                   frames = 0;
               }
               outid = requestAnimationFrame(interval);
          }
          function moveLeft(){ 
             left = parseInt(block.style.left);
             if(left<=-250*12){
                  left = 0;
                  block.style.left = left + "px";
             }
              moveframes++;
              block.style.left = (left - 100) + "px";
              if(moveframes%10 == 0){
                  moveframes = 0;
                  frames = 0
                  outid2 = requestAnimationFrame(interval);
                  return;  
              }  
              innerid = requestAnimationFrame(moveLeft); 
          }

          function moveRight(){
              left = parseInt(block.style.left);
              if(left >= 0){
                  left = -250 *4;
                  block.style.left = left + "px";
              }
              moveframes++;
              block.style.left = (left + 100) + "px";
              if(moveframes%10 == 0){
                  moveframes = 0;
                  frames = 0
                  outid2 = requestAnimationFrame(interval);
                  return;  
              }  
              innerid2 = requestAnimationFrame(moveRight); 
          }

        outid = requestAnimationFrame(interval);


         var next = document.querySelector(".next img");
         next.onclick = function(){
              cancelAnimationFrame(outid);
              requestAnimationFrame(moveLeft);

         }

         var prev = document.querySelector(".prev img");
         prev.onclick = function(){
              cancelAnimationFrame(outid);
              requestAnimationFrame(moveRight);
         }
        })