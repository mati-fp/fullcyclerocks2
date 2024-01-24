# COMO RODAR A APLICAÇÃO DO DESAFIO

## 1 PASSO

Fazer o pull do repositório em sua maquina

## 2 PASSO 

Criar uma pasta no mesmo diretório dos arquivos com o nome de "mysql"

## 3 PASSO 

Subir apenas o container "db" do docker-compose para configurar o msyql

## 4 PASSO 

Após estar com o container rodando, acessar o mesmo e entrar no mysql, acessar o banco "nodedb".
No "nodedb" criar tabela people com o seguinte comando:
```
    create table people(id int not null auto_increment, name varchar(255), primary key(id));
```

## 5 PASSO

Subir o resto da aplicação com o comando:
```
    docker-compose up -d
```

### A aplicação estará funcionando na porta 8080

