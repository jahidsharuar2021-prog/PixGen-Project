import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";


const AllPhotoPage =async ({searchParams}) => {

  const {category}= await searchParams;
  // console.log(category);

    const res = await fetch("https://pix-gen-project-tau.vercel.app/data.json");
    const photos=await res.json()

    const filteredPhotos= category? photos.filter(photo=>photo.category.toLowerCase()==category.toLowerCase()) :photos
    // console.log(photos);
    return (
      <div>
        <h1 className="text-2xl font-bold m-4">All photos</h1>
        <Category></Category>
        <div className="grid grid-cols-4 gap-5">
          {filteredPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    );
};

export default AllPhotoPage;