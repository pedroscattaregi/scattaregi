### Installations:

1. Install the VS Code
2. Installing the Java SDK:
	- access https://www.oracle.com/java/technologies/javase-jdk8-downloads.html
	- download and install the version compatible to your operational system
	- configure the following env var: 
		-- JAVA_HOME = java folder path
		-- Path = %JAVA_HOME%\bin;
3. Installing the Android Studio
	- Access https://developer.android.com/studio
	- Download the last available version and install it
	- Open Android Studio
	- Click on "Tools" > SDK Manager
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
	- configure the following env var: 
		-- ANDROID_HOME = sdk folder path (from android studio > Tools > SDK Manager)
		-- Path = %ANDROID_HOME%\tools;%ANDROID_HOME%\tools\bin;%ANDROID_HOME%\platform-tools;

4. Creating a device Device (emulator):
	- Click on AVD Manager
	- Select a device to be created (recommend Nexus 5), select the android version available (from previows step are 6.0 and 10.0) and finish it
	- Test the device turn on click through Tools > AVD Manager > "play" button (it must open the android device)
	- How to run in terminal:
		TO_BE_DONE
		
5 Installing Appium:
- Run the following command:
	```npm install -g appium```
- instalar o appium doctor para verificar a instalação e suas dependências:
	```npm install -g appium-doctor```
- run the appium doctor (can be helpful in case of problems, it has a problem details and how to solve at the end)
	```appium-doctor.cmd --android```
- Run the appium to test it with the following command
	```appium```
	
	
	