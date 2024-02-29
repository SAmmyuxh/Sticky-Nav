const navbarEl = $(".navbar")[0];

const bottomContainerEl = $(".bottom-container")[0];

console.log(navbarEl.offsetHeight);

console.log(bottomContainerEl.offsetTop);

$(window).scroll(function() {
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    $(".navbar").addClass("active");
  } else {
    $(".navbar").removeClass("active");
  }
});

function showSideBar(){
  $(".sidebar").css("display","flex");
}
function closeSideBar(){
  $(".sidebar").css("display","none");
}

