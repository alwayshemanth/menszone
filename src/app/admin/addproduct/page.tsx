import AddProductAction from "@/actions/AddProductAction";

export default function addproduct() {
  return (
    <div>
      <form action={AddProductAction}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="description" placeholder="description" />
        <input type="text" name="categoryId" placeholder="categoryId" />
        <input type="text" name="brandId" placeholder="brandId" />
        <input type="text" name="price" placeholder="price" />
        <input type="text" name="stockQuantity" placeholder="stockQuantity" />
        <input type="text" name="material" placeholder="material" />
        <input type="text" name="weight" placeholder="weight" />
        <input type="text" name="discount" placeholder="discount" />
        <input type="text" name="imageUrl" placeholder="imageUrl" />
        <button type = "submit"> Submit </button>
      </form>
    </div>
  );
}
