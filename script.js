
// var imageWidth = 400;
// var imageCount = document.getElementById("carousel-image-wrapper").childElementCount;
// var carouselImageWrapperWidth = imageCount * imageWidth;
// var carouselImageWrapper = document.getElementById("carousel-image-wrapper");
// carouselImageWrapper.style.width = carouselImageWrapperWidth + "px";
// carouselImageWrapper.style.height = 200 + "px";
// var imageindex = 0;
// for (var i = 0; i <= imageCount - 1; i++) {
//   var span = document.createElement("span");
//   span.classList.add("dot");
//   span.setAttribute("onclick", "dotClick(" + i + ")");
//   document.getElementById("dot-wrapper").appendChild(span);
// }
// var span = document.getElementById("dot-wrapper").children;
// renderDot();

//baki---
// function plusSlides(n, c) {

//   if (n === -1) {
//     imageindex++;
//     changePos();
//   }
//   if (n === 1) {
//     imageindex--;
//     changePos();
//   }
  
// }

// function changePos() {
//   var index = Math.abs(imageindex) % imageCount;
//   carouselImageWrapper.style.left = -(index * imageWidth) + "px";
//   renderDot();
// }
// function repeat() {
//   plusSlides(1, 0);
// }

// function activeDot() {
//   var dotindex = Math.abs(imageindex) % imageCount;
//   return dotindex;
// }
// function renderDot() {
//   for (var i = 0; i <= imageCount - 1; i++) {
//     if (i === activeDot()) {
//       span[i].style["background-color"] = "red";
//     } else {
//       span[i].style["background-color"] = "black";
//     }
//   }
// }

// function dotClick(index) {
//   imageindex = index;
//   changePos();
// }

// var timer= setInterval(repeat,3000);

function carousel(parentcontainer, carouselImageWrapperId){
  this.imageWidth=400;
  this.imageIndex=0;
  this.carouselImageWrapperWidth;
  this.imageCount;
  this.carouselImageWrapperId=carouselImageWrapperId;
  this.span=null;
  this.parentContainer=parentcontainer;




    this.init = function() {
    var prev = document.createElement('a');
    var next=document.createElement('a');
    prev.classList.add('prev');
    next.classList.add('next');
   prev.onclick=this.PrevSlides.bind(this);
   next.onclick=this.NextSlides.bind(this);
    prev.innerHTML="&#10094;";
    next.innerHTML="&#10095;";
    this.parentContainer.appendChild(prev);
    this.parentContainer.appendChild(next);
    

    this.imageCount=this.getImageCount();
    this.carouselImageWrapperWidth=this.getcarouselImageWrapperWidth();
    this.setcarouseImageWrapperWidth();
    this.generatedot();
    this.getspanArray();
    this.renderDot();
  }

  this.getIndex=function()
  {
    var index = Math.abs(this.imageIndex) % this.imageCount;
    console.log(index);
    return index;
  }
  this.setcarouseImageWrapperWidth=function()
  {
    this.carouselImageWrapperId.style.width = this.carouselImageWrapperWidth + "px";
    console.log(this.carouselImageWrapperWidth);
  }
  this.getcarouselImageWrapperWidth=function()
  {
   var TotalWidth= this.imageCount*this.imageWidth;
    return TotalWidth;
  }

  this.getspanArray=function()
  {
    this.span=document.getElementById("dot-wrapper").children;
  }

  this.getImageCount= function(){
    var imageNo= document.getElementById("carousel-image-wrapper").childElementCount;
    return imageNo;
  }
  this.generatedot= function()
  {
      for (var i = 0; i <= this.imageCount - 1; i++)
    {
      var Span = document.createElement("span");
      Span.classList.add("dot");
      Span.setAttribute("onclick", "dotClick(" + i + ")");
      document.getElementById("dot-wrapper").appendChild(Span);
   }
  }
  this.renderDot=function()
  {
  for (var i = 0; i <= this.imageCount - 1; i++) {
    if (i === this.getIndex()) {
      this.span[i].style["background-color"] = "red";
    } else {
      this.span[i].style["background-color"] = "black";
    }
  }
  }
  this.changePos=function()
  {
    
  var index = this.getIndex();
  this.carouselImageWrapperId.style.left = -(index * this.imageWidth) + "px";
   this.renderDot();

  }
  this.NextSlides= function(){
    
         this.imageIndex++;
          this.changePos();    
  }
  this.PrevSlides=function()
  {
    this.imageIndex--;
    this.changePos();
  }
}
var wrapperNode = document.getElementById("carousel-image-wrapper");
var outerContainer = document.getElementById("carousel-container");
new carousel(outerContainer, wrapperNode).init();