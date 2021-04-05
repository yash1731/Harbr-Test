package com.harbr.support;

import com.harbr.browser.WebBrowserFactory;
import com.harbr.httpVerbs.BaseVerb;
import com.harbr.httpVerbs.PostVerb;
import com.harbr.pages.BasePage;
import com.harbr.pages.FrontEnd_CustomerApp;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class WorldHelper {

    private WebDriver driver = WebBrowserFactory.getThreadedDriver();
    private static BasePage basePage = null;
    private static FrontEnd_CustomerApp frontEnd_customerApp = null;
    private static BaseVerb baseVerb = null;
    private static PostVerb postVerb = null;


    public BasePage getBasePage(){
        if(basePage != null) return basePage;
        return PageFactory.initElements(driver, BasePage.class);
    }

    public FrontEnd_CustomerApp getFrontEnd_CustomerApp(){
        if(frontEnd_customerApp != null) return frontEnd_customerApp;
        return PageFactory.initElements(driver, FrontEnd_CustomerApp.class);
    }

    public BaseVerb getBaseVerb(){
        if(baseVerb!= null) return baseVerb;
        return PageFactory.initElements(driver, BaseVerb.class);
    }

    public PostVerb getPostVerb(){
        if(postVerb != null) return postVerb;
        return PageFactory.initElements(driver, PostVerb.class);
    }
}
