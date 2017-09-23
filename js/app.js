const video = document.getElementById('video');
const transcript = document.getElementById('transcript');

const transcriptContent = [
          {"start": "0.010","end": "4.130","text": "Now that we've looked at the architecture of the internet, let's see how you might"},
          {"start": "4.131","end": "7.535","text": "connect your personal devices to the Internet inside your house."},
          {"start": "7.536","end": "11.270","text": "Well there are many ways to connect to the internet, and"},
          {"start": "11.271","end": "13.960","text": " most often people connect wirelessly.\n\n"},
          {"start": "13.961","end": "17.940","text": "Let's look at an example of how you can connect to the internet."},
          {"start": "17.941","end": "22.370","text": "If you live in a city or a town, you probably have a coaxial cable for"},
          {"start": "22.371","end": "26.880","text": "cable Internet, or a phone line if you have DSL, running to the outside of"},
          {"start": "26.881","end": "30.920","text": "your house, that connects your to the Internet Service Provider, or ISP."},
          {"start": "32.101","end": "34.730","text": "If you live far out in the country, you'll more likely have"},
          {"start": "34.731","end": "39.430","text": "a dish outside your house, connecting you wirelessly to your closest ISP, or"},
          {"start": "39.431","end": "41.190","text": "you might also use the telephone system.\n\n"},
          {"start": "42.351","end": "46.300","text": "Whether a wire comes straight from the ISP hookup outside your house, or"},
          {"start": "46.301","end": "49.270","text": "it travels over radio waves from your roof,"},
          {"start": "49.271","end": "53.760","text": "the first stop a wire will make once inside your house, is at your modem."},
          {"start": "53.761","end": "57.780","text": "A modem is what connects the internet to your network at home."},
          {"start": "57.781","end": "60.000","text": "A few common residential modems are..."}            
        ];

        addTranscript();

        // Genarating the transcript text and span's
        function addTranscript () {
        	let content;
        	for (let i = 0; i < transcriptContent.length; i++) {
        		content = document.createElement('span');
        		content.cue = transcriptContent[i];
        		content.innerText = transcriptContent[i].text + " ";
        		transcript.appendChild(content);
        	}
        }

        //Highlighting transcript
        video.addEventListener('timeupdate', function(e) {
            transcriptContent.forEach((content, index, array) => {
                if (video.currentTime >= content.start && video.currentTime <= content.end)
                    transcript.children[index].classList.add('highlight');
                    if (video.currentTime < content.start || video.currentTime > content.end) {
                        transcript.children[index].classList.remove('highlight');  
                    } 
            });
        });

     // Click on sentence and jump to time in video and resume playing from there
            const sentences = transcript.getElementsByTagName('span');
            for (let i = 0; i < sentences.length; i++) {
                sentences[i].addEventListener('click', (e) => {
                  video.currentTime = e.target.cue.start;
                  video.play();
                });
            }