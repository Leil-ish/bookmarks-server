function makeBookmarksArray() {
    return [
        {
            id: 1,
            title: 'GitHub',
            url: 'github.com',
            description: 'code',
            rating: 5,
        },
        {
            id: 2,
            title: 'Twitter',
            url: 'twitter.com',
            description: 'tweet',
            rating: 5,
        },
        {
            id: 3,
            title: 'MDN', 
            url: 'developer.mozilla.org',
            description: 'code',
            rating: 5,
        },
        {
            id: 4,
            title: 'Gmail', 
            url: 'mail.google.com',
            description: 'email',
            rating: 5,
        },
        {
            id: 5,
            title: 'Postgres', 
            url: 'postgresql.org',
            description: 'code',
            rating: 5,
        },
        {
            id: 6,
            title: 'Google', 
            url: 'google.com',
            description: 'search',
            rating: 5,
        },
        {
            id: 7,
            title: 'xkcd', 
            url: 'xkcd.com',
            description: 'laugh',
            rating: 5,
        },
        {
            id: 8,
            title: 'Bloc', 
            url: 'bloc.thinkful.com',
            description: 'code',
            rating: 5,
        },
        {
            id: 9,
            title: 'Facebook',
            url: 'facebook.com',
            description: 'despair', 
            rating: 5,
        },
        {
            id: 10,
            title: 'Portfolio', 
            url: 'leilaanderson.dev',
            description: 'display',
            rating: 5,
        },
      ];
}

function makeMaliciousBookmark() {
    const maliciousBookmark = {
      id: 911,
      title: 'Naughty naughty very naughty <script>alert("xss");</script>',
      url: 'https://www.hackers.com',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
      rating: 1,
    }
    const expectedBookmark = {
      ...maliciousBookmark,
      title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
      maliciousBookmark,
      expectedBookmark,
    }
  }
  
  module.exports = {
    makeBookmarksArray,
    makeMaliciousBookmark,
  }
  