import { descending, rollups } from "d3-array";
import d3Cloud from "d3-cloud";


const listArticle = ['el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas'];
const listConjunction = ["y", "e", "ni", "pero", "mas", "aunque", "o", "u", "porque", "pues", "sino", "que", "si", "como", "cuando", "donde"];
const listPreposition = ['a', 'ante', 'bajo', 'cabe', 'con', 'contra', 'de', 'desde', 'durante', 'en', 'entre', 'hacia', 'hasta', 'mediante', 'para', 'por', 'según', 'sin', 'so', 'sobre', 'tras', 'versus', 'vía']
const listPronouns = [
    "yo", "tú", "vos", "usted", "él", "ella", "nosotros", "nosotras", "vosotros", "vosotras", "ustedes", "ellos", "ellas", // Personales
    "mi", "mío", "mía", "míos", "mías", "tu", "tuyo", "tuya", "tuyos", "tuyas", "su", "suyo", "suya", "suyos", "suyas", // Posesivos
    "este", "esta", "estos", "estas", "ese", "esa", "esos", "esas", "aquel", "aquella", "aquellos", "aquellas", "esto", "eso", "aquello", // Demostrativos
    "que", "cual", "cuales", "quien", "quienes", "alguien", "nadie", "algo", "nada", "cualquiera", "quienquiera", "dondequiera", // Relativos
    "me", "te", "se", "nos", "os" // reflexivos
];
const conjugationS = [ // Ser
    "soy", "eres", "es", "somos", "sois", "son", // Presente
    "fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron", // Pretérito perfecto simple
    "era", "eras", "era", "éramos", "erais", "eran", // Pretérito imperfecto
    "seré", "serás", "será", "seremos", "seréis", "serán", // Futuro
    "sería", "serías", "sería", "seríamos", "seríais", "serían", // Condicional
    "sea", "seas", "sea", "seamos", "seáis", "sean", // Presente subjuntivo
    "fuera", "fueras", "fuera", "fuéramos", "fuerais", "fueran", // Imperfecto subjuntivo
    "fuese", "fueses", "fuese", "fuésemos", "fueseis", "fuesen", // Alternativa subjuntivo
    "siendo", "sido" // Gerundio y Participio
];
const conjugationE = [ // Estar
    "estoy", "estás", "está", "estamos", "estáis", "están", // Presente
    "estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron", // Pretérito perfecto simple
    "estaba", "estabas", "estaba", "estábamos", "estabais", "estaban", // Pretérito imperfecto
    "estaré", "estarás", "estará", "estaremos", "estaréis", "estarán", // Futuro
    "estaría", "estarías", "estaría", "estaríamos", "estaríais", "estarían", // Condicional
    "esté", "estés", "esté", "estemos", "estéis", "estén", // Presente subjuntivo
    "estuviera", "estuvieras", "estuviera", "estuviéramos", "estuvierais", "estuvieran", // Imperfecto subjuntivo
    "estuviese", "estuvieses", "estuviese", "estuviésemos", "estuvieseis", "estuviesen", // Alternativa subjuntivo
    "estando", "estado" // Gerundio y Participio
];
const listConjugation = conjugationS.concat(conjugationE)

function getIrrelevantWords(article, conjunction, preposition, pronouns, conjugation) {
    let irrelevantWords = [];
    irrelevantWords = article ? irrelevantWords.concat(listArticle) : irrelevantWords;
    irrelevantWords = conjunction ? irrelevantWords.concat(listConjunction) : irrelevantWords;
    irrelevantWords = preposition ? irrelevantWords.concat(listPreposition) : irrelevantWords;
    irrelevantWords = pronouns ? irrelevantWords.concat(listPronouns) : irrelevantWords;
    irrelevantWords = conjugation ? irrelevantWords.concat(listConjugation) : irrelevantWords;
    return new Set(irrelevantWords)
}

function getTokens(text, excludedWords) {
    const words = text.trim().toLowerCase().split(/\s+/);
    const Tokens = words.filter(x =>
        !excludedWords.has(x) && x.length > 2
    );
    return Tokens;
}

export function getCleanText(text, options) {
    const opt = {
        maxWords: 100,
        article: true,
        conjunction: true,
        preposition: true,
        pronouns: true,
        conjugation: true,
        ...options,
    }
    const excludedWords = getIrrelevantWords(opt.article, opt.conjunction, opt.preposition, opt.pronouns, opt.conjugation);
    const tokens = getTokens(text, excludedWords);
    return tokens.join(" ");
}

export function getData(text, options) {
    const opt = {
        maxWords: 100,
        article: true,
        conjunction: true,
        preposition: true,
        pronouns: true,
        conjugation: true,
        ...options,
    }
    const excludedWords = getIrrelevantWords(opt.article, opt.conjunction, opt.preposition, opt.pronouns, opt.conjugation);
    const tokens = getTokens(text, excludedWords);
    return rollups(tokens, g => g.length, w => w)
        .sort(([, a], [, b]) => descending(a, b))
        .slice(0, opt.maxWords)
        .map(([key, size]) => ({ text: key, size }))
}



