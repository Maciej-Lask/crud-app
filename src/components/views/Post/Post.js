import styles from '../../common/PageTitle/PageTitle.module.scss';
import PageTitle from '../../common/PageTitle/PageTitle';

const Post = () => {
  return (
    <div className={styles.PageTitleContainer}>
      <PageTitle>Post</PageTitle>
      <p>lorem ipsum</p>
    </div>
  );
};

export default Post;
