// this code will be executed after page load

function hideProductImages() {
  document.getElementById('imageBlock_feature_div').style.display = "none"
}

function getReviewImagesLink() {
  var obj = document.getElementById("seeAllImages")
  if (obj == null) {
    obj = document.createElement("div")
    obj.style.color = '#007185'
    obj.textContent = "No Real Images"
  } else {
    obj.firstChild.textContent = "Real Images\n"
  }
  return obj
}


function addReviewImagesLinkToTop() {
  var top = document.getElementById("leftCol")
  top.insertBefore(getReviewImagesLink(), top.firstChild);
}

(function () {
  hideProductImages()
  addReviewImagesLinkToTop()
})();
