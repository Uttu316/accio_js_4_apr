function getUserData(onSuccess, onFailure) {
  let userName = prompt("Enter Username");
  console.log("Fetching data for user");

  setTimeout(() => {
    let data = {
      name: "ABC",
      userId: "1321332",
    };

    if (data.name === userName) {
      onSuccess(data);
    } else {
      onFailure("Oops no user found");
    }
  }, 2000);
}

function getPosts(userId, onSuccess, onFailure) {
  console.log("Fetching Posts for ", userId);
  setTimeout(() => {
    const data = [
      {
        postId: "21121",
        caption: "Hey Sunny",
      },
      {
        postId: "3212",
        caption: "Bye Summer",
      },
    ];
    if (data && data.length) {
      onSuccess(data);
    } else {
      onFailure("No post avaialable");
    }
  }, 2000);
}
function getComments(postId, onSuccess, onFailure) {
  console.log("Fetching Comments for Post", postId);
  setTimeout(() => {
    const comments = [
      {
        commentId: "2121",
        comment: "Nice",
      },
      {
        commentId: "5342343",
        comment: "Cool",
      },
    ];

    if (comments && comments.length) {
      onSuccess(comments);
    } else {
      onFailure("No comment available");
    }
  }, 2000);
}

getUserData(
  (userData) => {
    //onSuccess
    const { userId, name } = userData;
    console.log("Fetched userData");
    // const userId = userData.userId
    // const name = userData.name
    getPosts(
      userId,
      (posts) => {
        console.log("Posts fetched", posts);

        for (let post of posts) {
          const { postId } = post;
          getComments(
            postId,
            (comments) => {
              console.log("Fetched comments", comments);
            },
            (error) => {
              console.log(error);
            }
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    //onFailure
    console.log(error);
  }
);
