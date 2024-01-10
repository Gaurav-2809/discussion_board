 
 var tableData = document.querySelector("#app1");
if(localStorage.getItem("userData2") != null){
    userData2 = JSON.parse(localStorage.getItem("userData2"));
}
const getDataFromLocal1 = () =>{
    tableData.innerHTML = "";
    userData2.forEach((data,index)=>{
        tableData.innerHTML +=  `
        <div class="col-sm-4" style="margin-top: 2rem">
			<div class="card" id="hash" style="width: 17rem;" index='${index}' desc="${data.desc}" tite="${data.tite}" imgg="${data.profilePic}">
			<div style="text-align: left;padding-left: 1rem"><h4 style="font-weight:800" class="card-title">${data.tite}</h4></div>
				<div class="card-body" >
					<img class="card-img-top" src="${data.profilePic}" alt="Card image cap" style="width: 12rem; height:12rem">
					<p class="card-text">${data.desc}</p>
					<a href="#" class=" del-btn"><i class="fa fa-trash" style="font-size: 1.5rem; color: red" aria-hidden="true"></i></a>
				</div>
			</div>
		</div>
        `;
    });

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
                    userData2.splice(id,1);
                    localStorage.setItem("userData2",JSON.stringify(userData2));
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
}
getDataFromLocal1();