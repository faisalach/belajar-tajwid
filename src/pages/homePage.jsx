import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="bg-green-200 min-h-screen h-full bg-gradient-to-b from-green-50">
			<div className="grid md:grid-cols-2 gap-4 items-center md:px-32 px-10">
				<div className="md:mt-0 mt-10">
					<p className="text-3xl mb-2 font-bold text-green-400">
						Perbaiki{" "}
					</p>
					<p className="text-5xl mb-2 font-bold text-green-400">
						Bacaan Al-Quran{" "}
					</p>
					<p className="text-5xl mb-2 font-bold text-green-400">
						Anda
					</p>

					<p className="mt-8 mb-8">
						Dapatkan kesempurnaan dalam membaca Al-Quran dengan
						bimbingan Tajwid yang mendalam. Mulailah perjalanan Anda
						menuju keindahan bacaan Al-Quran yang lebih baik dan
						lebih tepat.
					</p>

					<a href="/Belajar Tajwid.apk" className="block">
						<img
							src="/google-play-store-logo.png"
							alt=""
							className="md:w-48 w-96 md:m-0 m-auto"
						/>
					</a>
				</div>
				<div className="max-h-screen h-screen">
					<img
						src="/head-1.png"
						className="h-[500px] mt-10 m-auto"
						alt=""
					/>
				</div>
			</div>

			<div className=" md:px-32 px-10 mb-10">
				<div id="accordion-collapse" data-accordion="collapse" className="bg-white rounded-xl">
					<h2 id="accordion-collapse-heading-1">
						<button
							type="button"
							class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
							data-accordion-target="#accordion-collapse-body-1"
							aria-expanded="true"
							aria-controls="accordion-collapse-body-1"
						>
							<span>Pedoman Penggunaan</span>
							<svg
								data-accordion-icon
								class="w-3 h-3 rotate-180 shrink-0"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5 5 1 1 5"
								/>
							</svg>
						</button>
					</h2>
					<div
						id="accordion-collapse-body-1"
						class=""
						aria-labelledby="accordion-collapse-heading-1"
					>
						<div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
							<ol className="list-decimal pl-5 leading-8">
								<li>Download Aplikasi melalui tombol diatas</li>
								<li>Install dan buka aplikasi pada perangkat android anda</li>
								<li>Klik tombol "Scan Tajwid" akan membuka kamera AR</li>
								<li>Arahkan kamera pada marker dan aplikasi akan menjelaskan tentang hukum tajwidnya</li>
							</ol>
						</div>
					</div>
				</div>
			</div>

			<p className="text-center py-5">
				<span className="font-semibold">&copy; Copyright 2024. </span>
			</p>
		</div>
	);
};

export default HomePage;
