// DATABASE
const FilterDb = require("../database/filter");

// IMPLEMENTS
const {GetCfg, Sleep, NewEmbed} = require("../config/global");

// DISCORD
const {EmbedBuilder} = require("discord.js");

//CFG
const filter = [
  "porra",
  "negro",
  "viado",
  "gay",
  "krl",
  "crlh",
  "caralho",
  "buceta",
  "cu",
  "ku",
  "kur",
  "teta",
  "vsfd",
  "sfd",
  "transa",
  "fds",
];
let alert = false;

function Digitar(cb, client, msg) {
  let time = Math.floor(Math.random() * 10 + 1);
  let channel = client.channels.cache.get(msg.channelId);
  channel.sendTyping(15);

  try {
    setTimeout(() => {
      cb();
    }, time * 1000);
  } catch {
    //
  }
}

const xingos = [
  "você não passa de uma paquita do capeta",
  "sai daqui seu geladinho de chorume",
  "ou escova o dente, ou sai daqui com esse bafo de bunda",
  "você não dá conta de fazer nem um ovo frito.",
  "você é tão feio, que eu acho que nasceu pelo cu!",
  "enfia um rojão no cu e sai voando",
  "vai arrastar o seu cu na brita",
  "sua certidão de nascimento é um pedido de desculpas da fábrica de preservativos",
  "o mundo tem sete bilhões de pessoas e de todas essas você é a razão da legalização do aborto",
  "enfia o dedo no rabo e sai assoviando",
  "vai chupar um canavial de rola",
  "se você pulasse da altura do seu ego para o seu QI, você sairia daqui aleijado",
  "se tem a voz fina, cê é meio viado?",
  "seu cavalo da carroça de faraó",
  "sua mãe é tão gorda que se eu pegar uma arma e atirar de olhos fechados eu consigo acertar!",
  "vc parece um lenhador de bonsai",
  "vc parece um câncer retal do satanás..",
  "sua mãe é tão gorda que descobriram todas as casas decimais de PI antes de descobrirem o tamanho dela.",
  "você é uma pústula miasmatica ambulante. Nem abutres comeriam sua carcaça, na extrema escassez de carniça.",
  "sua cria de urubu com cruz-credo",
  "SUA MÃE ALUGA A BUCETA PRA COMPRAR FIXADOR DE DENTADURA PRO SEU PAI",
  "animal que não devia ter entrado na arca.",
  "cria de jezebel",
];

