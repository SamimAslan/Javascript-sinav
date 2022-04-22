// filmlerin bulundugu database
let filmDatabase = [
    {
        "id": 8008,
        "name": "Inception",
        "year": 2010
    },
    {
        "id": 9000,
        "name": "Dark Knight",
        "year": 2008
    },
    {
        "id": 9393,
        "name": "Shawshank Redemption",
        "year": 1994
    }
];



export function tumFilmleriAl(){
    return filmDatabase;
}

export function idsineGoreFilmAl(pId){
    let film = filmDatabase.find(m => m.id == pId);
    return film;
}

export function filmOlustur(pFilm){
    filmDatabase.push(pFilm)
    return pFilm;
}

export function filmiSil(pId){
    filmDatabase = filmDatabase.filter(m => m.id !=pId)
}

export function filmiYenile(pId, yenilenmisFilm){
    let film = filmDatabase.find(m =>m.id == pId)
    film.name = yenilenmisFilm.name
    film.year = yenilenmisFilm.year
    return film
}