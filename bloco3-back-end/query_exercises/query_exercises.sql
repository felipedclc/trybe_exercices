/* Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , 
que retornem os títulos dos filmes que possuem avaliação maior que 7.5.*/

SELECT title FROM Pixar.Movies
WHERE id IN ( SELECT movie_id FROM Pixar.BoxOffice WHERE rating > 7.5 );

SELECT M.title, B.rating FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B ON M.id = B.movie_id
WHERE B.rating > 7.5;

/*Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN ,
 que retornem as avaliações dos filmes lançados depois de 2009.*/
 
 SELECT B.rating, M.title FROM Pixar.BoxOffice AS B
 INNER JOIN Pixar.Movies AS M ON B.movie_id = M.id
 WHERE M.year > 2009;
 
 SELECT rating FROM Pixar.BoxOffice
 WHERE movie_id IN ( SELECT id FROM Pixar.Movies WHERE year > 2009 );
 
 /*Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.*/
 
 SELECT `name`, location FROM Pixar.Theater 
 WHERE id IN ( SELECT theater_id FROM Pixar.Movies );
 
 SELECT t.name, t.location FROM Pixar.Theater as t
 WHERE EXISTS (
    SELECT * FROM Pixar.Movies 
    WHERE Movies.theater_id = t.id
);