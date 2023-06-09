#!/bin/bash
./gradlew build -x test
aws s3 cp build/libs/issue-tracker-0.0.1-SNAPSHOT.jar s3://codesquad-project-team05/issue-release.jar
echo "배포 완료!"
