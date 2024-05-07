package com.example.Sw_2.project;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class product_Restcontroller {
    @Autowired
    account_reprository account_reprository;

    @Autowired
    product_reprository product_reprository;
    private final String productimgaes="D://Universty//Year_3//term 2//Software E 2//test//Sw_2.project//Sw_2.project//src//images//productimages//" ;


    @PostMapping("/addproduct" )
    public product_model Addproduct(@RequestBody product_model product_model){

        
        product_model.setAddress(account_reprository.findById(product_model.getSeller()).get().getAddress());
        product_model.setPhonenumber((int)account_reprository.findById(product_model.getSeller()).get().getPhonenumber());
        
        return product_reprository.save(product_model);
    }
    public String uploadimage(MultipartFile file){


       
       String filepath=productimgaes+file.getOriginalFilename();
       try {
        file.transferTo(new File(filepath));
    } catch (IllegalStateException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    } catch (IOException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    }
    

        return filepath;
    }
////////////////////////////////////////////////



    @PostMapping("/info")
    public product_model getinformation(@RequestBody product_model product_model) {


        return  product_reprository.findById(product_model.getId()).get();
    }
/////////////////////////////////////////////////

    @PostMapping("/updateproduct")
    public product_model updateproduct(@RequestBody product_model product_model ){

        
        if(product_model.getProductname()!=null){
            product_model.setProductname(product_model.getProductname());
        }
        if(product_model.getDescription()!=null){
            product_model.setDescription(product_model.getDescription());
        }
        if(product_model.getPrice() !=0){
            product_model.setPrice(product_model.getPrice());
        }



 
        

        return  product_reprository.save(product_model);
    }
    @GetMapping("/getallproducts")
    public product_model[] getproducts(){


        List<product_model> productList = product_reprository.findAll();
        product_model[] productArray = new product_model[productList.size()];
        productList.toArray(productArray);

        return productArray;
    }

    






    

    
}
