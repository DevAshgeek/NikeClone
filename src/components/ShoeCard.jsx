const ShoeCard = ({ imgURL, bigShoeImg, changeBigShoeImg }) => {
  console.log(bigShoeImg === imgURL.bigShoe);
  const handleShoes = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl
         ${
           bigShoeImg === imgURL.bigShoe
             ? "border-coral-red border-3 scale-110"
             : "border-transparent"
         }  cursor-pointer max-sm:flex-1`}
      onClick={handleShoes}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
