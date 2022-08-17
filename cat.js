let colors = {
  base: '\x1b[38;5;135m',
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  darkgreen: '\x1b[38;5;29m',
  whitegreen: '\x1b[38;5;42m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  orange: '\x1b[38;5;208m',
  grey: '\x1b[38;5;240m',
  purple: '\x1b[38;5;99m',
};

let backgroundColors = {
  black: '\x1b[40m',
  red: '\x1b[41m',
  green: '\x1b[42m',
  yellow: '\x1b[43m',
  blue: '\x1b[44m',
  magenta: '\x1b[45m',
  cyan: '\x1b[46m',
  white: '\x1b[47m',
};

let Cat = function (name, pronoun, color, age) {
  this.name = name;
  this.pronoun = pronoun;
  this.color = color;
  this.age = age;
};

let Rules = function (text, severity) {
  this.text = text;
  this.severity = severity;
};

let members = [
  new Cat('n3k0', 'elle', `${colors.white}White`, 16),
  new Cat('SANAGO', 'il', `${colors.cyan}Cyan`, 18),
  new Cat('Alpha', 'il', `${colors.black}Black`, 16),
  new Cat('Kermit', 'il', `${colors.green}Green`, 14),
  new Cat('c2h5', 'il', `${colors.blue}Blue`, 16),
  new Cat('Archive', 'il', `${colors.green}Green`, 16),
  new Cat('Scott', 'iel', `${colors.grey}Black`, 48),
  new Cat('Yuxi', 'il', `${colors.yellow}Yellow`, 16),
  new Cat('Yvain', 'il', `${colors.purple}Purple`, 16),
  new Cat('Tetsu', 'il', `${colors.grey}Black`, 20),
  new Cat('Shiir0z', 'il', `${colors.orange}Orange`, 17),
  new Cat('Daegatoya', 'elle', `${colors.cyan}Cyan`, 17),
  new Cat('0nizuk4', 'il', `${colors.white}White`, 19),
];

let rules = [
  new Rules('Le debit est interdit', `${colors.red}high`),
  new Rules("L'amplification est interdit", `${colors.red}high`),
  new Rules(
    "Le partage d'informations privées liée a une personne est interdit",
    `${colors.red}high`
  ),
  new Rules('Pas de flag sharing', `${colors.orange}normal`),
  new Rules(
    'Les pdp et/ou pseudo offensant sont interdit',
    `${colors.green}low`
  ),
];
for (let cats in members) {
  console.log(
    `${colors.base}*----------------------------------------------------------* \n`
  );
  console.log(
    `${colors.magenta}${members[cats].name}${colors.base} est ${members[cats].color}${colors.base}, ${colors.magenta}${members[cats].pronoun}${colors.base} a ${colors.magenta}${members[cats].age} ans${colors.base}\n`
  );
}

for (let cats in rules) {
  console.log(
    `${colors.base}*----------------------------------------------------------*`
  );
  console.log(
    `${colors.darkgreen}rule : ${colors.whitegreen}${rules[cats].text} : ${colors.darkgreen}severity : ${rules[cats].severity}`
  );
}
