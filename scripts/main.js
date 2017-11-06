var detail_image_selector = '[data-image-role="target"]';
var detail_title_selector = '[data-image-role="title"]';
var detail_frame_selector = '[data-image-role="frame"]';
var thumbnail_link_selector = '[data-image-role="trigger"]';
var hidden_detail_class = 'hidden-detail';
var tiny_effect_class = 'is-tiny';
var ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(detail_image_selector);
  detailImage.setAttribute('src', imageUrl);

  var detailImage = document.querySelector(detail_title_selector);
  detailImage.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(thumbnail_link_selector);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideDetails() {
  'use strict';
  document.body.classList.add(hidden_detail_class);
}

function showDetails() {
  'use strict'
  var frame = document.querySelector(detail_frame_selector);
  document.body.classList.remove(hidden_detail_class);
  frame.classList.add(tiny_effect_class);
  setTimeout(function () {
  frame.classList.remove(tiny_effect_class);
}, 50);
}

function addKeyPressHandler() {
  'use strict'
  document.body.addEventListener('keyup', function (event) {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

initializeEvents();
