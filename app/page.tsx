import Navbar from "./ui/navbar";
import Textarea from "./ui/textarea";
import Response from "./ui/response";
import Content from "./ui/content";

export default function Home() {
	return (
		<main className="w-full min-w-[500px] h-4/5 p-5">
			<div className="rounded-3xl border h-full bg-rose-50 overflow-hidden">
				<Navbar />
				<div className="p-4">
					<Content />
				</div>
			</div>
		</main>
	);
}
