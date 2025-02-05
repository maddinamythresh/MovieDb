export default async function trending() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzc2ODNmNDBlZThmMmMwMDJjNWJjODRhZDg5NTExNyIsInN1YiI6IjY2MDVmYzEyNTkwMDg2MDE3Y2I1Zjk5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tdhIx0Xq2WgJV-0r1AA3FwDIgVt17QD7W-rMAyT8-0o",
    },
  };
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  const data = await response.json();
  console.log(data);
  return data.results;
}

export async function popular(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzc2ODNmNDBlZThmMmMwMDJjNWJjODRhZDg5NTExNyIsInN1YiI6IjY2MDVmYzEyNTkwMDg2MDE3Y2I1Zjk5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tdhIx0Xq2WgJV-0r1AA3FwDIgVt17QD7W-rMAyT8-0o'
    }
  };

  const response = await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
    ,
    options
  );
  const data = await response.json();
  console.log(data);
  return data.results;
  
  
}

export async function topRated(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzc2ODNmNDBlZThmMmMwMDJjNWJjODRhZDg5NTExNyIsInN1YiI6IjY2MDVmYzEyNTkwMDg2MDE3Y2I1Zjk5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tdhIx0Xq2WgJV-0r1AA3FwDIgVt17QD7W-rMAyT8-0o'
    }
  };

  const response = await fetch(
    
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
    ,
    options
  );
  const data = await response.json();
  console.log(data);
  return data.results;
  
  
}


export async function movieDetail(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzc2ODNmNDBlZThmMmMwMDJjNWJjODRhZDg5NTExNyIsInN1YiI6IjY2MDVmYzEyNTkwMDg2MDE3Y2I1Zjk5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tdhIx0Xq2WgJV-0r1AA3FwDIgVt17QD7W-rMAyT8-0o",
    },
  };
  const ids = id; // Replace 'your_movie_id' with the actual movie ID
  const link = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const response =await fetch(link, options);
  const data = await response.json();
  return data
  console.log(data.overview);
}

export async function search(query){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzc2ODNmNDBlZThmMmMwMDJjNWJjODRhZDg5NTExNyIsInN1YiI6IjY2MDVmYzEyNTkwMDg2MDE3Y2I1Zjk5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tdhIx0Xq2WgJV-0r1AA3FwDIgVt17QD7W-rMAyT8-0o'
    }
  };
  
  const response=await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
  const data =await response.json()
  return data.results
    
}


