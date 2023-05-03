# ClimateStats – tilastodatan sovellusprojekti

TVT22KMO – Jani Heikkilä, Pasi Karpinmaa, Mika Sarajärvi ja Sami Tapalinen

Jokainen ryhmän jäsen on toiminut Full Stack -kehittäjänä

## Esittely

ClimateStats-sovelluksen ovat toteuttaneet Oulun ammattikorkeakoulun tieto- ja viestintätekniikan 2. vuoden opiskelijat ryhmätyönä. Sovelluksessa käyttäjä pystyy tarkastelemaan ilmastonmuutokseen liittyvää tilastodataa graafisten tilastokäyrien avulla. Tilastokäyriin on käytetty useista eri lähteistä peräisin olevaa tieteelliseen tutkimukseen perustuvaa aineistotietoa, jossa on tilastoitu mm. pitkän aikavälin ilmakehän hiilidioksidipitoisuuksia, ilman lämpötilojen vaihtelua sekä eri valtioiden ja sektoreiden tuottamia hiilidioksidipäästömääriä.

## Sovelluksen käyttö

Sovelluksen ylälaidasta olevasta navigointipalkista käyttäjä voi valita kolmesta eri vaihtoehdosta (Kuva 1), mitä tilastoja haluaa katsoa:

 -Näkymä 1: Lämpötilatiedot ja CO2-pitoisuudet
 
 -Näkymä 2: Päästölähteet
 
 -Näkymä 3: Käyttäjän luoma visualisointinäkymä.


Käyttäjä voi myös rekisteröityä sovellukseen luomalla tunnuksen navigointipalkista löytyvästä napista. Tämän avulla hän pystyy tallentamaan näkymä 3 –valikossa tekemänsä muokkaukset ja luomaan julkisen osoitteen luodulle näkymälle. Käyttäjä voi halutessaan poistaa luomansa näkymät sekä oman tunnuksen.

<img width="800" alt="Screenshot 2023-05-03 at 17 45 35" src="https://user-images.githubusercontent.com/104459173/235952126-ecf4c644-077d-4df7-b197-bf366f7b0f2e.png">


## Sovelluksen arkkitehtuuri

Sovelluksen arkkitehtuuri koostuu frontendistä, backendistä ja tietokannasta, jotka yhdessä tarjoavat tehokkaan ja joustavan ratkaisun käyttäjille.

### Frontend

Frontend on toteutettu React-kirjastolla, joka on suosittu ja tehokas JavaScript-kirjasto käyttöliittymien rakentamiseen. Reactin avulla voidaan luoda helppokäyttöinen ja responsiivinen käyttöliittymä, joka hyödyntää komponenttipohjaista lähestymistapaa. Tämä mahdollistaa sovelluksen laajentamisen ja ylläpidon vaivattomasti sekä parantaa suorituskykyä tarjoamalla nopean ja sulavan käyttäjäkokemuksen. 

<img width="800" alt="Picture 2" src="https://user-images.githubusercontent.com/104459173/235233311-76335dc7-3b1c-4c4c-9c3d-40fc36d1fcbf.png">

### Backend

Backend on rakennettu Java Spring Boot -sovelluskehyksellä, joka tarjoaa nopean ja helpon tavan luoda kevyitä, turvallisia ja skaalautuvia mikropalveluita. Spring Bootin avulla voidaan integroida erilaisia teknologioita, kuten RESTful-rajapintoja ja JWT-autentikointia, jotta sovelluksen tiedonvaihto ja käyttäjien hallinta olisi saumatonta ja tehokasta. Backendin tehtävänä on käsitellä käyttäjien pyynnöt, tehdä tarvittavat toiminnot ja kommunikoida tietokannan kanssa. 

### Database

Tietokantana on käytössä PostgreSQL, joka on tehokas ja luotettava avoimen lähdekoodin objekti-relaatiotietokanta. PostgreSQL tarjoaa erinomaisen suorituskyvyn, tietoturvan ja laajennettavuuden, minkä ansiosta sovelluksen tietoja voi tallentaa ja hallita tehokkaasti. Lisäksi PostgreSQL:n tuki JSON-tyyppisille tietorakenteille ja monimutkaisille kyselyille helpottaa tietojen käsittelyä ja analysointia. 

<img width="400" alt="Picture 3" src="https://user-images.githubusercontent.com/104459173/235233377-f58d0906-ead5-4ea3-a2bc-4745e12b3b5c.png">

## Sovelluksen käyttöönotto 

### Kloonaa git-repositorio: 
```bash
git clone https://github.com/TVT22KMO-Group6/Web-sovellusprojekti.git 
```

### Backendin käynnistys 

Tietokantatallenne löytyy hakemistosta (lisätään myöhemmin). 

Käynnistä tietokantapalvelin haluamallasi tavalla. 

Määritä Java-projektin 'application.properties' -tiedostoon tarvittavat tiedot tietokantayhteyden muodostamiseksi. 

Käynnistä Java-palvelin haluamallasi tavalla. 

### application.properties: 

```bash
spring.datasource.driver-class-name=org.postgresql.Driver 
spring.datasource.url= 
spring.datasource.username= 
spring.datasource.password= 
spring.jpa.hibernate.ddl-auto=update 
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect 
spring.jpa.show-sql=true 
app.jwt.secret= 
```


Backend-palvelin toimii oletuksena osoitteessa https://localhost:8080. 

### Frontendin käynnistys 

Siirry frontend-hakemistoon: 
```bash
cd frontend 
```

Asenna tarvittavat riippuvuudet: 
```bash
npm install 
```

Käynnistys: 
```bash
npm start
```

Frontend-palvelin toimii oletuksena osoitteessa https://localhost:3000 

 

Sovellus pyörii julkisessa internetissä render.com pilvipalvelualustalla osoitteessa https://oamk-web-sovellusprojekti-group-6.onrender.com/ 
