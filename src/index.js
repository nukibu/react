import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51ryI6NaneL._SX329_BO1,204,203,200_.jpg',
  title: 'Finding Me',
  author: 'Viola Davis'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/41W5Iq70wrL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Book Lovers',
    author: 'Emily Henry'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg',
  title: 'Atomic Habits',
  author: 'James Clear'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51NYS363lkS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Just Tyrus',
    author: 'Tyrus'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41yVgmo2GiL._SX322_BO1,204,203,200_.jpg',
  title: 'Glad Youre Here',
  author: 'Walker Hayes'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41ZQlNYcdKL._SX348_BO1,204,203,200_.jpg',
  title: 'Mom I Want to Hear Your Story',
  author: 'Alberta Chompegne'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51irsfz72HL._SX320_BO1,204,203,200_.jpg',
  title: 'It Ends with Us',
  author: 'Colleen Hoover'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51mCbTi3vDL._SX329_BO1,204,203,200_.jpg',
  title: 'Outdoor Kids in an Inside World',
  author: 'Steven Rinella'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51ryI6NaneL._SX329_BO1,204,203,200_.jpg',
  title: 'Finding Me',
  author: 'Viola Davis'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/41W5Iq70wrL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Book Lovers',
    author: 'Emily Henry'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg',
  title: 'Atomic Habits',
  author: 'James Clear'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51NYS363lkS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Just Tyrus',
    author: 'Tyrus'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41yVgmo2GiL._SX322_BO1,204,203,200_.jpg',
  title: 'Glad Youre Here',
  author: 'Walker Hayes'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41ZQlNYcdKL._SX348_BO1,204,203,200_.jpg',
  title: 'Mom I Want to Hear Your Story',
  author: 'Alberta Chompegne'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51irsfz72HL._SX320_BO1,204,203,200_.jpg',
  title: 'It Ends with Us',
  author: 'Colleen Hoover'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51mCbTi3vDL._SX329_BO1,204,203,200_.jpg',
  title: 'Outdoor Kids in an Inside World',
  author: 'Steven Rinella'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51ryI6NaneL._SX329_BO1,204,203,200_.jpg',
  title: 'Finding Me',
  author: 'Viola Davis'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/41W5Iq70wrL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Book Lovers',
    author: 'Emily Henry'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg',
  title: 'Atomic Habits',
  author: 'James Clear'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51NYS363lkS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Just Tyrus',
    author: 'Tyrus'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41yVgmo2GiL._SX322_BO1,204,203,200_.jpg',
  title: 'Glad Youre Here',
  author: 'Walker Hayes'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41ZQlNYcdKL._SX348_BO1,204,203,200_.jpg',
  title: 'Mom I Want to Hear Your Story',
  author: 'Alberta Chompegne'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51irsfz72HL._SX320_BO1,204,203,200_.jpg',
  title: 'It Ends with Us',
  author: 'Colleen Hoover'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51mCbTi3vDL._SX329_BO1,204,203,200_.jpg',
  title: 'Outdoor Kids in an Inside World',
  author: 'Steven Rinella'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51ryI6NaneL._SX329_BO1,204,203,200_.jpg',
  title: 'Finding Me',
  author: 'Viola Davis'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/41W5Iq70wrL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Book Lovers',
    author: 'Emily Henry'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg',
  title: 'Atomic Habits',
  author: 'James Clear'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51NYS363lkS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Just Tyrus',
    author: 'Tyrus'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41yVgmo2GiL._SX322_BO1,204,203,200_.jpg',
  title: 'Glad Youre Here',
  author: 'Walker Hayes'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41ZQlNYcdKL._SX348_BO1,204,203,200_.jpg',
  title: 'Mom I Want to Hear Your Story',
  author: 'Alberta Chompegne'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51irsfz72HL._SX320_BO1,204,203,200_.jpg',
  title: 'It Ends with Us',
  author: 'Colleen Hoover'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51mCbTi3vDL._SX329_BO1,204,203,200_.jpg',
  title: 'Outdoor Kids in an Inside World',
  author: 'Steven Rinella'
  }
]

function Booklist() {
  return (
    <section className = 'booklist'>
      
      {books.map((book) => {
        return (
          <Book book={book}></Book>
        )
      })}
    </section>
  )
}

function Title() {
  return (
    <div className = 'title'>
      <h1>Amazon Bestseller List</h1>
      <h4>Our most popular products based on sales. Updated twice a day.</h4>
    </div>
  )
}

const Book = (props) => {
  const { img, title, author} = props.book;

  return (
    <article className = 'book'>
      <div className = 'image-container'>
        <img src={img} alt="" />
      </div>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Title />,
    <Booklist />
  </div>
);

// const Person = () => <h2>john doe</h2>
// const Message = () => {
//   return <p>Welcome to Nial. This is your entry point to a gamification of the important things of life.</p>
// }

// {} is for props
// this functional way works best if you only want to create one element
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world')
// }

// Functional way for multiple elements. messy
// const Greeting = () => {
//   return React.createElement('h1', {}, React.createElement('h1', {}, 'Hello World'))
// }

