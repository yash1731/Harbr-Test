package com.harbr.webController;

import com.harbr.webWaits.Waits;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;

public class ButtonControl extends BaseController{

    private static Logger logger = LogManager.getLogger("TestLogger");


    public static void clickButton(WebElement element) {
        for (int counter = 0; counter <= time; counter++) {
            try {
                if (isElementDisplayed(element) && isElementEnabled(element)) {
                    element.click();
                    logger.info("Element is clicked");
                    return;
                } else {
                    Waits.waitForNoOfSeconds(2);
                    logger.info("Wait is applied " + counter);
                }
            } catch (Exception e) {
                Waits.waitForNoOfSeconds(1);
            }
        }
    }
}
