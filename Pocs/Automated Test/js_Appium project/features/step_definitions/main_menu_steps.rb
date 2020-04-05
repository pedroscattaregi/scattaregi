Given("I land on home screen") do
    find_element(id: "action_add_favorites")
    find_element(:xpath, '//android.widget.TextView[@resource-id="com.ba.universalconverter:id/action_search"]')
end

When ("I press on the menu item") do
    mainMenuScreen.open_menu()
end

Then ("I should see the left menu") do
    sleep(3) # por hora
    menuHeader = find_element(:xpath, '//*[@class="android.widget.TextView" and @text="Unit Converter"]')
    expect(menuHeader.text).to eq 'Unit Converter'
end

When("I press to favorite the conversion") do
    find_element(:xpath, '//android.widget.TextView[@resource-id="com.ba.universalconverter:id/action_add_favorites"]').click
end

When("I go to the Favorites conversions") do
    find_element(:xpath, '//android.widget.ImageButton[@content-desc="Open navigation drawer"]').click
    sleep(3)
    find_element(:xpath, '//*[@text="Favorite conversions"]').click
end

Then("I verify that the conversion was added to the favorites") do
    mainHeader = find_element(:xpath, '//*[@text="Favorite conversions"]')
    expect(mainHeader.text).to eq 'Favorite conversions'
end
