/* Chatbot History Component */

import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './ChatbotRetrySend.scss';

const ChatbotRetrySend = ({ actions }) => (
	<div className="chatbot__retry">
		<button
			type="button"
			className="chatbot__retry__button"
			onClick={actions.retrySubmitQuestion}
		>
			Falha no envio da mensagem. Clique aqui para tentar novamente.
		</button>
	</div>
);

ChatbotRetrySend.propTypes = {
	actions: PropTypes.object.isRequired,
};

export default ChatbotRetrySend;
