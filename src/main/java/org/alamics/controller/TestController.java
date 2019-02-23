package org.alamics.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
@Api(value="test", description="Тестовый контроллер")
public class TestController {

    @GetMapping("/hello")
    @ApiOperation(value = "Привет")
    public String hello(){
        return "hello world";
    }
}
