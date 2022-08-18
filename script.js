// Navigations => SCROLL DOWN

var current = 0 , target = 0;

const onClick = function() {
    // console.log(this.id, this.innerHTML);
    if(this.id == 'home-nav'){
        target = 0;
    }else if(this.id == 'about-nav'){
        target = 50;
    }else if(this.id == 'skill-nav'){
        target = 660;
    }else if(this.id == 'education-nav'){
        target = 1000;
    }else if(this.id == 'portfolio-nav'){
        target = 1700;
    }else if(this.id == 'contact-nav'){
        target = 2800;
    }


    var scrollInterval = 
    setInterval(function(){
        if(current >= target){
          clearInterval(scrollInterval);
          current = 0;
          return;
        }
  
        current += 50;
        window.scrollBy(0 , 50);
    } , 27);
  }
  document.getElementById('home-nav').onclick = onClick;
  document.getElementById('about-nav').onclick = onClick;
  document.getElementById('skill-nav').onclick = onClick;
  document.getElementById('education-nav').onclick = onClick;
  document.getElementById('portfolio-nav').onclick = onClick;
  document.getElementById('contact-nav').onclick = onClick;

  // SKILLS-SECTION ANIMATION

document.getE