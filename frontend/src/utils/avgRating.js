
const calculateAvgRating = reviews => {
    const tottalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    const avgRating =
    tottalRating === 0
    ? ""
    : tottalRating ===1 
    ? tottalRating
    :(tottalRating / reviews?.length).toFixed(1);

    return{
        tottalRating,
        avgRating,
    };
};

export default calculateAvgRating;