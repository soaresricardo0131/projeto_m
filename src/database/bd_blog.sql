create database blog;
use blog;

create table usuario(

idUsuario int primary key auto_increment,
nomeUsuario varchar(50),
emailUsuario varchar(50),
senhaUsuario varchar(50),
jogoUsuario varchar(50)

);

create table contato(
idContato int primary key auto_increment,
emailContato varchar(50),
assuntoContato varchar(50),
mensagemContato varchar(260)
);

select * from contato;

