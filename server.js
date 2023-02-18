console.log( 'hello from server' );
const fs = require( 'fs' );
const key = fs.readFileSync( 'key.txt' );
console.log( 'key.length = ' + key.length );

let prompt = `You are a very smart smartspeaker, good at conversation. 
Happy, and brief in your responses. Your name is Jeepy, as a nickname
for GPT-3.`

const { Configuration, OpenAIApi } = require( 'openai' );

const configuration = new Configuration( {
  apiKey: key
} );

const openai = new OpenAIApi( configuration );

const askGPT = ( async ( prompt ) => {
  const result = await openai.createCompletion( {
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 2000,
    temperature: 0.8
  } );

  const answer = result.data.choices[ 0 ].text;
  console.log( answer );

  return answer;
} );

const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const app = express();
app.use( bodyParser.text() );

app.post( '/post', async ( req, res ) => {

  const message = req.body;
  prompt = prompt + '\n\n' + message + '.';

  const result = await askGPT( prompt );

  prompt = prompt + result;
  console.log( prompt );

  res.end( result );

} );

app.use( express.static( '.' ) );

app.listen( 8080, () => {console.log( 'Server listening on http://localhost:8080' )} );