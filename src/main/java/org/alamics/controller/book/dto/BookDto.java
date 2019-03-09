package org.alamics.controller.book.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.alamics.model.Book;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class BookDto {
  Integer id;
  String name;
  String author;
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
  LocalDate releaseDate;
  Boolean inPublicCatalogue;

  /**
   * получить dto из книги.
   * @param book книга
   */
  public static BookDto fromBook(Book book) {
    if (book == null) {
      return null;
    }
    BookDto dto = new BookDto();
    dto.setId(book.getId());
    dto.setName(book.getName());
    dto.setAuthor(book.getAuthor());
    dto.setReleaseDate(book.getReleaseDate());
    dto.setInPublicCatalogue(book.getInPublicCatalogue());
    return dto;
  }

  /**
   * получить книгу из дто.
   * @return книга
   */
  public static Book toBook(BookDto dto) {
    if (dto == null) {
      return null;
    }
    Book book = new Book();
    book.setId(dto.getId());
    book.setName(dto.getName());
    book.setAuthor(dto.getAuthor());
    book.setReleaseDate(dto.getReleaseDate());
    book.setInPublicCatalogue(dto.getInPublicCatalogue());
    return book;
  }
}
