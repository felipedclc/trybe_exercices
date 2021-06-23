SELECT A.actor_id, A.first_name, FA.film_id FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS FA ON A.actor_id = FA.actor_id;

SELECT St.first_name, St.last_name, Ad.address FROM sakila.staff AS St
INNER JOIN sakila.address AS Ad ON Ad.address_id = St.address_id;

SELECT CUS.customer_id, CUS.first_name, CUS.email, CUS.address_id, AD.address 
FROM sakila.customer AS CUS
INNER JOIN sakila.address AS AD ON AD.address_id = CUS.address_id
ORDER BY first_name DESC LIMIT 100;

SELECT C.first_name, C.email, C.address_id, A.address, A.district
FROM sakila.customer AS C INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE district = 'California' AND C.first_name LIKE '%rene%';

SELECT Act.actor_id, Act.first_name, Fil.film_id, Fil.title FROM sakila.actor AS Act 
INNER JOIN sakila.film_actor AS FA ON FA.actor_id = Act.actor_id
INNER JOIN sakila.film AS Fil ON Fil.film_id = FA.film_id;
