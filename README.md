# simple_server_app
There is a simple server app, that performs calls to API and collects data in file JSON format.

Additionally, it includes filtering rules and pagination functionality that allows users to consume only necessary data in selected amounts.
Also it contains functionality that allows sorting data to consume it more seamlessly and effectively.
As an external API https://restcountries.com/v3.1 is used.

to run an app localy use from the root project directory command:
npm run start

to run tests:
npm run test

example urls how to use developed endpoint:
localhost:3000/list
localhost:3000/list?name=st
localhost:3000/list?order=ascend
localhost:3000/list?limit=1
localhost:3000/list?order=ascend&limit=1
localhost:3000/list?name=st&limit=2
localhost:3000/list?population=1&limit=3
localhost:3000/list?population=5&name=st&limit=4
localhost:3000/list?population=5&order=ascend&limit=6
localhost:3000/list?population=7&name=st&order=ascend
localhost:3000/list?name=st&order=ascend&limit=6
localhost:3000/list?population=7&name=st&order=ascend&limit=6