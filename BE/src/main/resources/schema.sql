drop table if exists issue;

create table issue (
    issue_id int auto_increment not null,
    issue_writer int not null,
    issue_title varchar(45) not null,
    issue_contents varchar(500),
    primary key (issue_id)
);
