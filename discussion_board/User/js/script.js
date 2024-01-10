var registerForm = document.querySelector("#form1");
var description = document.querySelector("#desc");
var tit = document.querySelector("#title");
var allInput = registerForm.querySelectorAll("INPUT");

function clearr(){
	registerForm.reset('');
	document.getElementById('register-btn').style="display: block";
    document.getElementById('update-btn').style="display: none";
}
/* start all global variable */
var userData = [];
var registerBtn = document.querySelector("#register-btn");
var updateBtn = document.querySelector("#update-btn");
var registerForm = document.querySelector("#form1");
/* end all global variable */

registerBtn.onclick = function(e){
    e.preventDefault();
    regitrationData();
    getDataFromLocal();
    registerForm.reset('');
}

if(localStorage.getItem("userData") != null){
    userData = JSON.parse(localStorage.getItem("userData"));
}
console.log(userData);

//data inserting
function regitrationData(){
    userData.push({
        tite : tit.value,
        desc : desc.value
    });
    description.value="";
    title.value="";
    var userString = JSON.stringify(userData);
    localStorage.setItem("userData",userString);
    swal("Good job!", "Registration Success!", "success");
    // location.reload();
}

// start returning data on page from localstorage
var tableData = document.querySelector("#app");
const getDataFromLocal = () =>{
    tableData.innerHTML = "";
    userData.forEach((data,index)=>{
        tableData.innerHTML +=  `
        <div class="col-sm-3" style="margin-bottom: 2rem;">
			<div class="card" id="hash" style="border-radius: 0.75rem" index='${index}' desc="${data.desc}" tite="${data.tite}">
				<div class="card-body" >
					<a href="post.php" style="cursor: pointer; text-decoration: none"><h4 class="card-title" style="color: black">${data.tite}</h4>
					<p class="card-text" style="cursor: pointer; text-decoration: none; color: grey">${data.desc}</p></a>
					<a href="#" class="edit-btn" data-toggle="modal" data-target="#exampleModalScrollable"><i class="fa fa-pencil-square" style="font-size: 1.5rem; margin-right:1rem; color:green" aria-hidden="true"></i></a>
					<a href="#" class="del-btn"><i class="fa fa-trash" style="font-size: 1.5rem;color:red" aria-hidden="true"></i></a>
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
                    userData.splice(id,1);
                    localStorage.setItem("userData",JSON.stringify(userData));
                    tr.remove();
                  // swal("Poof! Your imaginary file has been deleted!", {
                  //   icon: "success",
                  // 	});
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
    for(i=0;i<allEdit.length;i++){
        allEdit[i].onclick = function(){
        	document.getElementById('register-btn').style="display: none";
        	document.getElementById('update-btn').style="display: block";
            var tr = this.parentElement.parentElement;
            var index = tr.getAttribute("index");
            var desc = tr.getAttribute("desc");
            console.log(desc);
            var tite = tr.getAttribute("tite");
            console.log(tite);
            tit.value=tite;
            description.value=desc;
            updateBtn.onclick = function(e){
                userData[index] = {
                    tite : tit.value,
                    desc : description.value
                }
                localStorage.setItem("userData",JSON.stringify(userData));
                //location.reload();
                getDataFromLocal();
            }
      	}
      	// location.reload();
    }

}
getDataFromLocal();

//start searching
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
        console.log(titl)
        if(titl.toLowerCase().indexOf(filter) > -1){
            tr[i].style.display = "";
        }else{
            tr[i].style.display = "none";
        }
    }
}