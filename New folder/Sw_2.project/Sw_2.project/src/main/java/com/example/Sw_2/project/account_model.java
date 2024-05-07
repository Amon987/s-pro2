package com.example.Sw_2.project;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "accounts")
public class account_model {
    @Id
    private String username;
    private String password;
    private String email;
    private long phonenumber;
    private String accounttype;
    private String address;
    private String imagepath;
    public account_model() {
    }
    public account_model(String username, String password, String email, long phonenumber, String accounttype,
            String address) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phonenumber = phonenumber;
        this.accounttype = accounttype;
        this.address = address;
    }
    public account_model(String username, String password, String email, long phonenumber, String accounttype,
            String address, String imagepath) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phonenumber = phonenumber;
        this.accounttype = accounttype;
        this.address = address;
        this.imagepath = imagepath;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public long getPhonenumber() {
        return phonenumber;
    }
    public void setPhonenumber(long phonenumber) {
        this.phonenumber = phonenumber;
    }
    public String getAccounttype() {
        return accounttype;
    }
    public void setAccounttype(String accounttype) {
        this.accounttype = accounttype;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getImagepath() {
        return imagepath;
    }
    public void setImagepath(String imagepath) {
        this.imagepath = imagepath;
    }

    
    

   
    
    
    
}
