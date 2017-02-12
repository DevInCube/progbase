var tasks = [
	'F(x) = 1.3*(x + 1) - 2;			',
	'F(x) = 1 / (3 * x);                ',
	'F(x) = 2 / (3 * x + 3);            ',
	'F(x) = - 2 / (4 * x - 1) - 1;      ',
	'F(x) = x^2 - 5;                    ',
	'F(x) = - x^2 + 3;                  ',
	'F(x) = x^1.5 + 2 * x - 3;          ',
	'F(x) = (x + 3)^3;                  ',
	'F(x) = - (x - 1)^3 + 2;            ',
	'F(x) = sqrt(x + 5) - 7;            ',
	'F(x) = -2 * sqrt(x + 3);           ',
	'F(x) = 2 * sin(0.5 * x);           ',
	'F(x) = 3 * sin(2 * x) - 2;         ',
	'F(x) = sin(x^2) + cos(x)^2;        ',
	'F(x) = 1.5 * cos(0.2 * x);         ',
	'F(x) = 3.5 * cos(1.5 * x - 2) + 3; ',
	'F(x) = tg(x^2) + sin(2 * x)^2;     ',
	'F(x) = cos(x^2) + sin(2 * x)^2 + 1;',
	'F(x) = 0.5 * tg(x + 2);            ',
	'F(x) = tg(x + 2) + 2;              ',
	'F(x) = 0.3 * tg(x) + 2;            ',
	'F(x) = 0.5 * ctg(x - 5);           ',
	'F(x) = ctg(x - 5) - 5;             ',
	'F(x) = ctg(x - 5) - sin(x);        ',
	'F(x) = 0.4 * ctg(x) - 2;           '
];

[
	'`' + tasks[(parseInt($var) + 2) % tasks.length] + '`',
	'`' + tasks[(parseInt($var) + 12) % tasks.length] + '`'
];