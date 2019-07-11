function makeBookmarksArray() {
    return [
        {
            id: 1,
            title: 'GitHub',
            rating: 5,
            url: 'github.com',
            description: 'code',
        },
        {
            id: 2,
            title: 'Twitter',
            rating: 5,
            url: 'twitter.com',
            description: 'tweet'
        },
        {
            id: 3,
            title: 'MDN', 
            rating: 5,
            url: 'developer.mozilla.org',
            description: 'code'
        },
        {
            id: 4,
            title: 'Gmail', 
            rating: 5,
            url: 'mail.google.com',
            description: 'email'
        },
        {
            id: 5,
            title: 'Postgres', 
            rating: 5,
            url: 'postgresql.org',
            description: 'code'
        },
        {
            id: 6,
            title: 'Google', 
            rating: 5,
            url: 'google.com',
            description: 'search'
        },
        {
            id: 7,
            title: 'xkcd', 
            rating: 5,
            url: 'xkcd.com',
            description: 'laugh'
        },
        {
            id: 8,
            title: 'Bloc', 
            rating: 5,
            url: 'bloc.thinkful.com',
            description: 'code'
        },
        {
            id: 9,
            title: 'Facebook', 
            rating: 5,
            url: 'facebook.com',
            description: 'despair'
        },
        {
            id: 10,
            title: 'Portfolio', 
            rating: 5,
            url: 'leilaanderson.dev',
            description: 'display',
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
  