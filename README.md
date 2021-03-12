



<h1 align="center">CRUD de Produtos</h1>

<h3 align="center">
    <a href="https://docs.microsoft.com/pt-br/dotnet/core/dotnet-five">.NET 5</a>
    <span> + </span>
    <a href="https://www.microsoft.com/pt-br/sql-server/sql-server-2019">Angular 11</a>
    <span> + </span>
    <a href="https://angular.io/">SQL SERVER</a>
</h3>

<p align="center">Projeto para cadastro de produtos, utilizando tecnologias e biblitecas atuais</p>



<h2> Esse projeto contém: </h2>

| API (.NET 5) | Client (Angular 11)|
| --- | --- |
| SwaggerUI | Arquitetura Limpa |
| EntityFrameworkCore | Router Lazy Loading |
| AutoMapper | Boa componentização |
| Serilog | Variáveis de ambiente|
| Injeção de dependência .NET | Bootstrap |
| Filtros | Responsividade |
| Compressor de Resposta | Guardião de Rotas |
| Docker | HTTP Interceptor |
| - | Docker |

<h1>Acessar o projeto</h1>
<h2>Credenciais:</h2>
<h4>UserName:</h4> 11234567890
<h4>Password: </h4>09876543211

<h2>Executar Local (Opção 1)</h2>

<h3> FrontEnd: </h3>

<p>Para executar o projeto frontend localmente são necessários:</p>

<ul>
	<li>SDK do nodeJs</li>
	<li>Angular CLI</li>
</ul>

<p>Configure a variavel 'baseUrl' existente no arquivo de enviroment.</p>
<p>Acesse o diretório chamado 'Front', execute o compando <code>npm i</code> para instalar as dependências, após isso,  execute <code>ng serve</code>.</p>

<h3> BackEnd: </h3>

<p>Para executar o projeto backend localmente são necessários:</p>

<ul>
	<li>SDK do .net 5</li>
	<li>Visual Studio 2019</li>
	<li>Instância de banco de dados SQL</li>
</ul>

<b>O projeto estará disponivel na url: <code>https://localhost:5001/api-docs</code></b>

<p>Abra a 'solution' presente na pasta Back/Api, execute as migrations (<b>próximo step</b>) defina o projeto Back.Api como padrão na inicialização, execute.</p>

<h3> Migrations: </h3>
<ol>
	<li>Execute o comando <code>dotnet tool install --global dotnet-ef</code> no diretório do BackEnd</li>
	<li> Altere a propriedade  <code>DefaultConnection</code> do objeto <code>ConnectionString</code> no arquivo <code>Back.Api/appsettings.json</code></li>
	<li> Para executar migrações neste projeto, execute o seguinte comando no diretório 'Back/Api': <code>dotnet ef database update --startup-project ./src/Back.Api --project ./src/Back.Infrastructure</code> </li> 			
	
</ol>

<h2>Executar no Docker (Opção 2)</h2>

<h3> FrontEnd: </h3>

<p>Acesse o diretório do projeto: 'Crud-DotNet-Angular/Front' e execute os seguintes comandos:</p>

<ol>
	<li><code>docker build -t front .</code></li>
	<li><code>docker run -d --name front-run -p 80:80  front</code></li>
</ol>

<h3> BackEnd: </h3>

<ol>
	<li>Acesse o arquivo appconfig.json presente no diretório 'Crud-DotNet-Angular/back/Api/Back.Api' e altere a DefaultConnection para a string do DefaultConnectionDocker</li>
</ol>

<p>Acesse o diretório do projeto: 'Crud-DotNet-Angular/back/Api' e execute o seguintes comandos:</p>

<ol>
	<li><code>docker-compose up -d crud-api</code></li>
</ol>

<b>O projeto estará disponivel na url: <code>https://localhost:5001/api-docs</code></b>

<h2>Implementações Futuras</h2>
<ol>
	<li>Testes (Front e Back)</li>
	<li>Melhorias Layout</li>
	<li>CI e CD (GithubActions)</li>
	<li>Validação JWT (Necessária alteração na api de login)</li>
	<li>Hospedar container no AWS/Azure</li>
</ol>

