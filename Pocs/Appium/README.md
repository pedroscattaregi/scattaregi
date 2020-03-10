## Appium with Android Emulator:

## How to Rerun anytime:
- Open the terminal inside the solution folder
- run the appium server:
	appium
- start the android emulator:
	%androidEmulator%\emulator.exe @Pixel_API_23 (where 'Pixel_API_23' is the device name)
- run the tests:
	node index.js
	
## How to create a new project:

# Instalando o Ruby
- https://rubyinstaller.org/downloads/
- baixar a versão estável que esta em negrito, a recomendada
- depois de instalar o ruby, executar o comando a baixo no cmd:
	ridk install
- seguir com a instalaçao da opção mais básica
- depois de instalar, rode o seguinte comando para verificar se a instalação ocorreu da maneira certa:
	ruby -v
- irá retornar algo como:
	ruby 2.6.5p114 (2019-10-01 revision 67812) [x64-mingw32]

# Instalando o Devkit
- acesse e baixe em:
	http://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe
- descompactar em "C:\Ruby24-x64\devkit" (criar a pasta mesmo)
- acessar a pasta com o cmd através do comando
	cd C:\Ruby24-x64\devkit
- rode o comando abaixo:
	ruby dk.rb init
- abra o arquivo config.yml que foi gerado
- A ultima linha do arquivo deve conter o valor : -C:/Ruby24-x64. Caso contrário faça o ajuste no arquivo. Não esqueça do caractere "-" antes do C:\
- rode o comando abaixo para instalar:
	ruby dk.rb install

# Instalando o Bundle
- rode o seguinte comando:
	gem install bundler

# Instalando o JDK:
- acessar https://www.oracle.com/technetwork/java/javase/downloads/index.html
- baixar a ultima versão disponível
- instalar o JDK

# Instalando o Android Studio:
- acessar https://developer.android.com/studio
- baixar a ultima versão disponível
- instalar o android studio

#Criar um Device (emular):
- abra o android studio
- Clicar em "Tools" e abrir o SDK Manager
- Click in "Show Package Details" check box to show contents for each package
- Select the following options:
	Android 10.0 (Q)
		Android SDK Platform 29
		Sources for Android 29
	Android 6.0 (Marshmallaw)
		Google APIs
		Android SDK Platform 23
		Intel x86 Atom System Image
		Intel x86 Atom_64 System Image
		Google APIs Intel x86 Atom System Image
		Google APIs Intel x86 Atom_64 System Image
- Click to apply it and wait for the installation
- Test the device turn on click through Tools > AVD Manager > "play" button (it must open the android device)

(parenteses)
# Como rodar o device por linha de comando e de qualquer lugar:
- declarar uma nova variavel de ambiente conforme explicado em:
https://www.java.com/pt_BR/download/help/path.xml
(parenteses)

# Instalar o Appium:
- Rodar o comando abaixo:
	npm install -g appium
- instalar o appium doctor para verificar a instalação e suas dependências:
	npm install -g appium-doctor
- run the appium doctor (can be helpful in case of problems, it has a problem details and how to solve at the end)
	appium-doctor.cmd --android
- Run the appium to test it with the following command
	appium
	
# Initialize the project:
- access the folder that you would like to create the solution (.js in case)
- perform the following command to initialize the project settings:
	npm init  -y

# Installing the webdriver:
to communication between the tests project and the device that will be used for tests
- run the following comand to install it:
	npm install webdriverio

# Preparing the first mobile test for testing the connection and configuration:
- access the folder of the project (the same that init was run)
- create a new file like "index.js"
- Open the file to edit it (recommand to use VS Code, in command line "code ." in the project folder)
- Put the following code in the file:
{code}
// javascript
const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "6",
      deviceName: "@Pixel_API_23",
      app: "./APK/ApiDemos-debug.apk",
      appPackage: "io.appium.android.apis",
      appActivity: ".view.TextFields",
      automationName: "UiAutomator2"
    }
  };
  
  async function main () {
    const client = await wdio.remote(opts);
    
    const field = await client.$("android.widget.EditText");
    await field.setValue("Hello World!");
    const value = await field.getText();
    assert.equal(value, "Hello World!");

    await client.deleteSession();
  }
  
  main();
{code} 
- Edit the following "capabilities" according to your conditions:
-- platformName = Android/ios
-- platformersion = the version that was set in the device creation
-- deviceName = the name that was set when create the device in android studio (see in Android Studio on Tools > AVD Manager > edit > Show Advanced Settings > AVD ID value)
-- app the .apk location
- Save the file changes
- run the index.js running the following command: (F5 in the VS Code works too)
	node index.js
-- Let the emulator open to see the magic!

# References:
Para preparar o ambiente para usar appium e configurações até rodar o primeiro teste:
http://appium.io/docs/en/about-appium/getting-started/
https://medium.com/qaninja/configurando-o-ambiente-para-executar-o-appium-788eb0002ce9
Como rodar o emulador por linha de comando:
https://pt.stackoverflow.com/questions/203299/como-executar-o-emulador-a-partir-da-linha-de-comandos-do-windows
Como criar variáveis de ambiente:
https://www.java.com/pt_BR/download/help/path.xml
Problemas com a variavel JAVA_HOME:
https://mkyong.com/java/how-to-set-java_home-on-windows-10/

