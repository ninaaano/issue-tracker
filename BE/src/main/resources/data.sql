-- milestone 테이블 더미 데이터 추가

INSERT INTO `milestone` (`title`,`description`,`deadline`) VALUES ('마일스톤 1번 제목','마일스톤 1번 내용','1997-07-10');
INSERT INTO `milestone` (`title`,`description`,`deadline`) VALUES ('마일스톤 2번 제목','마일스톤 2번 내용','2023-05-10');
INSERT INTO `milestone` (`title`,`description`,`deadline`) VALUES ('마일스톤 3번 제목','마일스톤 3번 내용','2023-05-15');

-- member 테이블 더미 데이터 추가

INSERT INTO `member` (`name`,`password`) VALUES ('고건호','1q2w3e4r!');
INSERT INTO `member` (`name`,`password`,`profile_url`) VALUES ('노민정','1234','https://team05.s3.amazonaws.com/ninanino');

-- issue 테이블 더미 데이터 추가

INSERT INTO `issue` (`title`,`contents`,`writer_id`,`milestone_id`,`created_at`) VALUES ('이슈 1번 제목','이슈 1번 내용',1,1,'2023-04-25');
INSERT INTO `issue` (`title`,`contents`,`writer_id`,`milestone_id`,`created_at`) VALUES ('이슈 2번 제목','이슈 2번 내용',2,3,'2023-04-27');
INSERT INTO `issue` (`title`,`contents`,`writer_id`,`milestone_id`,`created_at`) VALUES ('이슈 3번 제목','이슈 3번 내용',2,3,'2023-05-05');
INSERT INTO `issue` (`title`,`contents`,`writer_id`,`is_opened`,`created_at`) VALUES ('이슈 4번 제목','이슈 4번 내용',1,false,'2023-05-07');

-- label 테이블 더미 데이터 추가

INSERT INTO `label` (`title`,`description`,`background_color`,`font_color`) VALUES ('레이블 1번 제목','레이블 1번 설명','#00FF00','LIGHT');
INSERT INTO `label` (`title`,`description`,`background_color`,`font_color`) VALUES ('레이블 2번 제목','레이블 2번 설명','##FFFF00','DARK');
INSERT INTO `label` (`title`,`description`,`background_color`,`font_color`) VALUES ('레이블 3번 제목','레이블 3번 설명','#0000FF','LIGHT');
INSERT INTO `label` (`title`,`description`,`background_color`,`font_color`) VALUES ('레이블 4번 제목','레이블 4번 설명','#808080','DARK');

-- label_attached_issues 더미 데이터 추가

INSERT INTO `label_attached_issues` VALUES (1,1);
INSERT INTO `label_attached_issues` VALUES (1,2);
INSERT INTO `label_attached_issues` VALUES (2,2);
INSERT INTO `label_attached_issues` VALUES (2,3);
INSERT INTO `label_attached_issues` VALUES (3,4);
