package com.dapp.ethreumdapp.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue

    private Long id;

    @OneToOne
    @JoinColumn(name ="user_id")
    @JsonBackReference
    private User user;
}
