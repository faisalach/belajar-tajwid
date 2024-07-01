import { Link } from "react-router-dom";

const HomePage = () => {
	return (
	<div className="bg-green-200 min-h-screen h-full bg-gradient-to-b from-green-50">
		<div className="grid md:grid-cols-2 gap-4 items-center md:px-32 px-10">
			<div className="md:mt-0 mt-10">
				<p className="text-3xl mb-2 font-bold text-green-400">Perbaiki </p> 
				<p className="text-5xl mb-2 font-bold text-green-400">Bacaan Al-Quran </p>
				<p className="text-5xl mb-2 font-bold text-green-400">Anda</p>

				<p className="mt-8 mb-8">Dapatkan kesempurnaan dalam membaca Al-Quran dengan bimbingan Tajwid yang mendalam. Mulailah perjalanan Anda menuju keindahan bacaan Al-Quran yang lebih baik dan lebih tepat.</p>

				<a href="/Belajar Tajwid.apk" className="block">
					<img src="/google-play-store-logo.png" alt="" className="md:w-48 w-96 md:m-0 m-auto" />
				</a>
			</div>
			<div className="max-h-screen h-screen overflow-hidden">
				<img src="/head-1.png" className="h-[500px] mt-10 m-auto" alt="" />
			</div>
		</div>
		<p className="text-center py-5">
			<span className="font-semibold">&copy; Copyright 2024. </span>
		</p>
	</div>
	);
};

export default HomePage;
