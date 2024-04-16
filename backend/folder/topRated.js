const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzc2ODNmNDBlZThmMmMwMDJjNWJjODRhZDg5NTExNyIsInN1YiI6IjY2MDVmYzEyNTkwMDg2MDE3Y2I1Zjk5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tdhIx0Xq2WgJV-0r1AA3FwDIgVt17QD7W-rMAyT8-0o'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

