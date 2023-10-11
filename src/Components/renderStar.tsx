import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
export const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);

    return (
        <>
            {Array(fullStars).fill(0).map((_, index) => (
                <StarIcon key={index} style={{ color: 'gold' }} />
            ))}
            {halfStar ? <StarHalfIcon style={{ color: 'gold' }} /> : null}
            {Array(emptyStars).fill(0).map((_, index) => (
                <StarBorderIcon key={`empty-${index}`} style={{ color: 'gold' }} />
            ))}
        </>
    );
};