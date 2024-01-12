import { Comment } from '../types/Comment';

type Props = {
  commentItem: Comment,
  renewalComment: (value: number) => void,
};
export const CommentItem: React.FC<Props> = ({
  commentItem,
  renewalComment,
}) => {
  const {
    id,
    email,
    name,
    body,
  } = commentItem;

  return (
    <article
      key={id}
      className="message is-small"
      data-cy="Comment"
    >
      <div className="message-header">
        <a href={`mailto:${email}`} data-cy="CommentAuthor">
          {name}
        </a>
        <button
          data-cy="CommentDelete"
          type="button"
          className="delete is-small"
          aria-label="delete"
          onClick={() => renewalComment(id)}
        >
          delete button
        </button>
      </div>

      <div className="message-body" data-cy="CommentBody">
        {body}
      </div>
    </article>
  );
};