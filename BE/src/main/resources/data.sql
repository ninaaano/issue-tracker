-- milestone 테이블 더미 데이터 추가

INSERT INTO `milestone` (`TITLE`, `DESCRIPTION`, `DEADLINE`)
VALUES ('NewMilestone', 'NewMilestone 내용', '1997-05-28'),
       ('IssueTracker', 'IssueTracker 내용', '2023-06-02');

-- member 테이블 더미 데이터 추가
INSERT INTO `member` (`name`, `profile_url`)
VALUES ('고뭉남', 'https://avatars.githubusercontent.com/u/77562698?v=4'),
       ('니노', 'https://avatars.githubusercontent.com/u/95615105?v=4'),
       ('에이든', 'https://avatars.githubusercontent.com/u/115064144?v=4'),
       ('아켄', 'https://avatars.githubusercontent.com/u/96980857?v=4'),
       ('솔', 'https://avatars.githubusercontent.com/u/86761640?v=4'),
       ('훈딩', 'https://avatars.githubusercontent.com/u/56246060?v=4');

-- issue 테이블 더미 데이터 추가

INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('[FE]: Creating Components', 6, 2, '2023-05-16T09:10:35');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('[BE]: Designing the ERD Structure', 1, 2, '2023-05-17T09:10:35');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('[FE]: Implementing UI Layout', 4, 2, '2023-05-18T14:25:21');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('[BE]: Implementing Database Queries', 2, 2, '2023-05-19T12:45:10');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('[FE]: Implementing Authentication', 4, 2, '2023-05-20T10:35:45');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('[BE]: Refactoring Backend Code', 1, 2, '2023-05-21T15:12:53');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`, `IS_OPENED`)
VALUES ('[FE]: Implementing Search Functionality', 6, 2, '2023-05-22T08:55:10', false);
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('[FE]: Implementing Notifications', 2, 2, '2023-05-23T11:20:30');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`, `IS_OPENED`)
VALUES ('[BE]: Handling File Uploads', 4, 2, '2023-05-24T13:40:15', false);
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('[FE]: Improving Performance', 1, 1, '2023-05-25T16:30:20');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`, `IS_OPENED`)
VALUES ('[BE]: Fixing API Endpoint', 5, 1, '2023-05-26T09:45:35', false);
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`, `IS_OPENED`)
VALUES ('[FE]: Implementing User Profile', 3, 1, '2023-05-27T11:20:15', false);
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('[BE]: Database Optimization', 1, 1, '2023-05-28T14:10:40');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('[FE]: Adding Unit Tests', 5, 1, '2023-05-29T16:55:25');
INSERT INTO `issue` (`TITLE`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('[BE]: Resolving Performance Bottlenecks', 3, 1, '2023-06-01T09:30:45');

-- label 테이블 더미 데이터 추가

INSERT INTO `label` (`TITLE`, `DESCRIPTION`, `BACKGROUND_COLOR`, `FONT_COLOR`)
VALUES ('docs', 'docs에 관련된 라벨입니다.', '#0025E6', 'light'),
       ('bug', 'bug에 관련된 라벨입니다.', '#DE4123', 'dark'),
       ('enhancement', 'enhancement에 관련된 라벨입니다.', '#50C878', 'dark'),
       ('task', '', '#FFD700', 'dark');

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

-- assignee 더미 데이터 추가

INSERT INTO `assignee`
VALUES (4,1),
       (6,1),
       (1,2),
       (2,2),
       (4,3),
       (6,3),
       (1,4),
       (2,4),
       (3,5),
       (5,5),
       (1,6),
       (2,6),
       (3,7),
       (5,7),
       (4,8),
       (6,8),
       (4,9),
       (6,9),
       (3,10),
       (5,10),
       (3,11),
       (5,11),
       (1,12),
       (2,12),
       (3,13),
       (5,13),
       (3,14),
       (5,14),
       (4,15),
       (6,15);

-- comment 더미 데이터 추가

INSERT INTO `comment`(`writer_id`, `writer_name`, `issue_id`, `contents`, `created_at`)
VALUES (3,'에이든',1,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',1,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',1,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',2,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',2,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',2,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',3,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',3,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',3,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',4,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',4,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',4,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',5,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',5,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',5,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',6,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',6,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',6,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',7,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',7,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',7,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',8,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',8,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',8,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',9,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',9,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',9,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',10,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',10,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',10,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',11,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',11,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',11,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',12,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',12,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',12,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',13,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',13,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',13,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',14,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',14,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',14,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35'),
       (3,'에이든',15,'마감일은 언제인가요?','2023-05-30T09:10:35'),
       (3,'에이든',15,'마감일은 6월 2일 금요일까지입니다!', '2023-05-30T09:10:35'),
       (6,'훈딩',15,'다들 화이팅해서 이슈트래커 완성해보자요!!', '2023-05-30T09:10:35');
