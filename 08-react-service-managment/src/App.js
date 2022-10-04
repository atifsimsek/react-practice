import { useEffect } from 'react';
import './App.css';
import { PostService, UserService } from './services';



function App() {

  useEffect(() => {
    PostService.getPosts().then(res => console.log(res))
    PostService.getPostDetail(1).then(res => console.log(res))

    // ******* FORM DATA *******
    PostService.newPost({
      userId: 3,
      title: "test",
      body: "test"
    }).then(res => console.log(res))

    // ******* FORM DATA *******

    // ******* JSON *******
    PostService.newPostJSON({
      userId: 5,
      title: "test",
      body: "test"
    }).then(res => console.log(res))

    // ******* JSON *******

    UserService.getUsers().then(res => console.log(res))


})


return (
  <div className="container">


  </div>
);
}

export default App;
