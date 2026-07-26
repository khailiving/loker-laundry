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
      "https://lh3.googleusercontent.com/sitesv/AG8ngQUecOg4wv3CV9fqTVEerFk_DY6N8eOiSN-lWG8fwrQD8VsOW8ORSGJB49jhFhNn-vzpxEDizRO9tZEp_E_1l3BJJbz6nXXhywDvzY2LyLlz3zlYJ1oXZA6TtbGgjlXIkx3sQja6a2pgej99LPKUzCF5ZATRPYZI4BzclFnwZ85qqmr_QGbw0aVQ-HnM=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQXwJjH7pIRUZZwHzHI6By09ib9YxR0fRG36XjP6-wNaCGS-ZA8Mj6BxHXNJf5cqlRCaVQ1s0GPE8_YAv0vaeFqRB2-nDhTjxE0S8Kcp8WjuD0Fr1ei8-BK1IcPqTyxr415l7ppm53Oe8gMttXEXidT4sGDrOW0anow-74ns-J9WeKeIL1uCLbkzOzg5Gug=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQXJayx-KJt42Nyqd9odOB2SMarfBC-Ej-vOiw4eItWCDD_Xj8A2kB_q-WRUTqdtlnIZrXbK6W4jVsps9wHFN2GCqwUztNrqcf0I-YLlMaX6u-kzgzYoh4zsP_sorne6wNb-WN5WDrHtebgx8f-prMmhVUrn2_PhWoRBmWY6u5nvsPECN7uUR11f4J8U=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQVCg30cr0rm7eQwwX60wqf03hr0Bnrzqd4vqFrwoeCtCHhopestP6NaR544E-RgtmAb0fqMmFQ__9sZI_HhlZe4AXYvjtZvB1NOEHjTi_US8WZ-OhmfVY4IxoxFp05K2zrysPCdUM92I9qkE0VF2zvhcvML5-yYzZ4QMpR5Eb7XaEl59K8S_XzeecxIqbc=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQXqBdz9ki_iO8jGeGHg9uPH2VWyzLTF1mcd7UKI-lPN_AfvF2UWadgdOwF6hHWetxaaXipT36ITLWdJLOy7cUd75LAOTkcrfXWTzKkHn2lToIkJBg971hk7fmPAOTIofgiwEmVKluLcyBmENxftZ1_Lis6H90m9Mh-o1ErhhkK0ynzNh0uezaQ-iMiB=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQVtb3lW6ORLdsUwW49EJKEaGlO4n5HOn2HQrgdTW_STl_LPHNIh2IXAa6udMSk_I5hvkxbgbAjLWRK98OMSKhmmny_Ll0dY-unKdaLMFtbOQCV4iQZinhUw0ZkKsF2wcaww1vL3OZqMxfxUM_PrWzfw1Hu6tDFVwRRNG9CvnuD3xwSnK47nf0DZT-4rQn8=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQUfKbEkSc36bXBub1PZoXFXsVeOpJ0KMv7YrjTrcGftalX_QS8ActSbk56-4MafGODVY7xOGV3_J04sIPLMq_9N_iRWT7iR6eIm2zTBPVQ-vf7bK2k-EpaO79FWb-s-ji4kcw_aSBzuRyCl4Z9bOb7R0kZyzkcmb200UyqbgePsNy9shJoVU9BzFHOn=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQWXonVCcwWru_OFOFu2nTjp14ywQgMCNzflt8y-4Bai7gB9UIxuNBbJg6jVJP2vFd9wqG3tglGDu7L_M-Qvs_wbTPjYBiJbgLfCZvw7IEUKV4FkKILDUhRDELyVkXz8pyt13oh5_uvT5kWkedGQcNzATViy-RDOG4CooT7qwxb9GL2wyhd9e_boul6g=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQWX75n8O3EiQnxrVsjS_fbjrR-SrHFYFQNsEElqp4FoPIAB5gPiyhAlmQBSCPfa81goekqNoWvTZ9Uu2Ur7Oe_zw7iZ97FRoc2zAA4ObwPyZpYUmwN0agTImMdZaNI92ieUVFy-jvxlNOS61j03yp1jTJewTKn5mZ61aAOI2irgOqGBLJGaRjhwO3muA6o=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQXDkpdayiSOKmydAKd_MA9SRa-5saBAz3ciY21uSXvk9a_UTUCeY4MrAkl5meFp0a59YJFH6tT7MZ_BUZszfJSLUyRyuGzQv7sE3ez5q7fVlRXmxrMBrjV6PUU_8Xnr9fZEt0jWOzu1FtZZbgt5IcN4RUvHUcPSItA4ik8ARatZ8mF2FGsrJJ3FIuGsz1o=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQWHhhISo6J4T8-fAiSC5nqYcUvRRr8_8mIeHWbeVXKM9wdigk19YoqdaMgirjt5uYWzHr5_pCiK9-17oaKZjiQUx9ctP-t1_IKAUpwusrdaGKhBcO29D7sCC7cPlnyO_umd1fNT8AKnBVlofUM6CeplRvVoejK6wZCa-aAbVZDoLo12AkapOI6fWLOb2dU=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQVBAoaqid-AkXAE41-i-3JbnmIeYBhQSHKQe9ff0Zxiz0ssD-rMHp4feueMick-PMOrz15mvtzUMG5JdF8k-K49ayYvK-HmZblL8_1e4gpTvbSQGwAwb9bUioVx6JOlVQR3tNzH3Ztw5p3f64TS0sUbuzXxcslujcgcYvf4axivF0lxq42tkGif_coR=w16383"
    ],
    crewdible: [
      "https://lh3.googleusercontent.com/sitesv/AG8ngQXJ-fyKWsnLGPDBhxmIU5RyBsb6DqImMRLP2l21aYtyDQHIiGMcPUgP3B7q5lkaEmT3rWXwsTOj3qR6nPanfcU-2QqOElhzmKZCZNo6eUWWbO8FVvTlAxDb9gYuYUGBCzANuz3dYa1KIMZyBfcBlkbvC1e57JS2nqfK3r8bgyVTHBq_8nhlEJaA4S3j=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQVUZU16fsqOFo4mj5K__5mu2YSjdNvgdO_um2y35p6GCLm0XekPMmj3sbnbinn3bTKepCPKc5AxTCsbZBHo-FPmRzQDMPJoS0bwkNyZnfaQXeXAPP1SKwmnMb7eOMO4trDkb_z_njyFQiC2Q2OaUmnGniycQo_x3OvHg3h1z5SxRCIK8uM4tIaedaBO=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQWNnKOeVRUioefCgc0Q3Lopd1BvQoIGuDoOjMKKhSmDYqq36Vln29hzh1lRSTOdOgUM76BZUfM0sMT2ye9TJM1eDJj32xMdpxPoS9Ejca2CTGMHlPOh8NMabKPQ306zYxPrO5WMve-Fz-W4a-DuXcsfCgjHSCNsJlB_2c5LNB7M2LS3NiuuIrsWFoapxf4=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQWbOV9jH7f2-7bGJfbf29UlVHduxvkQf1RpBOUtt1kDxBWkTTTDqIYjLK-FeMuNSU_oecra-sBvuNs7kZjpfW-qlILgUINUrcO9yjyzf2hwvSPC40mNouWaipnr5BmfwX4Ng7-KBU_xtsxTLa8fWB6KMqs3pNUPT08JcbJODXaaL03ENhna7OIe_FDbVos=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQWwMFkGJlNb2x2VyuJrqyuocCMP_kAwWoY4oxVMEds6Uo6Tuu9MQ4DhMvzkgXLHx8mwe5-eDwSofCu70AvKprKJE7BueVnysgc0ppfsxKV51n6JBdx7Ml3GAfGml4Uur_P7Y6DYF_4mspZw8HY5VdRCNQzcwLKRSeEcKFkcAHpmmnOFnv2k579sXZpYUDI=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQXKui3-XSQjVpwZfS86DH3YQny0jVhtKgU2cPvFcgsclLnvflxk7itCLAo2jU9eZPUip7tW0P5f5EzOlDOZ0ByY4ApLqvSyR64Qw8Cjv0xEU1mNoGKrfgBT8QgTKt9zpjg7JFkKx22st15wjltWk8LFkQ8vz3p4jk1BKQge8Zq1Ayo9S5DMfZfZvyAZ6aw=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQWjn8o7Im9vfq8SU-xdAth-2tQ6jD9Ui9z6DE12rc_U3MXkt6_H0ZVgEK_0p6Ep9uPZKf5Gaqrp9GHBb1VuS3xapCQO12V4pWo9ZFcVxGsXQTmR8rE7-UkoFaOA412Kfldt4Kp9CW-hN7Pa4m3ShFeNtptan36_vrmbFRc5y_lwRPopufneF7UVh-Mu6gA=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQXAeraHWpyrDaWgVe53cBUaXQf7AAMx5HEtxXUu1ZiH9o92J2IViid89WEMzGPOMmHs7fz8zRiVYYwwVAVfNd7v7axq77Xq3II8ssu_dfDlJtg-BPntcsh5SVTDvWzp3UIgUNfErp2EbYRehkgDdQcNNs_w6xkjskrTEXQw4ykPEhJLD_aQ7nfkWNSFaLE=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQV_50a84CFfULaGpImoFTVyzoic52gE9YpyUrICkRAfVFhhwmb1IghBHP8IfoQAs7t7InVU2oPt-c5T_z5Z-LkENOi_BWUutJ9oNcMTbc5XnxmNi-5b7AqoYT3CeQyFJWAthsj4gKNP5FXA8x8NvSEqDyaro0ZzoLtGcYvSK5IfkjzLnaikwFd3uhGx9a8=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQW1G1zVyowRRAqyMjOFzqBEYUVHoLN9DKKLt4U2Z57RASPjL9e0wI6XAFzWJS-NYV6yxt0mRDkBg5DfM4Pq_KD98BnTjHZhTj04OaSPThWsgd217upNMOcGx9BLzQQT7LDXkvY0t10hzshvtDiyPF-IrNkENfh8jnvXd_3Wzm_5ot-FhsrSv2I_FlIB=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQWw6T72mwzRJDpthguqbNIl1zBcY04FXsHWQrCrolzOcLPVb5Olw8RXvJ8pkIpv8-Cqhojdy64wTr5VR8W_KG4t-vv9udULe4pOKhY6NkqkbRJWS1jUFGdQaUt6Tt9Mpu26j3b-RFYf6aPm-uOqrNTqh_YI6STTIH9BoVUbVAIxicsw9wRlubsIpQbo=w16383"
    ],
    training: [
      "https://lh3.googleusercontent.com/sitesv/AG8ngQUv6QNJvTEaSkuzD81L3t95tK7qmb7mH1qG7M_9m4RcQqGeB5_q9nLFM5wICN9w3TQ_7QjaNFv9pCt0IZtRinWgnBdw4mx8gjWC2MN8UhVG1zJFUgCwFKqlFghVoApHT-wL3LUiAjbwzuLHSgHD8Nv8VNjlx_uIA52Ae-OQA_6wMm2uu5NBhR0pIIukzKg=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQW5kPJKJam5FyGUCMcbZXRhH9UzR54EWxEkxyB3CDCqdYL9DVcAJ0a8TILUhs6-XV_nU4xqh2r9143nYBuFYdpMEYweXTgdZi49R-RLJsawa52GyBj_pSXfhOkDJX4BbZXj1f2ItAyC28QrxpbVd1QtlWN7ZSB-Oo4bu7e4ZHHZekBB5fQyOzT3ajnn2gg=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQVRNTxQEPqWLyDmnbgQYLuBRHCmkjQwgXLquh3AbkgvTmF77NZTyBXGhQIkl_BIEvP6NUBaK_G_jwFGR8KoGd3b8vFf2cPyGPgJr75gpTjZfl81Pjbwb9c-tGXZF6IArzR-OHjZ4Q6dmBI0uHWlo7N1dyiRnpTdoiad1lNmqK-LEyf29B-bCoBXRGmF=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQW4f5NZjdt9CPns96osJpO2rIIVUukgUpQe6xuowzMVvkIfrOaU0VmwWggNSs9wT2VgQCfFsHIPblTirsTLLASctTslg-7157gcJMpcIpmE-EOX-HsbeKCRxVbUxG_TLJDEiVb9g34qd5g7zJoVLc71Mbk_uNwvQbcTXnO5ig6mF-qU8ksp_A3Z6qovqwQ=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQXHbGGEXVY56N9xLilbJI7yxdfDwoNfvjVoXEsVADm_7JUIN4LuiiIciEZP1s-MbNxunLeSDk4XuU3GmHaEKaiKIrsyV1Rn60jvMprWXj8evocy6upZo8kHgBMbtLmvuDEK9TGG9jPTS-EUDamY0qsHk3OiX2b5KphFakHG5Mwwh9QY6CUDgNYiCJVb=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQW4Efs-Q9ckOLLNDVI12Rv0hfaaF18LMKNRfBMVWmlSOQQsp4NV-DRuUjGYBfjBZ4oiWM3auzJR29ps3MJ3q8-vyglO0StAE27yfqS-VHSsDDCUF90D_dwk2BXJqqAxFgyUnOVBTsJnEr5x1Temstuo7HLO8Ea5vvV-1c4fQLag6h6LtLPBxvtMp0cWMa8=w16383"
    ],
    pekerja: [
      "https://lh3.googleusercontent.com/sitesv/AG8ngQXcDhMcB4a5-gEZm9DycpaJMrQrAb1y6-CcYpxwy-Ds5SEKjsLoX_ckp6lxRC7xQYux1k_C8OBJXpQdkXZ3M4w8GxDht1E9p3mgwS3bB66HEpm9d5wkMbx6-4PoahbS_OOU0LE1GZENGwbCPP_4_7bkAZouLnyjtGrvl4ARzn_IosFdT2OQVXAfyofLqNI=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQWyiekngOZgE3uxwUJCQjWNwWCrdtC2_eky9r7hymBwMcg3zn5h5o5VIYYh0uWZyZSRB1uIuCwqZd3WZqtfZ7CLS81sAGXMRdFaRF6ZMAW9ZpmYFs1lM0ieGugaGoXGLaVViCNS0AzlSBQj7F_9cKSvkuWbQyP2H7oLO5WVviM2vFIoQQ07HMGy0hWd=w16383",
      "https://lh3.googleusercontent.com/sitesv/AG8ngQXrAw19GJsz21jL-mFK7WxQfb7tOFOX6bY-EvUYSR6fYn0rMgemVAXXCA9pJOvK-D7Adz1PdZVu-x-_Vr8HsoD7TVdYw0CbEdRX76mINxuawNZYu5fg67jlpI1LLdMslc9ZqX70FcoLhILbQgg00GzNhabpsjOZGH20PfmGURtEqm19UPA5t6MuK4iU9fE=w16383"
    ]
  };
  
  const partnerLogos = [
    "https://lh3.googleusercontent.com/sitesv/AG8ngQUJaI49OlqZ8zWYm7vMqcVeDqMKgphHoe-WTYWyEoHXLg-4Lk74I56FUJnVT-Nmz78lMWwaXiDIgImvX8kE-0pXgiApT2NUyiAVOsBJ3_YjgSPMiIa-wQwvYr6FFfJktz4jFTj8o2lGYlIIRlsUWA9bBPLqydQgiXq7phRX5UszLcsjIaVjC3v54UUv39Q=w16383",
    "https://lh3.googleusercontent.com/sitesv/AG8ngQWfTIEF31nqLtWstyooDJPGPDp_fEhQ-uP5b-BgEZeiTsgijCAsaoOUkxXjJ-ob0JK9k75ecNYPMKUSTLWgYdOjs8XhTeVD6cr-9VLmUoBVEP8lvp1GzpeIQpOgjotzTO2_KBaZv0Pp3YU-SHg2ayXtlffu3-vNAOB2jnzArRh2bQnEnXREIPYRIPkKHKQ=w16383",
    "https://lh3.googleusercontent.com/sitesv/AG8ngQX2QI34m4n8i30kd2RUwp9T3GsznXTIOacfw3Y7n-htuPQu-nzyUTf9mIPsl8Sp8Gg-HYyH5uDDZOrlX-tseHSeidPbLeDrvSRrdk4x5Zu2lqhAW_FF59GU1WyRXniVI9JbgAvxwMFnNBN7M1Eq9J7MxwWQr6Yc45b-I_bGVmFc27-7IlO2NAl3vXh884M=w16383",
    "https://lh3.googleusercontent.com/sitesv/AG8ngQVEdxA9Lp6qloJ7JRcBVhMoAp8MxtT3cZ0bYqKtkRCxN-rz4k5DJxJTtPzVY72S4yIAKmphYgty-KFQZ5O0t3OniTIoVMlmy61SuXIaDkInQqE_XRToMGSMlbMdMsGAhNpae43C03oBVBTvz1BkhuBAj1LVw1FRLwWA3lankODf_yDjy0aMQ1-X2uZ7g1I=w16383"
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