/*

const texto1 = "Cambio en las prácticas comunitarias Capacitaciones Los diferentes tipos aprovechables de energía clasificadas por fuente, las tecnologías para la generación y los costos de producción, mantenimiento y operación. Capacidad de operación de las soluciones de FNCER El nivel de conocimiento y uso de FNCER en la comunidad. El potencial de generación disponible en cada región Recursos energéticos distribuidos Energía limpia No estoy segura, pero debe ser una evaluación integral de conocimientos técnicos, sociales, ambientales y ecológicos. La percepción, la adopción, la capacidad y el impacto de las energías renovables No tendría una respuesta clara Interés de la población. Políticas y regulaciones en el mercado Confianza en las ER La distancia y acceso de una comunidad a una fuente de energía eléctrica Capacidad instalada con FNCER Ventajas de las FNCER en relación a las otras fuentes Pruebas teóricas o prácticas de aprendizaje  Nivel de alfabetización energética ¿La comunidad entiende qué son las FNCER y cómo funcionan? Presupuesto Las características técnicas va económicas del proyecto Relación Costo desempeño medir el grado de alfabetización energética y tecnológica Conocimiento de ventajas Tipo de energía renovable aplicable en una comunidad"
const texto2 = "Conciencia y Educación Conciencia Costos de implementación y dificultades en regulación Legislación, monopolios Desconocimiento y baja apropiación d e las tecnologías de energías renovables. El costo y el tiempo de retorno de la inversión Costos Altos costos La implementación y financiación de los sistemas de energía así como las estrategias de sostenibilidad Posiblemente la falta de una infraestructura adecuada en el sistema de energía actual que permita la integración de energía renovable. El factor económico y el desconocimiento del funcionamiento Presupuesto. Altos costos de instalación y compra Costo y apoyo gubernamental El desconocimiento, la creencia que el montaje y mantenimiento de una FNCER es costoso Los altos costos, comparados con los costos de energía convencional Recursos y políticas públicas para adaptar las FNCER al sistema eléctrico actual Económica Altos costos. La inversión en paneles solares, turbinas eólicas o sistemas de biomasa sigue siendo elevada para muchas comunidades y/o empresas. Costos Acceso a los recursos económicos Desconocimiento de las nuevas tecnologías Presupuesto El costo La inversión inicial"
const texto3 = "Con inversión financiera y capacitación y educación a las comunidades, el futuro puede ser muy prometedor, teniendo en cuenta la potencia natural y creciente tendencia hacia la sostenibilidad del departamento. Débil pero avanzando Se esperaría que exista alta penetración de soluciones tipo granja solar, techos en industrias y empresas, uso de biomasa y algunos prototipo de eólica e hidrógeno. Además, en cuanto a soluciones residenciales, se esperaría un despliegue real de comunidades energéticas utilizando mercados entre pares, tanto a nivel urbano como rural. De igual manera, se prevé la reducción importante de zonas no interconectadas mediante extensiones de red tradicional, pero también mediante comunidades energéticas con fuentes no convencionales para sitios con escasa viabilidad de interconexión. Con una participación amplia de la población y sustitución de muchas de las tecnologías actualmente usadas Mayor participación de las energías renovables en la matriz energética del departamento de Nariño Mayor penetración en el mercado de la generación solar pero con barreras para el ingreso de otras tecnologías Con una cantidad moderada de recursos energéticos distribuidos en el sistema eléctrico que permitan diferentes formas de comercialización de energía. Muy próspero Teniendo en cuenta el cambio climático en 20 seguramente se ajustará a energías que no dependen fuertemente de la matriz hídrica. Con múltiples fuentes de energía interconectadas. Me imagino una matriz energética basada principalmente el PCHs y energía solar, donde la gran mayoría del departamento pueda satisfacer la energía requerida de forma local Es un gran aporte, siempre y cuando se regulen también los desechos que está genera. Beneficios en el mercado por vender energía para todos los usuarios y no solamente para grandes productores 20% de la demanda atendida con ER PV Con parques eólicos, en Nariño ya se han hecho aforos de estos cerca a Pasto. 70 % convencional, 30 % renovable Implementación de FNCER por debajo de la media nacional para esa fecha Como la principal fuente de energía Con matriz energética diversificada y descentralizada Poco avance , debido a los pocos proyectos a largo plazo Autosustentable en un 80% Con mayor presencia de proyectos con energías no renovables que le aporten al sistema de transmisión regional STR. Mucho más eficiente Con varias fuentes de energía renovable Con una red de distribución más robusta"

console.log(getCleanText(texto1))
console.log(getCleanText(texto2))
console.log(getCleanText(texto3))

const cloudWords = [];
const testo = "Cambio en las prácticas comunitarias Capacitaciones Los diferentes tipos aprovechables de energía clasificadas por fuente, las tecnologías para la generación y los costos de producción, mantenimiento y operación. Capacidad de operación de las soluciones de FNCER El nivel de conocimiento y uso de FNCER en la comunidad. El potencial de generación disponible en cada región Recursos energéticos distribuidos Energia limpia No estoy segura, pero debe ser una evaluación integral de conocimientos técnicos, sociales, ambientales y ecológicos. La percepción, la adopción, la capacidad y el impacto de las energías renovables No tendría una respuesta clara Interés de la población. Políticas y regulaciones en el mercado Confianza en las ER La distancia y acceso de una comunidad a una fuente de energía eléctrica Capacidad instalada con FNCER Ventajas de las FNCER en relación a las otras fuentes Pruebas teóricas o prácticas de aprendizaje  Nivel de alfabetización energética ¿La comunidad entiende qué son las FNCER y cómo funcionan? Presupuesto Las características técnicas va económicas del proyecto Relación Costo desempeño medir el grado de alfabetización energética y tecnológica Conocimiento de ventajas Tipo de energía renovable aplicable en una comunidad"

let words = getData(testo);
const cloud = d3Cloud()
    .size([600, 600])
    .canvas(0)
    .words(words)
    .padding(5)
    .rotate(() => Math.floor(Math.random() * 2) * 90)
    .font("Impact")
    .fontSize(d => d.size)
    .on("word", ({ size, x, y, rotate, text }) => {
        cloudWords.push({ size, x, y, rotate, text });
    });

    cloud.start();

    const wordsA = cloudWords;


console.log(wordsA);

*/
