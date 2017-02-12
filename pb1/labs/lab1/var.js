var variant = parseInt($var);
var groupnum = ($group && ($group.length > 1) && !isNaN(parseInt($group[1]))) ? parseInt($group[1]) : 0;
var n0 = parseInt($var[1]);
var n1 = parseInt($var[0]);

var task1a1 = [
    '$\\Large{' + n0 + ' \\times y + \\frac{z}{x}}$',
    '$\\Large{\\frac{y}{' + (n0 + 1) + '\\times|x+y|}}$'
];

var task1a2 = [
    '$\\Large{(x+' + n1 + ')^\\frac{1}{|sin(y)|}}$',
    '$\\Large{\\sqrt{|\\frac{cos(y)}{sin(x)}+' + n1 + '|}}$',
    '$\\Large{(' + n1 + '+sin(y))^{cos(x)/z+|x-y|}}$'
];


var task3 = [
	'$\\Large{\\frac {' + (n0 + 3) + '\\times\\pi\\times\\cos(' + (n1 + 2) + '\\times a \\times b)}{a}}$',
	'$\\Large{\\frac {\\pi\\times(a + b) \\bmod '+ (n0 + n1 + 1) + '}{b}}$',
	'$\\Large{\\frac{a^{' + n0 + ' + b}}{' + n1 + ' + \\pi}}$',
	'$\\Large{\\frac{\\tan(a\\times\\pi)}{' + n0 + ' - b \\times ' + (n1 + 1) + '}}$',
	'$\\Large{\\frac{' + (n0 - 1) + '\\times\\cos(b\\times\\pi)}{a - ' + n1 + '}}$',
];

var task4 = [
	'$\\Large{x=\\sum\\limits_{i=1}^n(i\\times\\sum\\limits_{j=1}^{m}(' + n1 + '+\\frac{1}{j+' + n1 + '}))}$',
    '$\\Large{x=\\sum\\limits_{i=1}^n\\sum\\limits_{j=1}^m(\\frac{' + (n1 + 1) + '}{i+j} + i \\times (j-' + n1 + '))}$',
    '$\\Large{x=\\sum\\limits_{i=1}^n(\\cos(\\frac{\\pi}{i})\\times\\sum\\limits_{j=1}^{m}\\frac{i}{j+' + n1 + '})$ ',
    '$\\Large{x=\\sum\\limits_{i=1}^n\\sum\\limits_{j=1}^{m}(i^2 + (' + (n1 + 9) + ')/j)}$',
    '$\\Large{x=\\sum\\limits_{i=1}^n\\sum\\limits_{j=1}^{m}(\\sqrt{i+j\\times(' + (n1 + 2) + ')})}$',
    '$\\Large{x=\\sum\\limits_{i=1}^n(\\sin(\\frac{2\\pi}{i+' + n1 + '})\\times\\cos(\\sum\\limits_{j=1}^{m}j^2))}$',
    '$\\Large{x=\\sum\\limits_{i=1}^n\\sum\\limits_{j=1}^{m}(' + n1 + ' + \\frac{i}{(2+\\frac{' + n1 + '}{10})^j})$ ',
    '$\\Large{x=\\sum\\limits_{i=1}^n((' + n1 + '+i)\\times\\sum\\limits_{j=1}^{m}\\cos\\frac{j\\times\\pi}{2}}$',
    '$\\Large{x=\\sum\\limits_{i=1}^n(\\sin(\\frac{2\\pi}{i})\\times(\\sum\\limits_{j=1}^{m}j^{' + n1 + '+i})^\\frac{1}{2})}$',
    '$\\Large{x=\\sum\\limits_{i=1}^n\\sum\\limits_{j=1}^{m}(\\cos\\frac{i\\times\\pi}{2}+(' + (n1 + 1) + ')\\times\\sin\\frac{j\\times\\pi}{4})}$'
];

var a1 = '$\\Large{ a_1 } = $ ' + (task1a1[n0 % task1a1.length]);
var a2 = '$\\Large{ a_2 } = $ ' + (task1a2[n1 % task1a2.length]);

var task2_1 = 'Результат: True якщо модуль sum2 більший за modmin і sum2 більше -256;';
if (n1 % 3 === 1) task2_1 = 'Результат: True якщо різниця модуля sum2 і modmin менша 16 або модуль sum2 менше 16;';
if (n1 % 3 === 2) task2_1 = 'Результат: True якщо модуль sum2 більше 16 або modmin більше 8;';

var task2_2 = 'Результат: чи max - min більше 32;';
if (n0 % 5 === 1) task2_2 = 'Результат: чи max + min менше 256;';
if (n0 % 5 === 2) task2_2 = 'Результат: чи max * min менше 256;';
if (n0 % 5 === 3) task2_2 = 'Результат: чи max ділиться на min без остачі (якщо min == 0, то результат False, якщо max == 0 і min!=0 то True)';
if (n0 % 5 === 4) task2_2 = 'Результат: чи max в степені min можна зберегти у змінну short int;';

var task2Script = `_Умови:_
    ~~~~
    Якщо всі числа (a, b, c) від’ємні то:
        Знайти модуль найменшого числа (modmin);
        Знайти суму двох інших чисел (sum2);
        Якщо sum2 менше -256, а modmin є степенню двійки і modmin менше 256 то:
            Результат буде True
        Інакше:
            ` + task2_1 + `
    Якщо не всі числа додатні (0 вважати додатнім) то:
        Якщо тільки одне з них від’ємне то:
            Результат чи це від’ємне число більше -256;
        Якщо два від’ємних числа то
            Результат чи сума цих двох від’ємних чисел помножена на ` + (n0 + n1) + ` більша за -256;
    Якщо всі числа додатні (або 0) то:
        Знайти максимальне (max) з цих чисел;
        Знайти мінімальне (min) з цих чисел;
        ` + task2_2 + `
    ~~~~
`;

var task3_1 = '$\\Large{var(a, b) = }$ ' + task3[ (n0 + n1) % task3.length];

[
    a1 + ' $\\Large{, }$ ' + a2,
    task2Script,
    task3_1,
    task4[variant % task4.length]
];