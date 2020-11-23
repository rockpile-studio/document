package studio.rockpile.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import studio.rockpile.demo.entity.UserInfo;
import studio.rockpile.demo.protocol.CommonResult;
import studio.rockpile.demo.util.SpringContextUtil;

import java.util.UUID;

@RestController
@RequestMapping("/demo")
public class DemoController {
    private static final Logger logger = LoggerFactory.getLogger(DemoController.class);

    @RequestMapping(value = "/server/info", method = RequestMethod.GET)
    public CommonResult<?> serverInfo() {
        StringBuilder message = new StringBuilder("registe server(");
        message.append(SpringContextUtil.getProperty("spring.application.name")).append(":");
        message.append(SpringContextUtil.getProperty("server.port")).append(")");

        logger.debug(message.toString());
        return CommonResult.success(message.toString());
    }

    @PostMapping(value = "/create/user")
    public CommonResult<?> createUser(@RequestBody UserInfo user) {
        try {
            logger.debug("用户信息：{}", user);
            user.setId(UUID.randomUUID().toString().replace("-", ""));
            return CommonResult.success(user);
        } catch (Exception e) {
            logger.error("异常信息：{}", e.getMessage());
            return CommonResult.failed(e.getMessage());
        }
    }
}
