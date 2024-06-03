import React from 'react';
import { Card, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material';

function ProductItem({ product }) {
    const isSmallScreen = useMediaQuery('(max-width:768px)');

    return (
        <Card style={{ backgroundColor: "#fff", minHeight: isSmallScreen ? "fit-content" : "525px" }} key={product.id}>
            <Typography style={{ height: "181px", width: "auto" }} className='flex-row justify-center'>
                <CardMedia
                    style={{ width: "auto" }}
                    component="img"
                    alt={product.title}
                    image={product.image}
                    title={product.title}
                />
            </Typography>
            <CardContent>
                <Typography gutterBottom variant={isSmallScreen ? "h5" : "h6"} component="div">
                    {product.title}
                </Typography>
                <Typography className="product-description" variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
                <Typography color="textPrimary" variant="h6" component="div">
                    {product.category}
                </Typography>
                <Typography variant="h6" style={{ fontWeight: 600 }} color="textPrimary" component="p">
                    ${product.price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductItem;
