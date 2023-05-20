package team05.codesquad.issuetracker.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConstructorBinding;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import team05.codesquad.issuetracker.auth.AWSCredentialsProperties;

@Configuration
@ConstructorBinding
public class AmazonS3Config {

    private final AWSCredentialsProperties awsCredentialsProperties;
    private final String region;


    public AmazonS3Config(AWSCredentialsProperties awsCredentialsProperties,
                          @Value("${cloud.aws.region.static}") String region) {
        this.awsCredentialsProperties = awsCredentialsProperties;
        this.region = region;
    }

    @Bean
    public AmazonS3 amazonS3() {
        AWSCredentials awsCredentials = new BasicAWSCredentials(
                awsCredentialsProperties.getAccessKey(),
                awsCredentialsProperties.getSecretKey()
        );

        return AmazonS3ClientBuilder.standard()
                .withRegion(region)
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .build();
    }

}
