# api

    // "docker-compose":" docker compose up -d --build -p "

## TODO

1. Migrate
2. Seed Database

## Redis Schema

Redis HASH
hash contain users by id

key "user id": value "Strigified user object"
1 : " {\n \"id\": 1,\n \"email\": \"Bernice_Batz@yahoo.com\",\n \"username\": \"Andreanne\",\n \"name\": \"Admin Arlene Shields\",\n \"password\": \"quae-laboriosam-mollitia\",\n \"mobile\": \"1-810-910-4370\",\n \"levelPoints\": 0,\n \"locale\": \"en\",\n \"image\": null,\n \"inviteCode\": null,\n \"otp\": null,\n \"otpExpiresAt\": null,\n \"googleId\": null,\n \"appleId\": null,\n \"facebookId\": null,\n \"status\": \"InActive\",\n \"gender\": \"Male\",\n \"roleId\": 1,\n \"inviterByUserId\": null,\n \"levelId\": 1,\n \"createdAt\": \"2023-02-21T11:32:20.830Z\",\n \"updatedAt\": \"2023-02-21T11:32:20.830Z\"\n }"
