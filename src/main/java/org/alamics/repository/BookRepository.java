package org.alamics.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.alamics.model.Book;

public class BookRepository {
  private Map<Integer, Book> books = new HashMap<>();

  /**
   * поиск книг по фильтрам.
   * @param isInPrivateCatalogue флаг что книга находится в приватном каталоге
   * @return список книг соответствующих фильтрам
   */
  public List<Book> findByFilters(Boolean isInPrivateCatalogue) {
    List<Book> filteredBooks = new ArrayList<>(books.values())
        .stream()
        .filter((Book book) -> {
          return book.getInPublicCatalogue().equals(isInPrivateCatalogue);
        }).collect(Collectors.toList());
    return filteredBooks;
  }

  /**
   * добавить или удалить новые.
   * @param newBooks список новых книг
   * @return сохранённый список
   */
  public List<Book> saveAll(List<Book> newBooks) {
    for (Book book : newBooks) {
      if (book.getId() != null) {
        books.put(book.getId(), book);
      } else {
        Integer hashCode = book.hashCode();
        while (books.containsKey(hashCode)) {
          hashCode++;
        }
        book.setId(hashCode);
        books.put(hashCode, book);
      }
    }
    return newBooks;
  }

  /**
   * удалить книги.
   * @param removingBooks список книг
   * @return список книг которые были удалены
   */
  public List<Book> deleteAll(List<Book> removingBooks) {
    for (Book book: removingBooks) {
      books.remove(book.getId());
    }
    return removingBooks;
  }
}
