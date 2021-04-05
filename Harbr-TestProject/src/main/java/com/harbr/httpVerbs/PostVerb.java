package com.harbr.httpVerbs;

import io.restassured.response.Response;

public class PostVerb extends BaseVerb{

    private Response response;

    public Response postApi(String uri, Object body){

        response = setUp().body(body).post(uri);
        return response;
    }
}
