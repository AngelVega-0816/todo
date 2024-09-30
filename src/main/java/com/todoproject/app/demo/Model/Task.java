package com.todoproject.app.demo.Model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(schema = "tasksCrud")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String title;
    @Column
    private String description;

    public long getId(){
        return id;
    }

    public void setId(long id){
        this.id = id;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    //public List<TasksHistory> getTasksHistory() {
    //    return tasksHistory;
    //}

    //public void setTasksHistory(TasksHistory tasksHistory) {
    //    this.tasksHistory.add(tasksHistory);
    //}
}
