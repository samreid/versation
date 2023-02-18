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
# Add your OpenAI API key to a file key.txt
npm install openai express body-parser
node server.js
# Open the URL outputted by server.js in Chrome
# Click in the document body so it will start listening
```

After it speaks the response from GPT-3, it will automatically begin listening again. You can change the initial prompt
in server.js.