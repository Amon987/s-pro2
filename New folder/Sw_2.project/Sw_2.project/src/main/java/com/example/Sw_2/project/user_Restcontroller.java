package com.example.Sw_2.project;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class user_Restcontroller {

    
    @Autowired
    account_reprository account_reprository;

    private final String userimgaes="D://Universty//Year_3//term 2//Software E 2//test//Sw_2.project//Sw_2.project//src//images//userimages//" ;

    @PostMapping("/signup-account")
    public account_model postMethodName(@RequestBody account_model account_model)  {
        
        
        return account_reprository.save(account_model);
    }


    @PostMapping("/Login-account")
    public String LoginMethod(@RequestBody account_model account_model){

        if (account_reprository.findById(account_model.getUsername()).isPresent()) {
            account_model account = account_reprository.findById(account_model.getUsername()).get();
            if (account.getPassword().equals(account_model.getPassword())) {
                return "true";
            } else {
                return "wrong password";
            }
        }
        return "username does not exist";
    }

    @PostMapping("/information")
    public account_model getinformation(@RequestBody account_model account_model) {


        return account_reprository.findById(account_model.getUsername()).get();
    }


    @PostMapping("/uploadimage")
    public String uploadimage(@RequestParam("image") MultipartFile file,@RequestParam("username") String username){


        account_model account_model = new account_model();
       String filepath=userimgaes+file.getOriginalFilename();
       try {
        file.transferTo(new File(filepath));
    } catch (IllegalStateException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    } catch (IOException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    }
    account_model=account_reprository.findById(username).get();
    account_model.setImagepath(filepath);

    account_reprository.save(account_model);

        return "new filepathobj(filepath)";
    }

    @PostMapping("/downloadimage")
    public ResponseEntity<byte[]> uploadimage(@RequestParam("username") String username) throws IOException{
        
        
            byte[] image = Files.readAllBytes(new File(account_reprository.findById(username).get().getImagepath()).toPath());


            
        
        return  ResponseEntity.status(HttpStatus.OK).contentType(MediaType.IMAGE_JPEG).body(image);
    }

    @PostMapping("/updateimage")
    public String updateimage(@RequestParam("username") String username,@RequestBody String filepath){




        account_reprository.findById(username).get().setImagepath(filepath);


        return   "" ;
    }







    @DeleteMapping("/Delete-account")
    public String deleteMethod(@RequestBody account_model account_model){

        if (account_reprository.findById(account_model.getUsername()).isPresent()) {
            // Delete the account
            account_reprository.deleteById(account_model.getUsername());
            return "Account deleted successfully.";
        } else if(!account_reprository.findById(account_model.getUsername()).isPresent()) {
            // Account not found
            return "account not found";
        }
        return "something went wrong";
     }
    
    }
    
    
    
    

