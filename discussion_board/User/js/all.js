const sidebar= document.querySelector(".sidebr");
const main= document.querySelector(".mainsec");
const open = document.querySelector("#icon");
const close1 = document.querySelector("#iconc");
open.addEventListener('click',show);
close1.addEventListener('click',close);

function show(){
	console.log("hrllo");
	sidebar.style.left='0px';
	sidebar.style.width='250px';
	// open.style.display='none';
	close1.style.display='block';
	//main.style.padding='6rem 0 0 19rem';

}
function close(){
	console.log("hello");
	sidebar.style.left='-500px';
	open.style.display='block';
	close1.style.display='none';
	//main.style.padding='6rem 0 0 2rem';
	// sidebar.style.width='50%';
}
$('.online').on('click', function(){
	console.log("kjh");
	if( $('.sidebr').css('width') == '250px' ){
		close();
	}
});