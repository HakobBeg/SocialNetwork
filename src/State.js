


    let store = {

        state: {
            users: [
                {userName: 'Hakob', userLastName: 'Beglaryan', id: 1},
                {userName: 'Soxomon', userLastName: 'Eshyan', id: 2},
                {userName: 'Dodik', userLastName: 'Baxshyan', id: 3},
                {userName: 'Ishak', userLastName: 'Katuyan', id: 4},
                {userName: 'Rudolf', userLastName: 'Kamoich', id: 5},
                {userName: 'Sisak', userLastName: 'Debilov', id: 6},
                {userName: 'Takanq', userLastName: 'Mxdzavanjyan', id: 7},
                {userName: 'Hello', userLastName: 'Kitty', id: 8},
                {userName: 'Benik', userLastName: 'Barseghyan', id: 9}
            ],


            posts: [
                {postTxt: 'Hi guys today i change my car,', user: 'Hakob Beglaryan'},
                {postTxt: 'really cool think about me', user: 'Soxomon Eshyan'},
                {postTxt: 'In 2020 we will see th shit', user: 'Dodik Baxshyan'},
                {postTxt: 'Ba,boleyoooo', user: 'Hakob Beglaryan'},
                {
                    postTxt: 'Hi guys today i change my hair color and will take same practice about this,',
                    user: 'Dodik Baxshyan'
                },
                {postTxt: 'Hey i open new website for programmer wich start programming now', user: 'Benik Barseghyan'},
                {postTxt: 'wtf! is there some peoples that can give me these house', user: 'Arto TBoyajyan'},

            ],

            newPostText: {
                value: 'Type text!'
            },
        },

            updateNewPost(newText) {

                this.state.newPostText = newText;
                rerenderPage();
            },

            addPost(postText, poster) {


                let newPost = {postTxt: postText, user: poster};
                store.state.posts.unshift(newPost);
                rerenderPage();
            }



    }







let rerenderPage = ()=>
{
    console.log('page rerendered');
}




export const subscribe  = (observer) =>
{

    rerenderPage = observer;
}


export default store;

