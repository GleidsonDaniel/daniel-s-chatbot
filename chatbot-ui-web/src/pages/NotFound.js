import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import 'styles/pages/NotFound.scss';

class NotFoundPage extends Component {
	render() {
		return (
			<div className="page not-found">
				<div className="not-found__content">
					<div className="container">
						<h1>404</h1>
						<h2>Pagina não encontrada</h2>
						<p>
							Desculpe, a página que você está procurando não foi encontrada. Você pode
							<a href="javascript: history.back()"> voltar </a> ou vá para
							<Link to={process.env.PUBLIC_URL + '/'}> pagina inicial </Link>.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default NotFoundPage;