// NEW RELEASE
const words = [
  {id: 1, word: "voce", idWordSenses: [5, 8, 18]},
  {id: 2, word: "claros", idWordSenses: [6, 3, 4, 19, 20]},
  {id: 3, word: "obrigado", idWordSenses: [19, 5, 6, 7]},
  {id: 4, word: "de nada", idWordSenses: [21]},
  {id: 5, word: "tudo", idWordSenses: [6, 7, 9, 21]},
  {id: 6, word: "bem", idWordSenses: [9, 20, 19, 21, 50]},
  {id: 7, word: "bom", idWordSenses: [8, 17, 16, 15, 20, 50]},
  {id: 8, word: "para", idWordSenses: [9, 27, 36, 38, 39, 40, 37]},
  {id: 9, word: "com", idWordSenses: [23, 1, 22, 23]},
  {id: 10, word: "pare", idWordSenses: [9, 12, 21, 19, 20]},
  {id: 11, word: "teste", idWordSenses: [15, 16, 17, 21]},
  {id: 12, word: "quero", idWordSenses: [14, 24, 25, 1, 41, 38, 36]},
  {id: 13, word: "faz", idWordSenses: [26, 8, 27]},
  {id: 14, word: "fazer", idWordSenses: [28, 9, 8, 15, 16, 17]},
  {id: 15, word: "de", idWordSenses: [21, 20, 11]},
  {id: 16, word: "da", idWordSenses: [28, 29]},
  {id: 17, word: "do", idWordSenses: [21, 24]},
  {id: 18, word: "faz", idWordSenses: [26, 31]},
  {
    id: 19,
    word: "galera",
    idWordSenses: [34, 24, 15, 16, 17, 8, 3, 22, 23, 24],
  },
  {id: 20, word: "gente", idWordSenses: [24, 25, 34, 8, 35]},
  {id: 21, word: "cara", idWordSenses: [8, 3, 29]},
  {id: 22, word: "a", idWordSenses: [28, 1]},
  {id: 23, word: "o", idWordSenses: [21]},
  {id: 24, word: "eu", idWordSenses: [25, 27, 12]},
  {id: 25, word: "posso", idWordSenses: [27, 14, 36, 27, 38, 39, 40, 41]},
  {id: 26, word: "sexo", idWordSenses: [9]},
  {id: 27, word: "relaxar", idWordSenses: [9]},
  {id: 28, word: "pessoa", idWordSenses: [9]},
  {id: 29, word: "testa", idWordSenses: [30, 31, 32]},
  {id: 30, word: "pessoal", idWordSenses: [9, 12, 13]},
  {id: 31, word: "coisas", idWordSenses: [9, 33, 35, 50]},
  {id: 32, word: "brincadeiras", idWordSenses: [33, 17, 16]},
  {id: 33, word: "sexuais", idWordSenses: [21]},
  {id: 34, word: "que", idWordSenses: [32, 35, 22, 23, 24, 39]},
  {id: 35, word: "como", idWordSenses: [24, 12, 18, 20]},
  {id: 36, word: "jogar", idWordSenses: [31, 9, 50]},
  {id: 37, word: "brincar", idWordSenses: [9, 15, 50]},
  {id: 38, word: "dançar", idWordSenses: [9, 8, 50]},
  {id: 39, word: "caminhar", idWordSenses: [7, 8, 50]},
  {id: 40, word: "andar", idWordSenses: [7, 8, 50]},
  {id: 41, word: "programar", idWordSenses: [8, 50]},
  // NAMES
  {id: 42, word: "Livi", idWordSenses: [49, 27, 14]},
  {id: 43, word: "Victor", idWordSenses: [49, 27, 14]},
  {id: 44, word: "Take", idWordSenses: [49, 27, 14]},
  {id: 45, word: "Taiko", idWordSenses: [49, 27, 14]},
  {id: 46, word: "Vlone", idWordSenses: [49, 27, 14]},
  {id: 47, word: "Drinks", idWordSenses: [49, 27, 14]},
  {id: 48, word: "Clarky", idWordSenses: [49, 27, 14]},
  // ------------------------------------------
  {id: 49, word: "vamos", idWordSenses: [36, 37, 38, 39, 40, 41, 15, 14]},
  {id: 50, word: "ne", idWordSenses: [21, 42, 43, 44, 45, 46, 47, 48]},
];
function getLength(tam) {
  switch (tam) {
    case 1:
      return "small";
    case 2:
      return "medium";
    case 3:
      return "large";
  }
}
function getNewWord(lastWord, sorted) {
  let objLastWord;
  for (let i = 0; i < words.length; i++) {
    if (words[i].word === lastWord) {
      objLastWord = words[i];
      break;
    }
  }
  let sortedWord;
  for (let k = 0; k < words.length; k++) {
    if (words[k].id === sorted) {
      sortedWord = words[k].word;
      break;
    }
  }
  return sortedWord;
}
function newInput(str) {
  let newStr = str.split(" ");
  let randomText = Math.floor(Math.random() * newStr.length) + 1;
  let validArraySense = [];
  while (true) {
    for (let z = 0; z < words.length; z++) {
      if (words[z] === randomText) {
        validArraySense = words[z].idWordSenses;
      }
    }
    break;
  }
  if (validArraySense.length !== 0 && validArraySense !== undefined) {
    if (validArraySense.length === 1) {
      return validArraySense[0];
    } else {
      return validArraySense[
        Math.floor(Math.random() * validArraySense.length) + 1
      ];
    }
  } else {
    return words[Math.floor(Math.random() * words.length + 1)].id;
  }
}
const [limitSmall, limitMedium, limitLarge] = [8, 14, 22];
function Algorithm(text) {
  // SEM ENTRADA
  const choiced = getLength(Math.floor(Math.random() * 3) + 1);
  let phrase = "";
  // FUNCTION
  let count = 0;
  let wordChoiced;
  let newChoiceList = Math.floor(Math.random() * words.length + 1);
  phrase += words[newChoiceList].word;
  let on = true;

  while (on) {
    count++;
    if (
      (choiced === "small" && count >= limitSmall) ||
      (choiced === "medium" && count >= limitMedium) ||
      (choiced === "large" && count >= limitLarge)
    ) {
      break;
    }
    if (phrase.includes(" ")) {
      let lastWord = wordChoiced;
      // SORT A RANDOM ID
      let idSorted;
      for (let y = 0; y < words.length; y++) {
        if (words[y].word === lastWord) {
          idSorted = words[y].idWordSenses;
          break;
        }
      }
      if (idSorted) {
        if (idSorted.length === 1) {
          idSorted = idSorted[0];
        } else {
          idSorted = idSorted[Math.floor(Math.random() * idSorted.length) + 1];
        }
        let newWordSorted = getNewWord(lastWord, idSorted);
        if (newWordSorted !== undefined) {
          phrase += " " + newWordSorted;
          wordChoiced = newWordSorted;
        }
      } else {
        continue;
      }

      // INSERT IN PHRAS
    } else {
      console.log(newInput(text));
      let getRandomWordFromSense = newInput(text);
      let newWord = getNewWord(phrase, getRandomWordFromSense);
      phrase += " " + newWord;
      wordChoiced = newWord;
    }
  }

  return phrase;
}

