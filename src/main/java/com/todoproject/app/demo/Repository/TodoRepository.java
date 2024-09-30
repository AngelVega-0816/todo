package com.todoproject.app.demo.Repository;

import com.todoproject.app.demo.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Task, Long> {
}
