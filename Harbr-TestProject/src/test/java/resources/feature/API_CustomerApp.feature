@all
@api
Feature:  Customer app through api
  As an admin
  I want to see the list of companies using api
  So I can view the data of the companies and their employees

  Scenario: Verify the list of users and their data are available when using endpoint
    Given I enter my name in customer app with endpoint
    Then I verify the 200 status code
    And I verify the admin name
    And I verify the companies name

