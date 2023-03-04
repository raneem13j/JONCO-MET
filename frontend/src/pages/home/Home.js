import "./home.css";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import { MenuBar , Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const Home = () => {
	const [menubar, setMenuBar] = useState(false);

	return (
		<>
		<Navbar setMenuBar={setMenuBar} menubar={menubar} />
            <MenuBar menubar={menubar} /> 
		<div className="home-container">
			<div className="pic"></div>

			<div className="firstpart">
				<section class="body-font mx-auto max-w-7xl text-white md:mt-16">
					<div class="mx-auto mt-10 flex flex-col items-center px-2 py-5 pt-10 sm:px-5 sm:py-16 md:flex-row md:py-24">
						<div class="mb-16 flex flex-col items-center text-center md:mb-0 md:w-2/3 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
							<h1 class="primary-font mb-5 text-3xl font-bold sm:mb-10 sm:text-4xl">
								<span class="rounded-md bg-red-600 p-1">LLumar</span> Exclusive
								Distributor
							</h1>
							<p class="primary-font mb-8 max-w-[500px] text-2xl font-light leading-relaxed">
								Jonco introduced the installation of Solar &amp; Safety control
								films in Lebanon. This new revolutionary product is used to
								improve glass performance in homes, offices and cars.
							</p>
							<div class="flex justify-center lg:pl-24">
								<a
									class="primary-font inline-flex rounded-full border-0 bg-none py-3 px-16 text-lg text-white ring-2 ring-red-500 hover:bg-red-600 focus:outline-none"
									href="/#about"
								>
									Learn More
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div id="about" class="bg-gray-100">
				<div class="primary-font p-10 text-center">
					<h1 class="mb-4 text-xl font-bold text-red-600 ss:text-3xl sm:text-4xl">
						Information
					</h1>
					<h1 class="text-2xl sm:text-3xl">About Us</h1>
				</div>
				<div class="primary-font">
					<div class="container mx-auto max-w-7xl">
						<div class="container mx-auto">
							<div>
								<section class="body-font text-gray-600">
									<div class="container mx-auto flex flex-col p-5">
										<div class="mx-auto">
											<div class="h-96 overflow-hidden rounded-lg">
												<img
													class="h-full w-full object-cover object-center"
													src="https://joncomet.com/static/media/car_cover.48968b8f52db14ddc224.jpg"
													alt="content"
												/>
											</div>
											<div class="mt-10 flex flex-col items-end justify-center sm:flex-row">
												<div class="text-center sm:w-1/3 sm:py-8 sm:pr-8">
													<div class="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-gray-400">
														<svg
															fill="none"
															stroke="currentColor"
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															class="h-10 w-10"
															viewBox="0 0 24 24"
														>
															<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
															<circle cx="12" cy="7" r="4"></circle>
														</svg>
													</div>
													<div class="flex flex-col items-center justify-center text-center">
														<h2 class="title-font primary-font mt-4 text-lg font-extrabold">
															JONCO M.E. Trading S.A.R.L.
														</h2>
														<div class="mt-2 mb-4 h-1 w-12 rounded bg-red-500"></div>
														<p class="text-md p-1 leading-relaxed">
															August 2005, Jonco was certified as the Exclusive
															Distributor for LLumar in Lebanon and Syria. –
															CPFilms Inc., in Lebanon and Syria.LLumar safety
															film has been installed at numerous Embassies,
															banks, hotels, and Government buildings worldwide.
														</p>
													</div>
												</div>
												<div class="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
													<p class="text-lg leading-relaxed">
														<span class="font-semibold text-red-500">
															LLumar – CPFilms Inc.
														</span>
														is the largest producer of window film in the world
														providing high-quality films for the commercial,
														residential and automotive marketplaces. All of the
														films we offer feature ultra-thin, advanced
														technology adding protection, comfort and style to
														all buildings and vehicles.
														<span class="block">
															<br />
															What makes us different?
															<br />
															As a brand that’s manufactured by Eastman
															Performance Films, our products are conceived,
															engineered, and perfected with a deep
															understanding of film technology. This expert
															knowledge allows us to be a trusted resource for
															consumers in search of film solutions around the
															world.
														</span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="wwo">
				<div>
					<div class="primary-font mt-4 p-4 text-center">
						<h1 class="mb-4 text-xl font-bold text-red-600 ss:text-3xl sm:text-4xl">
							What we Offer
						</h1>
						<h1 class="text-2xl sm:text-3xl">Our Services</h1>
					</div>
					<div class="primary-font container mx-auto flex flex-col items-center justify-center gap-2 px-10 py-10 sm:grid sm:grid-cols-2 xl:grid-cols-4">
						<div class="my-10 max-w-sm rounded-lg border-2 bg-white py-1 px-6 shadow-lg transition-all hover:border-red-500 sm:h-[15rem]">
							<div class="-mt-16 flex justify-center md:justify-end">
								<img
									class="h-20 w-20 object-cover p-1"
									src="https://joncomet.com/static/media/icons8-car.add5f6204ef30c9d12d6.gif"
									alt=""
								/>
							</div>
							<div>
								<Link to="/services">
									<h2 class="primary-font p-2 text-3xl font-semibold text-gray-800">
										<p class="w-fit cursor-default transition-all hover:text-red-500">
											Automotive
										</p>
									</h2>
									<p class="mt-2 pb-10 text-gray-600">
										LLumar automotive films are designed to enhance your
										vehicle’s appearance while protecting both you and your car
										from the damaging effects of the sun.
									</p>
								</Link>
							</div>
						</div>
						<div class="my-10 max-w-sm rounded-lg border-2 bg-white py-4 px-6 shadow-lg hover:border-red-500 sm:h-[15rem]">
							<div class="-mt-16 flex justify-center md:justify-end">
								<img
									class="h-20 w-20 object-cover p-1"
									src="https://joncomet.com/static/media/icons8-summer.c9babc1072eb6ebf2f4c.gif"
									alt=""
								/>
							</div>
							<div class="hover:text-white">
								<Link to="/services">
									<h2 class="primary-font p-2 text-3xl font-semibold text-gray-800">
										<p class="w-fit cursor-default transition-all hover:text-red-500">
											Solar Control
										</p>
									</h2>
									<p class="mt-2 pb-10 text-gray-600">
										Solar glass treatment films filter out the worst of the
										sun’s heat and glare while letting light in.
									</p>
								</Link>
							</div>
						</div>
						<div class="my-10 max-w-sm rounded-lg border-2 bg-white py-4 px-6 shadow-lg transition-all hover:border-red-500 sm:h-[15rem]">
							<Link to="/services">
								<div class="-mt-16 flex justify-center md:justify-end">
									<img
										class="bg-bott h-20 w-20 object-cover p-1"
										src="https://joncomet.com/static/media/sheild.94e2083500c03c70ebb4.gif"
										alt=""
									/>
								</div>
								<div class="hover:text-white">
									<h2 class="primary-font p-2 text-3xl font-semibold text-gray-800">
										<p class="w-fit cursor-default transition-all hover:text-red-500">
											Safety &amp; Security
										</p>
									</h2>
									<p class="mt-2 pb-10 text-gray-600">
										LLumar safety film offers NavLink shield of protection
										against the unexpected.
									</p>
								</div>
							</Link>
						</div>
						<div class="my-10 max-w-sm rounded-lg border-2 bg-white py-4 px-6 shadow-lg transition-all hover:border-red-500 sm:h-[15rem]">
							<Link to="/services">
								<div class="-mt-16 flex justify-center md:justify-end">
									<img
										class="h-20 w-20 bg-white object-cover p-2"
										src="https://joncomet.com/static/media/house.b8c14a8b621f95f227e7.gif"
										alt=""
									/>
								</div>
								<div class="hover:text-white">
									<h2 class="primary-font p-2 text-3xl font-semibold text-gray-800">
										<p class="w-fit cursor-default transition-all hover:text-red-500">
											Decorative
										</p>
									</h2>
									<p class="mt-2 pb-10 text-gray-600">
										Add beauty and privacy to your home or office with LLumar
										decorative films.
									</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
		</>
	);
};

export default Home;