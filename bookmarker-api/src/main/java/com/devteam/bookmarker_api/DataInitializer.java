package com.devteam.bookmarker_api;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner{
    
    @Override
    public void run(String... args) throws Exception {

        // this.bookmarkRepository.save(new Bookmark(null,"Test","Test URL",Instant.now(),"Test DESCRIPTION"));
        // List<Bookmark> book = bookmarkRepository.findAll(); 
        // System.out.println(book.size());

    }
}
