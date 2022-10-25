// sends a request to https://yesno.wtf/api/
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(MovieData => {
        console.log(MovieData);
        console.log(MovieData.length + " movies fetched");
        console.log(MovieData[0].title)
        function filmInformation(numberOfArray) {
            console.log(MovieData[numberOfArray].title + " is a movie from " + MovieData[numberOfArray].year + " that is " + MovieData[numberOfArray].running_times + " seconds long. It has a rating of " + MovieData[numberOfArray].rating + " out of " + MovieData[numberOfArray].votes + " votes.")
        }

        filmInformation(0)
        function movieList (ul, movieData)
        {
            for (let i = 0; i < movieData.length; i++)
            {
                let li = document.createElement("li")

                let createTitle = document.createElement("p")
                let createYear = document.createElement("p")
                let createRating = document.createElement("p")
                let createVotes = document.createElement("p")
                let createRunningTime = document.createElement("p")

                createTitle.appendChild(document.createTextNode("Title " + movieData [i].title));
                createYear.appendChild(document.createTextNode("Year " + movieData [i].year));
                createRating.appendChild(document.createTextNode("Rating " + movieData [i].rating));
                createVotes.appendChild(document.createTextNode("Votes " + movieData [i].votes));
                createRunningTime.appendChild(document.createTextNode("Running time " + movieData [i].running_times));

                li.appendChild(createTitle)
                li.appendChild(createYear)
                li.appendChild(createRating)
                li.appendChild(createVotes)
                li.appendChild(createRunningTime)

                ul.appendChild(li)
            }
        }
        let ul = document.querySelector("ul")
        movieList (ul,MovieData)
    });

