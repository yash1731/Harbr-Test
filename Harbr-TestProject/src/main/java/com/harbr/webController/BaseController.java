package com.harbr.webController;

import com.harbr.utilities.EnvConfig;
import com.harbr.webWaits.Waits;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;

public class BaseController {
    protected static int time = Integer.parseInt(EnvConfig.getValue("default.timer"));
    private static Logger logger = LogManager.getLogger("TestLogger");


    public static boolean isElementDisplayed(WebElement element) {
        for (int i = 0; i < time; i++) {
            if (element.isDisplayed()) {
                logger.info("Element is displayed");
                return true;
            } else {
                Waits.waitForNoOfSeconds(1);
            }
        }
        return false;
    }

    protected static boolean isElementEnabled(WebElement element) {
        for (int i = 0; i < time; i++) {
            if (element.isEnabled()) {
                logger.info("The element enabled status is " + element.isEnabled());
                return true;
            } else {
                Waits.waitForNoOfSeconds(1);
            }
        }
        return false;
    }

    public static Boolean isElementNotDisplayedAndPresent(WebElement element) {
        try {
            element.isDisplayed();
            return false;
        } catch (NoSuchElementException e) {
            return true;
        }
    }
}
