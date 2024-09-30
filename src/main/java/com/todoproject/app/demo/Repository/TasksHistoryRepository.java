package com.todoproject.app.demo.Repository;

import com.todoproject.app.demo.Model.TasksHistory;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TasksHistoryRepository extends JpaRepository<TasksHistory, Long> {
    void deleteByTaskId(Long taskId);

    List<TasksHistory> findByTaskId(Long taskId);

    @EntityGraph(attributePaths = "task")
    List<TasksHistory> findAll();
}
