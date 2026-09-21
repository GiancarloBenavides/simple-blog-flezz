/*
import { addHours } from "date-fns";
import { format } from 'date-fns';
import es from 'date-fns/locale/es';

let date = new Date('2025-02-13');

let now_utc = Date.UTC(
  date.getUTCFullYear(),
  date.getUTCMonth(),
  date.getUTCDate(),
  date.getUTCHours(),
  date.getUTCMinutes(),
  date.getUTCSeconds(),
);


//date = addHours(date, 5);
date = date+"T05:00:00.000Z";

let newDate = format(date, "MMMM dd 'de' yyyy", { locale: es })


console.log(date);
console.log(now_utc);
console.log(new Date(now_utc));
console.log(date.toISOString());
console.log(newDate);
*/


console.log(encodeURIComponent('Articulo Interesante en '.concat('Renova')));