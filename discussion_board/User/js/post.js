var registerForm = document.querySelector("#form1");
var description = document.querySelector("#desc");
var tit = document.querySelector("#title");
var allInput = registerForm.querySelectorAll("INPUT");
console.log("hello");
function clearr(){
	registerForm.reset('');
	document.getElementById("profile-pic").src = "img/avtar.png";
	document.getElementById('register-btn').style="display: block";
    document.getElementById('update-btn').style="display: none";
}

/* start all global variable */
var userData1 = [];
var registerBtn = document.querySelector("#register-btn");
var updateBtn = document.querySelector("#update-btn");
var registerForm = document.querySelector("#form1");
var profile_pic = document.querySelector("#profile-pic");
var uploadPic = document.querySelector("#upload-field");
var imgUrl;
/* end all global variable */

registerBtn.onclick = function(e){
    e.preventDefault();
    regitrationData();

    getDataFromLocal();
    registerForm.reset(''); 

}

if(localStorage.getItem("userData1") != null){
    userData1 = JSON.parse(localStorage.getItem("userData1"));
}
console.log("hello");

/* data inserting */
function regitrationData(){
    userData1.push({
        tite : tit.value,
        desc : desc.value,
        profilePic : imgUrl == undefined ? "img/avtar.png" : imgUrl
    });
    var userString = JSON.stringify(userData1);
    localStorage.setItem("userData1",userString);
    swal({title: "Good job", text: "Registration Success!", icon: 
                    "success"}).then(function(){ 
                       location.reload();
                       }
                    );

}
console.log(userData1);
console.log("hello");

// start returning data on page from localstorage
var tableData = document.querySelector("#app");
const getDataFromLocal = () =>{
    tableData.innerHTML = "";
    userData1.forEach((data,index)=>{
        tableData.innerHTML +=  `
        <div class="col-sm-4" style="margin-top: 2rem">
			<div class="card" id="hash" style="width: 17rem;" index='${index}' desc="${data.desc}" tite="${data.tite}" imgg="${data.profilePic}">
			<div style="text-align: left;padding-left: 1rem"><h4 style="font-weight:800" class="card-title">${data.tite}</h4></div>
				<div class="card-body" >
					<img class="card-img-top" src="${data.profilePic}" alt="Card image cap" style="width: 12rem; height:12rem">
					<p class="card-text">${data.desc}</p>
					<a href="#" class="edit-btn" data-toggle="modal" data-target="#exampleModalScrollable"><i class="fa fa-pencil-square" style="font-size: 1.5rem; margin-right:1rem; color:green" aria-hidden="true"></i></a>
					<a href="#" class=" del-btn"><i class="fa fa-trash" style="font-size: 1.5rem; color:red" aria-hidden="true"></i></a>
					<i class="fa fa-heart-o" aria-hidden="true" id="icn1" style="margin-left:6rem; font-size:1.5rem;"></i>	
					<i class="fa fa-heart" aria-hidden="true" id="icn2" style="display:none;font-size: 1.5rem"></i>
					<i class="fa fa-bookmark-o" aria-hidden="true" id="book" style="font-size: 1.5rem; margin-left:1.5rem;"></i>
					<i class="fa fa-bookmark" aria-hidden="true" id="book1" style="display: none;font-size: 1.5rem; margin-left:1.5rem; color: none"></i>
				</div>
			</div>
		</div>
        `;
    });


     /* start delete coding */
    var i;
    var allDelBtn = document.querySelectorAll(".del-btn")
    for(i=0;i<allDelBtn.length;i++){
        allDelBtn[i].onclick = function(){
            var tr = this.parentElement.parentElement;
            var id = tr.getAttribute("index");
            swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
              .then((willDelete) => {
                if (willDelete) {
                    userData1.splice(id,1);
                    localStorage.setItem("userData1",JSON.stringify(userData1));
                    tr.remove();
                    swal({title: "Good job", text: "You clicked the button!", icon: 
					"success"}).then(function(){ 
					   location.reload();
					   }
					);
                } else {
                  swal("Your imaginary file is safe!");
                }
                // location.reload();
              });
        }
    }

     /* start updating  */
    var allEdit = document.querySelectorAll(".edit-btn");
    console.log(allEdit);
    for(i=0;i<allEdit.length;i++){
        allEdit[i].onclick = function(){
        	document.getElementById('register-btn').style="display: none";
        	document.getElementById('update-btn').style="display: block";
            var tr = this.parentElement.parentElement;
            var index = tr.getAttribute("index");
            var desc = tr.getAttribute("desc");
            var tite = tr.getAttribute("tite");
            var imgTag = tr.getElementsByTagName("IMG");
            // console.log(imgTag);
            var profilePic = imgTag[0].src;
            // console.log(profilePic);
            // var imgge = tr.getAttribute("imgg");
            tit.value=tite;
            description.value=desc;
            profile_pic.src = profilePic;
            updateBtn.onclick = function(e){
                userData1[index] = {
                    tite : tit.value,
                    desc : description.value,
                    profilePic : uploadPic.value == "" ? profile_pic.src : imgUrl
                }
                localStorage.setItem("userData1",JSON.stringify(userData1));
                //location.reload();
                getDataFromLocal();
            }
      	}
      	// location.reload();
    }
}
getDataFromLocal();

