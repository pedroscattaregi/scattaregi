require "cucumber"
require "appium_lib"
require 'em/pure_ruby'

def caps 
    {
    caps: {
        platformName: "Android",
        platformVersion: "6",
        deviceName: "@Pixel_API_23",
        app: (File.join(File.dirname(__FILE__), "APK/com.ba.universalconverter.apk")),
        # How to get the next two attributes values: http://www.automationtestinghub.com/apppackage-and-appactivity-name/
        appPackage: "com.ba.universalconverter",
        appActivity: "MainConverterActivity",
        newCommandTimeout: "3600"
        #automationName: "UiAutomator2"
    }
}
end

Appium::Driver.new(caps, true)
Appium.promote_appium_methods Object

# Tornando a classe global:
require_relative 'page_object_helper.rb'
World(Screens)
#----------------------------------------------