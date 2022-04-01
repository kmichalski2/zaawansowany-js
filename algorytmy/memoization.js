const regex = /Sp\$ z o\.o\./

const text = "Sp. z o.o."

const a = /g[ae][eo]t/;
// geet , gaet, geot, gaot

const b = /[baz]oo[tz]+/
// Wypisz na czacie wszystkie wyrazy jakie znajdzie ten regex


const liczba = /[01234567890]{2,4}/i
// 100, 200, 300, 012, 1234, 4000, 50, 20 03, 02, 01


const literaA = /[a]+/

// a, aa, aaa, aaaa, aaaaa, aaaaaa

const multilneText = 'Hello world \n I said: Hello! \n Hello again';
const multilineRegex = /^hello/g;

const postalCode = /[0-9]{2}\-[0-9]{3}/;

const phoneNumber = /[0-9][0-9\-\s]{7, 10}[0-9]/

const betterPhoneNumber = /[0-9]{3}[\-\s]*[0-9]{3}[\-\s]*[0-9]{3}/

// [a-z]+ // jeden lube wiecej znakow z zestawu
// [a-z]* // 0 lub wiecej znakow z zestawu

// 500-123-123, 500 200 300, 500123123

const email = /[a-z0-9\.\_\-]+\@[a-z0-9\.\_\-]+/i

const c = /[a-z]+\@[a-z]+/i;
// asdabb@asbsbs, kamil@gmail
// ! asd@gmail.com

const d = /[a-z0-9\.\_\-]+\@\sdacademy\.com/

// bartek@sdacademy.com , kamil@sdacademyocom

// bartek@sdacademy.com

const text2 = " kamil@sdacademy.com "

const e = /[a-z0-9\-\_\.]+\@sdacademy\.com/ 