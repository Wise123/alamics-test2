package org.alamics;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.alamics.model.Book;
import org.alamics.repository.BookRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class WebLibraryApplication {
  public static void main(String[] args) {
    SpringApplication.run(WebLibraryApplication.class, args);
  }

  @Bean
  BookRepository bookRepository() {
    BookRepository bookRepository = new BookRepository();
    List<Book> defaultBooks = new ArrayList<>();
    for (int i = 0; i < 10; i++) {
      defaultBooks.add(new Book(
          null,
          "Книга " + i,
          "Автор " + i,
          LocalDate.now(),
          i % 2 > 0
      ));
    }
    bookRepository.saveAll(defaultBooks);
    return bookRepository;
  }
}
