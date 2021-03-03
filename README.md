

<h1 align="center">CRUD de Produtos</h1>

<h3 align="center">
    <a href="https://docs.microsoft.com/pt-br/dotnet/core/dotnet-five">.NET 5</a>
    <span> + </span>
    <a href="https://www.microsoft.com/pt-br/sql-server/sql-server-2019">Angular 11</a>
    <span> + </span>
    <a href="https://angular.io/">SQL SERVER</a>
</h3>

<p align="center">Projeto para cadastro de produtos, utilizando tecnologias e biblitecas atuais</p>

<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#roadmap">Roadmap</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#contribuicao">Contribuição</a> • 
 <a href="#licenc-a">Licença</a> • 
 <a href="#autor">Autor</a>
</p>

<h2> Esse projeto contém: </h2>

| API (.NET 5) | Description |
| --- | --- |
| SwaggerUI | Arquitetura Limpa |
| EntityFrameworkCore | Router Lazy Loading |
| AutoMapper | Boa componentização |
| Serilog | Variáveis de ambiente|
| Injeção de dependência .NET | Bootstrap |
| Filtros | Responsividade |
| Compressor de Resposta | Guardião de Rotas |
| Testes unitários | HTTP Interceptor |
| Testes de integração | Show file differences that haven't been staged |
| Docker | Docker |
| Testes de integração | Show file differences that haven't been staged |

<h1>Acessar o projeto</h1>

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

<p>Abra a 'solution' presente na pasta Back/Api, execute as migrations (<b>próximo step</b>) defina o projeto Back.Api como padrão na inicialização, execute.</p>

<h3> Migrations: </h3>
<ol>
	<li> Altere a propriedade  <code>DefaultConnection</code> do objeto <code>ConnectionString</code> no arquivo <code>Back.Api/appsettings.json</code></li>
	<li> Para executar migrações neste projeto, execute o seguinte comando no diretório 'Back/Api': <code>dotnet ef database update --startup-project ./src/Back.Api --project ./src/Back.Infrastructure</code> </li> 			
	
	<br>	
	<small>Este comando irá definir o ponto de entrada para a migração (o responsável por selecionar o dbprovider {sqlserver, mysql, etc} e a string de conexão) e o próprio projeto será a infraestrutura, que é onde está o dbcontext.</small>
</ol>

<h2>Executar no Docker (Opção 2)</h2>


