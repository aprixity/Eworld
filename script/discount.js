window.onload = function () {
  // 헤더 tab
  const htabBtn = document.querySelectorAll('.h-tab-btn > ul > li > a');

  htabBtn.forEach((hbtn) => {
    hbtn.addEventListener('click', function () {
      htabBtn.forEach((hbtn) => hbtn.classList.remove('h-active'));
      hbtn.classList.add('h-active');
    });
  });

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

  // d-tab
  const dtabBtn = document.querySelectorAll('.d-tab-btn > ul > li');
  const dtabCont = document.querySelectorAll('.d-tab-cont > div');

  dtabCont.forEach((el) => (el.style.display = 'none'));
  dtabCont[0].style.display = 'block';

  dtabBtn.forEach((dbtn, index) => {
    dbtn.addEventListener('click', function () {
      dtabBtn.forEach((dbtn) => dbtn.classList.remove('d-active'));
      dbtn.classList.add('d-active');

      dtabCont.forEach((cont) => (cont.style.display = 'none'));
      dtabCont[index].style.display = 'block';
    });
  });
};
