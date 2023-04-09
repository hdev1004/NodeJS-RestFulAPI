# Express를 이용한 RestFulAPI 구현

RestFul API의 설계 규칙을 최대한으로 반영하여 직접 구현 👻

파일 내의 `RestAPI 가이드.txt` 파일 참고

설계 규칙 참고 

- https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html

<br>

## 📕 Rest API란?

1. HTTP 프로토콜을 이용하여 웹 상의 정보를 다루기 위한 아키텍처

2. REST API는 네트워크 아키텍처의 제약 조건을 따르는 일종의 설계 원칙으로, 클라이언트-서버 구조, 무상태성(Stateless), 캐시(Cache), 계층화(Layered System), Code on Demand 등의 특징을 갖고 있음.

<br>

## 📕 usage

필수 요구사항 : `mysql-workbench`, `nodeJS`

다운로드 - `git clone https://github.com/hdev1004/NodeJS-RestFulAPI.git`


<br>

### 📖 MySQL - Query

Create Table

```mysql
create database test_database;

use test_database;

create table users (
    id int not null auto_increment primary key,
    `name` varchar(10),
    age int
)
```

<br>

Insert Data

```mysql
insert into users(`name`, age) values('이렐리아', 20);
insert into users(`name`, age) values('베이가', 21);
insert into users(`name`, age) values('오른', 22);
```

<br>

Create MySQL User

```mysql
create user 'tester'@'localhost' identified by 'tester';
grant all privileges on *.* to 'tester'@'localhost';
ALTER USER 'tester'@'localhost' IDENTIFIED WITH mysql_native_password BY 'tester';
```

<br>

### 📖 NPM 라이브러리 설치

```shell
npm install express mysql
npm install nodemon -g
```

<br>

### 📖 서버 실행

```shell
cd src
nodemon server.js
```

<br>

## 📕 파일 구조

```arduino
src/
  ├── server.js
  │
  ├── get/
  │   └── user.js
  ├── post/
  │   └── user.js
  ├── delete/
  │   └── user.js
  ├── put/
  │   └── user.js
  └── patch/
      └── user.js
```

<br>

## 📕 메서드 설명

<b>📖 GET</b> 

```shell
http://localhost:3000/
- index page 

http://localhost:3000/users
- 모든 사용자 정보를 반환

http://localhost:3000/users/:id
- 특정 사용자 정보만 반환
```

<br>

<b>📖 POST</b> 

```shell
http://localhost:3000/users
- 사용자의 정보를 추가
```


<br>

request body
```json
{
  "name": "이름",
  "age": 25
}
```

<br>

<b>📖 DELETE</b> 

```shell
http://localhost:3000/users/:id
- 특정 사용자 정보 삭제
```

<br>

<b>📖 PUT</b> 

```shell
http://localhost:3000/users/:id
- 특정 사용자 정보 수정
```

<br>

request body
```json
{
  "name": "이름",
  "age": 25
}
```

<br>

<b>📖 PATCH</b> 

```shell
http://localhost:3000/users/:id
- 특정 사용자 정보 부분 수정
```

<br>

request body
```json
{
  "name": "이름",
  "age": 25
}
```

OR

```json
{
  "name": "이름"
}
```

OR

```json
{
  "age": 25
}
```

<br> 

<b> Thank You ! </b>

