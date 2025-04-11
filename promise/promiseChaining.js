const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { userId: "2121", name: "ABC" };
      resolve(data);
    }, 2000);
  });
};

const getPostData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { postId: "232", caption: "Hello" };
      resolve(data);
    }, 2000);
  });
};

const getCommentData = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { commentId: "7667", comment: "Nice" };
      resolve(data);
    }, 2000);
  });
};

getUserData()
  .then((userData) => {
    console.log(userData);
    return getPostData(userData.userId);
  })
  .then((postData) => {
    console.log(postData);
    return getCommentData(postData.postId);
  })
  .then((commentData) => {
    console.log(commentData);
  });
