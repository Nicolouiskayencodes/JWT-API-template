# JWT-API-template

Template for authenticating users with JWT as a REST API call
npm init -y
npm install express passport passport-jwt jsonwebtoken bcryptjs @prisma/client cors
npm install dotenv prisma --save-dev

npx prisma init

add DATABASE_URL and JWT_KEY to .env

model User {
  id    Int     @id @default(autoincrement())
  username String @unique
  password String
}

npx prisma generate

npx prisma migrate dev --name init