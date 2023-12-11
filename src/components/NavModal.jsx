import { useRef, useEffect } from "react";
import CoursesModal from "./CoursesModal";
import ResourcesModal from "./ResourcesModal";
import CareerModal from "./CareerModal";

const modalComponents = {
	courses: <CoursesModal />,
	resources: <ResourcesModal />,
	career: <CareerModal />,
};

export default function NavModal({ navModalActive, modalState, setNavModalActive, getNavLinks }) {
	const navModalRef = useRef(null);

	useEffect(() => {
		if (navModalActive) {
			navModalRef.current.classList.add("active");
		} else {
			navModalRef.current.classList.remove("active");
		}
	}, [navModalActive]);

	useEffect(() => {
		function handleClickOutside(event) {
			const navLinks = getNavLinks();

			if (navLinks.some((link) => link.contains(event.target))) {
				return;
			}

			if (navModalRef.current && !navModalRef.current.contains(event.target)) {
				setNavModalActive(false);
			}
		}

		window.addEventListener("click", handleClickOutside);

		return () => window.removeEventListener("click", handleClickOutside);
	}, []);

	return (
		<div
			className="nav-modal"
			ref={navModalRef}
			style={{
				padding: "4.44vw 7.77vw",
				position: "absolute",
				zIndex: "-10",
				height: "max-content",
				width: "100vw",
				background: "#F2F4F7",
				transition: "all 0.7s ease",
			}}
		>
			{modalComponents[modalState]}
		</div>
	);
}
