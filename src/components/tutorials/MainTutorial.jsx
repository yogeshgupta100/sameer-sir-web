import { useState, useEffect } from "react";
import HeaderTutorial from "./HeaderTutorial";
import Subscribe from "../aboutus/Subscribe";
import Header from "../Header";
import TutorialCard from "./TutorialCard";

const MainTutorial = () => {
	const [tutorials, setTutorials] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/tutorials?populate=*`);
			const data = await res.json();
			setTutorials(data.data);
		})();
	}, []);

	return (
		<>
			<Header />
			<HeaderTutorial />
			{tutorials.map((tutorial, index) => {
				return (
					<TutorialCard
						key={index}
						title={tutorial?.attributes?.title}
						description={tutorial?.attributes?.description}
						youtubePublishDate={tutorial?.attributes?.youtubePublishDate}
						instaPublishDate={tutorial?.attributes?.instaPublishDate}
						youtubeUrl={tutorial?.attributes?.youtubeUrl}
						youtubeEmbedUrl={tutorial?.attributes?.youtubeEmbedUrl}
						instaUrl={tutorial?.attributes?.instaUrl}
						author={tutorial?.attributes?.author}
					/>
				);
			})}
			<Subscribe />
		</>
	);
};

export default MainTutorial;
