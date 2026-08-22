-- AlterTable
ALTER TABLE `users` MODIFY `user_role` ENUM('root', 'teacher', 'student', 'admin') NOT NULL;
