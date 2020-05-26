var movLeftCustomer = 1;
document.addEventListener('DOMContentLoaded', function() {
    var index = 1;
    setActive('navInicio', 'inicio');
    setInterval(a => {
        //changeBanner(index);
        //        changeCompanyImg(index)
        index++;
        if (index > 2) {
            index = 1;
        }
    }, 10000);
    setInterval(a => {
        movCustomers();
    }, 2000)
}, false);


function setActive(name) {
    var menuItems = [document.getElementById('navInicio'), document.getElementById('navTienda'), document.getElementById('navContacto'), document.getElementById('navSobre')]
    menuItems.forEach(item => {
        item.className = '';
    });
    document.getElementById(name).className = document.getElementById(name).className + ' active ';
}




function movCustomers() {
    var div = document.getElementById('customers');
    div.scrollLeft += div.offsetWidth * 0.2;
    if (div.scrollLeft >= div.offsetWidth) {
        div.scrollLeft = 0;
    }



}

function changeBanner(index) {
    console.log(index)
    console.log('changeBanners')
    var sec = document.getElementById('section1');
    var bg = sec.style;
    switch (index) {
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
  
    var sectionSize = 800;

    if (window.scrollY < sectionSize - 100) {
        this.setActive('navInicio');
    } else if (sectionSize - 100 < window.scrollY && window.scrollY < 2 * sectionSize - 100) {
        this.setActive('navTienda');
    } else if (window.scrollY > 2 * sectionSize - 100 && window.scrollY < 3 * sectionSize - 100) {
        this.setActive('navContacto');

    } else if (window.scrollY > 3 * sectionSize - 100) {
        this.setActive('navSobre');
    }

    if (window.scrollY >= 500) {
        setAnimation(1);
    }

    if (window.scrollY >= 1100) {
        setAnimation(2);
    }
    if (window.scrollY >= 1500) {
        setAnimation(3);
    }
    if (window.scrollY >= 2500) {
        setAnimation(4);
    }
    
    if (window.scrollY >= 3000) {
        setAnimation(5);
    }
};



function setAnimation(section) {
    switch (section) {
        case 1:
            var img1 = document.getElementById('img1'),
                img2 = document.getElementById('img3'),
                img3 = document.getElementById('img2'),
                p1 = document.getElementById('parrafo1'),
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
            var t1 = document.getElementById('text1');
            t1.className = '';
            break
        case 3:
            var t2 = document.getElementById('text2');
            t2.className = '';
            break;
         case 4:
        var ul1 = document.getElementById('ul-card-1'),
         ul2= document.getElementById('ul-card-2'),
         ul3= document.getElementById('ul-card-3'),
         ul4= document.getElementById('ul-card-4'),
         ul5= document.getElementById('ul-card-5');
        ul1.style = '';
        ul2.style = '';
        ul3.style = '';
        ul4.style = '';
        ul5.style = '';

        case 3:
            var t2 = document.getElementById('text2');
            t2.className = '';
            break;
        case 5:
            var step1 = document.getElementById('step1'),
                step2 = document.getElementById('step2'),
                step3 = document.getElementById('step3'),
                step4 = document.getElementById('step4'),
                hr = document.getElementById('hrStep');
            hr.className = ' widthhr ';
            step1.className = '';
            setTimeout(() => {
                step2.className = '';
            }, 500);
            setTimeout(() => {
                step3.className = '';
            }, 500 + 700 + 400);
            setTimeout(() => {
                step4.className = '';
            }, 500 + 700 + 400 + 500 + 400);
            break;
    }
}