let descritption = document.getElementById(`description_grid`);
let sliderDot = document.querySelectorAll(`#slider_dot`);
let arrowPrevius = document.getElementById(`slider_arrow_previus`);
let arrowNext = document.getElementById(`slider_arrow_next`);
let link = document.querySelectorAll(`#link`)
let photo = document.getElementById(`photo`);

let photos = [`images/image/image 2.1 (1).png`,`images/image/image 2 (2).png`,`images/image/image 3.png`];

let descritptions = [`<div class="grid_card">
								<h2 class="title">City:</h2>
								<p class="subtitle">Rostov-on-Don
								LCD admiral</p>
							</div>
							<div class="grid_card">
								<h2 class="title">apartment area:</h2>
								<p class="subtitle">81 m<sup>2</sup></p>
							</div>
							<div class="grid_card">
								<h2 class="title">Repair time:</h2>
								<p class="subtitle">3.5 months</p>
							</div>
							<div class="grid_card">
								<h2 class="title">Repair Cost:</h2>
								<p class="subtitle">Upon request</p>
							</div>`,`<div class="grid_card">
								<h2 class="title">City:</h2>
								<p class="subtitle">Sochi<br>Thieves</p>
							</div>
							<div class="grid_card">
								<h2 class="title">apartment area:</h2>
								<p class="subtitle">105 m<sup>2</sup></p>
							</div>
							<div class="grid_card">
								<h2 class="title">Repair time:</h2>
								<p class="subtitle">4 months</p>
							</div>
							<div class="grid_card">
								<h2 class="title">Repair Cost:</h2>
								<p class="subtitle">Upon request</p>
							</div>`,
							`<div class="grid_card">
								<h2 class="title">City:</h2>
								<p class="subtitle">Rostov-on-Don<br>Patriotic</p>
							</div>
							<div class="grid_card">
								<h2 class="title">apartment area:</h2>
								<p class="subtitle">93 m<sup>2</sup></p>
							</div>
							<div class="grid_card">
								<h2 class="title">Repair time:</h2>
								<p class="subtitle">3 months</p>
							</div>
							<div class="grid_card">
								<h2 class="title">Repair Cost:</h2>
								<p class="subtitle">Upon request</p>
							</div>`];

 for (let i = 0; i < link.length; i++) {
     link[i].addEventListener("click", function() {
       link[i].classList.add("active-link");
       sliderDot[i].classList.add(`active_dot`);
       if(i == 2){
       	link[i - 2].classList.remove("active-link");
       	link[i - 1].classList.remove("active-link");
       	sliderDot[i - 2].classList.remove(`active_dot`);
       	sliderDot[i - 1].classList.remove(`active_dot`);
       }
       else if(i == 0){
       	link[i + 2].classList.remove("active-link");
       	link[i + 1].classList.remove("active-link");
       	sliderDot[i + 2].classList.remove(`active_dot`);
       	sliderDot[i + 1].classList.remove(`active_dot`);
       }
       else if(i == 1){
       	link[i - 1].classList.remove("active-link");
       	link[i + 1].classList.remove("active-link");
       	sliderDot[i - 1].classList.remove(`active_dot`);
       	sliderDot[i + 1].classList.remove(`active_dot`);
       }
       photo.src = photos[i];
       descritption.innerHTML = descritptions[i];
     });

     sliderDot[i].addEventListener("click", function() {
       link[i].classList.add("active-link");
       sliderDot[i].classList.add(`active_dot`);
       if(i == 2){
       	link[i - 2].classList.remove("active-link");
       	link[i - 1].classList.remove("active-link");
       	sliderDot[i - 2].classList.remove(`active_dot`);
       	sliderDot[i - 1].classList.remove(`active_dot`);
       }
       else if(i == 0){
       	link[i + 2].classList.remove("active-link");
       	link[i + 1].classList.remove("active-link");
       	sliderDot[i + 2].classList.remove(`active_dot`);
       	sliderDot[i + 1].classList.remove(`active_dot`);
       }
       else if(i == 1){
       	link[i - 1].classList.remove("active-link");
       	link[i + 1].classList.remove("active-link");
       	sliderDot[i - 1].classList.remove(`active_dot`);
       	sliderDot[i + 1].classList.remove(`active_dot`);
       }
       photo.src = photos[i];
       descritption.innerHTML = descritptions[i];
     });
 }

arrowNext.addEventListener(`click` , function() {
	for (let i = 0; i < link.length; i++) {
     	if(link[i].classList.contains(`active-link`)){
     		if(i == 2){
     			i=0;
     			link[i].classList.add("active-link");
     			sliderDot[i].classList.add(`active_dot`);
     			link[i + 2].classList.remove("active-link");
       			link[i + 1].classList.remove("active-link");
       			sliderDot[i + 2].classList.remove(`active_dot`);
       			sliderDot[i + 1].classList.remove(`active_dot`);
       			photo.src = photos[i];
       			descritption.innerHTML = descritptions[i];
     		}
     		else{
     			i++;
     			if(i == 1){
     					link[i].classList.add("active-link");
     					sliderDot[i].classList.add(`active_dot`);
     					link[i - 1].classList.remove("active-link");
       					link[i + 1].classList.remove("active-link");
       					sliderDot[i - 1].classList.remove(`active_dot`);
       					sliderDot[i + 1].classList.remove(`active_dot`);
       			}
       			else{
       				link[i].classList.add("active-link");
     				sliderDot[i].classList.add(`active_dot`);
       				link[i - 2].classList.remove("active-link");
       				link[i - 1].classList.remove("active-link");
       				sliderDot[i - 2].classList.remove(`active_dot`);
       				sliderDot[i - 1].classList.remove(`active_dot`);
       			}

       			photo.src = photos[i];
       			descritption.innerHTML = descritptions[i];
     		}
     	}
 	}
})

arrowPrevius.addEventListener(`click` , function() {
	for (let i = 0; i < link.length; i++) {
     	if(link[i].classList.contains(`active-link`)){
     		if(i == 0){
     			i=2;
     			link[i].classList.add("active-link");
     			sliderDot[i].classList.add(`active_dot`);
       			link[i - 2].classList.remove("active-link");
       			link[i - 1].classList.remove("active-link");
       			sliderDot[i - 2].classList.remove(`active_dot`);
       			sliderDot[i - 1].classList.remove(`active_dot`);
       			photo.src = photos[i];
       			descritption.innerHTML = descritptions[i];
     		}
     		else{
     			i--;
     			if(i == 1){
     					link[i].classList.add("active-link");
     					sliderDot[i].classList.add(`active_dot`);
     					link[i - 1].classList.remove("active-link");
       					link[i + 1].classList.remove("active-link");
       					sliderDot[i - 1].classList.remove(`active_dot`);
       					sliderDot[i + 1].classList.remove(`active_dot`);
       			}
       			else{
       				
       			link[i].classList.add("active-link");
     			sliderDot[i].classList.add(`active_dot`);
     			link[i + 2].classList.remove("active-link");
       			link[i + 1].classList.remove("active-link");
       			sliderDot[i + 2].classList.remove(`active_dot`);
       			sliderDot[i + 1].classList.remove(`active_dot`);
       			photo.src = photos[i];
       			descritption.innerHTML = descritptions[i];

       			}

       			photo.src = photos[i];
       			descritption.innerHTML = descritptions[i];
     		}
     	}
 	}
})
 
