import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Product = () => {
	let { sku } = useParams();
	return <div>Product</div>;
};

export default Product;
