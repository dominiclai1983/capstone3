// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Index = () => (
	<Layout>
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	</Layout>
);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Index />,
		document.body.appendChild(document.createElement('div'))
	);
});
