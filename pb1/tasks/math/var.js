var tasks = [
	'1.3*(x + 1) - 2;			',
	'1 / (3 * x);                ',
	'2 / (3 * x + 3);            ',
	'- 2 / (4 * x - 1) - 1;      ',
	'x^2 - 5;                    ',
	'- x^2 + 3;                  ',
	'x^1.5 + 2 * x - 3;          ',
	'(x + 3)^3;                  ',
	'- (x - 1)^3 + 2;            ',
	'sqrt(x + 5) - 7;            ',
	'-2 * sqrt(x + 3);           ',
	'2 * sin(0.5 * x);           ',
	'3 * sin(2 * x) - 2;         ',
	'sin(x^2) + cos(x)^2;        ',
	'1.5 * cos(0.2 * x);         ',
	'3.5 * cos(1.5 * x - 2) + 3; ',
	'tg(x^2) + sin(2 * x)^2;     ',
	'cos(x^2) + sin(2 * x)^2 + 1;',
	'0.5 * tg(x + 2);            ',
	'tg(x + 2) + 2;              ',
	'0.3 * tg(x) + 2;            ',
	'0.5 * ctg(x - 5);           ',
	'ctg(x - 5) - 5;             ',
	'ctg(x - 5) - sin(x);        ',
	'0.4 * ctg(x) - 2;           '
];

var variant_id = parseInt($var);
var f2_shift = 13;

[
	tasks[variant_id % tasks.length],
	tasks[(variant_id + f2_shift) % tasks.length]
];