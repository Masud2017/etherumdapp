package com.dapp.ethreumdapp.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @Column(name =  "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "user_id")
    private String userId;
    @Column(name = "password")
    private String password;
    @OneToOne(cascade = CascadeType.ALL,mappedBy = "user")
    @JsonManagedReference
    private Address address;
}
