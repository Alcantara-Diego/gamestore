import milesmorales from '../assets/heroSpiderman.jpg'
import batmanGame from '../assets/gamesImages/batmanGame.jpg'
import tlowGame from '../assets/gamesImages/tlowGame.jpg'
import codBo4Game from '../assets/gamesImages/codBo4Game.jpg'
import redDeadGame from '../assets/gamesImages/redDeadGame.jpg'
import mk11Game from '../assets/gamesImages/mk11Game.jpg'

const library = [
    {
        code: "milesmorales",
        name: "Spider-Man Miles Morales",
        price: "420,00",
        img: milesmorales,
        plataforma: "PS5",
        categorias: "Exclusivos / Super-Heróis / Mundo aberto / luta",
        desenvolvedora: "Insominiac"
    },
    {
        code: "tlow2",
        name: "The last of us part 2",
        price: "249,90",
        img: tlowGame,
        plataforma: "PS4",
        categorias: "Exclusivos / Violentos / Histórias envolventes",
        desenvolvedora: "Naughty Dog"
    },
    {
        code: "rdr2",
        name: "Red dead redemption 2",
        price: "279,97",
        img: redDeadGame,
        plataforma: "PS4",
        categorias: "Mundo aberto / Histórias envolventes",
        desenvolvedora: "Rockstar Games"
    },
    {
        code: "mk11",
        name: "Mortal Kombat 11",
        price: "149,99",
        img: mk11Game,
        plataforma: "Xbox One",
        categorias: "luta",
        desenvolvedora: "NetherRealm"
    },
    {
        code: "batmanak",
        name: "Batman Arkham Knight",
        price: "109,99",
        img: batmanGame,
        plataforma: "Xbox One",
        categorias: "Super-Heróis / Mundo aberto / luta / Histórias envolventes",
        desenvolvedora: "Rocksteady"
    },
    {
        code: "codbo4",
        name: "Call Of Duty Black Ops 4",
        price: "129,99",
        img: codBo4Game,
        plataforma: "PS4",
        categorias: "FPS / Foco multiplayer",
        desenvolvedora: "Activision"
    }
    

];

export default library;