import React from "react";
import BookService from "service/BookService";

function OrderItem({ book }) {
  // map books into book
  // If book is not found, display a message
  if (!book) {
    return <div>Book not found</div>;
  }

  // Display the book details
  return (
    <div className="flex flex-row gap-x-8">
      <div className="flex">
        <img
          src={BookService.downloadBookImage(book.imagePath)}
          alt={book.bookTitle}
          className="h-[12rem] w-[8rem] object-cover rounded-xl"
        />
      </div>
      <div className="textDiv flex flex-col gap-y-6 justify-between">
        <div className="flex flex-col gap-y-1">
          <h1 className="">{book.title}</h1>
          <h1 className=" text-gray-500">{book.author}</h1>
        </div>
        <div>
          <h1 className=" text-primaryBlack font-bold">Quantity: 1</h1>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
