package com.harbr.pages;

import com.harbr.webController.TextFieldControl;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BasePage {

    protected WebDriver webDriver;

    @FindBy(id = "name")
    private WebElement fullName = null;


    public BasePage(WebDriver webDriver){
        this.webDriver = webDriver;
    }

    public FrontEnd_CustomerApp enterAdminName(String name) {
        TextFieldControl.enterText(fullName,name);
        return PageFactory.initElements(webDriver,FrontEnd_CustomerApp.class);
    }
}
