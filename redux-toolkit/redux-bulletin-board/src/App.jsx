import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import Header from "./components/Header";

function App() {

  return (
    <main className="App">
      <Header />
      <AddPostForm />
      <PostsList />
    </main>
  )
}

export default App;
