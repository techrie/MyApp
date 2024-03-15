import Comment from "./Comment";
import { nanoid } from "nanoid";

const commentsData = [
  {
    name: "Random",
    text: "lorem ipsum dolor",
    replies: [
      {
        name: "Random",
        text: "lorem ipsum dolor",
        replies: [],
      },
    ],
  },
  {
    name: "Random",
    text: "lorem ipsum dolor",
    replies: [
      {
        name: "Random",
        text: "lorem ipsum dolor",
        replies: [
          {
            name: "Random",
            text: "lorem ipsum dolor",
            replies: [
              {
                name: "Random",
                text: "lorem ipsum dolor",
                replies: [
                  {
                    name: "Random",
                    text: "lorem ipsum dolor",
                    replies: [
                      {
                        name: "Random",
                        text: "lorem ipsum dolor",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Random",
                    text: "lorem ipsum dolor",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Random",
    text: "lorem ipsum dolor",
    replies: [],
  },
  {
    name: "Random",
    text: "lorem ipsum dolor",
    replies: [
      {
        name: "Random",
        text: "lorem ipsum dolor",
        replies: [
          {
            name: "Random",
            text: "lorem ipsum dolor",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={nanoid()}>
      <Comment data={comment} />
      <div className="pl-3 ml-3 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
