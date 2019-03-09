package org.alamics.repository;

import java.util.List;

import org.alamics.model.Book;

public interface BookRepository {
  List<Book> findByFilters(Boolean isInPrivateCatalogue);

  List<Book> saveAll(List<Book> newBooks);

  List<Book> deleteAll(List<Book> removingBooks);
}
