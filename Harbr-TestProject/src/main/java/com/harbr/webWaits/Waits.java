package com.harbr.webWaits;

import com.harbr.browser.WebBrowserFactory;
import com.harbr.utilities.EnvConfig;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Optional;

public class Waits {
    protected static int time = Integer.parseInt(EnvConfig.getValue("default.timer"));
    private static Logger logger = LogManager.getLogger("TestLogger");
    private static int maxTimeToWait = 15;
    private static WebDriver driver = WebBrowserFactory.getThreadedDriver();


    public static Optional<WebElement> waitForElement(WebElement element){
        try {
            WebDriverWait wait = new WebDriverWait(driver, maxTimeToWait);
            logger.info("waiting for element to be visible ...");
            return wait.until(ExpectedConditions.visibilityOfAllElements(element)).stream().findFirst();
        }catch (Exception e){
            logger.error("Error occurred : "+ e.getMessage());
            return null;
        }
    }

    public static void waitForNoOfSeconds(int seconds){
        try {
            Thread.sleep(time * 15  *seconds);
        } catch (InterruptedException e) {
            logger.error(e.getMessage());
        }
    }

}
