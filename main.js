function toggleCategory() {
  if (document.querySelector(".drop-down-content").style.display != "block")
    document.querySelector(".drop-down-content").style.display = "block";
  else if (document.querySelector(".drop-down-content").style.display != "none")
    document.querySelector(".drop-down-content").style.display = "none";
}
function focusLost() {
  document.querySelector(".drop-down-content").style.display = "none";
}