// image procesing
uploadPic.onchange = function(){
    if(uploadPic.files[0].size < 1000000){

        var fReader = new FileReader();
        fReader.onload = function(e){
            imgUrl = e.target.result;
            //console.log(imgUrl);
            profile_pic.src = imgUrl;
            console.log(imgUrl);
        }
        fReader.readAsDataURL(uploadPic.files[0]);

    }else{
        alert("File Size Is To Long");
    }
}

// start search coding

var searchEl = document.querySelector("#form12");
searchEl.oninput = function(){
    searchFuc();
}

function searchFuc(){
    var tr = document.querySelectorAll("#hash");
    var filter = searchEl.value.toLowerCase();
    var i;
    for(i=0;i<tr.length;i++){
        var titl = tr[i].getAttribute("tite");

        if(titl.toLowerCase().indexOf(filter) > -1){
            tr[i].style.display = "";
        }else{
            tr[i].style.display = "none";
        }
    }
}

// like button

const iconn=document.querySelectorAll("#icn1");
const iconn1=document.querySelectorAll("#icn2");

for(i=0;i<iconn.length;i++){
        iconn[i].onclick = function(){
        	var tr = this.parentElement;
        	var icn=tr.getElementsByTagName("I");

        	icn[2].style="display: none";
        	icn[3].style="display: inline-block";
        	icn[3].style="cursor: pointer";
        	icn[3].style="font-size: 1.5rem;margin-left: 6rem;cursor: pointer;color:red";

        }
 }
 for(i=0;i<iconn1.length;i++){
        iconn1[i].onclick = function(){
        	var tr = this.parentElement;
        	var icn=tr.getElementsByTagName("I");
        	
        	icn[2].style="display: inline-block";
        	icn[3].style="display: none";
        	icn[2].style="margin-left: 8rem";
        	icn[2].style="font-size: 1.5rem;margin-left: 6rem";
        }
 }

 //bookmark
const book=document.querySelectorAll("#book");
const book1=document.querySelectorAll("#book1");
var userData2=[];
if(localStorage.getItem("userData2") != null){
    userData2 = JSON.parse(localStorage.getItem("userData2"));
}

for(i=0;i<book.length;i++){
        book[i].onclick = function(){
        	var tr = this.parentElement;
        	var icn=tr.getElementsByTagName("I");
        	var tr1 = this.parentElement.parentElement;
        	var index = tr1.getAttribute("index");
            var desc = tr1.getAttribute("desc");
            var tite = tr1.getAttribute("tite");
            var imgTag = tr1.getElementsByTagName("IMG");
            // console.log(imgTag);
            var profilePic = imgTag[0].src;
            console.log(profilePic);
            // var imgge = tr.getAttribute("imgg");
            tit.value=tite;
            description.value=desc;
            profile_pic.src = profilePic;
            userData2.push({
        		tite : tit.value,
        		desc : description.value,
        		profilePic : profilePic == undefined ? "img/avtar.png" : profile_pic.src
    		});
		    var userString = JSON.stringify(userData2);
		    localStorage.setItem("userData2",userString);
		    console.log(userData2)
		    swal("Good job!", "Bookmarked Success!", "success");
        	icn[4].style="display: none";
        	icn[5].style="display: inline-block";
        	icn[5].style="cursor: pointer";
        	icn[5].style="font-size: 1.5rem; margin-left: 1.5rem; cursor: pointer;";



        }
 }
 // for(i=0;i<book1.length;i++){
 //        book1[i].onclick = function(){
 //        	var tr = this.parentElement;
 //        	var icn=tr.getElementsByTagName("I");
        	
 //        	icn[4].style="display: inline-block";
 //        	icn[5].style="display: none";
 //        	icn[4].style="margin-left: 1.5rem";
 //        	icn[4].style="font-size: 1.5rem;margin-left: 1.5rem";
 //        }
 // }

