
For the Sunday Toy Problem Heroes. Here is a little brainteaser for you:

Convert molecules to atoms.

For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object.

For example:

const water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

const magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

const fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}

As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.

Write your code in index.js, check out the tests and mocks in the test folder and ofcourse
test your work with npm t. There is no time limit.

Good Luck! Удачи! Viel Glück! Held og lykke!


