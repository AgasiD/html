

document.addEventListener('DOMContentLoaded', function() {
    var index = 1;
    setActive('navInicio', 'inicio');
    setInterval(a => {
        changeBanner(index);
        changeCompanyImg(index)
        index ++;
        if(index > 2){
            index = 1;
        }}, 10000);
 }, false);


function setActive(name){
    var menuItems = [document.getElementById('navInicio'), document.getElementById('navTienda'), document.getElementById('navContacto'), document.getElementById('navSobre')]
    console.log('Set active', menuItems)
    menuItems.forEach(item => {
        item.className = '';
    });
    document.getElementById(name).className = document.getElementById(name).className + ' active ';
}


    function changeCompanyImg(index){
        console.log(index)
        console.log('company-img')
        var sec = document.getElementById('company-img');
        var bg = sec.style;
        switch(index){
            case 1:
                sec.src= "images/servicios.gif";
                break;
            case 2:
                sec.src = "images/empresa.png";
                break;
        }
        
    
}


function changeBanner(index){
    console.log(index)
    console.log('changeBanners')
    var sec = document.getElementById('section1');
    var bg = sec.style;
    switch(index){
        case 1:
            sec.style = 'background-image: url(images/banner-BG.jpg)'
            break;
        case 2:
            sec.style = 'background-image: url(images/banner-BG2.jpg)'
            break;
    }
    
}


window.onscroll = function() {
    console.log("Vertical: " + window.scrollY);
    console.log("Horizontal: " + window.scrollX);
    var sectionSize = 800;

    if(window.scrollY < sectionSize - 100  ){
        this.setActive('navInicio');
    }else if(sectionSize - 100 < window.scrollY && window.scrollY < 2 * sectionSize - 100 ){
        this.setActive('navTienda');
    }else if( window.scrollY > 2 * sectionSize - 100 && window.scrollY < 3 * sectionSize - 100 ){
        this.setActive('navContacto');
    
    }else if( window.scrollY > 3 * sectionSize - 100 ){
        this.setActive('navSobre');
}

  if(window.scrollY >= 500){
      setAnimation(1);
  }
  if(window.scrollY >= 2000){
    setAnimation(2);
}
  };



  function setAnimation(section) {
      switch(section){
          case 1:
              var img1 = document.getElementById('img1'),
              img2 = document.getElementById('img3'),
              img3 = document.getElementById('img2'),
              p1  = document.getElementById('parrafo1'),
              p2 = document.getElementById('parrafo2'),
              p3 = document.getElementById('parrafo3');
              img1.style = 'transition: all 1s';
              img2.style = 'transition: all 1s';
              img3.style = 'transition: all 1s';
              img1.className = '';
              img2.className = '';
              img3.className = '';
              p1.style = 'transition: all 1s';
              p2.style = 'transition: all 1s';
              p3.style = 'transition: all 1s';
              p1.className = '';
              p2.className = '';
              p3.className = '';
              break;
        case 2:
            var li1 = document.getElementById('lii1'),
            li2 = document.getElementById('lii2'),
            li3 = document.getElementById('li12'),
            li4 = document.getElementById('lii4'),
            li5 = document.getElementById('lii5'),
            li6 = document.getElementById('lii6');
            li1.style = 'transform: translate(0%)';
            setTimeout(() => {
                li2.style = 'transform: translate(5%)';
            }, 500);
            setTimeout(() => {
                li4.style = 'transform: translate(10%)';
            }, 1000);
            setTimeout(() => {;
                li5.style = 'transform: translate(15%)';
            }, 1500);
            setTimeout(() => {;
                li6.style = 'transform: translate(20%)';
            }, 2000);
            break;
      }
  }