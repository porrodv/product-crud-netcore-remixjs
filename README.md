# Lista de productos (CRUD)

## Tabla de contenido

- [Descripción](#descripción)
  - [Vista previa](#vista-previa)
  - [Tecnologías](#tecnologías)
  - [Estilo de código](#estilo-de-código)
- [Instalación](#instalación)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Versionamiento](#versionamiento)

## Descripción

Prueba técnica de desarrollador web para _[Wayni][wayni_link]_.

El objetivo del proyecto es desarrollar un aplicativo full-stack CRUD para el manejo de productos.

### Vista previa

![Index page][main_view]

### Tecnologías

El front-end se encuentra desarrollado con [React][react_link] + [Remix][remix_link] , [TypeScript][typescript_link] y usa [Ant Design][antdesign_link] para estilos personalizados.

EL back-end es trabajado con [.NET Core][netcore_link], [C#][csharp_link] y hace uso de una base de datos relacional [SQL Server][sqlserver_link].

<div style="display: inline_block, margin: 0px 1px">
  <img align="center" alt="react-icon" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img align="center" alt="remix-icon" height="40" width="40" src="https://avatars.githubusercontent.com/u/72662859?v=4" style="border-radius: 5px;">
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img align="center" alt="typescript-icon" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg">
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img align="center" alt="antdesign-icon" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg">
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img align="center" alt="dotnetcore-icon" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg">
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img align="center" alt="csharp-icon" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg">
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img align="center" alt="sqlserver-icon" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-original.svg">
</div>

### Estilo de código

Para el estilo y formateo de código javascript se usa [ESLint][eslint_link] y [Prettier][prettier_link], con estos logramos estandarizar el código fuente del front-end, haciendo más fácil su lectura y seguimiento.

## Requisitos

Antes de iniciar :checkered_flag:, es necesario contar con las siguientes herramientas instaladas localmente.

- [Node.js][nodejs-download_link]
- [.NET Core 8.0^][dotnet-download_link]
- [SQL Server 2022][sqlserver-download_link]
- [Visual Studio 2022][visualstudio-download_link] (recomendable)

## Instalación

Sigue los siguientes pasos para configurar el entorno de desarrollo del proyecto.

- Clonar el repositorio

```bash
git clone https://github.com/porrodv/product-crud
```

### Frontend

- Acceder a la raíz del cliente.

```bash
cd product-crud/product-crud.client/
```

- Instalar dependencias

```bash
npm install
```

- Configurar variables de entorno en `.env`

```bash
API_PROT=https
API_HOST=localhost
API_PORT=7251
API_PATH=api
```

- Desplegar localmente

```bash
npm run dev
```

Accede a la ruta http://localhost:5173/ en tu navegador donde se encontrará alojado el UI del aplicativo.

### Backend

- Acceder a la raíz del servidor

```bash
cd product-crud/product-crud.Server/
```

- Instalar dependencias

```bash
dotnet restore
```

- Configurar cadena de conexión necesaria en `appsetings.json` apuntando a una instancia local de SQL Server.

```json
{
    ...
    "ConnectionStrings": {
      "DefaultConnection": "Data Source=<DIPOSITIVO_LOCAL>\\<INSTANCIA_SQL>;Database=<NOMBRE_BASE_DATOS>;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False",
    }
}
```

```json
// Ejemplo
"DefaultConnection": "Data Source=LENOVO\\SUPER;Database=Products;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False",
```

- Crear base de datos

```bash
dotnet ef database update -c AspnetRunContext
```

- Iniciar el proyecto

```bash
dotnet run
```

La API será desplegada en la ruta http://localhost:7251 (para probar la API, se requiere importar la colección de Postman adjunta en la raíz del proyecto).

## Versionamiento

Para mantener un flujo de versionamiento consistente en este proyecto, se siguen los principios de [versionado semántico][semver_link] de software para la numeración de versiones del aplicativo y principios de [commits convencionales][conv-commits_link] para la creación de mensajes uniformes de cambios en el repositorio.

<!-- Links -->

[wayni_link]: https://wayni.pe/
[react_link]: https://es.react.dev/
[remix_link]: https://remix.run/
[typescript_link]: https://www.typescriptlang.org/
[antdesign_link]: https://ant.design/
[netcore_link]: https://dotnet.microsoft.com/en-us/
[csharp_link]: https://dotnet.microsoft.com/es-es/languages/csharp
[eslint_link]: https://eslint.org/
[prettier_link]: https://prettier.io/
[sqlserver_link]: https://www.microsoft.com/es-es/sql-server/
[nodejs-download_link]: https://nodejs.org/en/download/package-manager
[dotnet-download_link]: https://dotnet.microsoft.com/en-us/download/dotnet/8.0
[sqlserver-download_link]: https://www.microsoft.com/es-es/sql-server/sql-server-downloads
[visualstudio-download_link]: https://visualstudio.microsoft.com/es/vs/
[semver_link]: https://semver.org/lang/es/
[conv-commits_link]: https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13

<!-- Imágenes -->

[main_view]: ./public/main-view.png
