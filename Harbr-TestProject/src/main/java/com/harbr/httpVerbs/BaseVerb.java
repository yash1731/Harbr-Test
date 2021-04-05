package com.harbr.httpVerbs;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

public class BaseVerb {

    protected RequestSpecification requestSpecification;
    protected Response response;

    public RequestSpecification getRequestSpecification(){
        return requestSpecification;
    }

    public RequestSpecification setUp(){
        requestSpecification = given().contentType("application/json").accept("application/json");
        return requestSpecification;
    }

    void printResponse(String message){
        if(isError(response)){
            System.err.println(message);
        } else {
            System.out.println(message);
        }
    }

    private boolean isError(Response response){
        return response.statusCode() > 399;
    }
}
