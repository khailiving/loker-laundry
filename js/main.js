// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  feather.replace();
  
  AOS.init({
    once: true,
    offset: 30,
    duration: 800,
    easing: 'ease-out-cubic',
  });
  
  const sliderData = {
    karyawan: [
      "assets/section2-1.jpg",
      "assets/section2-2.jpg",
      "assets/section2-3.jpg",
      "assets/section2-4.jpg",
      "assets/section2-5.jpg",
      "assets/section2-6.jpg",
      "assets/section2-7.jpg",
      "assets/section2-8.jpg",
      "assets/section2-9.jpg",
      "assets/section2-10.jpg",
      "assets/section2-11.jpg",
      "assets/section2-12.jpg",
      "assets/section2-13.jpg"
    ],
    crewdible: [
      "assets/section2-14.jpg",
      "assets/section2-15.jpg",
      "assets/section2-16.jpg",
      "assets/section2-17.jpg",
      "assets/section2-18.jpg",
      "assets/section2-19.jpg",
      "assets/section2-20.jpg",
      "assets/section2-21.jpg",
      "assets/section2-22.jpg",
      "assets/section2-23.jpg",
      "assets/section2-24.jpg"
    ],
    training: [
      "assets/section9-1.jpg",
      "assets/section9-2.jpg",
      "assets/section9-3.jpg",
      "assets/section9-4.jpg",
      "assets/section9-5.jpg",
      "assets/section9-6.jpg"
    ],
    pekerja: [
      "assets/section11-1.jpg",
      "assets/section11-2.jpg",
      "assets/section11-3.jpg"
    ]
  };
  
  const partnerLogos = [
      "/partner-1.png",
      "/partner-2.png",
      "/partner-3.png",
      "/partner-4.png"
  ];
  
  function initSlider(containerId, images, intervalDelay = 3000) {
    const container = document.getElementById(containerId);
    if (!container || !images.length) return;
    
    const track = document.createElement('div');
    track.className = 'flex w-full h-full transition-transform duration-700 ease-in-out';
    
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = "Slider Image";
      img.className = 'w-full h-full object-cover flex-shrink-0';
      track.appendChild(img);
    });
    
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10';
    
    const dots = [];
    images.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `h-2 rounded-full transition-all duration-300 shadow-sm ${index === 0 ? 'bg-brand-600 w-5' : 'bg-white/70 w-2 hover:bg-white'}`;
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
      dots.push(dot);
    });
    
    container.appendChild(track);
    container.appendChild(dotsContainer);
    
    let currentIndex = 0;
    let slideInterval;
    
    function goToSlide(index) {
      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.className = 'h-2 rounded-full transition-all duration-300 shadow-sm bg-brand-600 w-5';
        } else {
          dot.className = 'h-2 rounded-full transition-all duration-300 shadow-sm bg-white/70 w-2 hover:bg-white';
        }
      });
    }
    
    function startSlide() {
      slideInterval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        goToSlide(nextIndex);
      }, intervalDelay);
    }
    
    container.addEventListener('mouseenter', () => clearInterval(slideInterval));
    container.addEventListener('mouseleave', startSlide);
    
    startSlide();
  }
  
  initSlider('slider-karyawan', sliderData.karyawan, 3000);
  initSlider('slider-crewdible', sliderData.crewdible, 3500);
  initSlider('slider-training', sliderData.training, 4000);
  initSlider('slider-pekerja', sliderData.pekerja, 3000);
  
  function initMarquee() {
    const track1 = document.getElementById('marquee-track-1');
    const track2 = document.getElementById('marquee-track-2');
    if (!track1 || !track2) return;
    
    partnerLogos.forEach(src => {
      const imgHTML = `<img src="${src}" alt="Partner" class="h-20 md:h-22 object-contain hover:grayscale-0 transition-all duration-300">`;
      track1.innerHTML += imgHTML;
      track2.innerHTML += imgHTML;
    });
  }
  
  initMarquee();
});
