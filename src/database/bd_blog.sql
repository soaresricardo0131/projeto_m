create database blog;
use blog;

create table usuario(

idUsuario int primary key auto_increment,
nomeUsuario varchar(50),
emailUsuario varchar(50),
senhaUsuario varchar(50),
jogoUsuario varchar(50)

);
insert into usuario values

(null,'','','','Alone in the dark'),
(null,'','','','silent hill'),
(null,'','','','silent hill'),
(null,'','','','alan wake'),
(null,'','','','alan wake'),
(null,'','','','alan wake'),
(null,'','','','alan wake'),
(null,'','','','dead space'),
(null,'','','','dead space'),
(null,'','','','dead space'),
(null,'','','','dead space'),
(null,'','','','outlast'),
(null,'','','','outlast'),
(null,'','','','outlast'),
(null,'','','','outlast'),
(null,'','','','resident evil'),
(null,'','','','resident evil'),
(null,'','','','resident evil'),
(null,'','','','resident evil'),
(null,'','','','the evil within'),
(null,'','','','the evil within'),
(null,'','','','the evil within'),
(null,'','','','the evil within');

select * from usuario;
select jogousuario,count(jogoUsuario) as sh from usuario where jogoUsuario = "silent hill"
union
select jogousuario,count(jogoUsuario) as re from usuario where jogoUsuario = "resident evil";

select jogoUsuario, count(jogousuario) as re from usuario group by jogoUsuario;


select jogousuario,count(jogoUsuario) as re from usuario group by jogoUsuario order by jogoUsuario;
create table ranking(
	idRanking int,
    pontuacao decimal,
    acertos int,
    data_ranking date,
    fkNome int,
    foreign key (fkNome) references usuario (idUsuario),
    primary key (idRanking, fkNome)
);


select * from ranking;
insert into ranking values
(1,250,4,curdate(),1);

select pontuacao,realizado, nomeUsuario from ranking
 join usuario on idUsuario = fkNome
 where realizado is not null
order by pontuacao desc;

#inserir nome para contato
create table contato(
idContato int primary key auto_increment,
emailContato varchar(50),
assuntoContato varchar(50),
mensagemContato varchar(260)
);

alter table Postagem modify column conteudoPostagem text;
CREATE TABLE Postagem (
  idPostagem INT primary key auto_increment,
  tituloPostagem VARCHAR(45),
  conteudoPostagem text,
  imgPostagem VARCHAR(250),
  dataPost DATE,
  fkUsuario INT,
	FOREIGN KEY (fkUsuario)
    REFERENCES Usuario (idUsuario)
    );
    
    select tituloPostagem,conteudoPostagem,imgPostagem,date_format(dataPost, '%d-%m-%Y'),nomeUsuario
	from Postagem
	inner join usuario on idUsuario = fkusuario;
     
    select idPostagem, tituloPostagem,conteudoPostagem,imgPostagem,date_format(dataPost, '%d/%m/%Y') AS datapost,usuario.nomeUsuario
	from Postagem
	inner join Usuario on usuario.idUsuario = Postagem.fkusuario
    where idPostagem = 1;
    
     select  from postagem   inner join Usuario on idUsuario = fkUsuario
    where idPostagem = 4;

delete from postagem where idPostagem =4;

	select * from postagem
	inner join Usuario on idUsuario = fkUsuario
	where idUsuario = '2';
    
    select * from usuario;
    
    delete from postagem where idPostagem = 2;
    
		SELECT * FROM usuario
        
        WHERE emailUsuario = 'jill@gmail.com' AND senhaUsuario = '1234';
        
        select jogousuario,count(jogoUsuario) as re from usuario group by jogoUsuario ;
        
        
        
        
        
insert into usuario values


(null,'','','','silent hill'),


(null,'','','','dead space'),
(null,'','','','Alone in the dark'),


(null,'','','','outlast'),
(null,'','','','outlast'),
(null,'','','','outlast'),

(null,'','','','alan wake'),
(null,'','','','resident evil'),
(null,'','','','resident evil'),
(null,'','','','resident evil'),


(null,'','','','silent hill'),


(null,'','','','the evil within'),
(null,'','','','the evil within'),
(null,'','','','the evil within'),
(null,'','','','the evil within');