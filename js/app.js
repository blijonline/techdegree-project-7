const video = document.getElementById('video');
const captionTimes = document.querySelectorAll('div span');
const captions = document.getElementById('captions');

video.addEventListener('timeupdate', () => {

	for (i = 0; i < captionTimes.length; i++ ) {
		let caption = captionTimes[i];
		let captionStart = caption.getAttribute('data-start');
		let captionEnd = caption.getAttribute('data-end');
		let videoTime = video.getCurrentTime();

		if (videoTime > captionStart && videoTime <= captionEnd) {
			caption.className = 'highlight';
		} else {
			caption.className = '';
		}
	}
});


captions.addEventListener('click', (event) => {
	let captionTime = event.target.getAttribute('data-start');
	
	if (captionTime) {
		video.setCurrentTime(captionTime);
	}
});