interface reviewType 
    {
        product_id: number;
    rating: number;
    reviewDescription: string;
    email: string;
    }

    interface FinalType 
        {reviewDetails : reviewType}
    
export default function ReviewCard({reviewDetails} : FinalType ) {
    // console.log(reviewDetails)
    return (
        <div>
            <h1> Review by : {reviewDetails.email}</h1>
        </div>
    )
}