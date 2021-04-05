$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("IndiaTripandInfo.feature");
formatter.feature({
  "line": 2,
  "name": "Trip to India",
  "description": "As a customer\nI want to search for trip to India with all the valid information\nSo I can book trip and accomadation in India successfully",
  "id": "trip-to-india",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 547873,
  "status": "passed"
});
formatter.before({
  "duration": 1251749,
  "error_message": "org.picocontainer.injectors.AbstractInjector$UnsatisfiableDependenciesException: com.mailtravel.hooks.ScenarioHooks has unsatisfied dependency \u0027interface org.openqa.selenium.WebDriver\u0027 for constructor \u0027public com.mailtravel.hooks.ScenarioHooks(org.openqa.selenium.WebDriver)\u0027 from org.picocontainer.DefaultPicoContainer@49912c99:3\u003c|\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:191)\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:110)\n\tat org.picocontainer.injectors.ConstructorInjector.access$100(ConstructorInjector.java:51)\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:331)\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\n",
  "status": "failed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027MailTravel\u0027 home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TripToIndiaSteps.iAmOnTheMailTravelHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "Fill all details and book the dates for trip to India",
  "description": "",
  "id": "trip-to-india;fill-all-details-and-book-the-dates-for-trip-to-india",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@trip"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter \u0027India\u0027 in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I landed in the page which listed tourism in India",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on \u0027More Info\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Verify the date and the price for travelling",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify the telephone number provided in the details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the itineary tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify all the days are showing some info",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on \u0027Book Online\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Verify the first date of availability",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify date available should be departure date",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027Select. button and view transport info",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter the details for standard room in accomodation",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on \u0027Select Accomodatio\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I continue without \u0027Extras\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I landed in Passenger details",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I enter the passengers info",
  "rows": [
    {
      "cells": [
        "title",
        "fName",
        "lName",
        "dob_date",
        "dob_Month",
        "dob_Year"
      ],
      "line": 28
    },
    {
      "cells": [
        "title p1",
        "Test1",
        "Test",
        "1",
        "January",
        "1990"
      ],
      "line": 29
    },
    {
      "cells": [
        "title p2",
        "Test2",
        "Test",
        "2",
        "February",
        "1992"
      ],
      "line": 30
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enetr the Lead Contact Details",
  "rows": [
    {
      "cells": [
        "name",
        "telephoneNo",
        "emailadd",
        "add1",
        "addd2",
        "city",
        "postcode",
        "hearYou"
      ],
      "line": 32
    },
    {
      "cells": [
        "Test1 Test",
        "07878787876",
        "email add",
        "4, The Martlets",
        "High Road",
        "Burges Hill",
        "RH15 9NN",
        "In Paper"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on \u0027Continue\u0027 button",
  "keyword": "And "
});
formatter.match({
  "location": "TripToIndiaSteps.iEnterIndiaInTheSearchBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.iLandedInThePageWhichListedTourismInIndia()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.iClickOnMoreInfoButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.verifyTheDateAndThePriceForTravelling()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.verifyTheTelephoneNumberProvidedInTheDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.iClickOnTheItinearyTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.verifyAllTheDaysAreShowingSomeInfo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.iClickOnBookOnlineButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.verifyTheFirstDateOfAvailability()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.verifyDateAvailableShouldBeDepartureDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.clickOnSelectButtonAndViewTransportInfo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.iEnterTheDetailsForStandardRoomInAccomodation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.iClickOnSelectAccomodatioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.iContinueWithoutExtras()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.iLandedInPassengerDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.iEnterThePassengersInfo(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.iEnetrTheLeadContactDetails(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TripToIndiaSteps.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 412886,
  "error_message": "org.picocontainer.injectors.AbstractInjector$UnsatisfiableDependenciesException: com.mailtravel.hooks.ScenarioHooks has unsatisfied dependency \u0027interface org.openqa.selenium.WebDriver\u0027 for constructor \u0027public com.mailtravel.hooks.ScenarioHooks(org.openqa.selenium.WebDriver)\u0027 from org.picocontainer.DefaultPicoContainer@49912c99:3\u003c|\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:191)\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:110)\n\tat org.picocontainer.injectors.ConstructorInjector.access$100(ConstructorInjector.java:51)\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:331)\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\n",
  "status": "failed"
});
});