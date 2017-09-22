const video = document.getElementById('video');
const transcript = document.getElementById("transcript");

const transcriptContent = [
          {"start": "0.01","end": "7.535","text": "Now that we've looked at the architecture of the internet, let's see how you might connect your personal devices to the internet inside your house."},
          {"start": "7.536","end": "13.960","text": "Well there are many ways to connect to the internet, and most often people connect wirelessly.\n\n"},
          {"start": "13.961","end": "17.940","text": "Let's look at an example of how you can connect to the internet."},
          {"start": "17.941","end": "30.920","text": "If you live in a city or a town, you probably have a coaxial cable for cable Internet, or a phone line if you have DSL, running to the outside of your house, that connects you to the Internet Service Provider, or ISP."},
          {"start": "32.100","end": "41.190","text": "If you live far out in the country, you'll more likely have a dish outside your house, connecting you wirelessly to your closest ISP, or you might also use the telephone system.\n\n"},
          {"start": "42.350","end": "53.760","text": "Whether a wire comes straight from the ISP hookup outside your house, or it travels over radio waves from your roof, the first stop a wire will make once inside your house, is at your modem."},
          {"start": "53.761","end": "57.780","text": "A modem is what connects the internet to your network at home."},
          {"start": "57.781","end": "59.000","text": "A few common residential modems are DSL or..."}            
        ];

        addTranscript();

        function addTranscript () {
        	let content;
        	for (let i = 0; i < transcriptContent.length; i++) {
        		content = document.createElement('span');
        		content.cue = transcriptContent[i];
        		content.innerText = transcriptContent[i].text + " ";
        		transcript.appendChild(content);
        	}
        }

        //Event listener for text transcript highlight changes
        video.addEventListener("timeupdate", function(e) {
            transcriptContent.forEach((content, index, array) => {
                if (video.currentTime >= content.start && video.currentTime <= content.end)
                    transcript.children[index].classList.add("highlight");
                    if (video.currentTime < content.start || video.currentTime > content.end) {
                        transcript.children[index].classList.remove("highlight");  
                    } 
            });
        });
