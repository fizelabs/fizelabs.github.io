particlesJS('root',

{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
}

);

var gn = new GyroNorm();
var xNull, yNull;

xNull = 0;
yNull = 0;

gn.init().then(function(){
  gn.start(function(data){
    let xRotate, yRotate, badge;

    if (xNull == 0){
      xNull = data.dm.gx;
    }

    if (yNull == 0){
      yNull = data.dm.gy;
    }
    
    xRotate = xNull - data.dm.gx;
    xRotate = xRotate > 4.3 ? 4.3 : xRotate ;
    xRotate = xRotate < -4.3 ? -4.3 : xRotate ;
    
    yRotate = yNull - data.dm.gy ;
    yRotate = yRotate > 4.3 ? 4.3 : yRotate;
    yRotate = yRotate < -4.3 ? -4.3: yRotate ;

    badge = document.getElementById('badge');
    badge.style.transform = '';
    badge.style.transform += ` rotateY(${xRotate * -8}deg)`;
    badge.style.transform += ` rotateX(${yRotate * -8}deg)`;


  })
})