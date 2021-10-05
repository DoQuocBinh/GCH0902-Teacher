db.blogs.drop();

db.blogs.insertMany([
{
    title: "Mai da bong nhe!",
    by: "Nguyen Duc Chung",
    likes: 23,
    comments: [
        {
            user: 'Nguyen Dinh Long',
            message: "hay qua",
            dateCreated: new Date,
            like: 3
        },
        {
            user: 'Ho Thu Trang',
            message: "tuyet voi",
            dateCreated: new Date,
            like: 5
        }
    ]
},
{
    title: "Mai hoc bu nhe",
    by: "Do Quoc Binh",
    likes: 0,
    comments: [
        {
            user: 'Nguyen Minh Quang',
            message: "thoi xong!",
            dateCreated: new Date,
            like: 7
        }
    ]
}
]);

db.blogs.find()
