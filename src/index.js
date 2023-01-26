import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import SinglePostPage from "./features/posts/SinglePostPage"
import AddPostForm from "./features/posts/AddPostForm"
import PostsList from "./features/posts/PostsList"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route
        index
        element={
          <>
          <h1>Home</h1>
          <AddPostForm />
          <PostsList />
          </>
        }
      />
    <Route path=":postId" element={<SinglePostPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
    </Provider>
  
);