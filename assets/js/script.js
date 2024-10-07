document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('copy', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.ctrlKey && e.keyCode === 85)) {
    e.preventDefault();
  }
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = new Typed("#typed", {
  strings: [
    "Web Developer",
    "UI/UX Designer",
    "Web Designer",
    "Mobile Designer",
    "Front-end Developer",
    "Data Analyzer",
  ],
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
});

document.addEventListener('DOMContentLoaded', function () {
  var mainSlider = new Splide('#main-slider', {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false, // Nonaktifkan panah navigasi
    cover      : true,
  }).mount();

  var thumbnailSlider = new Splide('#thumbnail-slider', {
    fixedWidth  : 170,
    fixedHeight : 90,
    isNavigation: true,
    gap         : 10,
    focus       : 'center',
    pagination  : false,
    arrows      : false, // Nonaktifkan panah navigasi
    cover       : true,
    breakpoints : {
      600: {
        fixedWidth : 130,
        fixedHeight: 70,
      },
    },
  }).mount();

  mainSlider.sync(thumbnailSlider);

  // Array untuk menyimpan detail info
  var projectDetails = [
    `<div>
      <p class="header-project"><a href="https://similu.raihanprojects.my.id/" target="_blank">E-Voting Website</a></p>
      <p class="desc-project">Description</p>
      <p class="detail-project">This website has function to facilitate the public in the selection and calculation of votes.</p>
      <svg class="mr-1.5 mt-[2px] inline-flex sm:w-5 sm:h-5 sm:mt-[1px]" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" stroke="#34D39A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z" stroke="#34D39A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M11 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V13" stroke="#34D39A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M4 7V19" stroke="#34D39A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
        <span>&nbsp; This project develop with</span>
        <a href="https://www.instagram.com/wandesay.id/" target="_blank">Alvin</a><span>,</span>
        <a href="https://www.instagram.com/yusups_24/" target="_blank">Yusup</a><span>,</span>
        <a href="https://www.instagram.com/raihanrmdhn_09/" target="_blank">Raihan</a> <span>&</span> 
        <a href="https://www.instagram.com/fdlyfat/" target="_blank">Fadly</a>
    </div>`,
    `<div>
      <p class="header-project"><a href="http://siskamling.website/" target="_blank">Siskamling Website</a></p>
      <p class="desc-project">Description</p>
      <p class="detail-project">This website is used to facilitate the public for viewing the security schedule and manage a village.</p>
      <svg class="mr-1.5 mt-[2px] inline-flex sm:w-5 sm:h-5 sm:mt-[1px]" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" stroke="#34D39A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z" stroke="#34D39A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M11 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V13" stroke="#34D39A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M4 7V19" stroke="#34D39A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
        <span>&nbsp; This project develop with</span>
        <a href="https://www.instagram.com/wandesay.id/" target="_blank">Alvin</a><span>,</span>
        <a href="https://www.instagram.com/yusups_24/" target="_blank">Yusup</a><span>,</span>
        <a href="https://www.instagram.com/raihanrmdhn_09/" target="_blank">Raihan</a> <span>&</span> 
        <a href="https://www.instagram.com/fdlyfat/" target="_blank">Fadly</a>
    </div>`,
    `<div>
      <p class="header-project"><a href="https://nabilmuthi77.github.io/magicosmetic.github.io/" target="_blank">Magicosmetic Website</a></p>
      <p class="desc-project">Description</p>
      <p class="detail-project">This website is created for a cosmetic company profile for showing to public and get many clients of it.</p>
    </div>`,
    `<div>
      <p class="header-project"><a href="https://www.figma.com/design/ckdsluiXwPxVO1S3X5XGZI/Untitled?node-id=0-1&t=5ysQf99XSZ4JS8Sw-1" target="_blank">Dark News Web Desaign</a></p>
      <p class="desc-project">Description</p>
      <p class="detail-project">The desaign is used to read some populars news and articles which has contain a dark news and article (crime and others).</p>
    </div>`,
    `<div>
      <p class="header-project"><a href="https://www.figma.com/design/Lio4CWJoJYLnehTfUCdoj4/Untitled?t=5ysQf99XSZ4JS8Sw-1" target="_blank">Music App Desaign</a></p>
      <p class="desc-project">Description</p>
      <p class="detail-project">A beautiful music app desaign for mobile device. It is modified by me from someone posted in figma community.</p>
    </div>`
  ];

  // Fungsi untuk mengubah detail info
  function updateProjectInfo(index) {
    var infoElement = document.getElementById('project-info');
    infoElement.innerHTML = projectDetails[index];
  }

  // Event listener untuk mengubah detail info saat slide berubah
  mainSlider.on('move', function (newIndex) {
    updateProjectInfo(newIndex);
  });

  // Inisialisasi detail info pertama kali
  updateProjectInfo(mainSlider.index);
});