package team05.codesquad.issuetracker.auth;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;


@Configuration
@Component
@Getter
@Setter
public class AWSCredentialsProperties {

    private final String accessKey;
    private final String secretKey;

    public AWSCredentialsProperties(@Value("${cloud.aws.credentials.accessKey}") String accessKey, @Value("${cloud.aws.credentials.secretKey}") String secretKey) {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }

}

