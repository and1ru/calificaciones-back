-- CreateTable
CREATE TABLE `Schools` (
    `school_id` INTEGER NOT NULL AUTO_INCREMENT,
    `school_name` VARCHAR(191) NOT NULL,
    `school_city` VARCHAR(191) NOT NULL,
    `school_address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`school_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(191) NOT NULL,
    `user_password` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `user_role` ENUM('root', 'teacher', 'student') NOT NULL,
    `school_id` INTEGER NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branches` (
    `branch_id` INTEGER NOT NULL AUTO_INCREMENT,
    `branch_name` VARCHAR(191) NOT NULL,
    `branch_address` VARCHAR(191) NOT NULL,
    `school_id` INTEGER NOT NULL,

    PRIMARY KEY (`branch_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Groups` (
    `group_id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_name` VARCHAR(191) NOT NULL,
    `branch_id` INTEGER NOT NULL,

    PRIMARY KEY (`group_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subject` (
    `subject_id` INTEGER NOT NULL AUTO_INCREMENT,
    `subject_name` VARCHAR(191) NOT NULL,
    `school_id` INTEGER NOT NULL,

    PRIMARY KEY (`subject_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Group_subject` (
    `group_subject_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `subject_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,

    PRIMARY KEY (`group_subject_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Group_student` (
    `group_student_id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`group_student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assignments` (
    `assignment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_subject_id` INTEGER NOT NULL,
    `assignment_name` VARCHAR(191) NOT NULL,
    `assignment_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`assignment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Grades` (
    `grade_id` INTEGER NOT NULL AUTO_INCREMENT,
    `assinment_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `score` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`grade_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
