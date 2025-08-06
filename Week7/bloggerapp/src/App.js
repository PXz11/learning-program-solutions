import React from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import { books } from './books';
import './App.css';

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-around' }}>
      <CourseDetails />
      <BookDetails books={books} />
      <BlogDetails />
    </div>
  );
}

export default App;
