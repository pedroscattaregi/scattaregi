# Usernator
Need Mib users to perform tests? Your problems are over! The Usernator has come for automatically create users for you.

## Prerequisites
* .NetCore 3.0 SDK https://dotnet.microsoft.com/download/dotnet-core/3.0     

## Cloning The GitHub Repository
Open terminal. Clone qa repository:
bash
$ git clone git@github.com:agilecontent/qa.git


## Install Packages
Open terminal, navigate to `Usernator\Usernator.v2\Usernator` folder. Execute command: 
bash
$ dotnet restore


## How To Use:
1. After cloning the GitHub Repository and the Installing Packages, opent the solution folder;
2. Locate: C:\Users\pedro.scattaregi.INTRA\Documents\qa\Usernator\Usernator.v2\Usernator\Base\MibUsers.csv;
3. Change Users names and groups to be according to your necessity (columns: username, password, groupName, email, company) and seve it;
4. Open terminal, navigate to `Usernator\Usernator.v2\Usernator` folder. Execute command: 
bash
$ dotnet run

5. Let the magic happens;

## Debug
* Download Visual Code [https://code.visualstudio.com](https://code.visualstudio.com);
* Open Visual Studio Code;
* Click `File - Open Folder` then, select `Usernator\Usernator.v2\Usernator` folder;
* Find Debug Pannel, click "Run" button;
* If appers a dialog asking to install C# tools, agree and confirm;