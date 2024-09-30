package com.todoproject.app.demo.Controller;

import com.todoproject.app.demo.Model.Task;
import com.todoproject.app.demo.Model.TasksHistory;
import com.todoproject.app.demo.Repository.TasksHistoryRepository;
import com.todoproject.app.demo.Repository.TodoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@RestController
public class TodoController {
    @Autowired
    private TodoRepository todoRepository;
    @Autowired
    private TasksHistoryRepository tasksHistoryRepository;

    @PostMapping(value = "/savetask")
    public Task saveTask(@RequestBody Task task){
        todoRepository.save(task);
        return task;
    }

    @GetMapping(value = "/tasks")
    public List<Task> getTasks() {
        return todoRepository.findAll();
    }

    @PutMapping(value = "/updatetask/{id}")
    public Task updateTask(@PathVariable long id ,@RequestBody Task task){
        Task updatedTask = todoRepository.findById(id).get();
        TasksHistory oldTask = new TasksHistory();

        oldTask.setUpdatedAt(LocalDateTime.ofInstant(Instant.now(), ZoneId.systemDefault()));
        oldTask.setDescription(updatedTask.getDescription());
        oldTask.setTitle(updatedTask.getTitle());
        oldTask.setTask(updatedTask);
        tasksHistoryRepository.save(oldTask);

        updatedTask.setTitle(task.getTitle());
        updatedTask.setDescription(task.getDescription());

        todoRepository.save(updatedTask);
        return updatedTask;
    }

    @DeleteMapping(value = "/delete/{id}")
    @Transactional
    public ResponseEntity<String> deleteTask(@PathVariable long id) {
        try {
            tasksHistoryRepository.deleteByTaskId(id);
            todoRepository.deleteById(id);
            return ResponseEntity.ok("Delete task");
        } catch (EmptyResultDataAccessException err) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
