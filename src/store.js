const uuid = require('uuid/v4')

const bookmarks = [
    {
        id: uuid(),
        title: 'Bookmark One',
        url: 'https://www.great-website.com',
        description: 'A great website',
        rating: '5'
    },

    {
        id: uuid(),
        title: 'Bookmark Two',
        url: 'https://www.nice-website.com',
        description: 'A nice website',
        rating: '4'
    },

    {
        id: uuid(),
        title: 'Bookmark Three',
        url: 'https://www.lame-website.com',
        description: 'A lame website',
        rating: '2'
    },
]

module.exports = {bookmarks}