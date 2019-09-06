# Dynamoose model bug

Run the following to reproduce the bug

```bash
git clone git@github.com:blakedietz/dynamoose-model-bug.git;
npm i;
npm run env:setup;
npm start;

curl -X POST \
  http://localhost:3000/product \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 18' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:3000' \
  -H 'cache-control: no-cache' \
  -d '{
	"product": {}
}'```
