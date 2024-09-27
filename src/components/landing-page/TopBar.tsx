

export default function TopBar({categoryName} : {categoryName : string}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-3 font-bold">{categoryName}</h1>
      
    </div>
  );
}
