//? Challenge 18 - Movie Collection

const movieArray = [
	{ title: `Chak De India`, year: 2007, rating: 8.5, genre: `Drama` },
	{
		title: `Dilwale Dulhania Le Jayenge`,
		year: 1995,
		rating: 8.0,
		genre: `Romance`,
	},
	{ title: `Lagaan`, year: 2001, rating: 8.1, genre: `Drama` },
	{ title: `Drishyam`, year: 2015, rating: 8.4, genre: `Mystery` },
	{ title: `Sholay`, year: 1975, rating: 8.1, genre: `Action` },
	{ title: `Gangs of Wasseypur`, year: 2012, rating: 8.2, genre: `Crime` },
	{ title: `Rang De Basanti`, year: 2006, rating: 8.1, genre: `Crime` },
	{ title: `Andhadhun`, year: 2018, rating: 8.2, genre: `Comedy` },
	{ title: `Dangal`, year: 2016, rating: 8.3, genre: `Action` },
	{ title: `3 Idiots`, year: 2009, rating: 8.5, genre: `Comedy` },
];

const movieAnalyzer = (arr, rating) => {
	let highestRating = arr[0]["rating"];
	let highestRatedMovie = arr[0]["title"];
	let releaseYear = arr[0]["year"];
	let oldestMovie = arr[0]["title"];
	let totalRating = 0;
	const byGenre = {}; //* NOTE:- I don't know whether this is the correct way to passing the data, creating empty object & filling it and returning the whole object.
	const byRating = [];

	for (let i = 0; i < arr.length; i++) {
		if (highestRating < arr[i]["rating"]) {
			highestRating = arr[i]["rating"];
			highestRatedMovie = arr[i]["title"];
		}
		if (releaseYear > arr[i]["year"]) {
			releaseYear = arr[i]["year"];
			oldestMovie = arr[i]["title"];
		}
		let currentRating = arr[i]["rating"];
		totalRating += currentRating;
		if (rating <= currentRating) byRating.push(arr[i]);
		if (arr[i]["genre"] in byGenre) {
			byGenre[arr[i]["genre"]]++;
		} else {
			byGenre[arr[i]["genre"]] = 1;
		}
	}

	const averageRating = Math.round((totalRating / arr.length) * 10) / 10;

	//* This time returning the whole object, not template literal.
	return {
		highestRatedMovie,
		oldestMovie,
		averageRating,
		byGenre,
		byRating,
	};
};

console.log(movieAnalyzer(movieArray, 8.4));
