package org.alamics.controller.book;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

import org.alamics.controller.book.dto.BookDto;
import org.alamics.model.Book;
import org.alamics.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/book")
@Api(value = "book", description = "Контроллер для работы с каталогами книг")
public class BookController {

  @Autowired
  BookRepository bookRepository;

  /**
   * см сваггер.
   * @param inPrivateCatalogue см сваггер
   * @return см сваггер
   */
  @GetMapping("/")
  @ApiOperation(value = "Получить книги по каталогу")
  public List<BookDto> findAll(
      @RequestParam(required = false)
      Boolean inPrivateCatalogue
  ) {
    return bookRepository
        .findByFilters(inPrivateCatalogue)
        .stream()
        .map(BookDto::fromBook)
        .collect(Collectors.toList());
  }

  /**
   *  см сваггер.
   * @param bookDtos см сваггер
   * @return см сваггер
   */
  @PostMapping("/")
  @ApiOperation(value = "создать новые книги")
  public List<BookDto> saveAll(
      @RequestBody
          List<BookDto> bookDtos
  ) {
    List<Book> books = new LinkedList<>();

    for (BookDto bookDto : bookDtos) {
      bookDto.setId(null);
      books.add(BookDto.toBook(bookDto));
    }
    return bookRepository
        .saveAll(books)
        .stream()
        .map(BookDto::fromBook)
        .collect(Collectors.toList());
  }

  /**
   *  см сваггер.
   * @param books см сваггер
   * @return см сваггер
   */
  @PutMapping("/")
  @ApiOperation(value = "отредактировать книги")
  public List<BookDto> updateAll(
      @RequestBody
          List<BookDto> books
  ) {
    return bookRepository.saveAll(
        books
            .stream()
            .map(BookDto::toBook)
            .collect(Collectors.toList()))
        .stream()
        .map(BookDto::fromBook)
        .collect(Collectors.toList());
  }

  /**
   *  см сваггер.
   * @param bookDtos см сваггер
   * @return см сваггер
   */
  @DeleteMapping("/")
  @ApiOperation(value = "удалить книги")
  public List<BookDto> deleteAll(
      @RequestBody
          List<BookDto> bookDtos
  ) {
    return bookRepository
        .deleteAll(bookDtos
            .stream()
            .map(BookDto::toBook)
            .collect(Collectors.toList()))
        .stream()
        .map(BookDto::fromBook)
        .collect(Collectors.toList());
  }
}
