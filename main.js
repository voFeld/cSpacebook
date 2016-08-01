$(document).ready(function(){
var posts = [];

var newPost = function(text, username, commentText) {


    var post = {
        text: text,
        id: Math.floor(Math.random() * 20),
            comments: {
                username: username,
                commentText: commentText
             }
    };

    posts.push(post);

};
$('button').on('click', function(e){
    e.preventDefault();

    var postName = $('#post-name').val();

    newPost(postName);
    updatePage();
});


var updatePage = function(){
    $('.posts').find('p').remove();

    for(var i = 0; i < posts.length; i++) {
        $('.posts').append('<p class="post" data-id="' + posts[i].id + '">' + '<a href="#" class="remove">remove</a> ' + posts[i].text + '</p>' + '<form class="comment-form"><h3>Add a New COMMENT</h3><div class="form-group"><input type="text" id="comment-name" class="form-control" placeholder="Username" /><input type="text" id="comment-text" class="form-control" placeholder="Comment Text" /></div><button class="btn btn-primary add-comment">Comment</button></form>');
    }

    addComment();
    remover();


};

var remover = function() {
    console.log(posts);

        $('.remove').on('click', function () {
            $(this).closest('p').remove();
            $('.comment-form').remove();
            posts.pop();
        });
    };





    var addComment = function(){
        $('.add-comment').on('click', function(e){
            e.preventDefault();

            var commentName = $('#comment-name').val();
            var commentText = $('#comment-text').val();

            newPost(commentName, commentText); //<-- this needs to have another one for the original post text! otherwise it just puts the comment name instead of the text at the top function!!!

        });
    };



});

// Add a feature that allows each post to recieve a comment.
// The comment should have a username and some text associated with it.