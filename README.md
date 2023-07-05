# Zé Birita 

A aplicação consiste em desenvolver tanto o back-end quanto o front-end para uma distribuidora de bebidas. Os usuários, incluindo clientes, vendedores e administradores, terão acesso ao aplicativo por meio de login, com funcionalidades distintas para cada um deles. Os clientes poderão fazer pedidos a partir de uma lista de produtos, enquanto os vendedores terão a responsabilidade de aprovar, preparar e entregar os pedidos. O administrador será responsável por gerenciar o acesso ao aplicativo.

A comunicação entre os clientes e os vendedores é essencial para o funcionamento do sistema. Os clientes farão pedidos através do "carrinho de compras", que serão aprovados, preparados e enviados pelos vendedores. 

Ao fazer um pedido, o cliente espera que ele seja exibido no painel de pedidos do vendedor após a atualização da página. Por sua vez, o cliente poderá atualizar sua página para obter informações sobre o status de seu pedido, como se ele estiver sendo preparado ou já estiver em entrega.

Os principais fluxos podem ser divididos em quatro grupos: fluxo comum (login e registro), fluxo do cliente (produtos, checkout, pedidos e detalhes do pedido), fluxo da pessoa vendedora (pedidos e controle do pedido) e validação do status do pedido (teste sem atualização em tempo real e teste com atualização em tempo real). Além disso,  o fluxo da pessoa administradora, que envolve o gerenciamento de usuários.

<img width="100%" src="demo.gif" />

## Idealizadores
<a href="https://github.com/brenolg/Ze-Birita-FullStack-React-Sequelize/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=brenolg/Ze-Birita-FullStack-React-Sequelize" />
</a>

## Funcionalidades

- Registro e login para clientes, vendedores e administradores.
- Navegação e visualização dos produtos.
- Adição de produtos ao carrinho de compras.
- Checkout e conclusão da compra.
- Aprovação, preparo e entrega de pedidos pelos vendedores.
- Rastreamento do status dos pedidos pelos clientes.
- Gerenciamento de usuários pelos administradores.
- Atualizações em tempo real sobre o status dos pedidos.
- Programação Orientada a Objetos e princípios SOLID:
- Implementar: `Classes`, `Instâncias`, `Atributos` e `Métodos`.

##  Tecnologias utilizadas
  
### **Front-End**

<details>
<summary>
  <strong> Tecnologias </strong>
</summary><br>
  
- React
- Styled-components
- React-router-dom
- React-hot-toast
- React-icons
- Stylelint
- Eslint

</details>

### **Back-End**

<details>
<summary>
  <strong> Tecnologias </strong>
</summary><br>

- Javascript
- Node.js
- Express.js
- MySql
- Sequelize
- Programação Orientada a Objetos (POO)
- Arquitetura Model-Service-Controller (MSC)
- Multer
- JWT
- md5
- Joi
- Joi-password
- Eslint
</details>
  
## Requisitos

## `FRONT END`

<details>
  <summary>
    <strong> Requisitos Gerais </strong>
  </summary><br>

- Caso existam informações no LocalStorage referentes ao usuário, o usuário é logado automaticamente pela aplicação.
- Com o intuito de promover vendas, as quantidades dos produtos são atualizadas e armazenadas no LocalStorage.
- A experiência do usuário foi uma das maiores preocupações durante a implementação. Portanto, o tratamento de erros e as notificações ao usuário foram implementados em diversas requisições e ações realizadas pelo usuário.
- Caso o usuário esteja com o login desatualizado,expirado e inválido durante uma requisição, ele será notificado, deslogado e redirecionado para a página de login.
  <details>
    <summary>
      <strong> Demonstração </strong>
    </summary><br>
  
  <img width="100%" src="redirect.gif" />
  
  </details>
</details>

<details>
  <summary>
    <strong> Header </strong>
  </summary><br>
  
- No menu principal, estão disponíveis links de navegação para as diferentes páginas da aplicação.
- Os textos exibidos na interface são renderizados de forma condicional, levando em consideração se o usuário é um cliente, vendedor ou administrador.
- O link para a página de administração de usuários só é visível para o usuário com perfil de administrador.
- Há um link para a página de checkout, que exibe a quantidade e o valor total dos produtos selecionados pelo usuário.
- Existe um link para a página de vendas, que exibe a quantidade e o valor total dos produtos nas compras ou vendas do usuário.
- Se o usuário estiver logado, o seu nome é exibido na interface. Caso contrário, é mostrado um botão que redireciona para a página de login.
- Existe também um link para realizar o logout da aplicação.

<br/> <img width="100%" src="header.png" />

</details>

<details>
  <summary>
    <strong> SearchBar </strong>
  </summary><br>

- A aplicação possui uma SearchBar que permite que o usuário pesquise por nome e categoria de produtos.
- Quando o usuário realiza a pesquisa, se a requisição for bem-sucedida, ele é redirecionado para a página de resultados de busca, onde os parâmetros pesquisados são exibidos na URL.
- No caso de a requisição não retornar nenhum produto, o usuário é notificado sobre isso, sem ser redirecionado para outra página.

