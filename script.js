document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".image");
    let modal = document.getElementById("modal");
    let modalcontent = document.getElementById("modalcontent");
    let modalImage = document.getElementById("modalImage");
    let closeButton = document.getElementsByClassName("close")[0];
  
    images.forEach(function(image) {
      image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImage.src = this.src;
      });
    });
  
    closeButton.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
});

var today = new Date().toISOString().split('T')[0];
document.getElementsByName("date-control")[0].setAttribute('min', today);

let modall = document.getElementById("myModall");
let btnn = document.getElementById("mybutton");
let span = document.getElementsByClassName("closee")[0];
btnn.onclick = function() {
  modall.style.display = "block";
}
span.onclick = function() {
  modall.style.display = "none";
}
btnn.addEventListener('mouseover', function handleMouseOver() {
  btnn.style.transform = "scale(0.9)";
  btnn.style.transition = "all 0.2s";
  btnn.style.cursor = "pointer";
});
btnn.addEventListener('onclick', function click() {
  btnn.style.transform = "scale(0.6)";
  btnn.style.transition = "all 0.2s";
  btnn.style.height = "scale(0.9)";
});
btnn.addEventListener('mouseout', function handleMouseOut() {
  btnn.style.transform = "scale(1)";
  btnn.style.transition = "all 0.2s";
});
window.onclick = function(event) {
  if (event.target == modall) {
    modall.style.display = "none";
  }
}

$(document).ready(function() {
	$('body').on('click', '.number-minus, .number-plus', function(){
		let $row = $(this).closest('.number');
		let $input = $row.find('.number-text');
		let step = $row.data('step');
		let val = parseFloat($input.val());
		if ($(this).hasClass('number-minus')) {
			val -= step;
		} else {
			val += step;
		}
		$input.val(val);
		$input.change();
		return false;
	});
 
	$('body').on('change', '.number-text', function(){
		let $input = $(this);
		let $row = $input.closest('.number');
		let step = $row.data('step');
		let min = parseInt($row.data('min'));
		let max = parseInt($row.data('max'));
		let val = parseFloat($input.val());
		if (isNaN(val)) {
			val = step;
		} else if (min && val < min) {
			val = min;	
		} else if (max && val > max) {
			val = max;	
		}
		$input.val(val);
	});
});