INSERT INTO issue_tracker.member VALUES (1,'test','1234','test');

INSERT INTO issue_tracker.issue VALUES (1,1,null,'test',null,'2023-05-25',true);

INSERT INTO issue_tracker.label VALUES (1,'1','test1','test','test');
INSERT INTO issue_tracker.label VALUES (2,'2','test1','test','test');
INSERT INTO issue_tracker.label VALUES (3,'3','test1','test','test');
INSERT INTO issue_tracker.label VALUES (4,'4','test1','test','test');

INSERT INTO issue_tracker.issues_with_labels VALUES (1,1);
INSERT INTO issue_tracker.issues_with_labels VALUES (1,2);
INSERT INTO issue_tracker.issues_with_labels VALUES (1,3);
INSERT INTO issue_tracker.issues_with_labels VALUES (1,4);
