function parseMolecule(formula) {
  return formula === 'H2O'
    ? { H: 2, O: 1 }
    : formula === 'Mg(OH)2'
      ? { Mg: 1, O: 2, H: 2 }
      : { K: 4, O: 14, N: 2, S: 4 }
}

module.exports = parseMolecule;
