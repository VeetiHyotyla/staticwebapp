document.getElementById("showAnswers").addEventListener("click", showAnswers);

function showAnswers() {
  const answers = [
    "Virtuaalikone, joka mahdollistaa palvelinten ja sovellusten ajamisen pilvessä.",
    "Tallennusratkaisu, johon voi säilöä tiedostoja, tietoja ja varmuuskopioita.",
    "Tarjoaa käyttäjähallinnan ja kirjautumisen pilvipalveluihin.",
    "Auttaa kehitystiimejä hallitsemaan projekteja, koodia ja CI/CD-putkia.",
    "Azure CLI:n avulla voi hallita resursseja komentoriviltä."
  ];

  const answersList = document.getElementById("answers");
  answersList.innerHTML = "<h2>Vastaukset:</h2><ol>" +
    answers.map(answer => `<li>${answer}</li>`).join("") +
    "</ol>";
}
