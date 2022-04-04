import milesmoralesGame from '../assets/gamesImages/milesmoralesGame.jpg'
import horizonfwGame from '../assets/gamesImages/horizonfwGame.jpg'
import gowGame from '../assets/gamesImages/gowGame.jpg'
import batmanGame from '../assets/gamesImages/batmanGame.jpg'
import tlou2Game from '../assets/gamesImages/tlou2Game.png'
import codBo4Game from '../assets/gamesImages/codBo4Game.jpg'
import redDeadGame from '../assets/gamesImages/redDeadGame.jpg'
import mk11Game from '../assets/gamesImages/mk11Game.jpg'

import minecraftGame from '../assets/gamesImages/minecraftGame.jpg'
import revillageGame from '../assets/gamesImages/REVillageGame.jpg'
import spidermanGame from '../assets/gamesImages/spidermanGame.jpg'
import gtaGame from '../assets/gamesImages/gtaGame.jpeg'
import cyberpunkGame from '../assets/gamesImages/cyberpunkGame.jpg'

import PS5Preto from '../assets/extraImages/PS5Preto.jpg'
import PS4Pro from '../assets/extraImages/PS4Pro.png'
import dualsense from '../assets/extraImages/dualsense.png'
import headset from '../assets/extraImages/headset.png'
import xboxSX from '../assets/extraImages/xboxSX.png'



