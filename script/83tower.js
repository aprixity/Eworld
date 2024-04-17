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

  // 롤링 배너 복제본 생성
  let roller = document.querySelector('.rolling-list');
  roller.id = 'roller1'; // 아이디 부여

  let clone = roller.cloneNode(true);
  // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
  clone.id = 'roller2';
  document.querySelector('.rolling-wrap').appendChild(clone); // wrap 하위 자식으로 부착

  document.querySelector('#roller1').style.left = '0px';
  document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';
  // offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

  roller.classList.add('original');
  clone.classList.add('clone');
};
