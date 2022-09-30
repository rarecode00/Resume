// Navigations => SCROLL DOWN
alert("Please Open it in Laptop For better view :)");
var current = 0 , target = 0;

const onClick = function() {
    // console.log(this.id, this.innerHTML);
    if(this.id == 'home-nav'){
        target = 0;
    }else if(this.id == 'about-nav'){
        target = 120;
    }else if(this.id == 'skill-nav'){
        target = 920;
    }else if(this.id == 'education-nav'){
        target = 1580;
    }else if(this.id == 'portfolio-nav'){
        target = 2900;
    }else if(this.id == 'contact-nav'){
        target = 3400;
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


const Name = document.getElementById('contacter-name');

// SKILLS-SECTION ANIMATION

var list_of_bars = document.querySelectorAll('.skill-progress');
function set_width_to_zero()
{
   alert("one");
}

//Submit-button

const button = document.getElementById('form-button');

button.addEventListener('click' , function(){
    //if(Name.textContent.length > 0){
        if(Name.value) alert(`Hi ${Name.value} Hope You Like it !! If you have any type of query feel free to mail or whatsapp me i can reply you ASAP , my contact information is given in page :)`);
    //}
})