window.onload = function () {
  // 메뉴
  let navList = document.querySelector('.nav > ul');
  let subMenus = document.querySelectorAll('.nav > ul > li > ul');

  subMenus.forEach(function (submenu) {
    submenu.style.display = 'block';
    submenu.style.height = '0';
    submenu.style.overflow = 'hidden';
    submenu.style.transition = 'all 0.6s';

    navList.addEventListener('mouseover', function () {
      document.querySelectorAll('.submenu').forEach((sub) => {
        sub.style.height = '190px';
      });
      document.getElementById('header').classList.add('on');
    });
    navList.addEventListener('mouseout', function () {
      document.querySelectorAll('.submenu').forEach((sub) => {
        sub.style.height = '0px';
      });
      document.getElementById('header').classList.remove('on');
    });
  });

  // 슬라이드 좌우
  let currentImg = 0;
  const sliderWrap = document.querySelector('.sliderwrap');
  const slider = document.querySelectorAll('.slider');
  const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
  sliderWrap.appendChild(sliderClone);

  setInterval(() => {
    currentImg++;
    sliderWrap.style.marginLeft = -currentImg * 100 + '%';
    sliderWrap.style.transition = 'all 0.6s';

    if (currentImg == slider.length) {
      setTimeout(() => {
        sliderWrap.style.marginLeft = '0';
        sliderWrap.style.transition = '0s';
        currentImg = 0;
      }, 700);
    }
  }, 3000);
};
