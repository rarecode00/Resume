// Navigations => SCROLL DOWN
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



  var list_of_bars = document.querySelectorAll('.skill-progress>div');
  function set_width_to_zero()
  {
      for (let bar of list_of_bars) {
          bar.style.width = "0";
      }
  }
  function in_view(bar)
  {
      let element_distance = bar.getBoundingClientRect().top;
      if (element_distance < window.innerHeight) {
          return true;
      }
      return false;
  }
  function fill_bar(bar, percentage)
  {
      let count = 0;
      let id = setInterval(function ()
      {
          bar.style.width = count.toString() + "%";
          if (count++ == percentage) {
              clearInterval(id);
          }
      }, 10)
  }
  function is_filled(bar)
  {
      if (parseInt(bar.style.width) != 0) {
          return true;
      }
      return false;
  }
  function checker_in_view()
  {
      for (let bar of list_of_bars) {
          if (in_view(bar) && !is_filled(bar)) {
              fill_bar(bar, bar.getAttribute("data-skill-percent"));
          }
      }
  }
  function again_on_top()
  {
      let skills = document.getElementById('skills')
      let skills_distance = skills.getBoundingClientRect().top;
      if (skills_distance > window.innerHeight) {
          set_width_to_zero();
      }
  }
  function listener()
  {
      checker_in_view();
      again_on_top()
  }
  
  set_width_to_zero();
  window.addEventListener('scroll', listener);
//Submit-button

const button = document.getElementById('form-button');

button.addEventListener('click' , function(){
    //if(Name.textContent.length > 0){
        if(Name.value) alert(`Hi ${Name.value} Hope You Like it !! If you have any type of query feel free to mail or whatsapp me i can reply you ASAP , my contact information is given in page :)`);
    //}
})