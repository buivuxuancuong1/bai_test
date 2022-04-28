 mybutton = document.getElementById("myBtn");

 window.onscroll = function scrollFunction() {
     if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
        }
    }


    var image = document.querySelectorAll(".image img")
    var left = document.querySelector(".btn-left")
    var right = document.querySelector(".btn-right")
    var closee = document.querySelector(".btn-close")
    var lopphuImg = document.querySelector(".img_phu img")
    var lopphu = document.querySelector(".lopphu")
    
    var vitri = 0;
    
    function showLopphu(){
        lopphuImg.src = image[vitri].src;
        lopphu.classList.add("them")
    
    }
    
    
    image.forEach((item, index)=>{
        item.addEventListener('click', function(){
            vitri = index;
           showLopphu();
        })
    })
    
    closee.addEventListener('click', function(){
      lopphu.classList.remove("them")
    })

    lopphu.addEventListener('click', function(){
        lopphu.classList.remove("them")
      })
    
    left.addEventListener('click', function(){
        if(vitri > 0){
            vitri--;
            showLopphu();
            console.log(vitri)
        }else{
            vitri = image.length-1;
            showLopphu();
            console.log(vitri)
        }
      })
    
      right.addEventListener('click', function(){
        if(vitri < image.length-1){
            vitri++;
            showLopphu();
            console.log(vitri)
        }else{
            vitri=0;
            showLopphu();
            console.log(vitri)
        }
      })
    
    
    
    
    