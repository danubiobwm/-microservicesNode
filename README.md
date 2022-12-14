
## ð» Projeto Microservices Node/Nestjs/Kafka ð¨âð»
MicroService de NotificaÃ§Ãµes.

## â¨ Tecnologias ð¨âð»

-   [âï¸] Typescript
-   [âï¸] Node
-   [âï¸] JavaScript
-   [âï¸] Nestjs
-   [âï¸] Kafka
-   [âï¸] kafkajs
-   [âï¸] Prisma
-   [âï¸] Prisma Studio
-   [âï¸] prisma/client


## Executando o projeto ð¨âð»
Utilize o **yarn** ou o **npm install** para instalar as dependÃªncias do projeto.
Em seguida, inicie o projeto.

### ð Pasta: notifications-services
```cl
yarn
yarn start:dev
```
### ð Pasta: kafka-producer
```cl
yarn
node producer.js
yarn producer.js
```
## ð PRISMA:
npx prisma migrate dev
npx prisma studio


## âï¸ JSON do Insomnia
segue o JSON do Insomnia fazer o import
Insomnia-All_2022-12-17


## ð Routes:

POST Notifications Create
http://localhost:3000/notifications

GET Count from Recipient Notification
http://localhost:3000/notifications/count/from/:recipientId

GET Get from Recipient Notification
http://localhost:3000/notifications/from/:recipientId

PATCH Cancel Notification
http://localhost:3000/notifications/:id/cancel

PATCH Read Notification
http://localhost:3000/notifications/:id/read

PATCH UnRead Notification
http://localhost:3000/notifications/:id/unread



<br />

Author - [Jose Danubio de Araujo](https://www.linkedin.com/in/danubiodeara%C3%BAjo/)
<br />
