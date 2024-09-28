interface ReviewType {
    product_id: number;
    reviewDescription: string;
    emailhere: string;
}

interface FinalType {
    reviewDetails: ReviewType;
}

export default function ReviewCard({ reviewDetails }: FinalType) {
    return (
        <div className="bg-black p-5">
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
                Review by: <span className="text-blue-600">{reviewDetails.emailhere}</span>
            </h1>
            <p className="text-gray-600 text-md">
                <span className="font-medium">Review:</span> {reviewDetails.reviewDescription}
            </p>
        </div>
    );
}
