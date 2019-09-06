# Dynamoose model bug

Run the following to reproduce the bug

```bash
curl -X POST \
  http://localhost:3000/product \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 20' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:3000' \
  -H 'cache-control: no-cache' \
  -d '{
  "model": "Test"
}'
```
