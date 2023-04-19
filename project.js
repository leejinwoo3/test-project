const personURL =
  "https://api.themoviedb.org/3/person/popular?api_key=982ae81859ec91d54685c660abf01049&language=ko-KR&page=1&region=KR";
$.ajax({
  type: "GET",
  url: personURL,
  dataType: "json",
  async: false,
  success: function (data) {
    console.log("전체 data:", data);

    const results = data.results;
    console.log("인물정보", results);

    for (const result of results) {
      console.log("이름: ", result.title);
      console.log("참여작품: ", result.known_for);
      console.log("성별: ", result.gender);
      console.log("인물정보", result.profile_path);
      console.log("태어난곳", result.place_of_birth);
      console.log("생일", result.birthday);

      let imgURL = "https://image.tmdb.org/t/p/w500" + result.profile_path;

      $(".images").append(
        `<a href="./PROJECT2.HTML?id=${result.name}"><img src="${imgURL}"></a>`
      );
      $(".images").append(`${result.name}`);
    }
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});
// console.log("이름: ", result.title);
// console.log("참여작품: ", result.known_for);
// console.log("성별: ", result.gender);
// console.log("인물정보", result.profile_path);
// console.log("태어난곳", result.place_of_birth);
// console.log("생일", result.birthday);
