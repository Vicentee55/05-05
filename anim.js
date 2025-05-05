var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "OIIIE MEU AMOR", time: 8 },
  { text: "Hoje nesse dia tao especial", time: 10 },
  { text: "Quero te dedicar esse presente que eu mesmo fiz :)", time: 12 },
  { text: "Eu te amo profundamente", time: 14 },
  { text: "Seu carinho é meu lugar seguro.", time: 15 },
  { text: "Seu abraço é minha casa.", time: 22 },
  { text: "Você é meu maior orgulho.", time: 29 },
  { text: "Minha princesa, minha gatinha.", time: 36 },
  { text: "Você deixou tudo mais bonito.", time: 43 },
  { text: "Seu olhar acalma meu mundo.", time: 50 },
  { text: "Cada detalhe seu me encanta.", time: 57 },
  { text: "A melhor coisa do mundo é te amar.", time: 64 },
  { text: "Você me cuida como ninguém.", time: 71 },
  { text: "E me faz sorrir todos os dias.", time: 78 },
  { text: "Eu te amo mais a cada dia.", time: 85 },
  { text: "Seu abraço é amor puro.", time: 92 },
  { text: "Seu sorriso é minha paz.", time: 99 },
  { text: "Seus olhos são o meu mundinho", time: 106 },
  { text: "Fomos feitos um pro outro.", time: 113 },
  { text: "O destino sabia da gente.", time: 120 },
  { text: "Com você, tudo faz sentido.", time: 127 },
  { text: "Hoje é seu dia, meu amor.", time: 134 },
  { text: "E voce é o meu maior presente", time: 141 },
  { text: "Vamos viver muitos momentos juntinhos.", time: 148 },
  { text: "Construindo nossa história de amor.", time: 155 },
  { text: "Feliz aniversário, minha ursinha!", time: 162 },
  { text: "Eu te amo inteiramente, cada pedacinho viu", time: 165 },
  { text: "Novamente Obrigado por ser tao perfeita comigo!", time: 166 },
    { text: "Voce é a minha vida!", time: 167 },
    { text: "Vo explodir de tanto amor", time: 168 },
  { text: "Eu te amo com a minha alma 💛", time: 170 },  
];

lyricsData.forEach((line, index) => {
  setTimeout(() => {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = line.text;

    setTimeout(() => {
      lyrics.style.opacity = 1;
    }, 50);

  }, line.time * 1000);
});
