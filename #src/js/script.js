function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuClick)
  });

  function onMenuClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      })
      e.preventDefault();
    }
  }
}

document.querySelector('.burger-btn').addEventListener('click', function() {
  document.querySelector('.burger-btn').classList.toggle('burger-btn_open');
  document.querySelector('.nav').classList.toggle('nav_open');
})

const teamItems = document.querySelectorAll('.item-team');
const onTeamItemsClick = (e) => {
  console.log(e.target);
  e.target.closest('.item-team').classList.toggle('item-team_active');
}
teamItems.forEach(item => item.addEventListener('click', onTeamItemsClick));
