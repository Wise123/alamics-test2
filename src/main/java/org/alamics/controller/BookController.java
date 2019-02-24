package org.alamics.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

import org.alamics.model.Book;
import org.alamics.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/book")
@Api(value = "book", description = "Контроллер для работы с каталогами книг")
public class BookController {

  @Autowired
  BookRepository publicBookRepository;

  @GetMapping("/")
  @ApiOperation(value = "Получить книги по каталогу")
  public List<Book> findAll(
      Boolean inPrivateCatalogue
  ) {
    return publicBookRepository.findByFilters(inPrivateCatalogue);
  }

  /**
   *  см сваггер.
   * @param books см сваггер
   * @return см сваггер
   */
  @PostMapping("/")
  @ApiOperation(value = "создать новые книги")
  public List<Book> saveAll(
      @RequestBody
          List<Book> books
  ) {
    for (Book book : books) {
      book.setId(null);
    }
    return publicBookRepository.saveAll(books);
  }

  /**
   *  см сваггер.
   * @param books см сваггер
   * @return см сваггер
   */
  @PutMapping("/")
  @ApiOperation(value = "отредактировать книги")
  public List<Book> updateAll(
      @RequestBody
          List<Book> books
  ) {
    return publicBookRepository.saveAll(books);
  }

  /**
   *  см сваггер.
   * @param books см сваггер
   * @return см сваггер
   */
  @DeleteMapping("/")
  @ApiOperation(value = "удалить книги")
  public List<Book> deleteAll(
      @RequestBody
          List<Book> books
  ) {
    return publicBookRepository.deleteAll(books);
  }
}
