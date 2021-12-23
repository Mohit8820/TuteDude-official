var li = document.getElementById("ulist").getElementsByTagName("li");
var after = document.getElementById("ulist").getElementsByClassName("after");

var im = document.getElementById("im");
var images = [
  "computing_work_background_computer_lightbulb_digital_elements_sketch_6853111.jpg",
  "Screenshot 2021-11-27 003607.jpg",
  "computing_work_background_computer_lightbulb_digital_elements_sketch_6853111.jpg",
  "Screenshot 2021-11-27 003607.jpg",
];
var x = -1;

for (var i = 0; i < 4; i++) {
  console.log(i);
  li[i].addEventListener("click", function () {
    var value = this.innerHTML;
    console.log(this.classList);

    this.classList.add("act");
    console.log(value);
    if (value == "Learn at your own pace") {
      var val = 1;
    }
    if (value == "Structured premium curriculum") {
      var val = 2;
    }
    if (value == "1:1 mentoring &amp; Doubt solving in 5 minutes") {
      var val = 3;
    }
    if (value == "Develop killer real-world projects") {
      var val = 4;
    }
    change(val);
  });
}

function change(val) {
  console.log(val);
  switch (val) {
    case 1:
      im.setAttribute("src", images[0]);
      li[0].classList.add("act");
      li[1].classList.remove("act");
      li[2].classList.remove("act");
      li[3].classList.remove("act");
      after[0].classList.add("after-act");
      after[1].classList.remove("after-act");
      after[2].classList.remove("after-act");
      after[3].classList.remove("after-act");
      x = -1;
      break;
    case 2:
      im.setAttribute("src", images[1]);
      li[0].classList.remove("act");
      li[1].classList.add("act");
      li[2].classList.remove("act");
      li[3].classList.remove("act");
      after[0].classList.remove("after-act");
      after[1].classList.add("after-act");
      after[2].classList.remove("after-act");
      after[3].classList.remove("after-act");
      x = 0;
      break;
    case 3:
      im.setAttribute("src", images[2]);
      li[0].classList.remove("act");
      li[1].classList.remove("act");
      li[2].classList.add("act");
      li[3].classList.remove("act");
      after[0].classList.remove("after-act");
      after[1].classList.remove("after-act");
      after[2].classList.add("after-act");
      after[3].classList.remove("after-act");
      x = 1;
      break;
    case 4:
      im.setAttribute("src", images[3]);
      li[0].classList.remove("act");
      li[1].classList.remove("act");
      li[2].classList.remove("act");
      li[3].classList.add("act");
      after[0].classList.remove("after-act");
      after[1].classList.remove("after-act");
      after[2].classList.remove("after-act");
      after[3].classList.add("after-act");

      x = 2;
      break;
  }
}

function startTimer() {
  setInterval(displayNextImage, 2000);
}
function displayNextImage() {
  x = x === images.length - 1 ? 0 : x + 1;
  im.src = images[x];
  li[0].classList.remove("act");
  li[1].classList.remove("act");
  li[2].classList.remove("act");
  li[3].classList.remove("act");
  after[0].classList.remove("after-act");
  after[1].classList.remove("after-act");
  after[2].classList.remove("after-act");
  after[3].classList.remove("after-act");
  li[x].classList.add("act");
  after[x].classList.add("after-act");
}
