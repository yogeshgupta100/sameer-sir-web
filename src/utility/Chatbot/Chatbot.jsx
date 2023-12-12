import styles from "./chatbot.module.css";
import { useState, useRef, useEffect } from "react";

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

	useEffect(() => {
		const timeout = setTimeout(toggleChatbot, 2500);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div ref={chatbotRef}>
			<button className={styles.btn} onClick={toggleChatbot}>
				<img src="/assets/chat-icon.svg" alt="chat" />
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
