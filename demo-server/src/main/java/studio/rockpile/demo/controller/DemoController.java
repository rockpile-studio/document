package studio.rockpile.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import studio.rockpile.demo.entity.UserInfo;
import studio.rockpile.demo.protocol.CommonResult;
import studio.rockpile.demo.util.SpringContextUtil;

import java.util.Arrays;
import java.util.Calendar;
import java.util.UUID;

@RestController
@RequestMapping("/demo")
public class DemoController {
    private static final Logger logger = LoggerFactory.getLogger(DemoController.class);

    // @CrossOrigin解决跨域问题
    // origins：允许可访问的域列表
    // maxAge：准备响应前的缓存持续的最大时间（以秒为单位）
    @CrossOrigin(origins = "*", maxAge = 3600)
    @RequestMapping(value = "/server/info", method = RequestMethod.GET)
    public CommonResult<?> serverInfo() {
        StringBuilder message = new StringBuilder("registe server(");
        message.append(SpringContextUtil.getProperty("spring.application.name")).append(":");
        message.append(SpringContextUtil.getProperty("server.port")).append(")");

        logger.debug(message.toString());
        return CommonResult.success(message.toString());
    }

    @CrossOrigin(origins = "*", maxAge = 3600)
    @RequestMapping(value = "/query/user", method = RequestMethod.GET)
    public CommonResult<?> queryUserById(@RequestParam(value = "id") String id,
                                         @RequestParam(value = "name") String name) {
        try {
            UserInfo user = new UserInfo();
            user.setId(id);
            user.setName(name);
            user.setAge(18);
            user.setInterests(Arrays.asList("reading", "drawing", "running"));
            user.setCreateDate(Calendar.getInstance().getTime());
            return CommonResult.success(user);
        } catch (Exception e) {
            logger.error("异常信息：{}", e.getMessage());
            return CommonResult.failed(e.getMessage());
        }
    }

    @CrossOrigin(origins = "*", maxAge = 3600)
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
