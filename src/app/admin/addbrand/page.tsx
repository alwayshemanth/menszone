import AddBrandAction from "@/actions/AddBrandAction";

export default function addCategory() {
    return (
        <form action={AddBrandAction}>
            <input type = "text" placeholder="name" name="name"/>
            <button type = "submit"> Submit </button>
        </form>
    )
}