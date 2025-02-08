const countries = {
    A: ["Afghanistan", "Algeria", "Argentina", "Australia"],
    B: ["Brazil", "Belgium", "Bangladesh", "Bulgaria"],
    C: ["Canada", "China", "Colombia", "Chile"],
    D: ["Denmark", "Djibouti", "Dominican Republic", "Democratic Republic of the Congo"],
    E: ["Egypt", "Ethiopia", "Estonia", "Ecuador"],
    F: ["France", "Finland", "Fiji", "Falkland Islands"],
    G: ["Germany", "Greece", "Gabon", "Guatemala"],
    H: ["Hungary", "Honduras", "Haiti", "Honduras"],
    I: ["India", "Indonesia", "Ireland", "Italy"],
    J: ["Japan", "Jordan", "Jamaica", "Jersey"],
    K: ["Kenya", "Kuwait", "Kazakhstan", "Korea"],
    L: ["Lebanon", "Latvia", "Lesotho", "Luxembourg"],
    M: ["Mexico", "Morocco", "Malaysia", "Mali"],
    N: ["Nigeria", "Norway", "Nepal", "Netherlands"],
    O: ["Oman", "Oman", "Oslo", "Ottoman Empire"],
    P: ["Pakistan", "Poland", "Peru", "Portugal"],
    Q: ["Qatar", "Quebec", "Quetta", "Quirinus"],
    R: ["Russia", "Romania", "Rwanda", "Reunion"],
    S: ["Spain", "Sweden", "South Africa", "Singapore"],
    T: ["Turkey", "Thailand", "Tunisia", "Tanzania"],
    U: ["USA", "Ukraine", "Uruguay", "Uganda"],
    V: ["Vietnam", "Venezuela", "Vanuatu", "Vatican City"],
    W: ["Wales", "Western Sahara", "Wellington", "Wallis and Futuna"],
    X: ["Xenomania", "Xenia", "Xerox", "Xian"],
    Y: ["Yemen", "Yugoslavia", "Yemen", "Yukon"],
    Z: ["Zambia", "Zimbabwe", "Zaire", "Zanzibar"]
  };
  document.addEventListener('keydown', (event) => {
    let key = event.key.toUpperCase();
    if (countries[key]) {
      let randomCountry = countries[key][Math.floor(Math.random() * countries[key].length)];
      document.getElementById('countryDisplay').innerText = randomCountry;
    }
  });