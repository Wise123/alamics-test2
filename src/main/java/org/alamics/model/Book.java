package org.alamics.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Book {
  Integer id;
  String name;
  String author;
  LocalDate releaseDate;
  Boolean inPublicCatalogue;
}
