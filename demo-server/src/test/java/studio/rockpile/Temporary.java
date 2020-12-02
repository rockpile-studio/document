package studio.rockpile;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import studio.rockpile.demo.entity.UserInfo;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.UUID;

public class Temporary {
    private static final Logger logger = LoggerFactory.getLogger(Temporary.class);

    @Test
    public void demo() {
        try {
            ObjectMapper jsonMapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                    .configure(MapperFeature.PROPAGATE_TRANSIENT_MARKER, true) // 序列化时忽略transient属性
                    .setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE)
                    .setSerializationInclusion(JsonInclude.Include.NON_NULL).configure(SerializationFeature.INDENT_OUTPUT, false)
                    .setDateFormat(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"))
//                    .setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY)
                    .registerModule(new SimpleModule().addSerializer(Long.class, ToStringSerializer.instance)
                            .addSerializer(Long.TYPE, ToStringSerializer.instance));

            UserInfo user = new UserInfo();
            user.setName("rockpile");
            user.setAge(18);
            user.setCreateDate(Calendar.getInstance().getTime());
            user.setDisable(false);
            user.setId(UUID.randomUUID().toString().replace("-", ""));
            user.setInterests(Arrays.asList("running", "reading"));
            String json = jsonMapper.writeValueAsString(user);
            logger.debug("用户信息：{}", json);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
