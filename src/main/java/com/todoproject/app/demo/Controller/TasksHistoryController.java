package com.todoproject.app.demo.Controller;

import com.todoproject.app.demo.Model.Task;
import com.todoproject.app.demo.Model.TasksHistory;
import com.todoproject.app.demo.Repository.TasksHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Optional;

@RestController
public class TasksHistoryController {
    @Autowired
    private TasksHistoryRepository tasksHistoryRepository;

    @GetMapping(value = "/taskshistory/{id}")
    public List<TasksHistory> getTasks(@PathVariable long id) {
        return tasksHistoryRepository.findByTaskId(id);
    }

    @DeleteMapping(value = "/taskshistory")
    public String deleteAll(){
        tasksHistoryRepository.deleteAll();
        return "Todos los datos eliminados";
    }

}
