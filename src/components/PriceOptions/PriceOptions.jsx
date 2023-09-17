
const PriceOptions = () => {

    [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities",
                "Use of cardio equipment",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to gym facilities",
                "Use of cardio equipment",
                "Access to weightlifting area",
                "Group fitness classes",
                "Personal trainer sessions",
                "Locker room access with towels"
            ]
        },
        {
            "id": 3,
            "name": "Student Membership",
            "features": [
                "Access to gym facilities",
                "Use of cardio equipment",
                "Access to weightlifting area",
                "Locker room access"
            ]
        },
        {
            "id": 4,
            "name": "Family Membership",
            "features": [
                "Access to gym facilities",
                "Use of cardio equipment",
                "Access to weightlifting area",
                "Group fitness classes",
                "Locker room access for family members"
            ]
        }
    ]



    return (
        <div>

            <h2 className="text-5xl font-bold">Best Prices in the City</h2>

            {
                PriceOptions.map(priceOption => <PriceOptions key={PriceOptions.id} priceOption={priceOption}></PriceOptions>)
            }

        </div>
    );
};

export default PriceOptions;