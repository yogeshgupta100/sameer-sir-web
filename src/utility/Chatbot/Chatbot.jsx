import styles from "./chatbot.module.css";
import { useState, useRef, useEffect } from "react";

const chatFlow = [
	{ type: "bot", message: "Got any questions? I am ready to guide you", options: [] },
	{ type: "bot", message: "Tell me your need?", options: [] },
	{ type: "option", message: "Get proper insights of the course" },
	{ type: "option", message: "Talk to our counsellors" },
	{ type: "option", message: "Need help with resources" },
	{ type: "option", message: "Others" },
	{
		type: "bot",
		message:
			"No problem. Before we get started, I would like to know some basic information. First up, please select your specialisation.",
		options: [
			"Frontend",
			"Backend",
			"Fullstack",
			"Mobile",
			"UI/UX",
			"DevOps",
			"Data Science",
			"Machine Learning",
			"Cloud Computing",
			"Cyber Security",
			"Digital Marketing",
			"Others",
		],
	},
	{
		type: "bot",
		message: "Great! Now, please tell me your name.",
		options: [],
	},
	{
		type: "bot",
		message: "What is your email address?",
		options: [],
	},
	{
		type: "bot",
		message: "What is your contact number?",
		options: [],
	},
	{
		type: "bot",
		message: "Great! Our counsellor will contact you soon.",
		options: [],
	},
];

export default function Chatbot() {
	const chatbotRef = useRef();
	const selectRef = useRef();
	const inputRef = useRef();
	const sendButtonRef = useRef();
	const chatRef = useRef();

	const [messages, setMessages] = useState(chatFlow.slice(0, 6));
	const [data, setData] = useState([]);
	const [index, setIndex] = useState(6);

	useEffect(() => {
		if (index > 7 && index <= 10) {
			inputRef.current.disabled = false;
			inputRef.current.style.cursor = "text";
			inputRef.current.placeholder = "Enter your answer here";
			sendButtonRef.current.disabled = false;
		} else {
			inputRef.current.disabled = true;
			inputRef.current.style.cursor = "not-allowed";
			inputRef.current.placeholder = "Select from the options above";
			sendButtonRef.current.disabled = true;
		}
	}, [index]);

	useEffect(() => {
		if (data.length === 5) {
			fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/chatbots`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					data: {
						department: data[0],
						specialization: data[1],
						name: data[2],
						email: data[3],
						contact: data[4],
					},
				}),
			});
		}
	}, [data]);

	function toggleChatbot() {
		chatbotRef.current.classList.toggle(styles.active);
	}

	function selectOption(e) {
		const selectedOption = e.target.innerText;

		setMessages((prev) => {
			const newMessages = [...prev];

			while (newMessages[newMessages.length - 1].type !== "bot") {
				newMessages.pop();
			}

			newMessages.push({ type: "user", message: selectedOption, options: [] }, chatFlow[index]);

			return newMessages;
		});

		setIndex((prev) => prev + 1);

		setData((prev) => [...prev, selectedOption]);
	}

	function selectSpecialization() {
		const selectedSpecialization = selectRef.current.value;

		setMessages((prev) => {
			const newMessages = [...prev];

			newMessages[newMessages.length - 1].options = [];

			newMessages.push({ type: "user", message: selectedSpecialization, options: [] }, chatFlow[index]);

			return newMessages;
		});

		setIndex((prev) => prev + 1);

		setData((prev) => [...prev, selectedSpecialization]);
	}

	function sendMessage() {
		if (inputRef.current.disabled || inputRef.current.value === "") return;

		const message = inputRef.current.value;

		setData((prev) => [...prev, message]);

		setMessages((prev) => [...prev, { type: "user", message, options: [] }, chatFlow[index]]);
		setIndex((prev) => prev + 1);
		inputRef.current.value = "";
	}

	useEffect(() => {
		chatRef.current.scrollTop = chatRef.current.scrollHeight;
	}, [messages]);

	return (
		<div ref={chatbotRef}>
			<button type="button" className={styles.btn} onClick={toggleChatbot}>
				<div></div>
			</button>

			<div className={styles.collapsableContainer}>
				<div className={styles.chatbox}>
					<div className={styles.heading}>
						<span></span>
						<span>Mrinali</span>
					</div>

					<div className={styles.chat} ref={chatRef}>
						{messages.map((message, index) => {
							if (message.type === "option") {
								return (
									<button key={index} className={styles[message.type]} onClick={selectOption}>
										{message.message}
									</button>
								);
							} else {
								return (
									<>
										<div className={styles[message.type]}>
											<div>{message.message}</div>
											{message.options.length > 0 && (
												<select ref={selectRef}>
													{message.options.map((option, index) => (
														<option key={index}>{option}</option>
													))}
												</select>
											)}
										</div>
										{message.options.length > 0 && (
											<button
												className={styles.bot}
												style={{ margin: 0 }}
												onClick={selectSpecialization}
											>
												Send
											</button>
										)}
									</>
								);
							}
						})}
					</div>

					<div className={styles.inputBox}>
						<input type="text" placeholder="Select from the options above" ref={inputRef} />
						<button type="button" onClick={sendMessage} ref={sendButtonRef}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="21"
								height="17"
								viewBox="0 0 21 17"
								fill="none"
								style={{ scale: "1.3" }}
							>
								<path
									d="M19.6157 1.65454L1.37109 8.85634L8.09277 9.81658M19.6157 1.65454L17.2151 16.0581L8.09277 9.81658M19.6157 1.65454L8.09277 9.81658L19.6157 1.65454ZM8.09277 9.81658V15.0979L11.2126 11.9512"
									fill="#F2CCFF"
								/>
								<path
									d="M19.6157 1.65454L1.37109 8.85634L8.09277 9.81658M19.6157 1.65454L17.2151 16.0581L8.09277 9.81658M19.6157 1.65454L8.09277 9.81658M8.09277 9.81658V15.0979L11.2126 11.9512"
									stroke="#B86CD2"
									strokeWidth="1.44036"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
