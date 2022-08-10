# Reproduce

* docker compose up -d
* npm i
* npm run start:dev

Actual: `In the console, you can see retry`

```bash
 ERROR [Runner] Error when calling eachMessage {"timestamp":"2022-08-10T14:48:39.037Z","log
ger":"kafkajs","topic":"hero.events","partition":0,"offset":"0","error":{"status":"error","message":"Internal server error"}}
```

Expect: `Should retry only KafkaRetryableException`

