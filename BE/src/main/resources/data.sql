INSERT INTO milestone VALUES (1,'miletest',null,null,true);

INSERT INTO member VALUES (1,'test','1234','test');
INSERT INTO member VALUES (2,'test2','1234','test');

INSERT INTO issue VALUES (1,'test',null,1,true,1,'2023-05-25');
INSERT INTO issue VALUES (2,'test2',null,1,true,1,'2023-05-25');
INSERT INTO issue VALUES (3,'test3',null,1,false,null,'2023-05-25');

INSERT INTO label VALUES (1,'1','test1','test','test');
INSERT INTO label VALUES (2,'2','test2','test','test');
INSERT INTO label VALUES (3,'3','test3','test','test');
INSERT INTO label VALUES (4,'4','test4','test','test');

INSERT INTO label_attached_issues VALUES (1,1);
INSERT INTO label_attached_issues VALUES (1,2);
INSERT INTO label_attached_issues VALUES (1,3);
INSERT INTO label_attached_issues VALUES (1,4);

INSERT INTO label_attached_issues VALUES (2,3);
INSERT INTO label_attached_issues VALUES (2,4);
