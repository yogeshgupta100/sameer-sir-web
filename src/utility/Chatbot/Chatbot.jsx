import styles from "./chatbot.module.css";
import { useState, useRef } from "react";

const botMap = new Map([
	[1, { message: "Hi there!👋 How can I help you?", options: [1, 2, 3, 4, 5] }],
	[2, { message: "Scheduled a Meeting at 10:30 A.M. IST on 31st December 2023 👍", options: [5] }],
	[3, { message: "Serving Breakfast in 30 minutes 😋", options: [5] }],
	[4, { message: "Sales Team : +91-8888888888", options: [5] }],
]);

const userMap = new Map([
	[1, { message: "Call Customer Care", trigger: 1 }],
	[2, { message: "Schedule a Meeting", trigger: 2 }],
	[3, { message: "Make Breakfast", trigger: 3 }],
	[4, { message: "Contact Sales", trigger: 4 }],
	[5, { message: "Restart Chat", trigger: 1 }],
]);

export default function Chatbot() {
	const chatbotRef = useRef();

	const [messages, setMessages] = useState([1]);

	function toggleChatbot() {
		chatbotRef.current.classList.toggle(styles.active);
	}

	return (
		<div ref={chatbotRef} className={styles.active}>
			<button className={styles.btn} onClick={toggleChatbot}>
				<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
					<path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
				</svg>
			</button>

			<div className={styles.collapsableContainer}>
				<div className={styles.chatbox}>
					<h3 className={styles.heading}>Hi there!👋</h3>
					<div className={styles.chat}>
						{messages.map((messageId, index) => (
							<div className={index % 2 ? styles.user : styles.bot} key={index}>
								<div>{index % 2 ? userMap.get(messageId).message : botMap.get(messageId).message}</div>
								{index === messages.length - 1 &&
									botMap.get(messageId).options.map((optionId, index) => (
										<button
											className={styles.option}
											key={index}
											onClick={() =>
												setMessages([...messages, optionId, userMap.get(optionId).trigger])
											}
										>
											{userMap.get(optionId)?.message}
										</button>
									))}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
