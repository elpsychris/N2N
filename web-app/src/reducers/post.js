import { ADD_NEWS } from "../actions/guildboard";

const initial_state = [
  {
    title: "RE-ZERO chương 16",
    author: "hungtb96",
    time: "3 tiếng trước",
    comments: "26 bình luận",
    link: "re-zero",
    followers: {
      followList: [
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" }
      ],
      total: 7
    }
  },
  {
    title: "KONOSUBA chương 15",
    author: "hungtb96",
    time: "5 tiếng trước",
    comments: "21 bình luận",
    link: "konosuba",
    followers: {
      followList: [
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" }
      ],
      total: 7
    }
  }
];

const news = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return [
        ...state,
        {
          id: action.newsId,
          newsObj: action.newsObj
        }
      ];

    default:
      return state;
  }
};

export default news;
