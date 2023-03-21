let description = document.getElementById(`description_grid`);
let sliderDot = document.querySelectorAll(`#slider_dot`);
let arrows = document.querySelectorAll(`#slider_arrow`);
let link = document.querySelectorAll(`#link`)
let photo = document.getElementById(`photo`);

let photos = [`images/image/image 2.1 (1).png`,`images/image/image 2 (2).png`,`images/image/image 3.png`];

let descriptions = [`<div class="grid_card">
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
let clickFunc = function(i) {
	return function () {
		link[i].classList.add("active-link");
		sliderDot[i].classList.add(`active_dot`);
		link.forEach((value, index) => {
			if (index !== i) {
				value.classList.remove("active-link");
				sliderDot[index].classList.remove("active_dot");
			}
		});
		photo.src = photos[i];
		description.innerHTML = descriptions[i];
	}
}
 for (let i = 0; i < link.length; i++) {
     link[i].addEventListener("click", clickFunc(i) )
	 sliderDot[i].addEventListener("click", clickFunc(i))
 }
let arrowClick = function(k){
	 return function (){
		 for(let x = 0;x<sliderDot.length;x++){
			 if(sliderDot[x].classList.contains(`active_dot`)){
				 if(k === 1){
					 if(x === 2){
						 x = 0;
					 }
					 else{
						 x++;
					 }
				 }
				 else{
					 if(x === 0){
						 x = 2;
					 }
					 else{
						 x--;
					 }
				 }
				 console.log(x)
				 sliderDot[x].classList.add(`active_dot`);
				 link[x].classList.add(`active-link`);
				 photo.src = photos[x];
				 description.innerHTML = descriptions[x];
				 for(let i = 0;i<sliderDot.length;i++){
					 if(i !== x){
						 sliderDot[i].classList.remove(`active_dot`);
						 link[i].classList.remove(`active-link`);
					 }
				 }
			 }

		 }
	 }
}
 for(let k = 0;k<arrows.length;k++){
	 arrows[k].addEventListener(`click` , arrowClick(k))
 }