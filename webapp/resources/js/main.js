const menu_container = document.getElementById('menu-container');
const map_container = document.getElementById('map-container');
var map;
setContainerSize();
loadMap();
$(window).on('resize', () => {
  setContainerSize();
}); //menu button click event

var isMenuOpen = false;
$('#menu-button').on('click', event => {
  if (isMenuOpen) {
    event.target.classList.remove('open');
    isMenuOpen = false;
    menu_container.style.left = '-' + innerWidth + 'px';
  } else {
    event.target.classList.add('open');
    isMenuOpen = true;
    menu_container.style.left = '0px';
  }
});

$('.travle_title').on('click', event => {
  $(event.target).closest('.travle_box').find('.travle_locations').slideToggle();
});

function setContainerSize() {
  menu_container.style.width = innerWidth + 'px';
  menu_container.style.height = innerHeight + 'px';
  menu_container.style.left = '-' + innerWidth + 'px';
  map_container.style.width = '100%';
  map_container.style.height = '100%';

  try {
    map.relayout();
  } catch (e) {}
}

function loadMap() {
  var options = {
    center: new kakao.maps.LatLng(37.54699, 127.09598),
    level: 12
  };
  map = new kakao.maps.Map(map_container, options);
}