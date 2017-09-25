function Gosling(ratio, imageurl){
  this.ratio = ratio;
  this.imageurl = imageurl;
}

 var getGosling = {
  init: function(myGosling){
    this.myGosling = myGosling;
  },

  horizontal: function(){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "horizontal";
    });
  },

  vertical: function(){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "vertical";
    });
  }, 

  square: function (){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "square";
    });  
  }
 };

 function Randomize(images){
    return Math.floor(Math.random() * images.length)
 }

var myGosling = [ 
new Gosling("horizontal", "http://heygirl.io/img/gosling-horiz-1.png"), 
new Gosling("horizontal", "http://heygirl.io/img/gosling-horiz-2.gif"), 
new Gosling("horizontal", "http://heygirl.io/img/gosling-horiz-3.jpg"),
new Gosling("horizontal", "http://heygirl.io/img/gosling-horiz-4.gif"), 
new Gosling("vertical", "http://heygirl.io/img/gosling-vert-1.jpg"), 
new Gosling("vertical", "http://heygirl.io/img/gosling-vert-3.jpg"), 
new Gosling("vertical", "http://heygirl.io/img/gosling-vert-4.jpg"),
new Gosling("vertical", "http://heygirl.io/img/gosling-vert-5.gif"),
new Gosling("vertical", "http://heygirl.io/img/gosling-vert-6.jpg"),
new Gosling("vertical", "http://heygirl.io/img/gosling-vert-7.jpg"),
new Gosling("vertical", "http://heygirl.io/img/gosling-vert-8.jpg"),
new Gosling("vertical", "http://heygirl.io/img/gosling-vert-9.jpg"),
new Gosling("square", "http://heygirl.io/img/gosling-square-1.jpg"),
new Gosling("square", "http://heygirl.io/img/gosling-square-2.jpg"),
new Gosling("square", "http://heygirl.io/img/gosling-square-3.jpg")
]

function imageRatio(image) {
  var proportion = image.height/image.width;

  if(proportion > 1) {
    return "vertical";
  } else if(proportion === 1) {
    return "square";
  } else if(proportion < 1) {
    return "horizontal";
  }
}     
           
(function (document) {
  
  getGosling.init(myGosling);
  var images = document.getElementsByTagName('img'), length = images.length
 
  for (var i = 0; i < length; i++) {
    var ratio = imageRatio(images[i]);
    var number = Randomize(getGosling[ratio]());
    var img = getGosling[ratio]()[number];
    images[i].src = img.imageurl
  }

})(document);

  // computed style of the source element
  computed_style = window.getComputedStyle(elements[i+2]);
  
  // copy styles from source to destination element one by one
  all_styles.forEach(function(style_name){
    style_value = computed_style[style_name];
    if( style_value !== undefined && style_value !== "" ){

      // try to prevent hidden elements
      if( style_name == "display"  && style_value == "none"   ){ style_value = "block";   }
      if( style_name == "overflow" && style_value == "hidden" ){ style_value = "visible"; }
      if( style_name == "opacity" ){ style_value = "1"; }
  
      // give everything cool animated transitions
      elements[i].style.transition = "all 100s ease";
      
      // set the copied style
      elements[i].style[style_name] = style_value;
    }
  });  

  i++;

},50);

    })();

}

})();