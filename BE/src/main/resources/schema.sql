DROP TABLE IF EXISTS `milestone`,`member`,`issue`,`assignee`,`label`,`label_attached_issues` CASCADE ;

CREATE TABLE `milestone`
(
    `milestone_id` INT         NOT NULL AUTO_INCREMENT,
    `title`        VARCHAR(45) NOT NULL,
    `deadline`     DATETIME,
    `description`  VARCHAR(200),
    `is_opened`     BIT DEFAULT 1,
    PRIMARY KEY (`milestone_id`)
);

CREATE TABLE `member`
(
    `member_id`   INT         NOT NULL AUTO_INCREMENT,
    `name`        VARCHAR(45) NOT NULL,
    `password`    VARCHAR(45) NOT NULL,
    `profile_url` VARCHAR(100),
    PRIMARY KEY (`member_id`)
);

CREATE TABLE `issue`
(
    `issue_id`     INT          NOT NULL AUTO_INCREMENT,
    `title`        VARCHAR(100) NOT NULL,
    `contents`     VARCHAR(500) NULL,
    `writer_id`    INT          NOT NULL,
    `is_opened`     BIT DEFAULT 1,
    `milestone_id` INT,
    `created_at`   DATETIME     NOT NULL,
    PRIMARY KEY (`issue_id`),
    CONSTRAINT `fk_issue_milestone_id`
    FOREIGN KEY (`milestone_id`)
        REFERENCES `milestone` (`milestone_id`),
    CONSTRAINT `fk_issue_writer_id`
    FOREIGN KEY (`writer_id`)
        REFERENCES `member` (`member_id`)
);

CREATE TABLE `assignee`
(
    `member_id` INT,
    `issue_id`  INT,
    PRIMARY KEY (`member_id`, `issue_id`),
    FOREIGN KEY (`member_id`)
        REFERENCES `member` (`member_id`),
    FOREIGN KEY (`issue_id`)
        REFERENCES `issue` (`issue_id`)
);

CREATE TABLE `label`
(
    `label_id`         INT         NOT NULL AUTO_INCREMENT,
    `title`            VARCHAR(45) NOT NULL,
    `description`      VARCHAR(100),
    `background_color` VARCHAR(45),
    `font_color`       VARCHAR(45),
    PRIMARY KEY (`label_id`)
);

CREATE TABLE `label_attached_issues`
(
    `issue_id` INT,
    `label_id` INT,
    PRIMARY KEY (`issue_id`, `label_id`),
    FOREIGN KEY (`issue_id`)
        REFERENCES `issue` (`issue_id`),
    FOREIGN KEY (`label_id`)
        REFERENCES `label` (`label_id`)
);
