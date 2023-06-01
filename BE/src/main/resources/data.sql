-- milestone 테이블 더미 데이터 추가

INSERT INTO `milestone` (`TITLE`, `DESCRIPTION`, `DEADLINE`)
VALUES ('마일스톤 1번 제목', '마일스톤 1번 내용', '1997-07-10');
INSERT INTO `milestone` (`TITLE`, `DESCRIPTION`, `DEADLINE`)
VALUES ('마일스톤 2번 제목', '마일스톤 2번 내용', '2023-05-10');
INSERT INTO `milestone` (`TITLE`, `DESCRIPTION`, `DEADLINE`)
VALUES ('마일스톤 3번 제목', '마일스톤 3번 내용', '2023-05-15');

-- member 테이블 더미 데이터 추가

INSERT INTO `member` (`NAME`, `PASSWORD`)
VALUES ('고뭉남', '1q2w3e4r!');
INSERT INTO `member` (`NAME`, `PASSWORD`, `PROFILE_URL`)
VALUES ('니노', '1234', 'asdfasdf');
INSERT INTO `member` (`NAME`, `PASSWORD`)
VALUES ('에이든', '2222!');
INSERT INTO `member` (`NAME`, `PASSWORD`)
VALUES ('아켄', '1q1111r!');
INSERT INTO `member` (`NAME`, `PASSWORD`)
VALUES ('훈딩', '24124');
INSERT INTO `member` (`NAME`, `PASSWORD`)
VALUES ('솔', '2313');

-- issue 테이블 더미 데이터 추가

INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `CREATED_AT`)
VALUES ('이슈 1번 제목', 1, '2023-04-25');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `CREATED_AT`)
VALUES ('이슈 2번 제목', 2, '2023-04-27');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('이슈 3번 제목', 3, 1, '2023-05-05');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `IS_OPENED`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('이슈 4번 제목', 4, false, 2, '2023-05-07');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `IS_OPENED`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('이슈 5번 제목', 2, false, 3, '2023-05-09');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `IS_OPENED`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('이슈 6번 제목', 1, false, 1, '2023-05-23');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `IS_OPENED`, `CREATED_AT`)
VALUES ('이슈 7번 제목', 3, false, '2023-06-01');

-- label 테이블 더미 데이터 추가

INSERT INTO `label` (`TITLE`, `DESCRIPTION`, `BACKGROUND_COLOR`, `FONT_COLOR`)
VALUES ('레이블 1번 제목', '레이블 1번 설명', '#00FF00', 'light');
INSERT INTO `label` (`TITLE`, `DESCRIPTION`, `BACKGROUND_COLOR`, `FONT_COLOR`)
VALUES ('레이블 2번 제목', '레이블 2번 설명', '#FFFF00', 'dark');
INSERT INTO `label` (`TITLE`, `DESCRIPTION`, `BACKGROUND_COLOR`, `FONT_COLOR`)
VALUES ('레이블 3번 제목', '레이블 3번 설명', '#0000FF', 'light');
INSERT INTO `label` (`TITLE`, `DESCRIPTION`, `BACKGROUND_COLOR`, `FONT_COLOR`)
VALUES ('레이블 4번 제목', '레이블 4번 설명', '#808080', 'dark');

-- label_attached_issues 더미 데이터 추가

INSERT INTO `label_attached_issues`
VALUES (1, 1);
INSERT INTO `label_attached_issues`
VALUES (1, 2);
INSERT INTO `label_attached_issues`
VALUES (2, 2);
INSERT INTO `label_attached_issues`
VALUES (2, 3);
INSERT INTO `label_attached_issues`
VALUES (3, 4);

INSERT INTO `assignee`
VALUES (1, 1);
INSERT INTO `assignee`
VALUES (2, 1);

-- comment 더미 데이터 추가

INSERT INTO `comment`(`writer_id`, `writer_name`, `issue_id`, `contents`, `created_at`)
VALUES (1, '고뭉남', 1, '안녕하세연', '2023-04-25');
INSERT INTO `comment`(`writer_id`, `writer_name`, `issue_id`, `contents`, `created_at`)
VALUES (2, '니노', 1, '그래 반갑다', '2023-04-26');
INSERT INTO `comment`(`writer_id`, `writer_name`, `issue_id`, `contents`, `created_at`)
VALUES (1, '고뭉남', 1, '왜 반말이냐', '2023-04-27');
INSERT INTO `comment`(`writer_id`, `writer_name`, `issue_id`, `contents`, `created_at`)
VALUES (2, '니노', 2, '빠큐', '2023-04-27');
