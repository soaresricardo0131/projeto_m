create database blog;
use blog;

create table usuario(

idUsuario int primary key auto_increment,
nomeUsuario varchar(50),
emailUsuario varchar(50),
senhaUsuario varchar(50),
jogoUsuario varchar(50)

);

create table ranking(
	idRanking int primary key auto_increment,
    pontuacao decimal,
    tipoRanking char (1),
    check (tipoRanking ='q' or tipoRanking ='t'),
    fkNome int,
    foreign key (fkNome) references usuario (idUsuario)
);

#inserir nome para contato
create table contato(
idContato int primary key auto_increment,
emailContato varchar(50),
assuntoContato varchar(50),
mensagemContato varchar(260)
);

CREATE TABLE Postagem (
  idPostagem INT primary key auto_increment,
  tituloPostagem VARCHAR(45),
  conteudoPostagem VARCHAR(550),
  imgPostagem VARCHAR(250),
  dataPost DATE,
  fkUsuario INT,
	FOREIGN KEY (fkUsuario)
    REFERENCES Usuario (idUsuario)
    );
    
    select tituloPostagem,conteudoPostagem,imgPostagem,date_format(dataPost, '%d-%m-%Y'),nomeUsuario
	from Postagem
	inner join usuario on idUsuario = fkusuario;
     
    select tituloPostagem,conteudoPostagem,imgPostagem,date_format(dataPost, '%d/%m/%Y') AS datapost,usuario.nomeUsuario
	from Postagem
	inner join Usuario on usuario.idUsuario = Postagem.fkusuario;


	select * from postagem
	inner join Usuario on idUsuario = fkUsuario
	where idUsuario = '2';