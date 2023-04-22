drop database if exists artessan_app;

create database artessan_app;

use artessan_app;

create table rol(
id int(100) not null AUTO_INCREMENT,
name varchar(100) not null,
primary key (id)
);

create table users(
id int(100) not null AUTO_INCREMENT,
name varchar(100) not null,
email varchar(100) not null,
pass varchar(100) not null,
avatar varchar(100)not null,
rol_id int(100) not null,
primary key (id),
foreign key (rol_id) references rol(id)
);

create table categories(
id int(100) not null auto_increment,
name varchar(100) not null,
primary key (id)
);

create table products(
id int(100) not null AUTO_INCREMENT,
name varchar(100) not null,
price int(100) not null,
description varchar(100),
discount int(100),
image varchar(50) not null default "default.jpg",
categories_id int(20) not null,
primary key (id),
foreign key (categories_id) references categories(id)
);

create table users_products(
id int(100) not null AUTO_INCREMENT,
user_id int (100) not null,
products_id int (100) not null,
primary key (id),
foreign key (user_id) references users(id),
foreign key (products_id) references products(id)
);