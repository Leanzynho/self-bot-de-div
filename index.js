const Discord = require("discord.js");
const config = require ("./config.json");
const fs = require("fs");
const client = new Discord.Client();

const DONO = "481829760369033228"

const prefixo = "p!"

client.on("guildDelete", (guild) => {
  console.log("Fui removido de:", guild.name)
})
client.on("ready", () => {
  
 
console.log(`Estou com: ${client.users.size} nome ${client.user.tag} usuários ${client.user.id} usuários, em ${client.channels.size} canais com ${client.guilds.size} servidores.`);


  client.user.setStatus("offline")
});/*
client.on("guildMemberAdd", member => {
  var i = 0
  member.send("**Parabéns você ganhou um gift-card, entre aqui para recebe-lo:** https://discord.gg/bs9REhYxsS")
  console.log(`O Membro ${member.user.tag} Recebeu a mensagem quando entrou no servidor!`)
})*/
client.on("guildCreate", guild => { 
 console.log(`Adicionados Aqui: ${guild.name}`)
})
/*
client.on("guildMemberAdd", member => {
  if(member.guild.id == "779805853506469888") return console.log("Entrou na PDV ENTAO N");
  var channel = client.guild.channels.get("801475981072138291")
  channel.send("Bem-vindo ao servidor", member.user)
  console.log("Entrou no servidor!", member.tag)

})

*/
//STREAMING = Transmitindo
//LISTENING = Ouvindo
//PLAYING = Jogando
//WATCHING = Assistindo


var prefix = config.prefix || "p!" // caso n teja prefix
client.on("message", message => {
  if (message.author.bot) return; // retorna caso seja bot
  if (!message.content.startsWith(prefix)) return; // retorna caso não comece com o prefix
  let command = message.content.split(" ")[0]; // Pegue toda a msg
  command = command.slice(prefix.length); // retira o prefix

  let args = message.content.split(" ").slice(1); // isso aqui é inutil ;-; e só para fazer os comandos de mostrar quem ta usando e oq

  try { // Irá Tentar executar
    let commandFile = require(`./comandos/${command}.js`); // Procura o arquivo
    commandFile.run(client, message, args); // Executa
  } catch (err) { // Caso não for
    console.error(err); // Da erro no console
  } // Fechamentos
});

client.login(config.token);
