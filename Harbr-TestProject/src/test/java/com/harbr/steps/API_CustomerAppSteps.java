package com.harbr.steps;

import com.harbr.support.WorldHelper;
import com.harbr.utilities.EnvConfig;
import com.harbr.utilities.JsonReader;
import com.harbr.utilities.TestData;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class API_CustomerAppSteps {

    private WorldHelper helper;
    private Response response;
    private JsonPath jsonPath;

    public API_CustomerAppSteps(WorldHelper helper){
        this.helper = helper;
    }

    @Given("^I enter my name in customer app with endpoint$")
    public void iEnterMyNameInCustomerAppWithEndpoint() throws Throwable   {
        helper.getBaseVerb().setUp();
        String endpoint = EnvConfig.getValue("api.url");
        String data = JsonReader.getData("sendName.json");
        response = helper.getPostVerb().postApi(endpoint,data);
        jsonPath = new JsonPath(response.thenReturn().asString());

    }

    @Then("^I verify the (\\d+) status code$")
    public void iVerifyTheStatusCode(int arg1) throws Throwable {
         int statusCode = response.getStatusCode();
         jsonPath = new JsonPath(response.thenReturn().asString());
         assertEquals(200,statusCode);
    }

    @Then("^I verify the admin name$")
    public void iVerifyTheAdminName() throws Throwable {
        jsonPath = new JsonPath(response.thenReturn().asString());
        String adminName = jsonPath.get("name");
        assertEquals(response.getContentType(),"application/json; charset=utf-8");
        assertNotNull(adminName);
    }

    @Then("^I verify the companies name$")
    public void iVerifyTheCompaniesName() throws Throwable {

        List name1 = jsonPath.get("customers.name");
        System.out.println(name1);
        String names = TestData.getValue("company names");
        List<String> comNames = new ArrayList<String>(Arrays.asList(names.split(",")));
        assertEquals(comNames,name1);
    }
}
