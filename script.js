const scriptURL = 'https://script.google.com/macros/s/AKfycbyAP4y8d3QE8fxo-oHLsD6AXuKO7n2SZ_Zp5joC9ZMmzZ830Sv4ol5U4iB2r2-QqxUx/exec'
      const form = document.forms['submit-to-google-sheet']
      const success = document.getElementById('success');
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            success.innerHTML="Message has Shared!!";
            alert("Message Has Been Shared!! Thank you for visiting")
            setTimeout(function()
            {
              success.innerHTML="";
            },5000)
            form.reset();
          })
          .catch(error => console.error('Error!', error.message))
      })

  
      
  var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
//  console.log(navMenuAnchorTags);
  for(i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();

        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        

        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            console.log(targetSectionCoordinates.top);
            if(targetSectionCoordinates.top<=0){
                
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
  }
//   Skiil bar 
// handle scrolling

// var targetElement = document.querySelectorAll('main section');
// console.log(targetElement);
// // var targetID = targetElement[6].id.toLowerCase();
// // console.log(targetID);
// for(var i=0;i<targetElement.length;i++){
//     window.addEventListener('scroll',(event) => {
      
//         var targetID = targetElement[i].id.toLowerCase();
//         // console.log(targetElement[2]);
//         if(targetID == 'skills'){
//             console.log('skill scrolled');
//         }
//         console.log('scrolling...');

//     })
// }