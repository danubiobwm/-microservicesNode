
## 💻 Projeto Microservices Node/Nestjs/Kafka 👨‍💻
MicroService de Notificações.

## ✨ Tecnologias 👨‍💻

-   [✔️] Typescript
-   [✔️] Node
-   [✔️] JavaScript
-   [✔️] Nestjs
-   [✔️] Kafka
-   [✔️] kafkajs
-   [✔️] Prisma
-   [✔️] Prisma Studio
-   [✔️] prisma/client


## Executando o projeto 👨‍💻
Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

### 📂 Pasta: notifications-services
```cl
yarn
yarn start:dev
```
### 📂 Pasta: kafka-producer
```cl
yarn
node producer.js
yarn producer.js
```
## 📅 PRISMA:
npx prisma migrate dev
npx prisma studio


## ↘️ JSON do Insomnia
segue o JSON do Insomnia fazer o import
Insomnia-All_2022-12-17


## 🎌 Routes:

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
