package com.harbr.steps;

import com.harbr.pages.FrontEnd_CustomerApp;
import com.harbr.support.WorldHelper;
import com.harbr.utilities.TestData;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class Frontend_CustomerAppSteps {

    private WorldHelper helper;
    private FrontEnd_CustomerApp frontEnd_customerApp;

    public Frontend_CustomerAppSteps(WorldHelper helper){
        this.helper = helper;
    }

    @Given("^I enter my name in customer app$")
    public void iEnterMyNameInCustomerApp() throws Throwable {
        String name = TestData.getValue("admin name");
        frontEnd_customerApp = helper.getBasePage().enterAdminName(name);
    }

    @When("^I submit the name in Customer App$")
    public void iSubmitTheNameInCustomerApp() throws Throwable {
      helper.getFrontEnd_CustomerApp().clickSubmitButton();
    }

    @Then("^I can view \"([^\"]*)\" greeting$")
    public void iCanViewGreeting(String message) throws Throwable {
        Assert.assertTrue(frontEnd_customerApp.verifyGreetingMesg(message));

    }

    @Then("^Verify the table is displayed with list of companies$")
    public void verifyTheTableIsDisplayedWithListOfCompanies() throws Throwable {
       Assert.assertTrue(frontEnd_customerApp.verifyCompaniesTableIsDisplayed());
    }

    @When("^I click on \"([^\"]*)\" in a table$")
    public void iClickOnInATable(String company) throws Throwable {
       frontEnd_customerApp.clickOnCompany(company);
    }

    @Then("^I can view the Customer Details such as Name: \"([^\"]*)\"$")
    public void iCanViewTheCustomerDetailsSuchAsName(String companyName) throws Throwable {
      Assert.assertTrue(frontEnd_customerApp.verifyCompanyName(companyName));
    }

    @Then("^I can view number of employees is \"([^\"]*)\" and size is \"([^\"]*)\"$")
    public void iCanViewNumberOfEmployeesIsAndSizeIs(String employee, String size) throws Throwable {
        Assert.assertTrue(frontEnd_customerApp.verifyEmployeesAndSize(employee,size));

    }

    @Then("^I can view the contact details \"([^\"]*)\"$")
    public void iCanViewTheContactDetails(String contact) throws Throwable {
        Assert.assertTrue(frontEnd_customerApp.verifyContactDetails(contact));
    }

    @When("^I click on back to the list button$")
    public void iClickOnBackToTheListButton() throws Throwable {
      frontEnd_customerApp.clickBackToList();
    }

    @Then("^I can view the not defined error$")
    public void iCanViewTheNotDefinedError() throws Throwable {
        Assert.assertTrue(frontEnd_customerApp.verifyError());
    }
}
