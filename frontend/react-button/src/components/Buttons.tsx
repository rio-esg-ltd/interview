export const Buttons = () => {
  return (
    <>
      <button>Like | 100</button>
      <button>Dislike | 25</button>
      <style>{`
          .like-button, .dislike-button {
            font-size: 1rem;
            padding: 5px 10px;
            color: #585858;
          }
          .liked, .disliked {
            font-weight: bold;
            color: #1565c0;
          }
      `}</style>
    </>
  );
};
