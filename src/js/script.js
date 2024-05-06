var countDownDate = new Date("August 9, 2024 00:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Popup
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.nav-item a');
    const overlay = document.getElementById('overlay');
    const closeButtons = document.querySelectorAll('.close-btn');
    const body = document.querySelector('body');

    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const target = this.getAttribute('data-target');
            const popup = document.getElementById(target);
            if (popup) {
                if (popup.classList.contains('show')) {
                    popup.classList.remove('show');
                    overlay.classList.remove('show');
                    body.classList.remove('no-scroll');
                } else {
                    closeAllPopups();
                    popup.classList.add('show');
                    overlay.classList.add('show');
                    body.classList.add('no-scroll');
                }
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const popup = this.closest('.popup');
            if (popup) {
                popup.classList.remove('show');
                overlay.classList.remove('show');
                body.classList.remove('no-scroll');
            }
        });
    });

    overlay.addEventListener('click', function () {
        closeAllPopups();
    });

    function closeAllPopups() {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.classList.remove('show');
        });
        overlay.classList.remove('show');
        body.classList.remove('no-scroll');
    }

    // Start button
    var calligraphyName = document.querySelector(".calligraphy-name");
    var startBtn = document.querySelector(".start-btn");
    var audio = document.getElementById('audio');
    var isPlaying = false;

    startBtn.addEventListener("click", function () {
        this.classList.add("hidden");
        calligraphyName.classList.remove("splash-centered");
        body.classList.remove('no-scroll');
        AOS.init({
            disable: false
        });

        // Initiate audio playback in response to user interaction
        playAudio();
    });

    function playAudio() {
        if (audio.paused) {
            audio.play();
            isPlaying = true;
        } else {
            audio.pause();
            audio.currentTime = 0;
            isPlaying = false;
        }
    }

    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === 'hidden' && isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
    });

    // Footer nav hide/show
    const mainSection = document.getElementById('main');
    const footerNav = document.querySelector('.footer-nav');

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerNav.classList.remove('show');
            } else {
                footerNav.classList.add('show');
            }
        });
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(mainSection);
});

// function initParticles() {
//     particlesJS("particles-js", {
//         particles: {
//             number: {
//                 value: 52,
//                 density: {
//                     enable: true,
//                     value_area: 631.3280775270874
//                 }
//             },
//             color: {
//                 value: "#000"
//             },
//             shape: {
//                 type: "image",
//                 stroke: {
//                     width: 0,
//                     color: "#000000"
//                 },
//                 polygon: {
//                     nb_sides: 5
//                 },
//                 image: {
//                     src: "https://png.pngtree.com/png-clipart/20230428/ourmid/pngtree-free-vector-big-green-leaf-of-tropical-monstera-plant-isolated-on-png-image_6743001.png",
//                     width: 100,
//                     height: 100
//                 }
//             },
//             opacity: {
//                 value: 0.5,
//                 random: true,
//                 anim: {
//                     enable: false,
//                     speed: 1,
//                     opacity_min: 0.1,
//                     sync: false
//                 }
//             },
//             size: {
//                 value: 5,
//                 random: true,
//                 anim: {
//                     enable: false,
//                     speed: 40,
//                     size_min: 0.1,
//                     sync: false
//                 }
//             },
//             line_linked: {
//                 enable: false,
//                 distance: 500,
//                 color: "#ffffff",
//                 opacity: 0.4,
//                 width: 2
//             },
//             move: {
//                 enable: true,
//                 speed: 1.5,
//                 direction: "bottom",
//                 random: false,
//                 straight: false,
//                 out_mode: "out",
//                 bounce: false,
//                 attract: {
//                     enable: false,
//                     rotateX: 600,
//                     rotateY: 1200
//                 }
//             },
//             rotate: {
//                 random: true,
//                 speed: 0.5
//             }
//         },
//         interactivity: {
//             detect_on: "canvas",
//             events: {
//                 onhover: {
//                     enable: false,
//                     mode: "bubble"
//                 },
//                 onclick: {
//                     enable: true,
//                     mode: "repulse"
//                 },
//                 resize: true
//             },
//             modes: {
//                 grab: {
//                     distance: 400,
//                     line_linked: {
//                         opacity: 0.5
//                     }
//                 },
//                 bubble: {
//                     distance: 400,
//                     size: 4,
//                     duration: 0.3,
//                     opacity: 1,
//                     speed: 3
//                 },
//                 repulse: {
//                     distance: 200,
//                     duration: 0.4
//                 },
//                 push: {
//                     particles_nb: 4
//                 },
//                 remove: {
//                     particles_nb: 2
//                 }
//             }
//         },
//         retina_detect: true
//     });
// }

$("#tsparticles")
    .particles()
    .init({
        detectRetina: true,
        fpsLimit: 60,
        fullScreen: {
            enable: true
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onClick: {
                    enable: true,
                    mode: "push"
                },
                onHover: {
                    enable: true,
                    mode: "bubble"
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 1,
                    size: 40,
                    speed: 3
                },
                push: {
                    quantity: 4
                }
            }
        },
        particles: {
            rotate: {
                value: 0,
                random: false,
                direction: "clockwise",
                animation: {
                    enable: false,
                    speed: 5,
                    sync: false
                }
            },
            move: {
                enable: true,
                outMode: "out",
                speed: 2
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 80
            },
            opacity: {
                value: 0.8
            },
            shape: {
                type: "image",
                options: {
                    image: [{
                            src: "./assets/images/leave-1.png",
                            width: 32,
                            height: 32,
                            particles: {
                                move: {
                                    direction: "bottom"
                                }
                            }
                        },
                        {
                            src: "./assets/images/leave-2.png",
                            width: 32,
                            height: 32,
                            particles: {
                                move: {
                                    direction: "bottom"
                                }
                            }
                        },
                        {
                            src: "./assets/images/leave-3.png",
                            width: 32,
                            height: 32,
                            particles: {
                                move: {
                                    direction: "bottom"
                                }
                            }
                        },
                        {
                            src: "./assets/images/leave-4.png",
                            width: 32,
                            height: 32,
                            particles: {
                                move: {
                                    direction: "bottom"
                                }
                            }
                        }
                    ]
                }
            },
            size: {
                value: 16
            }
        }
    });