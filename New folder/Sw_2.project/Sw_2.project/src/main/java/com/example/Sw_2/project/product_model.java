package com.example.Sw_2.project;

import org.springframework.web.bind.annotation.CrossOrigin;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name =" products")
public class product_model {
  
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String productname;
    private String description;
    private int price;
    private String imagepath;
    private int phonenumber;
    private String address;
    private String seller;

    public product_model() {
    }
    
    public product_model(int id, String productname, String description, int price, String seller) {
        this.id = id;
        this.productname = productname;
        this.description = description;
        this.price = price;
        this.seller = seller;
    }

    public product_model(int id, String productname, String description, int price, int phonenumber, String address,
            String seller) {
        this.id = id;
        this.productname = productname;
        this.description = description;
        this.price = price;
        this.phonenumber = phonenumber;
        this.address = address;
        this.seller = seller;
    }

    public String getSeller() {
        return seller;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }

    public product_model(int id, String productname, String description, int price, String imagepath, int phonenumber,
            String address, String seller) {
        this.id = id;
        this.productname = productname;
        this.description = description;
        this.price = price;
        this.imagepath = imagepath;
        this.phonenumber = phonenumber;
        this.address = address;
        this.seller = seller;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getProductname() {
        return productname;
    }
    public void setProductname(String productname) {
        this.productname = productname;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }
    public String getImagepath() {
        return imagepath;
    }
    public void setImagepath(String imagepath) {
        this.imagepath = imagepath;
    }
    public int getPhonenumber() {
        return phonenumber;
    }
    public void setPhonenumber(int phonenumber) {
        this.phonenumber = phonenumber;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }


    
}