<br/> <img width="100%" src="search.gif" />

</details>

<details>
  <summary>
    <strong> Página de Produtos e Search </strong>
  </summary><br>

- Ao entrar na página, é feita uma requisição ao back-end para obter os produtos disponíveis, que são então exibidos na tela.
- A página possui um carrossel simulando uma promoção da Black Friday, mostrando a porcentagem de desconto, o valor atual, o valor anterior à promoção e a foto do produto em destaque.
- Os cards exibindo os produtos contêm a foto, o preço e botões para adicionar ou diminuir a quantidade do produto.
- Ao clicar no card de um produto, o usuário é redirecionado para a página de detalhes desse produto.
- Sempre que a quantidade de um produto é alterada, o LocalStorage é atualizado, garantindo que o usuário não perca as informações do produto no carrinho durante a navegação.
- A página de pesquisa realiza uma requisição ao back-end de acordo com as informações presentes na URL, buscando produtos com base nos parâmetros fornecidos.

<br/> <img width="100%" src="product.png" />

</details>

<details>
  <summary>
    <strong> Página de detalhes de Produto </strong>
  </summary><br>

- Ao entrar na página, é feita uma requisição ao back-end para obter o produto em destaque, que será exibido na tela, juntamente com outros produtos no carrossel.
- O carrossel na página mostra produtos da mesma categoria do produto em destaque, oferecendo ao usuário opções relacionadas.
- A página simula um valor aleatório de reviews para os produtos e preenche as estrelas de acordo com esse valor, proporcionando uma representação visual da classificação do produto.
- Os cards exibindo os produtos contêm a foto, o preço e botões para adicionar ou diminuir a quantidade do produto.
- Sempre que a quantidade de um produto é alterada, o LocalStorage é atualizado para garantir que as informações do carrinho sejam mantidas durante a navegação.
- Há um botão para a página de checkout.
- Há um botão para retornar a página de produtos.

<br/> <img width="100%" src="productDetail.png" />

</details>

<details>
  <summary>
    <strong> Página de Checkout/Carrinho</strong>
  </summary><br>

- Ao entrar na página, é realizada uma leitura do LocalStorage para obter os produtos previamente selecionados pelo usuário.
- Os cards exibem os detalhes dos produtos, como nome, preço, valor unitário, sub-total, e contêm botões para adicionar, diminuir a quantidade do produto ou remover o produto do carrinho.
- Sempre que a quantidade de um produto é alterada, o LocalStorage é atualizado para garantir que as informações do carrinho sejam mantidas durante a navegação.
- Há um botão e um formulário para finalizar a compra ou venda, permitindo ao usuário concluir o processo.
- O usuário é notificado com mensagens personalizadas caso ocorra algum erro durante a comunicação com o back-end.
- No caso de o usuário ser um administrador ou vendedor, as notificações de erro são mais abrangentes, exibindo informações adicionais, como a mensagem de erro e o status do back-end. Isso visa facilitar a administração da aplicação pelos administradores e vendedores, fornecendo informações mais detalhadas sobre eventuais problemas.

<br/> <img width="100%" src="checkout.gif" />

</details>

<details>
  <summary>
    <strong> Página de Vendas ou Compras </strong>
  </summary><br>

- Ao entrar na página, é feita uma requisição ao back-end para obter as informações das compras ou vendas relacionadas ao usuário.
- Os cards exibem o número do pedido, a data, o status da venda/compra e o valor total.
- O status é renderizado com cores diferentes de acordo com o seu valor, permitindo uma fácil visualização do status da transação.
- Ao clicar em um card, o usuário é redirecionado para a página de detalhes da venda/compra, onde é possível visualizar os produtos envolvidos na transação e gerenciar o status da venda.

<br/> <img width="100%" src="order.png" />

</details>

<details>
  <summary>
    <strong> Página de Detalhes de Vendas/Compras </strong>
  </summary><br>

- Ao entrar na página, é feita uma requisição ao back-end para obter as informações da compra ou venda.
- A página exibe o número do pedido, o vendedor, a data, o valor total, o status da venda/compra e botões para administração do status.
- Além disso, são listados os produtos do pedido, mostrando a quantidade, o valor unitário e o valor total por produto.
- O status é renderizado com cores diferentes, dependendo do seu valor, para facilitar a visualização do status da transação.
- Ao clicar nos botões de administração do status, é feita uma requisição ao back-end para atualizar o status da venda/compra. Se a requisição for bem-sucedida, o status é alterado no front-end.
- Os botões de administração do status são desabilitados caso o valor de mudança requisitado seja igual ao valor atual da venda/compra.
- Há um botão disponível para retornar à página de pedidos, permitindo a navegação de volta à lista de pedidos do usuário.

<br/> <img width="100%" src="order.png" />

</details>

## `BACK END`
:construction: <strong> Documentação em construção </strong> :construction:

## Agradecimentos
Agradecemos à Trybe por nos proporcionar esta oportunidade de aprendizado e desenvolvimento de habilidades. Também agradecemos aos instrutores, colegas e mentores que nos apoiaram e orientaram durante o projeto.
