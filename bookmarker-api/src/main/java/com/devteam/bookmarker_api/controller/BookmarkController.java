package com.devteam.bookmarker_api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.devteam.bookmarker_api.dto.AddBookmarkDTO;
import com.devteam.bookmarker_api.dto.BookmarkDTO;
import com.devteam.bookmarker_api.dto.BookmarksDTO;
import com.devteam.bookmarker_api.service.BookmarkService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/bookmarks")
public class BookmarkController {

    private final BookmarkService bookmarkService;

    @GetMapping
    public BookmarksDTO getBookmarks(
        @RequestParam(name = "page", defaultValue = "1") Integer page,
        @RequestParam(name = "query", defaultValue = "") String query) {
            if (query == null || query.trim().length() == 0){
                return this.bookmarkService.findAllBookmarks(page);
            }
        return this.bookmarkService.searchBookmarks(query,page);
    }

    @CrossOrigin
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public BookmarkDTO addBookmark(@Valid @RequestBody AddBookmarkDTO addBookmark){
        return this.bookmarkService.addBookmark(addBookmark);
    }
}
