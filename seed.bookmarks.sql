INSERT INTO bookmarks (title, rating, url, description)
VALUES
  ('GitHub', 5, 'github.com', 'code'),
  ('Twitter', 5, 'twitter.com', 'tweet'),
  ('MDN', 5, 'developer.mozilla.org', 'code'),
  ('Google', 5, 'google.com', 'search'),
  ('PostgreSQL', 5, 'postgresql.org', 'code'),
  ('Gmail', 5, 'mail.google.com', 'email'),
  ('xkcd', 5, 'xkcd.com', 'laugh'),
  ('Bloc', 5, 'bloc.thinkful.com', 'code'),
  ('Facebook', 5, 'facebook.com', 'despair'),
  ('Portfolio', 5, 'leilaanderson.dev', 'display');

  psql -U dunder-mifflin -d bookmarks -f ./seed.bookmarks.sql
