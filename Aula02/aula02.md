**Projeto de Catálogo de Filmes**

Este é um pequeno projeto de catálogo de filmes implementado em Node.js, que permite adicionar filmes, marcar filmes como assistidos e classificar filmes com uma avaliação. O programa interage com o usuário por meio do terminal e oferece um menu de opções.

**Classe Filme**

A classe `Film` representa um filme no catálogo. Ela possui as seguintes propriedades:

- `title`: Título do filme.
- `year`: Ano de lançamento do filme.
- `gender`: Gênero do filme.
- `duration`: Duração do filme.
- `watched`: Indica se o filme foi assistido (true) ou não (false ou null).
- `rate`: Classificação do filme, uma avaliação dada pelo usuário.

A classe também contém dois métodos:

- `listMovieAsWatched()`: Marca o filme como assistido.
- `rateMovie(rate)`: Define a classificação do filme com base na avaliação dada.

**Funcionalidades**

1. **Adicionar Filme:**
   - O usuário pode adicionar um novo filme fornecendo seu título, ano de lançamento, gênero e duração.
   - Os detalhes do filme são coletados através de prompts interativos.

2. **Marcar Filme como Assistido:**
   - O usuário pode marcar um filme como assistido, fornecendo o título do filme.
   - O programa busca o filme na lista e o marca como assistido.

3. **Avaliar Filme:**
   - O usuário pode avaliar um filme, fornecendo o título do filme e a avaliação.
   - O programa busca o filme na lista e atualiza sua avaliação.

4. **Exibir Lista de Filmes:**
   - O usuário pode escolher ver a lista completa de filmes cadastrados no catálogo.

5. **Sair do Programa:**
   - O usuário pode escolher sair do programa a qualquer momento.

**Instruções de Uso**

1. Execute o programa através do Node.js no terminal usando o seguinte comando:
   ```
   node nome-do-arquivo.js
   ```

2. O menu de opções será exibido. Escolha uma das opções digitando o número correspondente e pressionando Enter.

3. Siga as instruções para adicionar filmes, marcar filmes como assistidos, avaliar filmes ou sair do programa.
