import { FiShoppingCart } from "react-icons/fi";
import bookApi from "../../redux/feature/bookApi";

import { useParams } from "react-router-dom"
import getImgUrl from "../../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";

const SingleBook = () => {

  const { id } = useParams();
  const { data , isLoading, error} = bookApi.useFetchBookByIdQuery(id);
  const book = data?.book || {};

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error fetching book details</div>


  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>
     
     <div className="">
       <div>
          <img
            src={getImgUrl(book.coverImage)}
            alt={book.title}
            className="mb-8"
          />
       </div>

       <div className="mb-5">
          <p className="text-gray-700 mb-2"><strong>Author: </strong> {book.author || "admin"}</p>
          <p className="text-gray-700 mb-4"><strong>Published: </strong> {new Date(book?.createdAt).toLocaleDateString()}</p>
          <p className="text-gray-700 mb-4 capitalize"><strong>Category: </strong> {book.category || "Uncategorized"}</p>
          <p className="text-gray-700 mb-4"><strong>Description: </strong> {book.description}</p>
       </div>



       <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full flex items-center gap-1" onClick={() => handleAddToCart(book)}>
        <FiShoppingCart className="" />
        <span>Add to Cart</span>
       </button>

     </div>
    </div>
  );
}

export default SingleBook;