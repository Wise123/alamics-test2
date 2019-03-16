package org.alamics.repository;

import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.alamics.model.Book;

public class BookRepositoryImpl implements BookRepository {
  private Map<Integer,Book> books = new LinkedHashMap<>();

  /**
   * поиск книг по фильтрам.
   * @param isInPrivateCatalogue флаг что книга находится в приватном каталоге
   * @return список книг соответствующих фильтрам
   */
  public List<Book> findByFilters(Boolean isInPrivateCatalogue) {
    return books
        .values()
        .stream()
        .filter((Book book) ->
            book.getInPublicCatalogue() != null
            && book.getInPublicCatalogue().equals(isInPrivateCatalogue)
            || isInPrivateCatalogue == null
        )
        .collect(Collectors.toList());
  }

  /**
   * добавить новые или обновить существующие книги.
   * @param newBooks список новых книг
   * @return сохранённый список
   */
  public List<Book> saveAll(List<Book> newBooks) {
    for (Book book : newBooks) {
      if (book.getId() != null) {
        books.put(book.getId(),book);
      } else {
        Integer hashCode = book.hashCode();
        Collection<Integer> ids =
            books
                .values()
                .stream()
                .map(Book::getId)
                .collect(Collectors.toList());
        while (ids.contains(hashCode)) {
          hashCode++;
        }
        book.setId(hashCode);
        books.put(book.getId(),book);
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
    List<Book> deletedBooks = new LinkedList<>();
    for (Book book: removingBooks) {
      deletedBooks.add(books.get(book.getId()));
      books.remove(book.getId());
    }
    return deletedBooks;
  }
}
