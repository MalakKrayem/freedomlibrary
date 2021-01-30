(function(){

var bodyEl = $('body'),
navToggleBtn = bodyEl.find('.nav-toggle-btn');

navToggleBtn.on('click',function(e){

bodyEl.toggleClass('active-nav');
e.preventDefault();

});

})();


var myButton = document.getElementById('my-button'),
    myinput = document.getElementById('my-input');

myButton.onclick = function () {
    'use strict'

    if (this.textContent === 'Show Password') {
        myinput.setAttribute('type', 'text');

        this.textContent = 'Hide Password';
    }else{
        myinput.setAttribute('type', 'password');
        this.textContent = 'Show Password';
    }

};

var myButton = document.getElementById('goup');

window.onscroll = function(){
    'use strict'

    if(window.pageYOffset >= 400){
        myButton.style.display = 'block';


    }else{

        myButton.style.display = 'none';
    }

};


myButton.onclick = function(){
    'use strict'

    window.scrollTo(0,0);

};


// document.addEventListener('contextmenu', function(e){

//         'use strict'
//         e.preventDefault();
//     console.log('anas maliha');
//      });




     var myElement = document.getElementById('myimg'),

    myimgs = ['/img/jawal1.jpg'
        , '/img/jawal2.jpg'
        , ];
      

       function cahangeImage(myElement,myimgs){
        'use strict'
       
        setInterval(function(){
          var  myRandomNumber = Math.floor(Math.random() * myimgs.length);
            myElement.src = myimgs[myRandomNumber];

        },3000)
       }
cahangeImage(myElement,myimgs);



var myElement = document.getElementById('myimge2'),

myimgs = ['/img/jawal1.jpg'
    , '/img/jawal2.jpg'
    , ];
  

   function cahangeImage(myElement,myimgs){
    'use strict'
   
    setInterval(function(){
      var  myRandomNumber = Math.floor(Math.random() * myimgs.length);
        myElement.src = myimgs[myRandomNumber];

    },3000)
   }
cahangeImage(myElement,myimgs);
