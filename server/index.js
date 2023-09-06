import express from 'express';

const app = express();

app.listen(8800, () => {
	console.log('Server connected and listening on 8800');
});
