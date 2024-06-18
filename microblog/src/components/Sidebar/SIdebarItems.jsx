import CreatePost from "./CreatePost";
import Home from "./Home";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
import Notifications from "./Notifications";

const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<CreatePost />
			<ProfileLink />
		</>
	);
};

export default SidebarItems;
