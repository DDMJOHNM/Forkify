## Forkify

Following along with Udemy course by Jonas Schmedtmann
The complete Javascript Course 2020 

- Custom webpack scripts
webpack.config.js
.babelrc 

```
npm init
npm install
npm install webpack
npm install webpack-cli
npm run dev
npm run build
npm install webpack-dev-server
npm run start
npm install html-webpack-plugin --save-dev
npm install babel-preset-env babel-loader babel-core --save dev
npm install babel-polyfill --save

```
NodeJS 
JS Runtime outside of the browser V8 engine Google
Server
Routing

```
npm install nodemon -g
```        

## Docker mySQL image
https://hub.docker.com/_/mysql

### starts Instance
```
docker run -p 3306:3306 --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest
```

docker exec -it nodetestdb bash - command line access

mysql 

docker stop CONTAINER_ID

### Connect to mySQL

### EXPRESSJS Framework
npm install express --save

express has no notion of database nor authentication 

## mySQL

npm install mysql

### isssue to cope wtih authentication protocol

```
ALTER USER ‘root’ IDENTIFIED WITH mysql_native_password BY ‘password’;
flush privileges;
```

##Convert to ExpressJS MVC mySql Application  
```https://ipenywis.com/tutorials/What-is-the-MVC,-Creating-a-%5BNode.js-Express%5D-MVC-Application```

## Never commit to git .env
npm install dotenv --save
## Requests
npm i body-parser


