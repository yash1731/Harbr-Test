package com.harbr.pages;

import com.harbr.webController.BaseController;
import com.harbr.webController.ButtonControl;
import com.harbr.webWaits.Waits;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class FrontEnd_CustomerApp extends BasePage{

    @FindBy(css = "#root > div > div > div > p:nth-child(2) > input[type=button]:nth-child(2)")
    private WebElement submit = null;
    @FindBy(css = "#root > div > h1")
    private WebElement greeting = null;
    @FindBy(css = "#root > div > div > div > div > table")
    private WebElement table = null;
    @FindBy(css = "#root > div > div > div > div > p:nth-child(2)")
    private WebElement companyNameDetail = null;
    @FindBy(css = "#root > div > div > div > div > p:nth-child(3)")
    private WebElement numEmployee = null;
    @FindBy(css = "#root > div > div > div > div > p:nth-child(4)")
    private WebElement companySize = null;
    @FindBy(css = "#root > div > div > div > div > p:nth-child(5)")
    private WebElement contactDetail = null;
    @FindBy(css = "#root > div > div > div > div > input[type=button]")
    private WebElement backToListButton = null;


    public FrontEnd_CustomerApp(WebDriver webDriver) {
        super(webDriver);
    }

    public FrontEnd_CustomerApp clickSubmitButton() {
        ButtonControl.clickButton(submit);
        return this;
    }

    public boolean verifyGreetingMesg(String message) {
        return greeting.getText().contains(message);
    }

    public boolean verifyCompaniesTableIsDisplayed() {
        Waits.waitForElement(table);
        BaseController.isElementDisplayed(table);
        return true;
    }

    public FrontEnd_CustomerApp clickOnCompany(String company) {
        try {
            for (WebElement rowElement : table.findElements(By.cssSelector("tbody > tr"))) {
                for (WebElement columnElement : rowElement.findElements(By.cssSelector("td > a"))) {
                    if (columnElement.getText().contains(company)) {
                        ButtonControl.clickButton(columnElement);
                    }
                }
            }
        }catch(org.openqa.selenium.StaleElementReferenceException ex){

        }
        return this;
    }

    public boolean verifyCompanyName(String companyName) {
        return companyNameDetail.getText().contains(companyName);
    }

    public boolean verifyEmployeesAndSize(String employee, String size) {

        if((numEmployee.getAttribute("outerHTML").contains(employee)) &&
                (companySize.getAttribute("outerHTML").contains(size))){
            return true;
        }
        return false;
    }

    public boolean verifyContactDetails(String contact) {
        return contactDetail.getText().contains(contact);
    }

    public FrontEnd_CustomerApp clickBackToList() {
        ButtonControl.clickButton(backToListButton);
        return this;
    }

    public boolean verifyError() {
        return BaseController.isElementNotDisplayedAndPresent(companyNameDetail);
    }
}
