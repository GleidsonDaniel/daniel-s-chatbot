/* Chatbot Info Component */

import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';

import appIcon from 'images/logo.png';

const ChatbotInfoContent = () => (
	<div>
		<p>Autor: Daniel Silva</p>
		<p>Desenvolvido em 2019</p>
		<br />
		<p>
			Esse é um simples chatbot feito com Node.js (Express), node-nlp, ReactJS,
			React Native e Redux.
		</p>
		<br />
		<p>
			A foto do perfil do chatbot é disponibilizada por
			<a
				href="https://www.freepik.com/"
				title="Freepik"
				target="_blank"
				rel="noopener noreferrer"
				key="freepik"
			>
				Freepik
			</a>
			e
			<a
				href="https://www.flaticon.com/"
				title="Flaticon"
				target="_blank"
				rel="noopener noreferrer"
				key="flaticon"
			>
				www.flaticon.com
			</a>
			licenciado por
			<a
				href="http://creativecommons.org/licenses/by/3.0/"
				title="Creative Commons BY 3.0"
				target="_blank"
				rel="noopener noreferrer"
				key="cc"
			>
				CC 3.0 BY
			</a>
		</p>
	</div>
);

const ChatbotInfo = ({ showInfo, actions }) => (
	<Modal
		icon={appIcon}
		title="Chatbot"
		content={<ChatbotInfoContent />}
		show={showInfo}
		closeFunction={actions.closeInfoModal}
	/>
);

ChatbotInfo.propTypes = {
	showInfo: PropTypes.bool.isRequired,
	actions: PropTypes.object.isRequired,
};

export default ChatbotInfo;
