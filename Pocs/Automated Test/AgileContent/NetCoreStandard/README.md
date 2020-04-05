# Selenium Webdriver with .NetCore & .Net Standard
This program is a Web Testing Automation POC using Selenium Webdriver with .Net Core 3.0 and .Net Standard

## Prerequisites
* .NetCore 3.0 SDK https://dotnet.microsoft.com/download/dotnet-core/3.0     

## Cloning The GitHub Repository
Open terminal. Clone qa repository:
```bash
$ git clone git@github.com:agilecontent/qa.git
```

## Execute
Open terminal, navigate to `Pocs\NetCoreStandard\NetCoreSeleniumTest` folder. Execute command: 
```bash
$ dotnet test NetCoreSeleniumTest.csproj
```
## Execute Headless
- Open `config/config.js` file; 
- Change `headless: false` to `headless: true`; 
- Save file.

## Execute Firefox
- Open `config/config.js` file; 
- Change `browser: 'chrome'` to `browser: 'firefox'`; 
- Save file.
Important: You need Firefox browser instaled on machine.

## Debug
* Download Visual Studio 2019 version 16.3 [https://code.visualstudio.com](https://code.visualstudio.com);
* Open Visual Studio 2019;
* Click 'Abrir um projeto ou uma solução ' then, select `Pocs\NetCoreStandard\NetCoreStandard.sln` file;
* CLick Ctrl+E e então T
* Click no teste com o botão direito
* Escolha a opção, Depurar

## Useful links
* [seleniumhq.github.io](https://seleniumhq.github.io/selenium/docs/api/javascript/index.html)
* [.NetCore 3.0](https://dotnet.microsoft.com/download/dotnet-core/3.0)
* [.NetStandard 2.1](https://docs.microsoft.com/pt-br/dotnet/standard/net-standard)
* [visualstudio 2019](https://visualstudio.microsoft.com/pt-br/vs/)


