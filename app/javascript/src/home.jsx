import React from 'react';
import ImageCarousel from '@components/ImageCarousel';
import { Container } from 'semantic-ui-react';

import 'pure-react-carousel/dist/react-carousel.es.css';

const Home = () => {
	return (
		<>
			<Container style={{ margin: 20 }}>
				<ImageCarousel />
			</Container>
		</>
	);
};

export default Home;