const library = [
    {
        code: "milesmorales",
        name: "Spider-Man Miles Morales",
        price: "420,00",
        img: milesmoralesGame,
        description: "Spider-Man Miles Morales é uma expansão autônoma do jogo Spider-Man, de 2018. E retrata a luta de Miles para equilibrar os deveres de sua personalidade civil e do Homem-Aranha quando sua nova casa, Harlem, está ameaçada por uma guerra entre a Roxxon Energy Corporation e o exército criminoso de alta tecnologia do Tinkerer, o Underground.",
        platform: "PS5",
        tags: "Exclusivos / Super-Heróis / Mundo aberto / luta",
        developer: "Insominiac"
    },
    {
        code: "horizonfw",
        name: "Horizon Forbbiden West",
        price: "279,90",
        img: horizonfwGame,
        description: "Horizon Forbidden West é a sequência de Horizon Zero Dawn, de 2017, sendo ambientada em um mundo aberto pós-apocalíptico com uma perspectiva em terceira pessoa. O jogador controla a protagonista Aloy, uma caçadora de máquinas, enquanto viaja para uma América ocidental devastada por tempestades maciças e máquinas mortais.",
        platform: "PS4",
        tags: "Exclusivos / Mundo aberto / Histórias envolventes",
        developer: "Guerrilla Games"
    },
    {
        code: "gow",
        name: "God Of War",
        price: "99,99",
        img: gowGame,
        description: "God of War ao contrário dos jogos anteriores, que eram baseados na mitologia grega, este título é baseado na mitologia nórdica, com a maior parte do tempo situado no reino de Midgard. Pela primeira vez na série, há dois protagonistas principais: Kratos, o antigo deus da guerra grego que é acompanhado por seu jovem filho Atreus. Após a morte da segunda esposa de Kratos e mãe de Atreus, eles viajam para cumprir sua promessa de espalhar suas cinzas no pico mais alto dos nove reinos",
        platform: "PS4",
        tags: "Exclusivos / Mundo aberto / Violentos / Histórias envolventes",
        developer: "Santa Monica Studio"
    },
    {
        code: "tlou2",
        name: "The last of us part 2",
        price: "249,90",
        img: tlou2Game,
        description: "Ambientado cinco anos após os eventos de The Last of Us (2013), o jogador assume o papel de duas protagonistas em um Estados Unidos pós-apocalíptico: Ellie, que busca por vingança após um evento traumático, e Abby, uma soldada que se envolve em um conflito entre uma milícia e um culto. O jogo contém elementos de survival horror e é jogado numa perspectiva de terceira pessoa. Os jogadores podem usar armas de fogo, arcos, armas improvisadas, esquiva e furtividade para se defenderem de seres humanos hostis e criaturas infectadas por uma mutação do fungo Cordyceps.",
        platform: "PS4",
        tags: "Exclusivos / Violentos / Histórias envolventes",
        developer: "Naughty Dog"
    },
    {
        code: "rdr2",
        name: "Red dead redemption 2",
        price: "279,99",
        img: redDeadGame,
        description: "Red Dead Redemption 2 se passa em 1899 em uma representação ficcional do oeste, meio-oeste e sul dos Estados Unidos e acompanha o fora da lei Arthur Morgan, que precisa lidar com o declínio do Velho Oeste e sobreviver à perseguição de forças governamentais, gangues rivais e outros adversários.",
        platform: "PS4",
        tags: "Mundo aberto / Violentos / Histórias envolventes",
        developer: "Rockstar Games"
    },
    {
        code: "mk11",
        name: "Mortal Kombat 11",
        price: "149,99",
        img: mk11Game,
        description: "Mortal Kombat 11 é um jogo de luta em que dois jogadores lutam um contra o outro, usando uma enorme variedade de ataques. Além de incluir várias mecânicas usadas em capítulos anteriores, em Mortal Kombat 11 cada lutador tem três variações predefinidas pelos desenvolvedores, cada uma com o seu próprio estilo e lista de movimentos e com possibilidade de modificá-las e adicionar mais estilos definidos pelo próprio jogador.",
        platform: "Xbox One",
        tags: "Luta / Violentos",
        developer: "NetherRealm"
    },
    {
        code: "batmanak",
        name: "Batman Arkham Knight",
        price: "109,99",
        img: batmanGame,
        description: "A história acontece um ano depois dos eventos de Arkham City, Batman tem de enfrentar o super-vilão Espantalho, que criou um ataque a Gotham City causando a evacuação da cidade. Com a ajuda do misterioso Cavaleiro de Arkham, Espantalho reúne os grandes inimigos de Batman, com o intuito de eliminar de uma vez o Cavaleiro das Trevas.",
        platform: "Xbox One",
        tags: "Super-Heróis / Mundo aberto / luta / Histórias envolventes",
        developer: "Rocksteady"
    },
    {
        code: "codbo4",
        name: "Call Of Duty Black Ops 4",
        price: "129,99",
        img: codBo4Game,
        description: "Call of Duty: Black Ops 4 é um jogo de tiro em primeira pessoa multiplayer. Ao contrário dos títulos anteriores da série Call of Duty, Black Ops 4 é o primeiro título que não inclui uma campanha tradicional para um único jogador, e contém apenas modos Multiplayer, Zombies e um novo modo battle royale chamado Blackout",
        platform: "PS4",
        tags: "FPS / Foco multiplayer",
        developer: "Activision"
    },
    {
        code: "mine",
        name: "Minecraft",
        price: "99,00",
        img: minecraftGame,
        description: "Minecraft é um jogo eletrônico dos gêneros sandbox e sobrevivência que não possui objetivos específicos a serem alcançados, permitindo aos jogadores uma grande liberdade de escolha de como jogá-lo.",
        platform: "PS4",
        tags: "Exploração / Toda família",
        developer: "Mojang"
    },
    {
        code: "revillage",
        name: "Resident Evill Village",
        price: "209,90",
        img: revillageGame,
        description: "Três anos depois de derrotar os Bakers, Ethan e Mia Winters foram transferidos à Europa, a fim de começarem uma nova vida com sua filha recém-nascida. Em uma determinada noite, Mia é assassinada por Chris Redfield enquanto ele e seu esquadrão invadem a casa, deixando Ethan inconsciente e sequestrando-o junto com sua filha. Ao acordar, Ethan se depara ao lado de um caminhão de transporte capotado, chegando nas proximidades de uma vila aterrorizada por licanos.",
        platform: "Xbox One",
        tags: "Terror / FPS / Violentos / Histórias envolventes",
        developer: "Capcom"
    },
    {
        code: "spiderman",
        name: "Spider-Man PS4",
        price: "161,00",
        img: spidermanGame,
        description: "Spider-Man é um jogo eletrônico de ação-aventura em mundo aberto que se passa em Manhattan, dentro de uma versão ficcional da cidade de Nova Iorque. O Homem-Aranha, pode navegar pelo mundo ao pular, disparar teias que lhe permite balançar entre edifícios, correr em paredes e saltar automaticamente sobre obstáculos.",
        platform: "PS4",
        tags: "Exclusivos / Super-Heróis / Mundo aberto / luta",
        developer: "Insominiac"
    },
    {
        code: "gtav",
        name: "Grand Theft Auto V",
        price: "117,50",
        img: gtaGame,
        description: "Grand Theft Auto V é um jogo que se passa no estado ficcional de San Andreas, com a história da campanha sendo um jogador seguindo três criminosos e seus esforços para realizarem assaltos sob a pressão de uma agência governamental. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas.",
        platform: "Xbox One",
        tags: "Mundo aberto / Violentos / Histórias envolventes",
        developer: "Rockstar Games"
    },
    {
        code: "2077",
        name: "CyberPunk2077",
        price: "69,90",
        img: cyberpunkGame,
        description: "CyberPunk2077 é ambientado em Night City, um mundo aberto com seis regiões distintas situado no universo da franquia Cyberpunk. Ele é jogado a partir de uma perspectiva em primeira pessoa, com os jogadores controlando um mercenário personalizável conhecido como V, que pode adquirir habilidades de hacking e maquinários, um arsenal de armas de longo alcance e opções de combate no estilo corpo a corpo.",
        platform: "PS4",
        tags: "Mundo aberto / Violentos / FPS",
        developer: "CD Project Red"
    },

    // CONSOLE SECTION

    {
        code: "ps5",
        name: "Playstation 5",
        price: "4699,99",
        img: PS5Preto,
        description: "Console de jogos eletrônicos de nona geração, desenvolvido pela Sony Interactive Entertainment. Foi anunciado em outubro de 2018 e confirmado em outubro de 2019 como o quinto da série PlayStation e sucessor do PlayStation 4.",
        platform: "PS5",
        tags: "Consoles / Acessórios",
        developer: "Sony"
    },
    {
        code: "ps4pro",
        name: "Playstation 4 Pro",
        price: "3189,90",
        img: PS4Pro,
        description: "Console de jogos eletrônicos da oitava geração produzida pela empresa Sony Interactive Entertainment, como a quarta edição da série PlayStation, sucessora da PlayStation 3, competindo directamente com o Wii U da Nintendo e, com o Xbox One da Microsoft.",
        platform: "PS4",
        tags: "Consoles / Acessórios",
        developer: "Sony"
    },
    {
        code: "dualsense",
        name: "Dualsense",
        price: "429,90",
        img: dualsense,
        description: "O DualSense possui gatilhos adaptáveis que podem alterar a resistência ao jogador conforme necessário, suportando uma experiência como virtualmente atirar uma flecha de um arco. O DualSense possui forte feedback háptico por meio de atuadores de bobina de voz, que, juntamente com um alto-falante aprimorado no controle, pretendem fornecer um melhor feedback no jogo.",
        platform: "PS5",
        tags: "Consoles / Acessórios",
        developer: "Sony"
    },
    {
        code: "headset",
        name: "Playstation Headset",
        price: "149,90",
        img: headset,
        description: "Fone de ouvido com controle de volume e microfone, melhorando sua experiência de aúdio ao ligar o videogame.",
        platform: "PS4",
        tags: "Consoles / Acessórios",
        developer: "Sony"
    },
    {
        code: "seriesx",
        name: "Xbox Series X",
        price: "4499,99",
        img: xboxSX,
        description: "Sucedindo a linha atual do Xbox One. A Microsoft está priorizando o desempenho do hardware, incluindo suporte para resoluções de tela mais altas (até 8K de resolução) e taxas de quadros, ray tracing em tempo real e uso de unidade de estado sólido de alta velocidade para reduzir o tempo de carregamento.",
        platform: "Xbox Series X",
        tags: "Consoles / Acessórios",
        developer: "Microsoft"
    }
    
    
    
];

export default library;