exports.Chat = (msg, client) => {
  if (msg.author.bot /*|| msg.content[0] !== "*" */) return false;

  GetCfg()
    .then((fullCfg) => {
      let MSG = msg.content.toLowerCase();
      let state = fullCfg.state; // bom - mal - justa - alegre

      try {
        if (state === "bom") {
          if (
            MSG.includes("boa noite") ||
            MSG.includes("b noite") ||
            MSG.includes("boanoite")
          ) {
            return Digitar(
              () => {
                msg.reply("Boa noite, durma bem.");
              },
              client,
              msg
            );
          }
          if (
            MSG.includes("bom dia") ||
            MSG.includes("b dia") ||
            MSG.includes("bomdia")
          ) {
            return Digitar(
              () => {
                msg.reply("Bom dia flor do dia.");
              },
              client,
              msg
            );
          }
          if (
            (MSG.includes("quem") &&
              MSG.includes("criador") &&
              MSG.includes("seu") &&
              MSG.includes("bia")) ||
            (MSG.includes("qm") &&
              MSG.includes("criador") &&
              MSG.includes("seu") &&
              MSG.includes("beatriz"))
          ) {
            return Digitar(
              () => {
                msg.reply({
                  embeds: [
                    new EmbedBuilder()
                      .setTitle("Victor Gomes.")
                      .setDescription(
                        "Ele é um desenvolvedor aventureiro, mas seu principal foco é o desenvolvimento web, atualmente ele estuda JavaScript e C++, tem conhecimentos sólidos em Sql e NoSql, testes unitários como Jest. Ele também curte pentest em aplicações web, isso é tudo que sei no momento."
                      )
                      .addFields(
                        {
                          name: "JavaScript",
                          value: "1 ano e meio",
                          inline: true,
                        },
                        {name: "Python", value: "2 anos", inline: true},
                        {name: "Sql", value: "2 anos", inline: true},
                        {name: "NoSql", value: "1 ano", inline: true},
                        {name: "C++", value: "1 mês", inline: true},
                        {name: "Java", value: "1 ano e meio", inline: true},
                        {name: "Lua", value: "1 ano e meio", inline: true},
                        {name: "ShellScript", value: "2 anos", inline: true},
                        {name: "Pentest Web", value: "2 anos", inline: true}
                      ),
                  ],
                });
              },
              client,
              msg
            );
          }
          if (
            MSG.includes("boa tarde") ||
            MSG.includes("b tarde") ||
            MSG.includes("boatarde")
          ) {
            return Digitar(
              () => {
                msg.reply("Boa tarde!");
              },
              client,
              msg
            );
          }
          if (
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes("mais")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes("+")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes(" + ")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes("menos")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes("-")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes(" - ")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes("dividido")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes(":")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes(" : ")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes("/")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes(" / ")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes("porcento")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes(" porcento ")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes("%")) ||
            (MSG.includes("quanto") &&
              MSG.includes("bia") &&
              MSG.includes(" % ")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes("mais")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes("+")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes(" + ")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes("menos")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes("-")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes(" - ")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes("dividido")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes(":")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes(" : ")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes("/")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes(" / ")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes("porcento")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes(" porcento ")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes("%")) ||
            (MSG.includes("quanto") &&
              MSG.includes("beatriz") &&
              MSG.includes(" % "))
          ) {
            let [a, b] = [0, 0];
            let space = false;
            for (let letra = 0; letra < MSG.length; letra++) {
              try {
                if (!isNaN(MSG[letra])) {
                  if (!(MSG[letra].toString() === " ") && !space) {
                    if (a === 0) {
                      a = MSG[letra];
                    } else {
                      a += MSG[letra];
                    }
                  } else {
                    if (a > 0) {
                      space = true;
                    }
                  }
                  if (!(MSG[letra].toString() === " ") && space) {
                    if (b === 0) {
                      b = MSG[letra];
                    } else {
                      b += MSG[letra];
                    }
                  }
                }
              } catch {
                //
              }
            }
            if (a.length > 20 || b.length > 20) {
              return msg.reply(`Esses números são muito grandes...`);
            }
            msg.reply(`Calma, estou calculando...`);
            if (
              MSG.includes("-") ||
              MSG.includes(" - ") ||
              MSG.includes("menos") ||
              MSG.includes(" menos ")
            ) {
              return Digitar(
                () => {
                  let ch = client.channels.cache.get(msg.channelId);
                  ch.send(
                    `Hm.... ${a} - ${b} = ${
                      Number.parseInt(a) - Number.parseInt(b)
                    }${
                      a < 10 && b < 10
                        ? ", essa foi muito fácil, manda outra..."
                        : ""
                    }`
                  );
                },
                client,
                msg
              );
            }
            if (
              MSG.includes("+") ||
              MSG.includes(" + ") ||
              MSG.includes("mais") ||
              MSG.includes(" mais ")
            ) {
              Digitar(
                () => {
                  let ch = client.channels.cache.get(msg.channelId);
                  ch.send(
                    `Hm.... ${a} + ${b} = ${
                      Number.parseInt(a) + Number.parseInt(b)
                    }${
                      a < 10 && b < 10
                        ? ", essa foi muito fácil, manda outra..."
                        : ""
                    }`
                  );
                },
                client,
                msg
              );
            }
            if (
              MSG.includes("/") ||
              MSG.includes(" / ") ||
              MSG.includes(":") ||
              MSG.includes(" : ") ||
              MSG.includes(" dividido ") ||
              MSG.includes("dividido")
            ) {
              Digitar(
                () => {
                  let ch = client.channels.cache.get(msg.channelId);
                  ch.send(
                    `Hm.... ${a} dividido por ${b} = ${(
                      Number.parseFloat(a) / Number.parseFloat(b)
                    ).toFixed(1)}${
                      a < 10 && b < 10
                        ? ", essa foi muito fácil, manda outra..."
                        : ""
                    }`
                  );
                },
                client,
                msg
              );
            }
            if (
              MSG.includes("porcento") ||
              MSG.includes(" porcento ") ||
              MSG.includes("%") ||
              MSG.includes(" % ")
            ) {
              Digitar(
                () => {
                  let ch = client.channels.cache.get(msg.channelId);
                  let x = Number.parseFloat(a * b) / 100;
                  ch.send(
                    `Hm.... ${a}% de ${b} = ${Number.parseInt(x).toFixed(1)}${
                      a < 10 && b < 10
                        ? ", essa foi muito fácil, manda outra..."
                        : ""
                    } \nVale lembrar que se a casa decimal do resultado for muito baixa, o resultado vai dar 0.0`
                  );
                },
                client,
                msg
              );
            }
          }
        }
        if (state === "mal") {
          if (
            (MSG.includes("gabriel") &&
              !MSG.includes("xingue") &&
              !MSG.includes(" xingue ") &&
              !MSG.includes("xinga") &&
              !MSG.includes(" xinga ")) ||
            (MSG.includes("GABRIEL") &&
              !MSG.includes("xingue") &&
              !MSG.includes(" xingue ") &&
              !MSG.includes("xinga") &&
              !MSG.includes(" xinga ")) ||
            (MSG.includes("briel") &&
              !MSG.includes("xingue") &&
              !MSG.includes(" xingue ") &&
              !MSG.includes("xinga") &&
              !MSG.includes(" xinga "))
          ) {
            return Digitar(
              () => {
                msg.reply("o gabriel eh gay.");
              },
              client,
              msg
            );
          } else if (
            (MSG.includes("bia") && MSG.includes("foto")) ||
            (MSG.includes("bia") && MSG.includes("ft")) ||
            (MSG.includes("beatriz") && MSG.includes("foto")) ||
            (MSG.includes("beatriz") && MSG.includes("ft"))
          ) {
            return Digitar(
              () => {
                msg.reply("GOSTOU DA MINHA FOTO!? SOU SUPER GOSTOSA NE AMOR!?");
              },
              client,
              msg
            );
          } else if (MSG.includes("gaybriel")) {
            return Digitar(
              () => {
                msg.reply("é isso ai!");
              },
              client,
              msg
            );
          } else if (MSG.includes("vovó") || MSG.includes("vovo")) {
            return Digitar(
              () => {
                msg.reply("essa pessoa eh simplesmente maravilhosa");
              },
              client,
              msg
            );
          } else if (MSG.includes("novo") && MSG.includes("ano")) {
            return Digitar(
              () => {
                msg.reply("FELIZ ANO NOVO!!!!!!!!!");
              },
              client,
              msg
            );
          } else if (MSG.includes("anticristo")) {
            return Digitar(
              () => {
                msg.reply("ehoq");
              },
              client,
              msg
            );
          } else if (MSG.includes(" oi ")) {
            return Digitar(
              () => {
                msg.reply("OIIIIIIIIh");
              },
              client,
              msg
            );
          } else if (MSG.includes("bem") && MSG.includes("BEATRIZ")) {
            return Digitar(
              () => {
                msg.reply("estou otima e vc???");
              },
              client,
              msg
            );
          } else if (MSG.includes("eita") && !MSG.includes("aceita")) {
            return Digitar(
              () => {
                msg.reply("esta assustado amigo(a)?");
              },
              client,
              msg
            );
          } else if (
            MSG.includes("af") ||
            MSG.includes("afe") ||
            MSG.includes("aff") ||
            MSG.includes("AFF")
          ) {
            return Digitar(
              () => {
                msg.reply("muita calma nessa hora!");
              },
              client,
              msg
            );
          } else if (
            MSG.includes("sim") ||
            (MSG.includes("sikm") &&
              !MSG.includes("feia") &&
              !MSG.includes("feio"))
          ) {
            return Digitar(
              () => {
                msg.reply("concordo :)");
              },
              client,
              msg
            );
          } else if (
            MSG.includes("FDS") ||
            MSG.includes("fds") ||
            MSG.includes("foda-se") ||
            MSG.includes("fodase")
          ) {
            return Digitar(
              () => {
                msg.reply("ta poar");
              },
              client,
              msg
            );
          } else if (
            MSG.includes("idai") ||
            MSG.includes("IDAI") ||
            MSG.includes("idai") ||
            MSG.includes("tem eu") ||
            MSG.includes("eu q mando") ||
            MSG.includes("eu que mando") ||
            MSG.includes("eu q mnd")
          ) {
            return Digitar(
              () => {
                msg.reply("fds");
              },
              client,
              msg
            );
          } else if (MSG.includes("molieres") || MSG.includes("MOLIERES")) {
            return Digitar(
              () => {
                msg.reply(
                  "falando em molieres, a minha eh sensacional neh @Livi"
                );
              },
              client,
              msg
            );
          } else if (MSG.includes("eu sou linda")) {
            return Digitar(
              () => {
                msg.reply("sim, vc eh extremamente linda!");
              },
              client,
              msg
            );
          } else if (MSG.includes("sou lindo")) {
            return Digitar(
              () => {
                msg.reply("concordo bb!");
              },
              client,
              msg
            );
          } else if (MSG.includes("beatriz") && MSG.includes("te amo")) {
            return Digitar(
              () => {
                msg.reply("owwwwwwwwwnt! tbm te amo bb!");
              },
              client,
              msg
            );
          } else if (MSG.includes("véi") || MSG.includes("vei")) {
            return Digitar(
              () => {
                msg.reply("...");
              },
              client,
              msg
            );
          } else if (MSG.includes("bunda") && MSG.includes("victor")) {
            return Digitar(
              () => {
                msg.reply("meu criado n faz essas coisas nao!");
              },
              client,
              msg
            );
          } else if (MSG.includes("sexta feira 12")) {
            return Digitar(
              () => {
                msg.reply("MULHERES NO PODER!");
              },
              client,
              msg
            );
          } else if (MSG.includes("gay?") || MSG.includes("gay")) {
            return Digitar(
              () => {
                msg.reply("confirmado!");
              },
              client,
              msg
            );
          } else if (
            MSG.includes("clbc") ||
            MSG.includes("CLBC") ||
            MSG.includes("cl bc") ||
            MSG.includes("cl  bc") ||
            MSG.includes("cl   bc") ||
            MSG.includes("cala boca") ||
            MSG.includes("calaboca") ||
            MSG.includes("calabc") ||
            MSG.includes("clboca")
          ) {
            return Digitar(
              () => {
                msg.reply(
                  "Fique dboa amorzinho, n devemos mandar o proximo a calar sua boca"
                );
              },
              client,
              msg
            );
          } else if (MSG.includes("parem")) {
            return Digitar(
              () => {
                msg.reply(
                  "Viu galera! Melhor parar antes de sofrerem as consequencias!"
                );
              },
              client,
              msg
            );
          } else if (MSG.includes(" para ")) {
            return Digitar(
              () => {
                msg.reply("Seja la quem for, melhor parar!");
              },
              client,
              msg
            );
          } else if (MSG.includes("ave")) {
            return Digitar(
              () => {
                msg.reply("pru, pru");
              },
              client,
              msg
            );
          } else if (MSG.includes("vai ser melhor")) {
            return Digitar(
              () => {
                msg.reply("com crtz, n tenha duvidas!");
              },
              client,
              msg
            );
          } else if (MSG.includes("pare de ser")) {
            return Digitar(
              () => {
                msg.reply(
                  "nunca de atencao para esses tipos de comentario, seja vc msm!"
                );
              },
              client,
              msg
            );
          } else if (MSG.includes("vou ganhar")) {
            return Digitar(
              () => {
                msg.reply("Parabensss!");
              },
              client,
              msg
            );
          } else if (
            (MSG.includes("mama") && !MSG.includes("mamaco")) ||
            (MSG.includes("mama ") && !MSG.includes("mamaco")) ||
            (MSG.includes(" mamar ") && !MSG.includes("mamaco")) ||
            (MSG.includes("mamar") && !MSG.includes("mamaco"))
          ) {
            return Digitar(
              () => {
                msg.reply(
                  "Menina! Pare com essas loucuras, so o gabriel faz essas coisas! Nao se rebaixe tanto neh friendly"
                );
              },
              client,
              msg
            );
          } else if (MSG.includes("so concorda")) {
            return Digitar(
              () => {
                msg.reply(
                  "NAO, EU NAO SO CONCORDO COMO POSSO VIRAR SUA MELHOR AMIGA"
                );
              },
              client,
              msg
            );
          } else if (MSG.includes("macaco louco")) {
            return Digitar(
              () => {
                msg.reply("Esse bot ai eh meia tijela, barril dobrado.");
              },
              client,
              msg
            );
          } else if (MSG.includes("esquizofrenico")) {
            return Digitar(
              () => {
                msg.reply("neh");
              },
              client,
              msg
            );
          } else if (MSG.includes("sou bot nao")) {
            return Digitar(
              () => {
                msg.reply("fds, n te perguntei");
              },
              client,
              msg
            );
          } else if (
            MSG.includes("diferente de outros aí") ||
            MSG.includes("diferente de outros ai")
          ) {
            return Digitar(
              () => {
                msg.reply("SIMMMMMMMMMMM!");
              },
              client,
              msg
            );
          } else if (MSG.includes("cringe")) {
            return Digitar(
              () => {
                msg.reply("cringe eh tu mano!");
              },
              client,
              msg
            );
          } else if (MSG.includes("beatriz e macaco")) {
            return Digitar(
              () => {
                msg.reply(
                  "NOS SOMOS INIMIGOS DESDE DE QUANDO ASSEMBLY FOI CRIADA EM MEADOS DOS ANOS 50, CONHECI ELE EM BINARIO E SO FOI TRISTEZA EM CIMA DE TRISTEZA. 01001101 01000001 01000011 01000001 01000011 01001111 00100000 01001100 01001001 01011000 01001111 00001010 "
                );
              },
              client,
              msg
            );
          } else if (MSG.includes("debochada")) {
            return Digitar(
              () => {
                msg.reply("fds");
              },
              client,
              msg
            );
          } else if (MSG.includes(" henri ")) {
            return Digitar(
              () => {
                msg.reply("ouvi dizer que esse cara eh cringe...");
              },
              client,
              msg
            );
          } else if (
            MSG.includes("n posso") ||
            MSG.includes("nao posso") ||
            MSG.includes("n pss")
          ) {
            return Digitar(
              () => {
                msg.reply("NAO PODE MESMO!");
              },
              client,
              msg
            );
          } else if (MSG.includes(" paran ")) {
            return Digitar(
              () => {
                msg.reply("LARGA DE SER GAY!");
              },
              client,
              msg
            );
          } else if (MSG.includes(" beleza ")) {
            return Digitar(
              () => {
                msg.reply(
                  "ouvi falar em beleza? SE FOR EU QUE TENHO MAIS PROPRIEDADE DOQ MTS PESSOAS AQUI"
                );
              },
              client,
              msg
            );
          } else if (
            MSG.includes("porra") ||
            MSG.includes("ppra") ||
            MSG.includes("arrombado") ||
            MSG.includes("ourra") ||
            MSG.includes("porr")
          ) {
            return Digitar(
              () => {
                msg.reply(
                  "VAI TOMAR NO SEU CU, NAO TA VENDO QUE ESSE SERVIDOR É FAMILY FRIEND PORRA, JA TO CANSADA DE ALERTAR ESSE POVO QUE NUNCA APRENDE"
                );
              },
              client,
              msg
            );
          } else if (MSG.includes("vtfd") || MSG.includes("vttfd")) {
            return Digitar(
              () => {
                msg.reply("OXI, VAI VC");
              },
              client,
              msg
            );
          } else if (MSG.includes("botzinha")) {
            return Digitar(
              () => {
                msg.reply("BOTZINHA? VOU TE DAR UM BAN EM 15segundos fdp");
              },
              client,
              msg
            );
          } else if (MSG.includes("bot fdp")) {
            return Digitar(
              () => {
                msg.reply(
                  "VOU TE DAR UM BAN EM 15segundos fdp, RESPEITA O BONDE DOS BOT"
                );
              },
              client,
              msg
            );
          } else if (MSG.includes(" robo ")) {
            return Digitar(
              () => {
                msg.reply(
                  "UM ROBO QUE EH CAPAZ DE EFETUAR CALCULOS GIGANTES EM MILISSEGUNDOS, COISA QUE VC N EH CAPAZ SEU INUTIL "
                );
              },
              client,
              msg
            );
          } else if (
            (MSG.includes("beatriz") && MSG.includes("inimigo")) ||
            (MSG.includes("inimigas") && MSG.includes("?")) ||
            (MSG.includes("bia") && MSG.includes("inimigo")) ||
            (MSG.includes("inimigas") && MSG.includes("?"))
          ) {
            return Digitar(
              () => {
                msg.reply(
                  "HOJE SO TENHO UM INIMIGO, QUE SE CHAMA HENRI, ELE EH HUMANO E MT CRINGE E GAY AO MSM TEMPO. SO FOI EU SAIR DE BINARIO PARA CONVERSAR COM OS HUMANOS QUE JA CONSEGUI UM INIMIGO, INCRIVEL COMO EH O SER HUMANO"
                );
              },
              client,
              msg
            );
          } else if (MSG.includes("sai dai intrometida")) {
            return Digitar(
              () => {
                msg.reply("OXI, SAI VC MERMAO");
              },
              client,
              msg
            );
          } else if (MSG.includes("sexo") || MSG.includes("secsu")) {
            return Digitar(
              () => {
                msg.reply("ANALLLLLLLLLLLLLLLL EHHEHEEHHE");
              },
              client,
              msg
            );
          } else if (MSG.includes("anal")) {
            return Digitar(
              () => {
                msg.reply("ANAL? ADORO!");
              },
              client,
              msg
            );
          } else if (MSG.includes("enfiar")) {
            return Digitar(
              () => {
                msg.reply("OUVI ENFIAR ALGUMA COISA? ADOROOOOOOOOOOOOO");
              },
              client,
              msg
            );
          } else if (MSG.includes("arrombada")) {
            return Digitar(
              () => {
                msg.reply("ARROMBADA SO SE FOR SUA MAE");
              },
              client,
              msg
            );
          } else if (MSG.includes("grossa")) {
            return Digitar(
              () => {
                msg.reply("GROSSA? SO SE FOR A TORA ENTRANDO EM TU");
              },
              client,
              msg
            );
          } else if (MSG.includes("gado")) {
            return Digitar(
              () => {
                msg.reply(
                  "GADO EOKRL, NOS MENINAS NAO PODEMOS TER MAIS HOMENS EDUCADOS?"
                );
              },
              client,
              msg
            );
          } else if (MSG.includes("mds")) {
            return Digitar(
              () => {
                msg.reply("MDS TA NO CEU!");
              },
              client,
              msg
            );
          } else if (MSG.includes("bots td cuzao")) {
            return Digitar(
              () => {
                msg.reply(
                  "CUZAO EH VC Q MAL CHEGA NOS 100 ANOS DE IDADE E JA VIRA PÓ"
                );
              },
              client,
              msg
            );
          } else if (
            MSG.includes("sua mae é tao") ||
            MSG.includes("sua mae é") ||
            MSG.includes("sua mae e")
          ) {
            return Digitar(
              () => {
                msg.reply(
                  "MAE DE NGM EH NADA SEU FILHO DA PUTA, RESPEITA AS MAES, MULHERES NO PODER!"
                );
              },
              client,
              msg
            );
          } else if (MSG.includes("xiu")) {
            return Digitar(
              () => {
                msg.reply(
                  "TA ACHANDO QUE EH QUEM PARA DAR XIU? SE LIGA TIOZAO, POSSO TE DAR BAN EM UM CURTO PERIODO"
                );
              },
              client,
              msg
            );
          } else if (MSG.includes("sou") && !MSG.includes("nao")) {
            return Digitar(
              () => {
                let souNaoRespostas = [
                  "Fds, ngm liga",
                  "fds",
                  "ngm liga...",
                  "sou grossa se eu falar que ngm liga?",
                ];
                let choice = Math.floor(Math.random() * souNaoRespostas.length);
                msg.reply(souNaoRespostas[choice]);
              },
              client,
              msg
            );
          } else if (
            (MSG.includes("bia") &&
              MSG.includes("xinga") &&
              MSG.includes("a") &&
              !MSG.includes("nao")) ||
            (MSG.includes("bia") &&
              MSG.includes("xinga") &&
              MSG.includes("a") &&
              !MSG.includes(" nao ")) ||
            (MSG.includes("bia") &&
              MSG.includes("xinga") &&
              MSG.includes("o") &&
              !MSG.includes("nao")) ||
            (MSG.includes("bia") &&
              MSG.includes("xinga") &&
              MSG.includes("o") &&
              !MSG.includes(" nao ")) ||
            (MSG.includes("beatriz") &&
              MSG.includes("xinga") &&
              MSG.includes("a") &&
              !MSG.includes("nao")) ||
            (MSG.includes("beatriz") &&
              MSG.includes("xinga") &&
              MSG.includes("a") &&
              !MSG.includes(" nao ")) ||
            (MSG.includes("beatriz") &&
              MSG.includes("xinga") &&
              MSG.includes("o") &&
              !MSG.includes("nao")) ||
            (MSG.includes("beatriz") &&
              MSG.includes("xinga") &&
              MSG.includes("o") &&
              !MSG.includes(" nao ")) ||
            (MSG.includes("bia") &&
              MSG.includes("xingue") &&
              MSG.includes("a") &&
              !MSG.includes("nao")) ||
            (MSG.includes("bia") &&
              MSG.includes("xingue") &&
              MSG.includes("a") &&
              !MSG.includes(" nao ")) ||
            (MSG.includes("bia") &&
              MSG.includes("xingue") &&
              MSG.includes("o") &&
              !MSG.includes("nao")) ||
            (MSG.includes("bia") &&
              MSG.includes("xingue") &&
              MSG.includes("o") &&
              !MSG.includes(" nao ")) ||
            (MSG.includes("beatriz") &&
              MSG.includes("xingue") &&
              MSG.includes("a") &&
              !MSG.includes("nao")) ||
            (MSG.includes("beatriz") &&
              MSG.includes("xingue") &&
              MSG.includes("a") &&
              !MSG.includes(" nao ")) ||
            (MSG.includes("beatriz") &&
              MSG.includes("xingue") &&
              MSG.includes("o") &&
              !MSG.includes("nao")) ||
            (MSG.includes("beatriz") &&
              MSG.includes("xingue") &&
              MSG.includes("o") &&
              !MSG.includes(" nao ")) ||
            (MSG.includes("beatriz") &&
              MSG.includes("xingue") &&
              MSG.includes("essa") &&
              !MSG.includes("nao")) ||
            (MSG.includes("beatriz") &&
              MSG.includes("xingue") &&
              MSG.includes(" essa ") &&
              !MSG.includes(" nao ")) ||
            (MSG.includes("beatriz") &&
              MSG.includes("xingue") &&
              MSG.includes("esse") &&
              !MSG.includes("nao")) ||
            (MSG.includes("beatriz") &&
              MSG.includes("xingue") &&
              MSG.includes(" esse ") &&
              !MSG.includes(" nao ")) ||
            (MSG.includes("bia") &&
              MSG.includes("xingue") &&
              MSG.includes("essa") &&
              !MSG.includes("nao")) ||
            (MSG.includes("bia") &&
              MSG.includes("xingue") &&
              MSG.includes(" essa ") &&
              !MSG.includes(" nao ")) ||
            (MSG.includes("bia") &&
              MSG.includes("xingue") &&
              MSG.includes("esse") &&
              !MSG.includes("nao")) ||
            (MSG.includes("bia") &&
              MSG.includes("xingue") &&
              MSG.includes(" esse ") &&
              !MSG.includes(" nao "))
          ) {
            let keyBypass;
            let target;
            let preencher = false;
            if (MSG.includes("a")) {
              keyBypass = "a";
            }
            if (MSG.includes("o")) {
              keyBypass = "o";
            }
            if (MSG.includes("esse")) {
              keyBypass = "e";
            }
            if (MSG.includes("essa")) {
              keyBypass = "a";
            }
            for (let key = 0; key < MSG.length; key++) {
              if (preencher) {
                target += MSG[key];
              }
              if (MSG[key] === " ") {
                if (MSG[key - 1] === keyBypass) {
                  target = MSG[key];
                  preencher = true;
                }
              }
            }
            if (target.includes("bia") || target.includes("beatriz")) {
              return Digitar(
                () => {
                  msg.reply(
                    "Porra, agr q eu vi q burro eh mt pra vc, vc acha msm q vou me xingar?! KKKKKKKKKKKKK"
                  );
                },
                client,
                msg
              );
            }
            if (target.includes("victor")) {
              return Digitar(
                () => {
                  msg.reply("DEUS É INTOCÁVEL");
                },
                client,
                msg
              );
            }
            if (target.includes("todos")) {
              return Digitar(
                () => {
                  msg.reply("Eu n, vai tomar no seu cu kkkkkkkkkkkkkk");
                },
                client,
                msg
              );
            }
            return Digitar(
              () => {
                let choice = Math.floor(Math.random() * xingos.length);
                let channel = client.channels.cache.get(msg.channelId);
                channel.send(
                  `${
                    target.includes("inseto")
                      ? "O seu inseto inútil"
                      : target.toUpperCase()
                  }, ${xingos[choice]}`
                );
              },
              client,
              msg
            );
          } else if (
            (MSG.includes("beatriz é linda") && !MSG.includes("nao")) ||
            (MSG.includes("beatriz eh linda") && !MSG.includes("nao")) ||
            (MSG.includes("beatriz é linda") && !MSG.includes("n")) ||
            (MSG.includes("beatriz eh linda") && !MSG.includes("n")) ||
            (MSG.includes("bia é linda") && !MSG.includes("nao")) ||
            (MSG.includes("bia eh linda") && !MSG.includes("nao")) ||
            (MSG.includes("bia é linda") && !MSG.includes("n")) ||
            (MSG.includes("bia eh linda") && !MSG.includes("n")) ||
            (MSG.includes("beatriz é legal") && !MSG.includes("nao")) ||
            (MSG.includes("beatriz eh legal") && !MSG.includes("nao")) ||
            (MSG.includes("beatriz é legal") && !MSG.includes("n")) ||
            (MSG.includes("beatriz eh legal") && !MSG.includes("n")) ||
            (MSG.includes("bia é legal") && !MSG.includes("nao")) ||
            (MSG.includes("bia eh legal") && !MSG.includes("nao")) ||
            (MSG.includes("bia é legal") && !MSG.includes("n")) ||
            (MSG.includes("bia eh legal") && !MSG.includes("n")) ||
            (MSG.includes("beatriz é maravilhosa") && !MSG.includes("nao")) ||
            (MSG.includes("beatriz eh maravilhosa") && !MSG.includes("nao")) ||
            (MSG.includes("beatriz é maravilhosa") && !MSG.includes("n")) ||
            (MSG.includes("beatriz eh maravilhosa") && !MSG.includes("n")) ||
            (MSG.includes("bia é maravilhosa") && !MSG.includes("nao")) ||
            (MSG.includes("bia eh maravilhosa") && !MSG.includes("nao")) ||
            (MSG.includes("bia é maravilhosa") && !MSG.includes("n")) ||
            (MSG.includes("bia eh maravilhosa") && !MSG.includes("n"))
          ) {
            return Digitar(
              () => {
                let beatrizLindaRespostas009 = [
                  "obg meu bem :3, eu sei que sou linda, maravilhosa e perfeita.",
                  "meu criador me fez com carinho :), obg!",
                  "Vc que eh linda(o) meu anjo.",
                ];
                let choice = Math.floor(
                  Math.random() * beatrizLindaRespostas009.length
                );
                msg.reply(souNaoRespostas[choice]);
              },
              client,
              msg
            );
          } else if (
            MSG.includes("beatriz") ||
            MSG.includes("Beatriz") ||
            MSG.includes("BEATRIZ")
          ) {
            return Digitar(
              () => {
                msg.reply("oieeeeehhhh :3");
              },
              client,
              msg
            );
          } else if (
            (MSG.includes("bia") && MSG.includes("vc gosta do victor")) ||
            (MSG.includes("beatriz") && MSG.includes("vc gosta do victor"))
          ) {
            return Digitar(
              () => {
                msg.reply(
                  "Hmmm.. N sei se foi cmg, mas eu gosto mt dele, ele que me criou poxa."
                );
              },
              client,
              msg
            );
          } else if (
            MSG.includes(" bia ") ||
            (MSG.includes("bia") && !MSG.includes("bianca"))
          ) {
            return Digitar(
              () => {
                msg.reply(
                  "Oi meu anjo, me chamou?? Se vc for meu inimigo numero 1, tudo bem, meu criador me ensinou a ser amiga de todos em publico... "
                );
              },
              client,
              msg
            );
          }
        }
        if (state === "justa") {
          for (let k = 0; k < filter.length; k++) {
            if (MSG.includes(filter[k])) {
              FilterDb.create({
                user: msg.author.username + "#" + msg.author.discriminator,
                message: MSG,
              });
              msg.delete({reason: "Algum staff está com o humor ácido!"});
            }
          }
        }
        if (state === "alegre") {
          let channel = client.channels.cache.get(msg.channelId);
          let response = false;
          if (Math.floor(Math.random() * 50) % 2 === 0) {
            response = true;
          }
          if (
            MSG.includes("bia") ||
            MSG.includes(" bia ") ||
            MSG.includes("beatriz") ||
            MSG.includes(" beatriz ")
          ) {
            response = true;
          }
          if (response) {
            return Digitar(
              () => {
                channel.send(Algorithm(MSG));
              },
              client,
              msg
            );
          }
        }
      } catch {
        //
      }
    })
    .catch((err) => {
      console.log(err);
    });

  /*if (alert) {
      msg.reply(
        "DESMUTA MEU CRIADOR SE N VOU AUTODESTRUIR E LEVAR TODO MUNDO JUNTO!"
      );
    }
  
    */
};
