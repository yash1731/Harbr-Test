package com.harbr;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        dryRun = false
        ,monochrome = true
        ,plugin = {"pretty",
        "html:target/test-report/report-html",
        "json:target/test-report/report-json.json",
        "junit:target/test-report/report-xml.xml"}
        ,strict = false
        ,features = {"src/test/java/resources/feature"}
        ,snippets = SnippetType.CAMELCASE
        ,glue = {"com.harbr.hooks","com.harbr.steps"}
        ,tags = {"@all"}

)
public class TestRunner {
}
