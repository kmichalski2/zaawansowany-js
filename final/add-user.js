/**
 * 1. Utwórz aplikację do zarządania uzytkownikami
 * 2. Aplikacja powinna mieć dwie zakładki (podstrony) Users i Add User (/)
 * 3. Lista uzytkowników powinna być wyświetlona jako tabelka (pole dowolne)
 * 4. Dane uzytkownikow powinny być pobrane z:
 *      https://jsonplaceholder.typicode.com/users (/)
 * 5. Stwórz stronę Add User z formularze dodawania uzytkownika
 * 6. Formularz powinien posiadać pola : username, email, website i phone
 * 7. Dodaj następująca walidację:
 *      username - min znaków 8, tylko małe litery i cyfry, bez specjalnych znaków
 *      email - walidacja email
 *      website - powinień zaczynać od http:// lub https://, male litery, 
 *              cyfry, tylko znaki specjalne [. - _]
 * 8. Przy wysłaniu formularza (submit) powinien zostać wysłany request POST z danymi 
 *          uzytkownika. 
 *      https://jsonplaceholder.typicode.com/users
 * 9.* Dodaj walidację w "locie", która wyświetli uzytkownikow komunikat o błędzie
 */