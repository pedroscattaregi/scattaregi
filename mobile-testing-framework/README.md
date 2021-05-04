# Mobile Testing Framework

This project uses [wdio](https://webdriver.io/) + [Appium](http://appium.io/) to contact devices keeping the tests for a black-box testing on banQi app.
This project also utilizes [cucumber](https://cucumber.io/) to advocate for a behavioral driven test design (BDD) and a Device Farm, [Browserstack](https://www.browserstack.com/) service to be able to run in pipelines and use real devices.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change in the [MTF Board](https://airfox.atlassian.net/secure/RapidBoard.jspa?rapidView=171&view=detail).

- Everyone in the airfox project own this project and can contribute for it.

Please make sure to update tests as appropriate.

## Getting Started

A quick environment guide and how to get started writing tests.

### Prerequisites
#### Yarn
There are many package managers out there, this Readme is written from the perspective of using [yarn](https://www.npmjs.com/package/yarn) as a default option.
We will be using `yarn` for most of the CLI work on this project. 
Please, check to see if you have it:
```
yarn -v
```
And if not, use the [complete guide for install yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable) or use the following commands:
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install yarn

```

#### Device
You will need to have an emulator running on your local machine to run this locally.

##### iOS
A MacBook is necessary for that.
To create the simulator, use the bash command `simulator` and create a device thorugh there.

##### Android
Complete guide in [here](https://medium.com/@jeancabral/instalando-e-configurando-react-native-no-ubuntu-18-04-e3329ac090a0) (pt-BR).  

1\. download [Android Studio](https://developer.android.com/studio/install?hl=pt-br).  

2\. Download the [Android SDK](https://developer.android.com/studio).  

3\. Download the [JDK](https://docs.oracle.com/en/java/javase/11/install/installation-jdk-microsoft-windows-platforms.html#GUID-DAF345BA-B3E7-4CF2-B87A-B6662D691840).  

4\. Create the necessary environment variables: 
```
ANDROID_HOME="{path-to-android-studio-installation}/Android/sdk"
JAVA_HOME={path-to-JDK-installation}/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home
PATH=$JAVA_HOME/bin
PATH=$ANDROID_HOME/tools
PATH=$ANDROID_HOME/platform-tools
```
- ${PATH} is a common existing env var, so it should only add the values below.
- Use the following guides for env vars according to OSs:  
    - [Windows](https://helpdeskgeek.com/how-to/create-custom-environment-variables-in-windows/)  
    - [Mac](https://kelvinmwinuka.com/setting-environment-variables-on-macos/)  
    - [Linux](https://devconnected.com/set-environment-variable-bash-how-to/)  

5\. open the android studio and go to the SDK Manager to configure the following points:  
+ Google APIs  
+ Android SDK Platform 23  
+ Intel x86 Atom_64 System Image  
+ Google APIs Intel x86 Atom_64 System Image  

6\. Create the emulator device through the Android studio > AVD Manager.

### Installing

After we have a working version of `yarn`, we can start installing the project's dependencies.

```
yarn install
```
#### Environment Variables
Create a `.env` file at the root of this project. You can find an example of the required fields and copy/paste them in [.env_example](https://bitbucket.org/airfox/mobile-testing-framework/src/master/.env_example). Update the paths to reflect your environment and choose only Android or iOS section vars (according to the device is going to run the tests).

#### App Data to Run tests
Update the `app-data.json` file at the root of this project to use your test users to run the tests. The file has already set valid accounts but makes sure is all accounts still valid before start running it or use yours. **In "banQiUser" you must use an account with "@airfox.com" or "@airfox.io" email.**

#### Start an Emulator/Simulator

[Start an iOS simulator via CLI](https://medium.com/xcblog/simctl-control-ios-simulators-from-command-line-78b9006a20dc)

[Start an Android emulator via CLI](https://developer.android.com/studio/run/emulator-commandline)

### Running the tests
The version of the app to be tested must be in an apk file configured into the `.env` file. MTF does not know about different environments and Devices OSs.

#### Mobile Testing Framework
Shifting back to this project you'll want to make sure to boot up the Appium Http Server:
```
yarn start
```
This will delegate the test behavior commands to the device.
These commands will run in the local/browserstack machine and in the android or ios platform.

Running the tests:
```
yarn test:local:android
yarn test:browserstack:android
yarn test:local:ios
yarn test:browserstack:ios
```
**Note:** The tests will fail for iOS version due to [IP-1704](https://airfox.atlassian.net/browse/IP-1704)

## Break down test structure 

### Cucumber

[Cucumber Documentation](https://cucumber.io/docs/gherkin/reference/)

```
@LongRunningTest
@Blogging
Feature: Multiple site support. Only blog owners can post to a blog, 
except administrators, who can post to all blogs.

    Background:
        Given a global administrator named "Greg"
        And a blog named "Greg's anti-tax rants"
        And a customer named "Dr. Bill"
        And a blog named "Expensive Therapy" owned by "Dr. Bill"

    Scenario: Dr. Bill posts to his own blog
        Given I am logged in as Dr. Bill
        When I try to post to "Expensive Therapy"
        Then I should see "Your article was published."

@ShortRunningTest
@Meal
Feature: Delicious meal test

    Scenario Outline: eating
        Given there are <start> cucumbers
        When I eat <eat> cucumbers
        Then I should have <left> cucumbers

        Examples:
        | start | eat | left |
        |    12 |   5 |    7 |
        |    20 |   5 |   15 |
```

### Page Object Model

[Page Objet Model Documentation](https://webdriver.io/docs/pageobjects.html#making-a-page-object)

```
// home-page.js
import BasePage from '@root/src/pages/base-page'

class HomePage extends BasePage {

    public get homeScrollView(): Promise<DriverElement> {
        return webdriver.getElement(this.homeWrapperElement);
    }

    public async openMenu(): Promise<void> {
    const button = await this.menuButton;
    await button.click();
  }

}

export default new HomePage()
```

## Built With

* [Webdriver](https://webdriver.io/docs/frameworks.html) - Orchestrator Language-neutral wire protocol for DOM instructions and integrate tools
* [Appium](http://appium.io/docs/en/about-appium/getting-started) - Test automation framework for native/hybrid mobile apps
* [Cucumber](https://cucumber.io/docs/gherkin/reference/) - BDD test framework API
* [Axios](https://github.com/axios/axios) - HTTP Requests
* [Browserstack](https://www.browserstack.com/) - Device Farm

## License
[MIT](https://choosealicense.com/licenses/mit/)