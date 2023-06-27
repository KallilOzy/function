const movies = [
    {
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        director: "Peter Jackson",
        year: 2001,
        genre: "Ação, Fantasia, Aventura",
        image: "img/filme1.jpg",
        description: "A Sociedade do Anel, o primeiro filme da trilogia, segue a jornada de Frodo Bolseiro, um hobbit encarregado de destruir o poderoso Um Anel antes que ele caia nas mãos do sombrio Senhor do Escuro, Sauron. Frodo se une a um grupo diversificado de personagens, formando a Sociedade do Anel, enquanto enfrentam perigos, descobrem a mitologia do mundo de Middle-earth e lutam para proteger o Anel a todo custo."
    },
    {
        title: "O Senhor dos Anéis: As Duas Torres",
        director: "Peter Jackson",
        year: 2002,
        genre: "Ação, Fantasia, Aventura",
        image: "img/filme2.jpg",
        description: "Em As Duas Torres, a aventura continua quando a Sociedade do Anel se separa após uma traição devastadora. Frodo e seu leal amigo Sam seguem em direção a Mordor, enquanto os outros membros da Sociedade enfrentam batalhas e desafios em diferentes frentes. Enquanto isso, a trama se expande para introduzir novos personagens e aprofundar a guerra em Middle-earth, preparando o terreno para o confronto final."
    },
    {
        title: "O Senhor dos Anéis: O Retorno do Rei",
        director: "Peter Jackson",
        year: 2003,
        genre: "Ação, Fantasia, Aventura",
        image: "img/filme3.jpg",
        description: "No épico final da trilogia, O Retorno do Rei, as batalhas se intensificam e o destino de Middle-earth é decidido. Enquanto Frodo e Sam se aproximam de sua perigosa missão, as forças do bem e do mal se preparam para um confronto final que determinará o destino de todos. Amizades são testadas, sacrifícios são feitos e o poder do Um Anel é colocado à prova. O filme culmina em uma emocionante conclusão, com momentos de triunfo, tragédia e redenção."
    },
    {
        title: "Lawrence da Arábia",
        director: "David Lean",
        year: 1962,
        genre: "Aventura, Drama, Biografia",
        image: "img/filme4.jpg",
        description: "Lawrence da Arábia é um filme épico que retrata a extraordinária jornada de T.E. Lawrence. Ambientado durante a Primeira Guerra Mundial, o filme segue Lawrence enquanto ele lidera tribos árabes em uma revolta contra o Império Otomano."
    },
    {
        title: "Amadeus",
        director: "Miloš Forman",
        year: 1984,
        genre: "Drama, Biografia, Musical",
        image: "img/filme5.jpg",
        description: "Conta a história fictícia de Wolfgang Amadeus Mozart através dos olhos de seu rival, Antonio Salieri. Ambientado na Viena do século XVIII, o filme aborda a inveja de Salieri em relação ao talento brilhante de Mozart e suas tentativas de sabotar sua carreira"
    },
    {
        title: "Persona",
        director: "Ingmar Bergman",
        year: 1966,
        genre: "Drama, Thriller Psicológico",
        image: "img/filme6.jpg",
        description: "O filme segue a história de Alma, uma enfermeira, e Elisabet, uma atriz famosa que fica muda. Quando Alma é designada para cuidar de Elisabet em uma casa de praia isolada, uma relação complexa se desenvolve entre elas. Persona mergulha na psicologia das personagens, explorando temas como identidade, comunicação e isolamento."
    },
    {
        title: "Em busca do Ouro",
        director: "Charlie Chaplin",
        year: 1925,
        genre: "Comédia, Drama, Aventura",
        image: "img/filme7.jpg",
        description: "Esta comédia, drama e aventura segue as desventuras de um vagabundo durante a corrida do ouro no Klondike. Em busca de riqueza, ele enfrenta obstáculos engraçados, como avalanches e condições extremas. O vagabundo também encontra o amor em uma dançarina do salão local. Com um toque de romance e muitas risadas, o filme retrata a luta pela sobrevivência e a busca por felicidade em meio às adversidades da corrida do ouro."
    },
    {
        title: "Her",
        director: "Spike Jonze",
        year: 2013,
        genre: "Drama, Romance, Ficcção Científica",
        image: "img/filme8.jpg",
        description: "Neste drama romântico de ficção científica, Theodore, um escritor solitário, se apaixona por um sistema operacional de inteligência artificial chamado Samantha. No futuro próximo, eles exploram a natureza do amor, a solidão e a conexão humana em um mundo cada vez mais tecnológico."
    },
    {
        title: "Blade Runner",
        director: "Ridley Scott",
        year: 1982,
        genre: "Ficcção Científica, Neon-Noir",
        image: "img/filme9.jpg",
        description: "Ambientado em um futuro sombrio, o filme segue a história de Rick Deckard, um ex-policial conhecido como Blade Runner, cuja missão é caçar replicantes, androides com aparência humana. Conforme a trama se desenrola, Deckard se vê questionando sua própria humanidade enquanto enfrenta dilemas morais e éticos."
    },
];

// Função para exibir os detalhes do filme no modal
function displayMovieDetails(movie) {
    const modalElement = document.getElementById("modal");
    modalElement.innerHTML = ""; // Limpa o conteúdo anterior

    const titleElement = document.createElement("h2");
    titleElement.textContent = movie.title;
    modalElement.appendChild(titleElement);

    const directorElement = document.createElement("p");
    directorElement.textContent = "Diretor: " + movie.director;
    modalElement.appendChild(directorElement);

    // Cria elementos para exibir o ano, gênero e descrição do filme

    const yearElement = document.createElement("p");
    yearElement.textContent = "Ano: " + movie.year;
    modalElement.appendChild(yearElement);

    const genreElement = document.createElement("p");
    genreElement.textContent = "Gênero: " + movie.genre;
    modalElement.appendChild(genreElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = movie.description;
    modalElement.appendChild(descriptionElement);

    modalElement.style.display = "block"; // Exibe o modal
}

// Função para fechar o modal
function closeModal() {
    const modalElement = document.getElementById("modal");
    modalElement.style.display = "none"; // Oculta o modal
}

// Função para exibir os filmes na página
function displayMovies() {
    const moviesContainer = document.getElementById("movies-container");
    moviesContainer.innerHTML = ""; // Limpa o conteúdo anterior

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");

        const imageElement = document.createElement("img");
        imageElement.src = movie.image;
        movieElement.appendChild(imageElement);

        const titleElement = document.createElement("h2");
        titleElement.classList.add("movie-title");
        titleElement.textContent = movie.title;
        movieElement.appendChild(titleElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("movie-description");
        descriptionElement.textContent = movie.description;
        movieElement.appendChild(descriptionElement);

        movieElement.addEventListener("click", () => {
            displayMovieDetails(movie);
        });

        moviesContainer.appendChild(movieElement);
    });
}

displayMovies();