
const mock = {

    user: {
        firstName: 'John',
        lastName: 'Smith',
        location: "Santa Maria",
        occupation: "Banker",
        viewedProfile: 1081,
        impressions: 291,
        friends: 500,
        picturePath: "https://static.dc.com/dc/files/default_images/Char_Thumb_Flash_20190116_5c3fcaaa18f023.90325986.jpg?w=160"
    },
    posts: [
        {
            _id: 1,
            title: "",
            images: [],
            comments: "",
            impressions: "",
            views: 10,
            retweets: 876,
            likes: "8,369",
            quotes: 602,
            isFavorited: false,
            owner: {
                _id: 12,
                avatarUrl: "",
                isVerified: false
            },
            createdAt: new Date(),
        }
    ]
}

export default mock;