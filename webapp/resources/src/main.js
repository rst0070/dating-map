var menu_container = document.getElementById('menu-container');
var map_container = document.getElementById('map-container');
var map;
setSize();
loadMap();
//addFunc();
function setSize(){
	menu_container.style.width = innerWidth+'px';
	menu_container.style.height =  innerHeight+'px';
	menu_container.style.left = '-'+innerWidth+'px';
	map_container.style.width = '100%';
	map_container.style.height = '100%';
	try{
		map.relayout();
	}catch(e){}
}
function loadMap(){
	var options = {
		center: new kakao.maps.LatLng(37.54699,127.09598),
		level: 12
	}
	map = new kakao.maps.Map(map_container, options);
	addFunc();
}
function addFunc(){
	var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}
$(window).on('resize',()=>{
	setSize();
});
//menu button click event
var isMenuOpen = false;
$('#menu-button').on('click',(event)=>{
	if(isMenuOpen){
		event.target.classList.remove('open');
		isMenuOpen = false;
		menu_container.style.left = '-'+innerWidth+'px';
	}else{
		event.target.classList.add('open');
		isMenuOpen = true;
		menu_container.style.left = '0px';
	}
});

