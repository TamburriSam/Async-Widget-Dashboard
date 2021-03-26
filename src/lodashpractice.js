import compact from 'lodash/compact';
import difference from 'lodash/difference';
import omit from 'lodash/omit';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

/* const messyArray = ['This', 'is', false, 0]

console.log(compact(messyArray))

const a = ['start', 'what'];
const b = ['stop', 'what'];

console.log(difference(a,b))

const Rihanna = {
    age:31,
    occupations: ['Musician', 'Businesswoman'],
    releasingNewAlbum: true,
}

/* const {releasingNewAlbum, ...updatedRihanna} = Rihanna
console.log(updatedRihanna); */

//lodash method 

/* const updatedRihanna = omit(Rihanna, [releasingNewAlbum]);
console.log(updatedRihanna) */

//date fns
console.log(format(new Date(), "'Today is a' eeee"));

console.log(format(new Date(2014, 1, 11), 'MM/dd/yyyy'))

console.log('d') 