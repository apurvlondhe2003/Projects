/** @format */

document.addEventListener("DOMContentLoaded", () => {
	const periodicTable = [
		{ name: "Hydrogen", symbol: "H", atomicNumber: 1 },
		{ name: "Helium", symbol: "He", atomicNumber: 2 },
		{ name: "Lithium", symbol: "Li", atomicNumber: 3 },
		{ name: "Beryllium", symbol: "Be", atomicNumber: 4 },
		{ name: "Boron", symbol: "B", atomicNumber: 5 },
		{ name: "Carbon", symbol: "C", atomicNumber: 6 },
		{ name: "Nitrogen", symbol: "N", atomicNumber: 7 },
		{ name: "Oxygen", symbol: "O", atomicNumber: 8 },
		{ name: "Fluorine", symbol: "F", atomicNumber: 9 },
		{ name: "Neon", symbol: "Ne", atomicNumber: 10 },
		{ name: "Sodium", symbol: "Na", atomicNumber: 11 },
		{ name: "Magnesium", symbol: "Mg", atomicNumber: 12 },
		{ name: "Aluminum", symbol: "Al", atomicNumber: 13 },
		{ name: "Silicon", symbol: "Si", atomicNumber: 14 },
		{ name: "Phosphorus", symbol: "P", atomicNumber: 15 },
		{ name: "Sulfur", symbol: "S", atomicNumber: 16 },
		{ name: "Chlorine", symbol: "Cl", atomicNumber: 17 },
		{ name: "Argon", symbol: "Ar", atomicNumber: 18 },
		{ name: "Potassium", symbol: "K", atomicNumber: 19 },
		{ name: "Calcium", symbol: "Ca", atomicNumber: 20 },
		{ name: "Scandium", symbol: "Sc", atomicNumber: 21 },
		{ name: "Titanium", symbol: "Ti", atomicNumber: 22 },
		{ name: "Vanadium", symbol: "V", atomicNumber: 23 },
		{ name: "Chromium", symbol: "Cr", atomicNumber: 24 },
		{ name: "Manganese", symbol: "Mn", atomicNumber: 25 },
		{ name: "Iron", symbol: "Fe", atomicNumber: 26 },
		{ name: "Cobalt", symbol: "Co", atomicNumber: 27 },
		{ name: "Nickel", symbol: "Ni", atomicNumber: 28 },
		{ name: "Copper", symbol: "Cu", atomicNumber: 29 },
		{ name: "Zinc", symbol: "Zn", atomicNumber: 30 },
		{ name: "Gallium", symbol: "Ga", atomicNumber: 31 },
		{ name: "Germanium", symbol: "Ge", atomicNumber: 32 },
		{ name: "Arsenic", symbol: "As", atomicNumber: 33 },
		{ name: "Selenium", symbol: "Se", atomicNumber: 34 },
		{ name: "Bromine", symbol: "Br", atomicNumber: 35 },
		{ name: "Krypton", symbol: "Kr", atomicNumber: 36 },
		{ name: "Rubidium", symbol: "Rb", atomicNumber: 37 },
		{ name: "Strontium", symbol: "Sr", atomicNumber: 38 },
		{ name: "Yttrium", symbol: "Y", atomicNumber: 39 },
		{ name: "Zirconium", symbol: "Zr", atomicNumber: 40 },
		{ name: "Niobium", symbol: "Nb", atomicNumber: 41 },
		{ name: "Molybdenum", symbol: "Mo", atomicNumber: 42 },
		{ name: "Technetium", symbol: "Tc", atomicNumber: 43 },
		{ name: "Ruthenium", symbol: "Ru", atomicNumber: 44 },
		{ name: "Rhodium", symbol: "Rh", atomicNumber: 45 },
		{ name: "Palladium", symbol: "Pd", atomicNumber: 46 },
		{ name: "Silver", symbol: "Ag", atomicNumber: 47 },
		{ name: "Cadmium", symbol: "Cd", atomicNumber: 48 },
		{ name: "Indium", symbol: "In", atomicNumber: 49 },
		{ name: "Tin", symbol: "Sn", atomicNumber: 50 },
		{ name: "Antimony", symbol: "Sb", atomicNumber: 51 },
		{ name: "Tellurium", symbol: "Te", atomicNumber: 52 },
		{ name: "Iodine", symbol: "I", atomicNumber: 53 },
		{ name: "Xenon", symbol: "Xe", atomicNumber: 54 },
		{ name: "Cesium", symbol: "Cs", atomicNumber: 55 },
		{ name: "Barium", symbol: "Ba", atomicNumber: 56 },
		{ name: "Lanthanum", symbol: "La", atomicNumber: 57 },
		{ name: "Cerium", symbol: "Ce", atomicNumber: 58 },
		{
			name: "Praseodymium",
			symbol: "Pr",
			atomicNumber: 59,
		},
		{ name: "Neodymium", symbol: "Nd", atomicNumber: 60 },
		{ name: "Promethium", symbol: "Pm", atomicNumber: 61 },
		{ name: "Samarium", symbol: "Sm", atomicNumber: 62 },
		{ name: "Europium", symbol: "Eu", atomicNumber: 63 },
		{ name: "Gadolinium", symbol: "Gd", atomicNumber: 64 },
		{ name: "Terbium", symbol: "Tb", atomicNumber: 65 },
		{ name: "Dysprosium", symbol: "Dy", atomicNumber: 66 },
		{ name: "Holmium", symbol: "Ho", atomicNumber: 67 },
		{ name: "Erbium", symbol: "Er", atomicNumber: 68 },
		{ name: "Thulium", symbol: "Tm", atomicNumber: 69 },
		{ name: "Ytterbium", symbol: "Yb", atomicNumber: 70 },
		{ name: "Lutetium", symbol: "Lu", atomicNumber: 71 },
		{ name: "Hafnium", symbol: "Hf", atomicNumber: 72 },
		{ name: "Tantalum", symbol: "Ta", atomicNumber: 73 },
		{ name: "Tungsten", symbol: "W", atomicNumber: 74 },
		{ name: "Rhenium", symbol: "Re", atomicNumber: 75 },
		{ name: "Osmium", symbol: "Os", atomicNumber: 76 },
		{ name: "Iridium", symbol: "Ir", atomicNumber: 77 },
		{ name: "Platinum", symbol: "Pt", atomicNumber: 78 },
		{ name: "Gold", symbol: "Au", atomicNumber: 79 },
		{ name: "Mercury", symbol: "Hg", atomicNumber: 80 },
		{ name: "Thallium", symbol: "Tl", atomicNumber: 81 },
		{ name: "Lead", symbol: "Pb", atomicNumber: 82 },
		{ name: "Bismuth", symbol: "Bi", atomicNumber: 83 },
		{ name: "Polonium", symbol: "Po", atomicNumber: 84 },
		{ name: "Astatine", symbol: "At", atomicNumber: 85 },
		{ name: "Radon", symbol: "Rn", atomicNumber: 86 },
		{ name: "Francium", symbol: "Fr", atomicNumber: 87 },
		{ name: "Radium", symbol: "Ra", atomicNumber: 88 },
		{ name: "Actinium", symbol: "Ac", atomicNumber: 89 },
		{ name: "Thorium", symbol: "Th", atomicNumber: 90 },
		{
			name: "Protactinium",
			symbol: "Pa",
			atomicNumber: 91,
		},
		{ name: "Uranium", symbol: "U", atomicNumber: 92 },
		{ name: "Neptunium", symbol: "Np", atomicNumber: 93 },
		{ name: "Plutonium", symbol: "Pu", atomicNumber: 94 },
		{ name: "Americium", symbol: "Am", atomicNumber: 95 },
		{ name: "Curium", symbol: "Cm", atomicNumber: 96 },
		{ name: "Berkelium", symbol: "Bk", atomicNumber: 97 },
		{ name: "Californium", symbol: "Cf", atomicNumber: 98 },
		{ name: "Einsteinium", symbol: "Es", atomicNumber: 99 },
		{ name: "Fermium", symbol: "Fm", atomicNumber: 100 },
		{
			name: "Mendelevium",
			symbol: "Md",
			atomicNumber: 101,
		},
		{ name: "Nobelium", symbol: "No", atomicNumber: 102 },
		{ name: "Lawrencium", symbol: "Lr", atomicNumber: 103 },
		{
			name: "Rutherfordium",
			symbol: "Rf",
			atomicNumber: 104,
		},
		{ name: "Dubnium", symbol: "Db", atomicNumber: 105 },
		{ name: "Seaborgium", symbol: "Sg", atomicNumber: 106 },
		{ name: "Bohrium", symbol: "Bh", atomicNumber: 107 },
		{ name: "Hassium", symbol: "Hs", atomicNumber: 108 },
		{ name: "Meitnerium", symbol: "Mt", atomicNumber: 109 },
		{
			name: "Darmstadtium",
			symbol: "Ds",
			atomicNumber: 110,
		},
		{
			name: "Roentgenium",
			symbol: "Rg",
			atomicNumber: 111,
		},
		{
			name: "Copernicium",
			symbol: "Cn",
			atomicNumber: 112,
		},
		{ name: "Nihonium", symbol: "Nh", atomicNumber: 113 },
		{ name: "Flerovium", symbol: "Fl", atomicNumber: 114 },
		{ name: "Moscovium", symbol: "Mc", atomicNumber: 115 },
		{
			name: "Livermorium",
			symbol: "Lv",
			atomicNumber: 116,
		},
		{ name: "Tennessine", symbol: "Ts", atomicNumber: 117 },
		{ name: "Oganesson", symbol: "Og", atomicNumber: 118 },
	];

	// Function to create a periodic table element
	const createPeriodicElement = (symbol, atomicNumber, name) => {
		const element = document.createElement("div");
		element.classList.add("element");
		element.innerText = symbol;
		document.querySelector(".mainBody").append(element);

		element.setAttribute("data-atomic-number", atomicNumber);
		element.setAttribute("data-element-name", name);

		return element;
	};

	// Event handler for periodic table element click
	const handleElementClick = (event) => {
		const target = event.target;
		if (target.classList.contains("element")) {
			const atomicNumber =
				target.getAttribute("data-atomic-number");
			const elementName = target.getAttribute("data-element-name");

			alert(
				`Atomic Number: ${atomicNumber} \nElement Name: ${elementName}`
			);
		}
	};

	// Function to initialize the periodic table
	const initializePeriodicTable = () => {
		// Create 50 periodic table elements
		periodicTable.map((currElem) => {
			createPeriodicElement(
				`${currElem.symbol}`,
				`${currElem.atomicNumber}`,
				`${currElem.name}`
			);
		});
	};
	// Add event delegation to the container
	document
		.querySelector(".mainBody")
		.addEventListener("click", handleElementClick);

	// Initialize the periodic table
	initializePeriodicTable();
});
