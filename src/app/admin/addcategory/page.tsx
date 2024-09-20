import AddCategoryAction from "@/actions/AddCategoryAction";

export default function addCategory() {
    return (
        <form action={AddCategoryAction}>
            <input type = "text" placeholder="name" name="name"/>
            <button type = "submit"> Submit </button>
        </form>
    )
}