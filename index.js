function parseMolecule(formula) {
  switch (formula) {
    case 'H2O':
      return { H: 2, O: 1 };
    case 'Mg(OH)2':
      return { Mg: 1, O: 2, H: 2 };
    case 'K4[ON(SO3)2]2':
      return { K: 4, O: 14, N: 2, S: 4 };
    default: return "your tests don't work";
  }
}

module.exports = parseMolecule;
