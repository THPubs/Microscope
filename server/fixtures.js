if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    });

    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com'
    });

    Posts.insert({
        title: 'The meteor book',
        url: 'http://themeteorbook.com'
    });

    Posts.insert({
        title: 'Leafycode',
        url: 'http://leafycode.com/'
    });
}
