## VS Code extensions to be used:
- Ruby
- Vscode-icons
- Snyppets and syntax
- Gherkin indent

### Installations:
1. To install the Ruby language:
https://rubyinstaller.org/downloads/
-- download and install
2. run the following comand on cmd to install the bundles:
```
GEM INSTALL BUNDLER
```
3. To install the Cucumber tool:
```
GEM INSTALL CUCUMBER
```
4. To install the RSPEC Framework: (it's something like the junit)
```
GEM INSTALL RSPEC
```
5. To install the Capybara Framework:
```
GEM INSTALL CAPYBARA
```
6. To install the Capybara Framework:
```
GEM INSTALL FFI
```
7. To install the selenium:
```
GEM INSTALL SELENIUM-WEBDRIVER
```
8. To install selenium and other dependecies use the following command:
```
BUNDLE INSTALL
```

### Downloading and Installing the chrome driver:
1. access https://chromedriver.chromium.org/downloads
2. download the correct verion according to your chrome version
3. extract the file and put on C:\Windows

## Starting the project:
1. run the following command on the project folder:
```
CUCUMBER --INIT
```
2. create a file in the support folder as 'gemfile' name and put the following information:
```
source 'http://rubygems.org'

gem 'capybara'
gem 'cucumber'
gem 'rspec'
gem 'selenium-webdriver'
```
3. Open the env.rb file and put the follwoing information:
```
require 'capybara/cucumber'
```

4. Run the following bundle to install the dependencies:
```
bundle install
```
## Rerun the project:


