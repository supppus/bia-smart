# bia-smart
* Antes de prosseguir, recomendo somente para maiores de 18 anos pois os arquivos contém palavras impróprias.

Criei um algoritmo simples de respostas e um de respostas predefinidas.
Existe 4 tipos de humor, da para alterar o humor pelo comando `/humor` dentro do servidor (Basta ser administrador) ou pelo arquivo CFG JSON, sendo eles bom, mal, justa e alegre.

## Bom
Quando ela está de bom humor ela só da boa noite, dia e tarde, uma coisa bem legal que eu fiz também foi fazer ela conseguir identificar perguntas de cálculos como:
 - "bia, quantos são 20% de 380",
 - "bia, quantos são 80 dividido por 2",
 - "bia, quantos são 80 / 2",
 - "bia, quantos são 80 : 2",
 - "bia, quantos são 1 + 1",
 - "bia, quantos são 80 mais 2",
 - "bia, quantos são 2 - 2",
 - "bia, quantos são 5 - 3",
 <br/>
 *Atenção, é obrigatório colocar citar o apelido bia ou beatriz para ela responder os cálculos...*
 
## Mal
 Uma outra funcionalidade que coloquei foi fazer a bia xingar, ela tem que estar de mal-humor!
  Ex: 
    - "bia, xingue o fulano",
    - "bia, quanta a fulana",
    - "bia, xingue esse inseto",
Fora que ela responde mais de 80 respostas predefinidas de acordo com certas palavras chaves dentro da mensagem da pessoa.

## Justa
Agora com o humor definido como "justa", ela começa a filtrar as mensagens que contém palavrão, assim ela exclui a própria e salva no MYSQL (em breve ela vai contabilizar na hora e dar mute);

## Alegre
Ela alegre, ela faz uma rápida análise na mensagem, e traz uma resposta visando uma resposta com sentido a mensagem anterior, ela faz essa análise através da array de objetos que ela tem, sendo que cada objeto tem uma palavra, id e id de outros objetos que fazem referência se dar continuidade naquela palavra em específica. Com isso em mente, antes dela entregar a resposta, ela ainda gera um valor aleatório de 1 a 50, se o número for par, ela responde, caso contrário não, porém se citarem o apelido ou o nome dela, ela traz o resultado mesmo dando ímpar o valor gerado.


## Curiosidades
 - Ela simula que está digitando, o tempo de digitação simulada pode variar de 0 a 10 segundos...


## Comandos
 - /limpar (apaga todas as mensagens)
 - /humor (altera o humor)
 - /ajuda (mostra sua lista de comandos)

<br/><br/><br/>
Segue a lista de libs utilizadas no NodeJS:
```
ascii-table
discord.js
edit-json-file
fast-glob
mysql2
sequelize
```

<br/>
<br/>
<p style="color: red;">Projeto solo, sem nenhum objetivo de obter lucro.</p>
