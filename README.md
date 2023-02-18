# versation
Talk out loud with OpenAI GPT-3 (requires an account with OpenAI)

## Prerequesites
* An account on OpenAI, and an API key
* NodeJS + npm
* Chrome

## Installation
```bash
git clone https://github.com/samreid/versation.git
cd versation
npm install openai express body-parser
# Add your OpenAI API key to a file key.txt, then start the server
node server.js
# Open http://localhost:8080 in Chrome
# Click in the document body so it will start listening. 
# Grant Chrome permission to use the microphone
# Transcript is in the console.
```

After it speaks the response from GPT-3, it will automatically begin listening again.

### Customization
* You can change the initial prompt in server.js.
* Change the voice in index.html

### Caution
* The static express server will serve any file in the current directory (including key.txt), so be careful about exposing access.

### Tutorial
* I published a short Udemy course that shows how this was written: https://www.udemy.com/course/ai-smart-speaker-javascript/?referralCode=59CEDB25667F650518F5 