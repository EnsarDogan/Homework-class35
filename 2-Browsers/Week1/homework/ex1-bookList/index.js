//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  
  const ul = document.createElement('ul')
  ul.style = 'display:flex'
  books.forEach(book => {
    const titleAndAuthor = document.createElement('p')
    const image = document.createElement('img')
    titleAndAuthor.textContent = `${book.title} - ${book.author}`
    const li = document.createElement('li')
    li.style = 'width: 370px; height: 370px; list-style: none; padding: 10px; margin: 20px;'
    book.alreadyRead === true ? li.style.backgroundColor = 'green' : li.style.backgroundColor = 'red'
    li.appendChild(titleAndAuthor)
    li.appendChild(image)
    ul.appendChild(li)
  })

  Array.from(ul.children).forEach(child => child.lastElementChild.style.width = '200px')

  const img1 = ul.children[0].children[1]
  img1.setAttribute('src', 'assets/the_design_of_everyday_things.jpg')
  img1.setAttribute('alt', 'design-of-everyday-things-cover')
  const img2 = ul.children[1].children[1]
  img2.setAttribute('src', 'assets/the_pragmatic_programmer.jpg')
  img2.setAttribute('alt', 'the-most-human-human-cover')
  const img3 = ul.children[2].children[1]
  img3.setAttribute('src', 'assets/the_pragmatic_programmer.jpg')
  img3.setAttribute('alt', 'the-pragmatic-programmer-cover')

  return ul
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
