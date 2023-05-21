package team05.codesquad.issuetracker.auth;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Getter
@Configuration
public class S3Properties {

    private String bucket;

    public S3Properties(@Value("${cloud.aws.s3.bucket}") String bucket) {
        this.bucket = bucket;
    }

}
