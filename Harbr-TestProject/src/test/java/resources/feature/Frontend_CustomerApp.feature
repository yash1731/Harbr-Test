@all
@front
Feature:  Customer app
  As an admin
  I want to see the list of companies
  So I can view the data of the companies and their employees

  Scenario: Verify the list of users and their data are available
    Given I enter my name in customer app
    When  I submit the name in Customer App
    Then I can view "Welcome to Customer App" greeting
    And Verify the table is displayed with list of companies
    When I click on "Americas Inc." in a table
    Then I can view the Customer Details such as Name: "Americas Inc."
    And I can view number of employees is "10" and size is "Small"
    And I can view the contact details "John Smith (jsmith@americasinc.com)"
    When I click on back to the list button
    Then Verify the table is displayed with list of companies
    When I click on "Caribian Airlnis" in a table
    Then I can view the Customer Details such as Name: "Caribian Airlnis"
    And I can view number of employees is "1000" and size is "Big"
    And I can view the contact details "Jose Martinez (martines@cair.com)"
    When I click on back to the list button
    Then Verify the table is displayed with list of companies
    When I click on "MacroSoft" in a table
    Then I can view the Customer Details such as Name: "MacroSoft"
    And I can view number of employees is "540" and size is "Medium"
    And I can view the contact details "Bill Paxton (bp@ms.com)"
    When I click on back to the list button
    Then Verify the table is displayed with list of companies
    When I click on "Bananas Corp" in a table
    Then I can view the Customer Details such as Name: "Bananas Corp"
    And I can view number of employees is "10000" and size is "Big"
    And I can view the contact details "Xavier Hernandez (xavier@bananas.com)"
    When I click on back to the list button
    Then Verify the table is displayed with list of companies
    When I click on "XPTO.com" in a table
    Then I can view the Customer Details such as Name: "XPTO.com"
    And I can view number of employees is "102" and size is "Medium"
    And I can view the contact details "Daniel Zuck (zuckh@xpto.com)"
    When I click on back to the list button
    Then Verify the table is displayed with list of companies
    When I click on "United Brands" in a table
    Then I can view the not defined error


